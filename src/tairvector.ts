import {
    Commands,
    Context,
    Optional,
    OkType,
    StringType,
    NumberType,
    MATCH,
    COUNT,
    FILTER,
    VECTOR,
    MAX_DIST,
    TOPN,
} from './types';

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
    'tvs.hincrby',
    'tvs.hincrbyfloat',
    'tvs.hpexpireat',
    'tvs.hpexpire',
    'tvs.hexpireat',
    'tvs.hexpire',
    'tvs.hpttl',
    'tvs.httl',
    'tvs.hpexpiretime',
    'tvs.hexpiretime',
    'tvs.knnsearch',
    'tvs.knnsearchfield',
    'tvs.getdistance',
    'tvs.mknnsearch',
    'tvs.mindexknnsearch',
    'tvs.mindexknnsearchfield',
    'tvs.mindexmknnsearch',
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
        'tvs.del': {
            args: [indexName: StringType, key: StringType, ...keys: StringType[]];
            return: number;
        };
        'tvs.hdel': {
            args: [indexName: StringType, key: StringType, attributeKey: StringType, ...attributeKeys: StringType[]];
            return: number;
        };
        'tvs.scan': {
            args: [
                indexName: StringType,
                cursor: number,
                ...Optional<MATCH>,
                ...Optional<COUNT>,
                ...Optional<FILTER>,
                ...Optional<VECTOR>,
                ...Optional<MAX_DIST>,
            ];
            return: [NumberType, string[]];
            returnBuffer: [Buffer, Buffer[]];
        };
        'tvs.hincrby': {
            args: [indexName: StringType, key: StringType, attributeKey: StringType, num: number];
            return: number;
        };
        'tvs.hincrbyfloat': {
            args: [indexName: StringType, key: StringType, attributeKey: StringType, num: number];
            return: NumberType;
        };
        'tvs.hpexpireat': {
            args: [indexName: StringType, key: StringType, millisecondsTimestamp: number];
            return: number;
        };
        'tvs.hpexpire': {
            args: [indexName: StringType, key: StringType, milliseconds: number];
            return: number;
        };
        'tvs.hexpireat': {
            args: [indexName: StringType, key: StringType, secondsTimestamp: number];
            return: number;
        };
        'tvs.hexpire': {
            args: [indexName: StringType, key: StringType, seconds: number];
            return: number;
        };
        'tvs.hpttl': {
            args: [indexName: StringType, key: StringType];
            return: number;
        };
        'tvs.httl': {
            args: [indexName: StringType, key: StringType];
            return: number;
        };
        'tvs.hpexpiretime': {
            args: [indexName: StringType, key: StringType];
            return: number;
        };
        'tvs.hexpiretime': {
            args: [indexName: StringType, key: StringType];
            return: number;
        };
        'tvs.knnsearch': {
            args: [
                indexName: StringType,
                topN: number,
                vector: StringType,
                ...Optional<[filterString: StringType]>,
                ...Optional<[paramKey: StringType, paramValue: StringType]>,
            ];
            return: string[];
            returnBuffer: Buffer[];
        };
        'tvs.knnsearchfield': {
            args: [
                indexName: StringType,
                topN: number,
                vector: StringType,
                fieldCount: number,
                fieldName: StringType,
                ...fieldNames: StringType[],
                ...Optional<[filterString: StringType]>,
                ...Optional<[paramKey: StringType, paramValue: StringType]>,
            ];
            return: string[][];
            returnBuffer: Buffer[][];
        };
        'tvs.getdistance': {
            args: [
                indexName: StringType,
                vector: StringType,
                keyCount: number,
                key: StringType,
                ...keys: StringType[],
                ...Optional<TOPN>,
                ...Optional<FILTER>,
                ...Optional<MAX_DIST>,
            ];
            return: string[];
            returnBuffer: Buffer[];
        };
        'tvs.mknnsearch': {
            args: [
                indexName: StringType,
                topN: number,
                vectorCount: number,
                vector: StringType,
                ...vectors: StringType[],
                ...Optional<[filterString: StringType]>,
                ...Optional<[paramKey: StringType, paramValue: StringType]>,
            ];
            return: string[][];
            returnBuffer: Buffer[][];
        };
        'tvs.mindexknnsearch': {
            args: [
                indexCount: number,
                indexName: StringType,
                ...indexNames: StringType[],
                topN: number,
                vector: StringType,
                ...Optional<[filterString: StringType]>,
                ...Optional<[paramKey: StringType, paramValue: StringType]>,
            ];
            return: string[];
            returnBuffer: Buffer[];
        };
        'tvs.mindexknnsearchfield': {
            args: [
                indexCount: number,
                indexName: StringType,
                ...Optional<[...indexNames: StringType[]]>,
                topN: number,
                vector: StringType,
                fieldCount: number,
                fieldName: StringType,
                ...Optional<[...fieldNames: StringType[]]>,
                ...Optional<[filterString: StringType]>,
                ...Optional<[paramKey: StringType, paramValue: StringType]>,
            ];
            return: string[][];
            returnBuffer: Buffer[][];
        };
        'tvs.mindexmknnsearch': {
            args: [
                indexCount: number,
                indexName: StringType,
                ...Optional<[...indexNames: StringType[]]>,
                topN: number,
                vectorCount: number,
                vector: StringType,
                ...Optional<[...vectors: StringType[]]>,
                ...Optional<[filterString: StringType]>,
                ...Optional<[paramKey: StringType, paramValue: StringType]>,
            ];
            return: string[][];
            returnBuffer: Buffer[][];
        };
    },
    TContext
>;
