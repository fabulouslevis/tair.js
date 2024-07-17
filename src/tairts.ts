import {
    Commands,
    Context,
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

export type TsCommands<TContext extends Context> = Commands<
    {
        'exts.p.create': {
            args: [pkey: StringType];
            return: OkType;
        };
        'exts.s.create': {
            args: [
                pkey: StringType,
                skey: StringType,
                ...Optional<DATA_ET>,
                ...Optional<CHUNK_SIZE>,
                ...Optional<UNCOMPRESSED>,
                ...Optional<LABELS>,
            ];
            return: OkType;
        };
        'exts.s.alter': {
            args: [pkey: StringType, skey: StringType, ...Optional<DATA_ET>];
            return: OkType;
        };
        'exts.s.add': {
            args: [
                pkey: StringType,
                skey: StringType,
                ts: TsType,
                value: number,
                ...Optional<DATA_ET>,
                ...Optional<CHUNK_SIZE>,
                ...Optional<UNCOMPRESSED>,
                ...Optional<LABELS>,
            ];
            return: OkType;
        };
        'exts.s.madd': {
            args: [
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
            ];
            return: OkType[];
        };
        'exts.s.incrby': {
            args: [
                pkey: StringType,
                skey: StringType,
                ts: TsType,
                value: number,
                ...Optional<DATA_ET>,
                ...Optional<CHUNK_SIZE>,
                ...Optional<UNCOMPRESSED>,
                ...Optional<LABELS>,
            ];
            return: OkType;
        };
        'exts.s.mincrby': {
            args: [
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
            ];
            return: OkType[];
        };
        'exts.s.del': {
            args: [pkey: StringType, skey: StringType];
            return: OkType;
        };
        'exts.s.get': {
            args: [pkey: StringType, skey: StringType];
            return: [number, NumberType];
        };
        'exts.s.info': {
            args: [pkey: StringType, skey: StringType];
            return: [
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
            ];
        };
        'exts.s.queryindex': {
            args: [pkey: StringType, ...Shift<FILTER>];
            return: string;
            returnBuffer: Buffer;
        };
        'exts.s.range': {
            args: [
                pkey: StringType,
                skey: StringType,
                fromTs: TsType,
                toTs: TsType,
                ...Optional<MAXCOUNT>,
                ...Optional<AGGREGATION>,
            ];
            return: [[number, NumberType][], BitType];
        };
        'exts.s.mrange': {
            args: [
                pkey: StringType,
                fromTs: TsType,
                toTs: TsType,
                ...Optional<MAXCOUNT>,
                ...Optional<AGGREGATION>,
                ...Optional<WITHLABELS>,
                ...FILTER,
            ];
            return: [string, [string, string][], [number, NumberType][], BitType][];
        };
        'exts.p.range': {
            args: [
                pkey: StringType,
                fromTs: TsType,
                toTs: TsType,
                pkeyAggregationType: AGGREGATION[1],
                pkeyTimeBucket: number,
                ...Optional<MAXCOUNT>,
                ...Optional<AGGREGATION>,
                ...Optional<WITHLABELS>,
                ...FILTER,
            ];
            return: [[number, NumberType][], BitType];
        };
        'exts.s.raw_modify': {
            args: [
                pkey: StringType,
                skey: StringType,
                ts: TsType,
                value: number,
                ...Optional<DATA_ET>,
                ...Optional<CHUNK_SIZE>,
                ...Optional<UNCOMPRESSED>,
                ...Optional<LABELS>,
            ];
            return: OkType;
        };
        'exts.s.raw_mmodify': {
            args: [
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
            ];
            return: OkType[];
        };
        'exts.s.raw_incrby': {
            args: [
                pkey: StringType,
                skey: StringType,
                ts: TsType,
                value: number,
                ...Optional<DATA_ET>,
                ...Optional<CHUNK_SIZE>,
                ...Optional<UNCOMPRESSED>,
                ...Optional<LABELS>,
            ];
            return: OkType;
        };
        'exts.s.raw_mincrby': {
            args: [
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
            ];
            return: OkType[];
        };
    },
    TContext
>;
