import { Result, Callback } from 'ioredis';

export const stringCommands = [
    'exset',
    'exget',
    'exsetver',
    'exincrby',
    'exincrbyfloat',
    'excas',
    'excad',
    'exappend',
    'exprepend',
    'exgae',
];

export type ExSetArgs<T> = [
    key: string | Buffer,
    value: string | Buffer,
    ...(
        | [
              ...(['EX' | 'PX' | 'EXAT' | 'PXAT', time: number] | []),
              ...(['NX' | 'XX'] | []),
              ...(['VER' | 'ABS', version: number] | []),
          ]
        | [...(['NX' | 'XX'] | []), ...(['VER' | 'ABS', version: number] | []), ...(['KEEPTTL'] | [])]
    ),
    ...([callback: Callback<T>] | []),
];

export type ExGetArgs<T> = [key: string | Buffer, ...([callback: Callback<T>] | [])];

export type ExSetVerArgs<T> = [key: string | Buffer, version: number, ...([callback: Callback<T>] | [])];

export type ExIncrByArgs<T> = [
    key: string | Buffer,
    num: number,
    ...(
        | [
              ...(['EX' | 'PX' | 'EXAT' | 'PXAT', time: number] | []),
              ...(['NX' | 'XX'] | []),
              ...(['VER' | 'ABS', version: number] | []),
              ...(['MIN', minval: number] | []),
              ...(['MAX', maxval: number] | []),
          ]
        | [
              ...(['NX' | 'XX'] | []),
              ...(['VER' | 'ABS', version: number] | []),
              ...(['MIN', minval: number] | []),
              ...(['MAX', maxval: number] | []),
              ...(['KEEPTTL'] | []),
          ]
    ),
    ...([callback: Callback<T>] | []),
];

export type ExIncrByFloatArgs<T> = [
    key: string | Buffer,
    num: number,
    ...(
        | [
              ...(['EX' | 'PX' | 'EXAT' | 'PXAT', time: number] | []),
              ...(['NX' | 'XX'] | []),
              ...(['VER' | 'ABS', version: number] | []),
              ...(['MIN', minval: number] | []),
              ...(['MAX', maxval: number] | []),
          ]
        | [
              ...(['NX' | 'XX'] | []),
              ...(['VER' | 'ABS', version: number] | []),
              ...(['MIN', minval: number] | []),
              ...(['MAX', maxval: number] | []),
              ...(['KEEPTTL'] | []),
          ]
    ),
    ...([callback: Callback<T>] | []),
];

export type ExCasArgs<T> = [
    key: string | Buffer,
    newvalue: string | Buffer,
    version: number,
    ...([callback: Callback<T>] | []),
];

export type ExCadArgs<T> = [key: string | Buffer, version: number, ...([callback: Callback<T>] | [])];

export type ExAppendArgs<T> = [
    key: string | Buffer,
    value: string | Buffer,
    'NX' | 'XX',
    'VER' | 'ABS',
    version: number,
    ...([callback: Callback<T>] | []),
];

export type ExPrependArgs<T> = [
    key: string | Buffer,
    value: string | Buffer,
    'NX' | 'XX',
    'VER' | 'ABS',
    version: number,
    ...([callback: Callback<T>] | []),
];

export type ExGaeArgs<T> = [
    key: string | Buffer,
    'EX' | 'PX' | 'EXAT' | 'PXAT',
    time: number,
    ...([callback: Callback<T>] | []),
];

declare module 'ioredis' {
    interface RedisCommander<Context> {
        exset(...args: ExSetArgs<'OK'>): Result<'OK', Context>;

        exget(...args: ExGetArgs<[string, number]>): Result<[string, number], Context>;
        exgetBuffer(...args: ExGetArgs<[Buffer, number]>): Result<[Buffer, number], Context>;

        exsetver(...args: ExSetVerArgs<number>): Result<number, Context>;

        exincrby(...args: ExIncrByArgs<number>): Result<number, Context>;

        exincrbyfloat(...args: ExIncrByFloatArgs<string>): Result<string, Context>;

        excas(...args: ExCasArgs<['OK', string, number]>): Result<['OK', string, number], Context>;
        excasBuffer(...args: ExCasArgs<[Buffer, Buffer, number]>): Result<[Buffer, Buffer, number], Context>;

        excad(...args: ExCadArgs<number>): Result<number, Context>;

        exappend(...args: ExAppendArgs<number>): Result<number, Context>;

        exprepend(...args: ExPrependArgs<number>): Result<number, Context>;

        exgae(...args: ExGaeArgs<[string, number, number]>): Result<[string, number, number], Context>;
        exgaeBuffer(...args: ExGaeArgs<[Buffer, number, number]>): Result<[Buffer, number, number], Context>;
    }
}
