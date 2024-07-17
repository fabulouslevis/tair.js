import {
    Commands,
    Context,
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
    NOEXP,
    MATCH,
    COUNT,
} from './types';

export const hashCommands = [
    'exhset',
    'exhget',
    'exhmset',
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

type OpType = '>' | '>=' | '<' | '<=' | '==' | '^' | '$';

export type HashCommands<TContext extends Context> = Commands<
    {
        exhset: {
            args: [
                key: StringType,
                field: StringType,
                value: StringType,
                ...Optional<EXPIRY>,
                ...Optional<LOCK>,
                ...Optional<VERSION>,
                ...Optional<KEEPTTL>,
            ];
            return: number;
        };
        exhget: {
            args: [key: StringType, field: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        exhmset: {
            args: [key: StringType, field: StringType, value: StringType, ...filedValues: StringType[]];
            return: OkType;
        };
        exhpexpireat: {
            args: [key: StringType, field: StringType, millisecondsTimestamp: number, ...Optional<VERSION>];
            return: number;
        };
        exhpexpire: {
            args: [key: StringType, field: StringType, milliseconds: number, ...Optional<VERSION>];
            return: number;
        };
        exhexpireat: {
            args: [key: StringType, field: StringType, timestamp: number, ...Optional<VERSION>];
            return: number;
        };
        exhexpire: {
            args: [key: StringType, field: StringType, seconds: number, ...Optional<VERSION>];
            return: number;
        };
        exhpttl: {
            args: [key: StringType, field: StringType];
            return: number;
        };
        exhttl: {
            args: [key: StringType, field: StringType];
            return: number;
        };
        exhver: {
            args: [key: StringType, field: StringType];
            return: number;
        };
        exhsetver: {
            args: [key: StringType, field: StringType, version: number];
            return: number;
        };
        exhincrby: {
            args: [
                key: StringType,
                field: StringType,
                num: number,
                ...Optional<EXPIRY>,
                ...Optional<VERSION>,
                ...Optional<MIN>,
                ...Optional<MAX>,
                ...Optional<KEEPTTL>,
            ];
            return: number;
        };
        exhincrbyfloat: {
            args: [
                key: StringType,
                field: StringType,
                num: number,
                ...Optional<EXPIRY>,
                ...Optional<VERSION>,
                ...Optional<MIN>,
                ...Optional<MAX>,
                ...Optional<KEEPTTL>,
            ];
            return: NumberType;
        };
        exhgetwithver: {
            args: [key: StringType, field: StringType];
            return: [string, number];
            returnBuffer: [Buffer, number];
        };
        exhmget: {
            args: [key: StringType, field: StringType, ...fields: StringType[]];
            return: string[];
            returnBuffer: Buffer[];
        };
        exhmgetwithver: {
            args: [key: StringType, field: StringType, ...fields: StringType[]];
            return: (string | number)[];
            returnBuffer: (Buffer | number)[];
        };
        exhlen: {
            args: [key: StringType, ...Optional<NOEXP>];
            return: number;
        };
        exhexists: {
            args: [key: StringType, field: StringType];
            return: number;
        };
        exhstrlen: {
            args: [key: StringType, field: StringType];
            return: number;
        };
        exhkeys: {
            args: [key: StringType];
            return: string[];
            returnBuffer: Buffer[];
        };
        exhvals: {
            args: [key: StringType];
            return: string[];
            returnBuffer: Buffer[];
        };
        exhgetall: {
            args: [key: StringType];
            return: string[];
            returnBuffer: Buffer[];
        };
        exhscan: {
            args: [key: StringType, op: OpType, subkey: StringType, ...Optional<MATCH>, ...Optional<COUNT>];
            return: [string, string[]];
            returnBuffer: [Buffer, Buffer[]];
        };
        exhscanunorder: {
            args: [key: StringType, cursor: number, ...Optional<MATCH>, ...Optional<COUNT>];
            return: [NumberType, string[]];
            returnBuffer: [Buffer, Buffer[]];
        };
        exhdel: {
            args: [key: StringType, field: StringType, ...fields: StringType[]];
            return: number;
        };
    },
    TContext
>;
