import { Args, Return } from './types';

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

export type ExSetArgs<T> = Args<
    [
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
    ],
    T
>;

export type ExGetArgs<T> = Args<[key: string | Buffer], T>;

export type ExSetVerArgs<T> = Args<[key: string | Buffer, version: number], T>;

export type ExIncrByArgs<T> = Args<
    [
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
    ],
    T
>;

export type ExIncrByFloatArgs<T> = Args<
    [
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
    ],
    T
>;

export type ExCasArgs<T> = Args<[key: string | Buffer, newvalue: string | Buffer, version: number], T>;

export type ExCadArgs<T> = Args<[key: string | Buffer, version: number], T>;

export type ExAppendArgs<T> = Args<
    [key: string | Buffer, value: string | Buffer, 'NX' | 'XX', 'VER' | 'ABS', version: number],
    T
>;

export type ExPrependArgs<T> = Args<
    [key: string | Buffer, value: string | Buffer, 'NX' | 'XX', 'VER' | 'ABS', version: number],
    T
>;

export type ExGaeArgs<T> = Args<[key: string | Buffer, 'EX' | 'PX' | 'EXAT' | 'PXAT', time: number], T>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        exset(...args: ExSetArgs<'OK'>): Return<'OK', Context>;

        exget(...args: ExGetArgs<[string, number]>): Return<[string, number], Context>;
        exgetBuffer(...args: ExGetArgs<[Buffer, number]>): Return<[Buffer, number], Context>;

        exsetver(...args: ExSetVerArgs<number>): Return<number, Context>;

        exincrby(...args: ExIncrByArgs<number>): Return<number, Context>;

        exincrbyfloat(...args: ExIncrByFloatArgs<string>): Return<string, Context>;

        excas(...args: ExCasArgs<['OK', string, number]>): Return<['OK', string, number], Context>;
        excasBuffer(...args: ExCasArgs<[Buffer, Buffer, number]>): Return<[Buffer, Buffer, number], Context>;

        excad(...args: ExCadArgs<number>): Return<number, Context>;

        exappend(...args: ExAppendArgs<number>): Return<number, Context>;

        exprepend(...args: ExPrependArgs<number>): Return<number, Context>;

        exgae(...args: ExGaeArgs<[string, number, number]>): Return<[string, number, number], Context>;
        exgaeBuffer(...args: ExGaeArgs<[Buffer, number, number]>): Return<[Buffer, number, number], Context>;
    }
}
