import {
    Command,
    Context,
    Optional,
    Format,
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

export type TftCreateIndex<TContext extends Context> = Command<
    [index: StringType, mappings: StringType, ...Optional<[settings: StringType]>],
    OkType,
    TContext
>;

export type TftUpdateIndex<TContext extends Context> = Command<
    [index: StringType, mappings: StringType, ...Optional<[settings: StringType]>],
    OkType,
    TContext
>;

export type TftGetIndex<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftAddDoc<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType, document: StringType, ...Optional<WITH_ID>],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftMAddDoc<TContext extends Context> = Command<
    [index: StringType, document: StringType, docId: StringType, ...documentDocIds: StringType[]],
    OkType,
    TContext
>;

export type TftUpdateDocField<TContext extends Context> = Command<
    [index: StringType, docId: StringType, document: StringType],
    OkType,
    TContext
>;

export type TftDelDocField<TContext extends Context> = Command<
    [index: StringType, docId: StringType, field: StringType, ...fields: StringType[]],
    number,
    TContext
>;

export type TftIncrLongDocField<TContext extends Context> = Command<
    [index: StringType, docId: StringType, field: StringType, increment: number],
    number,
    TContext
>;

export type TftIncrFloatDocField<TContext extends Context> = Command<
    [index: StringType, docId: StringType, field: StringType, increment: number],
    NumberType,
    TContext
>;

export type TftGetDoc<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType, docId: StringType],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftExists<TContext extends Context> = Command<[index: StringType, docId: StringType], number, TContext>;

export type TftDocNum<TContext extends Context> = Command<[index: StringType], number, TContext>;

export type TftScanDocId<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType, cursor: number, ...Optional<MATCH>, ...Optional<COUNT>],
    TFormat extends 'buffer' ? [Buffer, Buffer[]] : [string, string[]],
    TContext
>;

export type TftDelDoc<TContext extends Context> = Command<
    [index: StringType, docId: StringType, ...docIds: StringType[]],
    string,
    TContext
>;

export type TftDelAll<TContext extends Context> = Command<[index: StringType], OkType, TContext>;

export type TftAnalyzer<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [analyzerName: StringType, text: StringType, ...Optional<INDEX>, ...Optional<SHOW_TIME>],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftSearch<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType, query: StringType],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftMSearch<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [indexCount: number, index: StringType, ...indexes: StringType[], query: StringType],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftExplainCost<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType, query: StringType],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftExplainScore<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType, query: StringType, ...docIds: StringType[]],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftAddSug<TContext extends Context> = Command<
    [index: StringType, text: StringType, weight: number, ...textWeights: (StringType | number)[]],
    number,
    TContext
>;

export type TftDelSug<TContext extends Context> = Command<
    [index: StringType, text: StringType, ...texts: StringType[]],
    number,
    TContext
>;

export type TftSugNum<TContext extends Context> = Command<[index: StringType], number, TContext>;

export type TftGetSug<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType, prefix: StringType, ...Optional<MAX_COUNT>, ...Optional<FUZZY>],
    TFormat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type TftGetAllSugs<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: StringType],
    TFormat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['tft.createindex']: TftCreateIndex<Context>;

        ['tft.updateindex']: TftUpdateIndex<Context>;

        ['tft.getindex']: TftGetIndex<Context>;
        ['tft.getindexBuffer']: TftGetIndex<Context, 'buffer'>;

        ['tft.adddoc']: TftAddDoc<Context>;
        ['tft.adddocBuffer']: TftAddDoc<Context, 'buffer'>;

        ['tft.madddoc']: TftMAddDoc<Context>;

        ['tft.updatedocfield']: TftUpdateDocField<Context>;

        ['tft.deldocfield']: TftDelDocField<Context>;

        ['tft.incrlongdocfield']: TftIncrLongDocField<Context>;

        ['tft.incrfloatdocfield']: TftIncrFloatDocField<Context>;

        ['tft.getdoc']: TftGetDoc<Context>;
        ['tft.getdocBuffer']: TftGetDoc<Context, 'buffer'>;

        ['tft.exists']: TftExists<Context>;

        ['tft.docnum']: TftDocNum<Context>;

        ['tft.scandocid']: TftScanDocId<Context>;
        ['tft.scandocidBuffer']: TftScanDocId<Context, 'buffer'>;

        ['tft.deldoc']: TftDelDoc<Context>;

        ['tft.delall']: TftDelAll<Context>;

        ['tft.analyzer']: TftAnalyzer<Context>;
        ['tft.analyzerBuffer']: TftAnalyzer<Context, 'buffer'>;

        ['tft.search']: TftSearch<Context>;
        ['tft.searchBuffer']: TftSearch<Context, 'buffer'>;

        ['tft.msearch']: TftMSearch<Context>;
        ['tft.msearchBuffer']: TftMSearch<Context, 'buffer'>;

        ['tft.explaincost']: TftExplainCost<Context>;
        ['tft.explaincostBuffer']: TftExplainCost<Context, 'buffer'>;

        ['tft.explainscore']: TftExplainScore<Context>;
        ['tft.explainscoreBuffer']: TftExplainScore<Context, 'buffer'>;

        ['tft.addsug']: TftAddSug<Context>;

        ['tft.delsug']: TftDelSug<Context>;

        ['tft.sugnum']: TftSugNum<Context>;

        ['tft.getsug']: TftGetSug<Context>;
        ['tft.getsugBuffer']: TftGetSug<Context, 'buffer'>;

        ['tft.getallsugs']: TftGetAllSugs<Context>;
        ['tft.getallsugsBuffer']: TftGetAllSugs<Context, 'buffer'>;
    }
}
