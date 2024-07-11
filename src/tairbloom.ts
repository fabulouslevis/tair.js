import { Command, Context, Format } from './types';

export const bloomCommands = ['bf.add', 'bf.madd', 'bf.exists', 'bf.mexists', 'bf.insert', 'bf.reserve', 'bf.info'];

export type BfAdd<TContext extends Context> = Command<[key: string | Buffer, item: string | Buffer], number, TContext>;

export type BfMAdd<TContext extends Context> = Command<
    [key: string | Buffer, item: string | Buffer, ...items: (string | Buffer)[]],
    number[],
    TContext
>;

export type BfExists<TContext extends Context> = Command<
    [key: string | Buffer, item: string | Buffer],
    number,
    TContext
>;

export type BfMExists<TContext extends Context> = Command<
    [key: string | Buffer, item: string | Buffer, ...items: (string | Buffer)[]],
    number[],
    TContext
>;

export type BfInsert<TContext extends Context> = Command<
    [
        key: string | Buffer,
        ...([...(['CAPACITY', capacity: number] | []), ...(['ERROR', errorRate: number] | [])] | ['NOCREATE'] | []),
        'ITEMS',
        item: string | Buffer,
        ...items: (string | Buffer)[],
    ],
    number[],
    TContext
>;

export type BfReserve<TContext extends Context> = Command<
    [key: string | Buffer, errorRate: number, capacity: number],
    'OK',
    TContext
>;

export type BfInfo<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer],
    TFormat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['bf.add']: BfAdd<Context>;

        ['bf.madd']: BfMAdd<Context>;

        ['bf.exists']: BfExists<Context>;

        ['bf.mexists']: BfMExists<Context>;

        ['bf.insert']: BfInsert<Context>;

        ['bf.reserve']: BfReserve<Context>;

        ['bf.info']: BfInfo<Context>;
        ['bf.infoBuffer']: BfInfo<Context, 'buffer'>;
    }
}
