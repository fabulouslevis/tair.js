import { Command, Context, Format, Optional, WITH_ID } from './types';

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
    [index: string | Buffer, mappings: string | Buffer, settings: string | Buffer],
    'OK',
    TContext
>;

export type TftUpdateIndex<TContext extends Context> = Command<
    [index: string | Buffer, mappings: string | Buffer, settings: string | Buffer],
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

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['tft.createindex']: TftCreateIndex<Context>;

        ['tft.updateindex']: TftUpdateIndex<Context>;

        ['tft.getindex']: TftGetIndex<Context>;
        ['tft.getindexBuffer']: TftGetIndex<Context, 'buffer'>;

        ['tft.adddoc']: TftAddDoc<Context>;
        ['tft.adddocBuffer']: TftAddDoc<Context, 'buffer'>;

        ['tft.madddoc']: TftMAddDoc<Context>;
    }
}
