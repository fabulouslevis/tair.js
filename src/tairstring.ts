import {
    Command,
    Context,
    Format,
    Optional,
    StringType,
    OkType,
    NumberType,
    EXPIRY,
    LOCK,
    VERSION,
    KEEPTTL,
    MIN,
    MAX,
} from './types';

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

export type ExSet<TContext extends Context> = Command<
    [
        key: StringType,
        value: StringType,
        ...(
            | [...Optional<EXPIRY>, ...Optional<LOCK>, ...Optional<VERSION>]
            | [...Optional<LOCK>, ...Optional<VERSION>, ...Optional<KEEPTTL>]
        ),
    ],
    OkType,
    TContext
>;

export type ExGet<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: StringType],
    TFormat extends 'buffer' ? [Buffer, number] : [string, number],
    TContext
>;

export type ExSetVer<TContext extends Context> = Command<[key: StringType, version: number], number, TContext>;

export type ExIncrBy<TContext extends Context> = Command<
    [
        key: StringType,
        num: number,
        ...(
            | [...Optional<EXPIRY>, ...Optional<LOCK>, ...Optional<VERSION>, ...Optional<MIN>, ...Optional<MAX>]
            | [...Optional<LOCK>, ...Optional<VERSION>, ...Optional<MIN>, ...Optional<MAX>, ...Optional<KEEPTTL>]
        ),
    ],
    number,
    TContext
>;

export type ExIncrByFloat<TContext extends Context> = Command<
    [
        key: StringType,
        num: number,
        ...(
            | [...Optional<EXPIRY>, ...Optional<LOCK>, ...Optional<VERSION>, ...Optional<MIN>, ...Optional<MAX>]
            | [...Optional<LOCK>, ...Optional<VERSION>, ...Optional<MIN>, ...Optional<MAX>, ...Optional<KEEPTTL>]
        ),
    ],
    NumberType,
    TContext
>;

export type ExCas<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: StringType, newvalue: StringType, version: number],
    TFormat extends 'buffer' ? [Buffer, Buffer, number] : [OkType, string, number],
    TContext
>;

export type ExCad<TContext extends Context> = Command<[key: StringType, version: number], number, TContext>;

export type ExAppend<TContext extends Context> = Command<
    [key: StringType, value: StringType, ...LOCK, ...VERSION],
    number,
    TContext
>;

export type ExPrepend<TContext extends Context> = Command<
    [key: StringType, value: StringType, ...LOCK, ...VERSION],
    number,
    TContext
>;

export type ExGae<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: StringType, ...EXPIRY],
    TFormat extends 'buffer' ? [Buffer, number, number] : [string, number, number],
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        exset: ExSet<Context>;

        exget: ExGet<Context>;
        exgetBuffer: ExGet<Context, 'buffer'>;

        exsetver: ExSetVer<Context>;

        exincrby: ExIncrBy<Context>;

        exincrbyfloat: ExIncrByFloat<Context>;

        excas: ExCas<Context>;
        excasBuffer: ExCas<Context, 'buffer'>;

        excad: ExCad<Context>;

        exappend: ExAppend<Context>;

        exprepend: ExPrepend<Context>;

        exgae: ExGae<Context>;
        exgaeBuffer: ExGae<Context, 'buffer'>;
    }
}
