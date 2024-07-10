import { Args, Return } from './types';

export const bloomCommands = [
    'bf.add',
    'bf.madd',
    'bf.exists',
    'bf.mexists',
    'bf.insert',
    'bf.reserve',
    'bf.info',
    'bf.debug',
];

export type BfAddArgs<T> = Args<[key: string | Buffer, item: string | Buffer], T>;

export type BfMAddArgs<T> = Args<[key: string | Buffer, item: string | Buffer, ...items: (string | Buffer)[]], T>;

export type BfExistsArgs<T> = Args<[key: string | Buffer, item: string | Buffer], T>;

export type BfMExistsArgs<T> = Args<[key: string | Buffer, item: string | Buffer, ...items: (string | Buffer)[]], T>;

export type BfInsertArgs<T> = Args<
    [
        key: string | Buffer,
        ...([...(['CAPACITY', capacity: number] | []), ...(['ERROR', errorRate: number] | [])] | ['NOCREATE'] | []),
        'ITEMS',
        item: string | Buffer,
        ...items: (string | Buffer)[],
    ],
    T
>;

export type BfReserveArgs<T> = Args<[key: string | Buffer, errorRate: number, capacity: number], T>;

export type BfInfoArgs<T> = Args<[key: string | Buffer], T>;

export type BfDebugArgs<T> = Args<[key: string | Buffer], T>;
declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['bf.add'](...args: BfAddArgs<number>): Return<number, Context>;

        ['bf.madd'](...args: BfMAddArgs<number[]>): Return<number[], Context>;

        ['bf.exists'](...args: BfExistsArgs<number>): Return<number, Context>;

        ['bf.mexists'](...args: BfMExistsArgs<number[]>): Return<number[], Context>;

        ['bf.insert'](...args: BfInsertArgs<number[]>): Return<number[], Context>;

        ['bf.reserve'](...args: BfReserveArgs<'OK'>): Return<'OK', Context>;

        ['bf.info'](...args: BfInfoArgs<string[]>): Return<string[], Context>;
        ['bf.infoBuffer'](...args: BfInfoArgs<Buffer[]>): Return<Buffer[], Context>;

        ['bf.debug'](...args: BfDebugArgs<string[]>): Return<string[], Context>;
        ['bf.debugBuffer'](...args: BfDebugArgs<Buffer[]>): Return<Buffer[], Context>;
    }
}
