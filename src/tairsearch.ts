import {
    Commands,
    Context,
    Optional,
    StringType,
    OkType,
    NumberType,
    COUNT,
    INDEX,
    MATCH,
    SHOW_TIME,
    WITH_ID,
    MAX_COUNT,
    FUZZY,
} from './types';

export const searchCommands = [
    'tft.createindex',
    'tft.updateindex',
    'tft.getindex',
    'tft.adddoc',
    'tft.madddoc',
    'tft.updatedocfield',
    'tft.deldocfield',
    'tft.incrlongdocfield',
    'tft.incrfloatdocfield',
    'tft.getdoc',
    'tft.exists',
    'tft.docnum',
    'tft.scandocid',
    'tft.deldoc',
    'tft.delall',
    'tft.analyzer',
    'tft.search',
    'tft.msearch',
    'tft.explaincost',
    'tft.explainscore',
    'tft.addsug',
    'tft.delsug',
    'tft.sugnum',
    'tft.getsug',
    'tft.getallsugs',
];

export type SearchCommands<TContext extends Context> = Commands<
    {
        'tft.createindex': {
            args: [index: StringType, mappings: StringType, ...Optional<[settings: StringType]>];
            return: OkType;
        };
        'tft.updateindex': {
            args: [index: StringType, mappings: StringType, ...Optional<[settings: StringType]>];
            return: OkType;
        };
        'tft.getindex': {
            args: [index: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        'tft.adddoc': {
            args: [index: StringType, document: StringType, ...Optional<WITH_ID>];
            return: string;
            returnBuffer: Buffer;
        };
        'tft.madddoc': {
            args: [index: StringType, document: StringType, docId: StringType, ...documentDocIds: StringType[]];
            return: OkType;
        };
        'tft.updatedocfield': {
            args: [index: StringType, docId: StringType, document: StringType];
            return: OkType;
        };
        'tft.deldocfield': {
            args: [index: StringType, docId: StringType, field: StringType, ...fields: StringType[]];
            return: number;
        };
        'tft.incrlongdocfield': {
            args: [index: StringType, docId: StringType, field: StringType, increment: number];
            return: number;
        };
        'tft.incrfloatdocfield': {
            args: [index: StringType, docId: StringType, field: StringType, increment: number];
            return: NumberType;
        };
        'tft.getdoc': {
            args: [index: StringType, docId: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        'tft.exists': {
            args: [index: StringType, docId: StringType];
            return: number;
        };
        'tft.docnum': {
            args: [index: StringType];
            return: number;
        };
        'tft.scandocid': {
            args: [index: StringType, cursor: number, ...Optional<MATCH>, ...Optional<COUNT>];
            return: [NumberType, string[]];
            returnBuffer: [Buffer, Buffer[]];
        };
        'tft.deldoc': {
            args: [index: StringType, docId: StringType, ...docIds: StringType[]];
            return: string;
        };
        'tft.delall': {
            args: [index: StringType];
            return: OkType;
        };
        'tft.analyzer': {
            args: [analyzerName: StringType, text: StringType, ...Optional<INDEX>, ...Optional<SHOW_TIME>];
            return: string;
            returnBuffer: Buffer;
        };
        'tft.search': {
            args: [index: StringType, query: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        'tft.msearch': {
            args: [indexCount: number, index: StringType, ...indexes: StringType[], query: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        'tft.explaincost': {
            args: [index: StringType, query: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        'tft.explainscore': {
            args: [index: StringType, query: StringType, ...docIds: StringType[]];
            return: string;
            returnBuffer: Buffer;
        };
        'tft.addsug': {
            args: [index: StringType, text: StringType, weight: number, ...textWeights: (StringType | number)[]];
            return: number;
        };
        'tft.delsug': {
            args: [index: StringType, text: StringType, ...texts: StringType[]];
            return: number;
        };
        'tft.sugnum': {
            args: [index: StringType];
            return: number;
        };
        'tft.getsug': {
            args: [index: StringType, prefix: StringType, ...Optional<MAX_COUNT>, ...Optional<FUZZY>];
            return: string[];
            returnBuffer: Buffer[];
        };
        'tft.getallsugs': {
            args: [index: StringType];
            return: string[];
            returnBuffer: Buffer[];
        };
    },
    TContext
>;
