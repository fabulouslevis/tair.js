import { Result, Callback } from 'ioredis';

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

export type BfAddArgs<T> = [key: string | Buffer, item: string | Buffer, ...([callback: Callback<T>] | [])];

export type BfMAddArgs<T> = [
    key: string | Buffer,
    item: string | Buffer,
    ...items: (string | Buffer)[],
    ...([callback: Callback<T>] | []),
];

export type BfExistsArgs<T> = [key: string | Buffer, item: string | Buffer, ...([callback: Callback<T>] | [])];

export type BfMExistsArgs<T> = [
    key: string | Buffer,
    item: string | Buffer,
    ...items: (string | Buffer)[],
    ...([callback: Callback<T>] | []),
];

export type BfInsertArgs<T> = [
    key: string | Buffer,
    ...([...(['CAPACITY', capacity: number] | []), ...(['ERROR', errorRate: number] | [])] | ['NOCREATE'] | []),
    'ITEMS',
    item: string | Buffer,
    ...items: (string | Buffer)[],
    ...([callback: Callback<T>] | []),
];

export type BfReserveArgs<T> = [
    key: string | Buffer,
    errorRate: number,
    capacity: number,
    ...([callback: Callback<T>] | []),
];

export type BfInfoArgs<T> = [key: string | Buffer, ...([callback: Callback<T>] | [])];

export type BfDebugArgs<T> = [key: string | Buffer, ...([callback: Callback<T>] | [])];

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['bf.add'](...args: BfAddArgs<number>): Result<number, Context>;

        ['bf.madd'](...args: BfMAddArgs<number[]>): Result<number[], Context>;

        ['bf.exists'](...args: BfExistsArgs<number>): Result<number, Context>;

        ['bf.mexists'](...args: BfMExistsArgs<number[]>): Result<number[], Context>;

        ['bf.insert'](...args: BfInsertArgs<number[]>): Result<number[], Context>;

        ['bf.reserve'](...args: BfReserveArgs<'OK'>): Result<'OK', Context>;

        ['bf.info'](...args: BfInfoArgs<string[]>): Result<string[], Context>;
        ['bf.infoBuffer'](...args: BfInfoArgs<Buffer[]>): Result<Buffer[], Context>;

        ['bf.debug'](...args: BfDebugArgs<string[]>): Result<string[], Context>;
        ['bf.debugBuffer'](...args: BfDebugArgs<Buffer[]>): Result<Buffer[], Context>;
    }
}
