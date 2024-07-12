import {
    Command,
    Context,
    Format,
    Optional,
    EXPIRE,
    WRITE,
    VERSION,
    KEEPTTL,
    MIN,
    MAX,
    NOEXP,
    MATCH,
    COUNT,
} from './types';

export const hashCommands = [
    'exhset',
    'exhget',
    'exhmset',
    'exhsetnx',
    'exhmsetwithopts',
    'exhpexpireat',
    'exhpexpire',
    'exhexpireat',
    'exhexpire',
    'exhpttl',
    'exhttl',
    'exhver',
    'exhsetver',
    'exhincrby',
    'exhincrbyfloat',
    'exhgetwithver',
    'exhmget',
    'exhmgetwithver',
    'exhlen',
    'exhexists',
    'exhstrlen',
    'exhkeys',
    'exhvals',
    'exhgetall',
    'exhscan',
    'exhscanunorder',
    'exhdel',
];

export type ExHSet<TContext extends Context> = Command<
    [
        key: string | Buffer,
        field: string | Buffer,
        value: string | Buffer,
        ...Optional<EXPIRE>,
        ...Optional<WRITE>,
        ...Optional<VERSION>,
        ...Optional<KEEPTTL>,
    ],
    number,
    TContext
>;

export type ExHGet<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, field: string | Buffer],
    TFromat extends 'buffer' ? Buffer : string,
    TContext
>;

export type ExHMSet<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer, value: string | Buffer, ...filedValues: (string | Buffer)[]],
    'OK',
    TContext
>;

export type ExHPExpireAt<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer, millisecondsTimestamp: number, ...Optional<VERSION>],
    number,
    TContext
>;

export type ExHPExpire<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer, milliseconds: number, ...Optional<VERSION>],
    number,
    TContext
>;

export type ExHExpireAt<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer, timestamp: number, ...Optional<VERSION>],
    number,
    TContext
>;

export type ExHExpire<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer, seconds: number, ...Optional<VERSION>],
    number,
    TContext
>;

export type ExHPTtl<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer],
    number,
    TContext
>;

export type ExHTtl<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer],
    number,
    TContext
>;

export type ExHVer<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer],
    number,
    TContext
>;

export type ExHSetVer<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer, version: number],
    number,
    TContext
>;

export type ExHIncrBy<TContext extends Context> = Command<
    [
        key: string | Buffer,
        field: string | Buffer,
        num: number,
        ...Optional<EXPIRE>,
        ...Optional<VERSION>,
        ...Optional<MIN>,
        ...Optional<MAX>,
        ...Optional<KEEPTTL>,
    ],
    number,
    TContext
>;

export type ExHIncrByFloat<TContext extends Context> = Command<
    [
        key: string | Buffer,
        field: string | Buffer,
        num: number,
        ...Optional<EXPIRE>,
        ...Optional<VERSION>,
        ...Optional<MIN>,
        ...Optional<MAX>,
        ...Optional<KEEPTTL>,
    ],
    string,
    TContext
>;

export type ExHGetWithVer<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, field: string | Buffer],
    TFromat extends 'buffer' ? [Buffer, number] : [string, number],
    TContext
>;

export type ExHMGet<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, field: string | Buffer, ...fields: (string | Buffer)[]],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExHMGetWithVer<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, field: string | Buffer, ...fields: (string | Buffer)[]],
    TFromat extends 'buffer' ? (Buffer | number)[] : (string | number)[],
    TContext
>;

export type ExHLen<TContext extends Context> = Command<[key: string | Buffer, ...Optional<NOEXP>], number, TContext>;

export type ExHExists<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer],
    number,
    TContext
>;

export type ExHStrLen<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer],
    number,
    TContext
>;

export type ExHKeys<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExHVals<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExHGetAll<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExHScan<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [
        key: string | Buffer,
        op: '>' | '>=' | '<' | '<=' | '==' | '^' | '$',
        subkey: string,
        ...Optional<MATCH>,
        ...Optional<COUNT>,
    ],
    TFromat extends 'buffer' ? [Buffer, Buffer[]] : [string, string[]],
    TContext
>;

export type ExHScanUnorder<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, cursor: number, ...Optional<MATCH>, ...Optional<COUNT>],
    TFromat extends 'buffer' ? [Buffer, Buffer[]] : [string, string[]],
    TContext
>;

export type ExHDel<TContext extends Context> = Command<
    [key: string | Buffer, field: string | Buffer, ...fields: (string | Buffer)[]],
    number,
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        exhset: ExHSet<Context>;

        exhget: ExHGet<Context>;
        exhgetBuffer: ExHGet<Context, 'buffer'>;

        exhmset: ExHMSet<Context>;

        exhpexpireat: ExHPExpireAt<Context>;

        exhpexpire: ExHPExpire<Context>;

        exhexpireat: ExHExpireAt<Context>;

        exhexpire: ExHExpire<Context>;

        exhpttl: ExHPTtl<Context>;

        exhttl: ExHTtl<Context>;

        exhver: ExHVer<Context>;

        exhsetver: ExHSetVer<Context>;

        exhincrby: ExHIncrBy<Context>;

        exhincrbyfloat: ExHIncrByFloat<Context>;

        exhgetwithver: ExHGetWithVer<Context>;
        exhgetwithverBuffer: ExHGetWithVer<Context, 'buffer'>;

        exhmget: ExHMGet<Context>;
        exhmgetBuffer: ExHMGet<Context, 'buffer'>;

        exhmgetwithver: ExHMGetWithVer<Context>;
        exhmgetwithverBuffer: ExHMGetWithVer<Context, 'buffer'>;

        exhlen: ExHLen<Context>;

        exhexists: ExHExists<Context>;

        exhstrlen: ExHStrLen<Context>;

        exhkeys: ExHKeys<Context>;
        exhkeysBuffer: ExHKeys<Context, 'buffer'>;

        exhvals: ExHVals<Context>;
        exhvalsBuffer: ExHVals<Context, 'buffer'>;

        exhgetall: ExHGetAll<Context>;
        exhgetallBuffer: ExHGetAll<Context, 'buffer'>;

        exhscan: ExHScan<Context>;
        exhscanBuffer: ExHScan<Context, 'buffer'>;

        exhscanunorder: ExHScanUnorder<Context>;
        exhscanunorderBuffer: ExHScanUnorder<Context, 'buffer'>;

        exhdel: ExHDel<Context>;
    }
}
