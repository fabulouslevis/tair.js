import { Command, Context, Optional, Format, COUNT, INDEX, MATCH, SHOW_TIME, WITH_ID, MAX_COUNT, FUZZY } from './types';

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
    [index: string | Buffer, mappings: string | Buffer, ...Optional<[settings: string | Buffer]>],
    'OK',
    TContext
>;

export type TftUpdateIndex<TContext extends Context> = Command<
    [index: string | Buffer, mappings: string | Buffer, ...Optional<[settings: string | Buffer]>],
    'OK',
    TContext
>;

export type TftGetIndex<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftAddDoc<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer, document: string | Buffer, ...Optional<WITH_ID>],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftMAddDoc<TContext extends Context> = Command<
    [index: string | Buffer, document: string | Buffer, docId: string | Buffer, ...documentDocIds: (string | Buffer)[]],
    'OK',
    TContext
>;

export type TftUpdateDocField<TContext extends Context> = Command<
    [index: string | Buffer, docId: string | Buffer, document: string | Buffer],
    'OK',
    TContext
>;

export type TftDelDocField<TContext extends Context> = Command<
    [index: string | Buffer, docId: string | Buffer, field: string | Buffer, ...fields: (string | Buffer)[]],
    number,
    TContext
>;

export type TftIncrLongDocField<TContext extends Context> = Command<
    [index: string | Buffer, docId: string | Buffer, field: string | Buffer, increment: number],
    number,
    TContext
>;

export type TftIncrFloatDocField<TContext extends Context> = Command<
    [index: string | Buffer, docId: string | Buffer, field: string | Buffer, increment: string],
    string,
    TContext
>;

export type TftGetDoc<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer, docId: string | Buffer],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftExists<TContext extends Context> = Command<
    [index: string | Buffer, docId: string | Buffer],
    number,
    TContext
>;

export type TftDocNum<TContext extends Context> = Command<[index: string | Buffer], number, TContext>;

export type TftScanDocId<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer, cursor: number, ...Optional<MATCH>, ...Optional<COUNT>],
    TFormat extends 'buffer' ? [Buffer, Buffer[]] : [string, string[]],
    TContext
>;

export type TftDelDoc<TContext extends Context> = Command<
    [index: string | Buffer, docId: string | Buffer, ...docIds: (string | Buffer)[]],
    string,
    TContext
>;

export type TftDelAll<TContext extends Context> = Command<[index: string | Buffer], 'OK', TContext>;

export type TftAnalyzer<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [analyzerName: string | Buffer, text: string | Buffer, ...Optional<INDEX>, ...Optional<SHOW_TIME>],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftSearch<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer, query: string | Buffer],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftMSearch<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [indexCount: number, index: string | Buffer, ...indexes: (string | Buffer)[], query: string | Buffer],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftExplainCost<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer, query: string | Buffer],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftExplainScore<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer, query: string | Buffer, ...docIds: (string | Buffer)[]],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TftAddSug<TContext extends Context> = Command<
    [index: string | Buffer, text: string | Buffer, weight: number, ...textWeights: (string | Buffer | number)[]],
    number,
    TContext
>;

export type TftDelSug<TContext extends Context> = Command<
    [index: string | Buffer, text: string | Buffer, ...texts: (string | Buffer)[]],
    number,
    TContext
>;

export type TftSugNum<TContext extends Context> = Command<[index: string | Buffer], number, TContext>;

export type TftGetSug<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer, prefix: string | Buffer, ...Optional<MAX_COUNT>, ...Optional<FUZZY>],
    TFormat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type TftGetAllSugs<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [index: string | Buffer],
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
