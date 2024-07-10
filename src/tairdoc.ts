import { Result, Callback } from 'ioredis';

export const docCommands = [
    'json.del',
    'json.get',
    'json.mget',
    'json.set',
    'json.type',
    'json.numincrby',
    'json.strappend',
    'json.strlen',
    'json.arrappend',
    'json.arrpop',
    'json.arrinsert',
    'json.arrlen',
    'json.arrtrim',
];

export type JsonDelArgs<T> = [
    key: string | Buffer,
    ...([path: string | Buffer] | []),
    ...([callback: Callback<T>] | []),
];

export type JsonGetArgs<T> = [
    key: string | Buffer,
    ...(
        | [
              path: string | Buffer,
              ...(['FORMAT', 'XML' | 'YAML'] | []),
              ...(['ROOTNAME', root: string] | []),
              ...(['ARRNAME', arr: string] | []),
          ]
        | []
    ),
    ...([callback: Callback<T>] | []),
];

export type JsonMGetArgs<T> = [
    key: string | Buffer,
    ...keys: (string | Buffer)[],
    path: string | Buffer,
    ...([callback: Callback<T>] | []),
];

export type JsonSetArgs<T> = [
    key: string | Buffer,
    path: string | Buffer,
    json: string | Buffer,
    ...(['NX' | 'XX'] | []),
    ...([callback: Callback<T>] | []),
];

export type JsonTypeArgs<T> = [
    key: string | Buffer,
    ...([path: string | Buffer] | []),
    ...([callback: Callback<T>] | []),
];

export type JsonNumIncrbyArgs<T> = [
    key: string | Buffer,
    ...([path: string | Buffer] | []),
    value: number,
    ...([callback: Callback<T>] | []),
];

export type JsonStrAppendArgs<T> = [
    key: string | Buffer,
    ...([path: string | Buffer] | []),
    json: string | Buffer,
    ...([callback: Callback<T>] | []),
];

export type JsonStrLenArgs<T> = [
    key: string | Buffer,
    ...([path: string | Buffer] | []),
    ...([callback: Callback<T>] | []),
];

export type JsonArrAppendArgs<T> = [
    key: string | Buffer,
    path: string | Buffer,
    json: string | Buffer,
    ...jsons: (string | Buffer)[],
    ...([callback: Callback<T>] | []),
];

export type JsonArrPopArgs<T> = [
    key: string | Buffer,
    path: string | Buffer,
    ...([index: number] | []),
    ...([callback: Callback<T>] | []),
];

export type JsonArrInsertArgs<T> = [
    key: string | Buffer,
    path: string | Buffer,
    index: number,
    json: string | Buffer,
    ...jsons: (string | Buffer)[],
    ...([callback: Callback<T>] | []),
];

export type JsonArrLenArgs<T> = [
    key: string | Buffer,
    ...([path: string | Buffer] | []),
    ...([callback: Callback<T>] | []),
];

export type JsonArrTrimArgs<T> = [
    key: string | Buffer,
    path: string | Buffer,
    start: number,
    stop: number,
    ...([callback: Callback<T>] | []),
];

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['json.del'](...args: JsonDelArgs<number>): Result<number, Context>;

        ['json.get'](...args: JsonGetArgs<string>): Result<string, Context>;
        ['json.getBuffer'](...args: JsonGetArgs<Buffer>): Result<Buffer, Context>;

        ['json.mget'](...args: JsonMGetArgs<string[]>): Result<string[], Context>;
        ['json.mgetBuffer'](...args: JsonMGetArgs<Buffer[]>): Result<Buffer[], Context>;

        ['json.set'](...args: JsonSetArgs<'OK'>): Result<'OK', Context>;

        ['json.type'](...args: JsonTypeArgs<string>): Result<string, Context>;
        ['json.typeBuffer'](...args: JsonTypeArgs<Buffer>): Result<Buffer, Context>;

        ['json.numincrby'](...args: JsonNumIncrbyArgs<string>): Result<string, Context>;
        ['json.numincrbyBuffer'](...args: JsonNumIncrbyArgs<Buffer>): Result<Buffer, Context>;

        ['json.strappend'](...args: JsonStrAppendArgs<number>): Result<number, Context>;

        ['json.strlen'](...args: JsonStrLenArgs<number>): Result<number, Context>;

        ['json.arrappend'](...args: JsonArrAppendArgs<number>): Result<number, Context>;

        ['json.arrpop'](...args: JsonArrPopArgs<number>): Result<number, Context>;

        ['json.arrinsert'](...args: JsonArrInsertArgs<number>): Result<number, Context>;

        ['json.arrlen'](...args: JsonArrLenArgs<number>): Result<number, Context>;

        ['json.arrtrim'](...args: JsonArrTrimArgs<number>): Result<number, Context>;
    }
}
