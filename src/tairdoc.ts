import { Args, Return } from './types';

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

export type JsonDelArgs<T> = Args<[key: string | Buffer, ...([path: string | Buffer] | [])], T>;

export type JsonGetArgs<T> = Args<
    [
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
    ],
    T
>;

export type JsonMGetArgs<T> = Args<[key: string | Buffer, ...keys: (string | Buffer)[], path: string | Buffer], T>;

export type JsonSetArgs<T> = Args<
    [key: string | Buffer, path: string | Buffer, json: string | Buffer, ...(['NX' | 'XX'] | [])],
    T
>;

export type JsonTypeArgs<T> = Args<[key: string | Buffer, ...([path: string | Buffer] | [])], T>;

export type JsonNumIncrbyArgs<T> = Args<[key: string | Buffer, ...([path: string | Buffer] | []), value: number], T>;

export type JsonStrAppendArgs<T> = Args<
    [key: string | Buffer, ...([path: string | Buffer] | []), json: string | Buffer],
    T
>;

export type JsonStrLenArgs<T> = Args<[key: string | Buffer, ...([path: string | Buffer] | [])], T>;

export type JsonArrAppendArgs<T> = Args<
    [key: string | Buffer, path: string | Buffer, json: string | Buffer, ...jsons: (string | Buffer)[]],
    T
>;

export type JsonArrPopArgs<T> = Args<[key: string | Buffer, path: string | Buffer, ...([index: number] | [])], T>;

export type JsonArrInsertArgs<T> = Args<
    [key: string | Buffer, path: string | Buffer, index: number, json: string | Buffer, ...jsons: (string | Buffer)[]],
    T
>;

export type JsonArrLenArgs<T> = Args<[key: string | Buffer, ...([path: string | Buffer] | [])], T>;

export type JsonArrTrimArgs<T> = Args<[key: string | Buffer, path: string | Buffer, start: number, stop: number], T>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['json.del'](...args: JsonDelArgs<number>): Return<number, Context>;

        ['json.get'](...args: JsonGetArgs<string>): Return<string, Context>;
        ['json.getBuffer'](...args: JsonGetArgs<Buffer>): Return<Buffer, Context>;

        ['json.mget'](...args: JsonMGetArgs<string[]>): Return<string[], Context>;
        ['json.mgetBuffer'](...args: JsonMGetArgs<Buffer[]>): Return<Buffer[], Context>;

        ['json.set'](...args: JsonSetArgs<'OK'>): Return<'OK', Context>;

        ['json.type'](...args: JsonTypeArgs<string>): Return<string, Context>;
        ['json.typeBuffer'](...args: JsonTypeArgs<Buffer>): Return<Buffer, Context>;

        ['json.numincrby'](...args: JsonNumIncrbyArgs<string>): Return<string, Context>;
        ['json.numincrbyBuffer'](...args: JsonNumIncrbyArgs<Buffer>): Return<Buffer, Context>;

        ['json.strappend'](...args: JsonStrAppendArgs<number>): Return<number, Context>;

        ['json.strlen'](...args: JsonStrLenArgs<number>): Return<number, Context>;

        ['json.arrappend'](...args: JsonArrAppendArgs<number>): Return<number, Context>;

        ['json.arrpop'](...args: JsonArrPopArgs<number>): Return<number, Context>;

        ['json.arrinsert'](...args: JsonArrInsertArgs<number>): Return<number, Context>;

        ['json.arrlen'](...args: JsonArrLenArgs<number>): Return<number, Context>;

        ['json.arrtrim'](...args: JsonArrTrimArgs<number>): Return<number, Context>;
    }
}
