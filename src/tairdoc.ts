import { Command, Context, Format, Optional, FORMAT, ROOTNAME, ARRNAME, WRITE } from './types';

export const docCommands = [
    'json.del',
    'json.get',
    'json.mget',
    'json.set',
    'json.type',
    'json.numincrby',
    'json.strappend',
    'json.strlen',
    'json.arrappend',
    'json.arrpop',
    'json.arrinsert',
    'json.arrlen',
    'json.arrtrim',
];

export type JsonDel<TContext extends Context> = Command<
    [key: string | Buffer, ...Optional<[path: string | Buffer]>],
    number,
    TContext
>;

export type JsonGet<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [
        key: string | Buffer,
        ...Optional<[path: string | Buffer, ...Optional<FORMAT>, ...Optional<ROOTNAME>, ...Optional<ARRNAME>]>,
    ],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type JsonMGet<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, ...keys: (string | Buffer)[], path: string | Buffer],
    TFormat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type JsonSet<TContext extends Context> = Command<
    [key: string | Buffer, path: string | Buffer, json: string | Buffer, ...Optional<WRITE>],
    'OK',
    TContext
>;

export type JsonType<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, ...Optional<[path: string | Buffer]>],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type JsonNumIncrBy<TContext extends Context> = Command<
    [key: string | Buffer, ...Optional<[path: string | Buffer]>, value: number],
    string,
    TContext
>;

export type JsonStrAppend<TContext extends Context> = Command<
    [key: string | Buffer, ...Optional<[path: string | Buffer]>, json: string | Buffer],
    number,
    TContext
>;

export type JsonStrLen<TContext extends Context> = Command<
    [key: string | Buffer, ...Optional<[path: string | Buffer]>],
    number,
    TContext
>;

export type JsonArrAppend<TContext extends Context> = Command<
    [key: string | Buffer, path: string | Buffer, json: string | Buffer, ...jsons: (string | Buffer)[]],
    number,
    TContext
>;

export type JsonArrPop<TContext extends Context> = Command<
    [key: string | Buffer, path: string | Buffer, ...Optional<[index: number]>],
    number,
    TContext
>;

export type JsonArrInsert<TContext extends Context> = Command<
    [key: string | Buffer, path: string | Buffer, index: number, json: string | Buffer, ...jsons: (string | Buffer)[]],
    number,
    TContext
>;

export type JsonArrLen<TContext extends Context> = Command<
    [key: string | Buffer, ...Optional<[path: string | Buffer]>],
    number,
    TContext
>;

export type JsonArrTrim<TContext extends Context> = Command<
    [key: string | Buffer, path: string | Buffer, start: number, stop: number],
    number,
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['json.del']: JsonDel<Context>;

        ['json.get']: JsonGet<Context>;
        ['json.getBuffer']: JsonGet<Context, 'buffer'>;

        ['json.mget']: JsonMGet<Context>;
        ['json.mgetBuffer']: JsonMGet<Context, 'buffer'>;

        ['json.set']: JsonSet<Context>;

        ['json.type']: JsonType<Context>;
        ['json.typeBuffer']: JsonType<Context, 'buffer'>;

        ['json.numincrby']: JsonNumIncrBy<Context>;

        ['json.strappend']: JsonStrAppend<Context>;

        ['json.strlen']: JsonStrLen<Context>;

        ['json.arrappend']: JsonArrAppend<Context>;

        ['json.arrpop']: JsonArrPop<Context>;

        ['json.arrinsert']: JsonArrInsert<Context>;

        ['json.arrlen']: JsonArrLen<Context>;

        ['json.arrtrim']: JsonArrTrim<Context>;
    }
}
