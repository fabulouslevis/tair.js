import {
    Command,
    Context,
    Format,
    Optional,
    Shift,
    StringType,
    OkType,
    BitType,
    NumberType,
    DATA_ET,
    CHUNK_SIZE,
    LABELS,
    UNCOMPRESSED,
    FILTER,
    MAXCOUNT,
    AGGREGATION,
    WITHLABELS,
} from './types';

export const tsCommands = [
    'exts.p.create',
    'exts.s.create',
    'exts.s.alter',
    'exts.s.add',
    'exts.s.madd',
    'exts.s.incrby',
    'exts.s.mincrby',
    'exts.s.del',
    'exts.s.get',
    'exts.s.info',
    'exts.s.queryindex',
    'exts.s.range',
    'exts.s.range.keys',
    'exts.s.mrange',
    'exts.p.range',
    'exts.s.raw_modify',
    'exts.s.raw_mmodify',
    'exts.s.raw_incrby',
    'exts.s.raw_mincrby',
];

type TsType = number | '*';

export type ExTsPCreate<TContext extends Context> = Command<[pkey: StringType], OkType, TContext>;

export type ExTsSCreate<TContext extends Context> = Command<
    [
        pkey: StringType,
        skey: StringType,
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType,
    TContext
>;

export type ExTsSAlter<TContext extends Context> = Command<
    [pkey: StringType, skey: StringType, ...Optional<DATA_ET>],
    OkType,
    TContext
>;

export type ExTsSAdd<TContext extends Context> = Command<
    [
        pkey: StringType,
        skey: StringType,
        ts: TsType,
        value: number,
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType,
    TContext
>;

export type ExTsSMAdd<TContext extends Context> = Command<
    [
        pkey: StringType,
        keynumber: number,
        skey: StringType,
        ts: TsType,
        value: number,
        ...skeyTsValues: (StringType | TsType | number)[],
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType[],
    TContext
>;

export type ExTsSIncryBy<TContext extends Context> = Command<
    [
        pkey: StringType,
        skey: StringType,
        ts: TsType,
        value: number,
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType,
    TContext
>;

export type ExTsSMIncryBy<TContext extends Context> = Command<
    [
        pkey: StringType,
        keynumber: number,
        skey: StringType,
        ts: TsType,
        value: number,
        ...skeyTsValues: (StringType | TsType | number)[],
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType[],
    TContext
>;

export type ExTsSDel<TContext extends Context> = Command<[pkey: StringType, skey: StringType], OkType, TContext>;

export type ExTsSGet<TContext extends Context> = Command<
    [pkey: StringType, skey: StringType],
    [number, NumberType],
    TContext
>;

export type ExTsSInfo<TContext extends Context> = Command<
    [pkey: StringType, skey: StringType],
    [
        'totalDataPoints',
        number,
        'maxDataPoints',
        number,
        'maxDataPointsPerChunk',
        number,
        'dataPointsExpireTime',
        number,
        'lastTimestamp',
        number,
        'chunkCount',
        number,
        'lastValue',
        number,
        'labels',
        [string, string][],
    ],
    TContext
>;

export type ExTsSQueryIndex<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [pkey: StringType, ...Shift<FILTER>],
    TFromat extends 'buffer' ? Buffer : string,
    TContext
>;

export type ExTsSRange<TContext extends Context> = Command<
    [pkey: StringType, skey: StringType, fromTs: TsType, toTs: TsType, ...Optional<MAXCOUNT>, ...Optional<AGGREGATION>],
    [[number, NumberType][], BitType],
    TContext
>;

export type ExTsSMRange<TContext extends Context> = Command<
    [
        pkey: StringType,
        fromTs: TsType,
        toTs: TsType,
        ...Optional<MAXCOUNT>,
        ...Optional<AGGREGATION>,
        ...Optional<WITHLABELS>,
        ...FILTER,
    ],
    [string, [string, string][], [number, NumberType][], BitType][],
    TContext
>;

export type ExTsPRange<TContext extends Context> = Command<
    [
        pkey: StringType,
        fromTs: TsType,
        toTs: TsType,
        pkeyAggregationType: AGGREGATION[1],
        pkeyTimeBucket: number,
        ...Optional<MAXCOUNT>,
        ...Optional<AGGREGATION>,
        ...Optional<WITHLABELS>,
        ...FILTER,
    ],
    [[number, NumberType][], BitType],
    TContext
>;

export type ExTsSRawModify<TContext extends Context> = Command<
    [
        pkey: StringType,
        skey: StringType,
        ts: TsType,
        value: number,
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType,
    TContext
>;

export type ExTsSRawMModify<TContext extends Context> = Command<
    [
        pkey: StringType,
        keynumber: number,
        skey: StringType,
        ts: TsType,
        value: number,
        ...skeyTsValues: (StringType | TsType | number)[],
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType[],
    TContext
>;

export type ExTsSRawIncryBy<TContext extends Context> = Command<
    [
        pkey: StringType,
        skey: StringType,
        ts: TsType,
        value: number,
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType,
    TContext
>;

export type ExTsSRawMIncryBy<TContext extends Context> = Command<
    [
        pkey: StringType,
        keynumber: number,
        skey: StringType,
        ts: TsType,
        value: number,
        ...skeyTsValues: (StringType | TsType | number)[],
        ...Optional<DATA_ET>,
        ...Optional<CHUNK_SIZE>,
        ...Optional<UNCOMPRESSED>,
        ...Optional<LABELS>,
    ],
    OkType[],
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['exts.p.create']: ExTsPCreate<Context>;

        ['exts.s.create']: ExTsSCreate<Context>;

        ['exts.s.alter']: ExTsSAlter<Context>;

        ['exts.s.add']: ExTsSAdd<Context>;

        ['exts.s.madd']: ExTsSMAdd<Context>;

        ['exts.s.incrby']: ExTsSIncryBy<Context>;

        ['exts.s.mincrby']: ExTsSMIncryBy<Context>;

        ['exts.s.del']: ExTsSDel<Context>;

        ['exts.s.get']: ExTsSGet<Context>;

        ['exts.s.info']: ExTsSInfo<Context>;

        ['exts.s.queryindex']: ExTsSQueryIndex<Context>;
        ['exts.s.queryindexBuffer']: ExTsSQueryIndex<Context, 'buffer'>;

        ['exts.s.range']: ExTsSRange<Context>;

        ['exts.s.mrange']: ExTsSMRange<Context>;

        ['exts.p.range']: ExTsPRange<Context>;

        ['exts.s.raw_modify']: ExTsSRawModify<Context>;

        ['exts.s.raw_mmodify']: ExTsSRawMModify<Context>;

        ['exts.s.raw_incrby']: ExTsSRawIncryBy<Context>;

        ['exts.s.raw_mincrby']: ExTsSRawMIncryBy<Context>;
    }
}
