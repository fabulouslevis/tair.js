import { Commands, Context, Optional, OkType, StringType, NumberType, MATCH, COUNT } from './types';

export const vectorCommands = [
    'tvs.createindex',
    'tvs.getindex',
    'tvs.delindex',
    'tvs.scanindex',
    'tvs.hset',
    'tvs.hgetall',
    'tvs.hmget',
    'tvs.del',
    'tvs.hdel',
    'tvs.scan',
    'tvs.knnsearch',
    'tvs.knnsearchfield',
    'tvs.mknnsearch',
    'tvs.mindexknnsearch',
    'tvs.mindexknnsearchfield',
    'tvs.mindexmknnsearch',
    'tvs.hincrby',
    'tvs.hincrbyfloat',
    'tvs.getdistance',
    'tvs.hexpire',
    'tvs.hpexpire',
    'tvs.hexpireat',
    'tvs.hpexpireat',
    'tvs.httl',
    'tvs.hpttl',
    'tvs.hexpiretime',
    'tvs.hpexpiretime',
];

type AlgorithmType = 'FLAT' | 'HNSW';
type DistanceMethodType = 'L2' | 'IP' | 'COSINE' | 'JACCARD';

export type VectorCommands<TContext extends Context> = Commands<
    {
        'tvs.createindex': {
            args: [
                indexName: StringType,
                dims: number,
                algorithm: AlgorithmType,
                distanceMethod: DistanceMethodType,
                ...algoParamKeyValues: StringType[],
            ];
            return: OkType;
        };
        'tvs.getindex': {
            args: [indexName: StringType];
            return: string[];
            returnBuffer: Buffer[];
        };
        'tvs.delindex': {
            args: [indexName: StringType];
            return: number;
        };
        'tvs.scanindex': {
            args: [cursor: number, ...Optional<MATCH>, ...Optional<COUNT>];
            return: [NumberType, string[]];
            returnBuffer: [Buffer, Buffer[]];
        };
        'tvs.hset': {
            args: [
                indexName: StringType,
                attributeKey: StringType,
                attributeValue: StringType,
                ...attributeKeyValues: StringType[],
            ];
            return: number;
        };
        'tvs.hgetall': {
            args: [indexName: StringType, key: StringType];
            return: string[];
            returnBuffer: Buffer[];
        };
        'tvs.hmget': {
            args: [indexName: StringType, key: StringType, attributeKey: StringType, ...attributeKeys: StringType[]];
            return: string[];
            returnBuffer: Buffer[];
        };
    },
    TContext
>;
