import { Command, Context, Optional, EXPIRE, SIZE, WIN } from './types';

export const cpcCommands = [
    'cpc.estimate',
    'cpc.update',
    'cpc.update2est',
    'cpc.update2jud',
    'cpc.array.estimate',
    'cpc.array.update',
    'cpc.array.update2est',
    'cpc.array.update2jud',
    'cpc.array.estimate.range',
    'cpc.array.estimate.range.merge',
];

export type CpcEstimate<TContext extends Context> = Command<[key: string | Buffer], string, TContext>;

export type CpcUpdate<TContext extends Context> = Command<
    [key: string | Buffer, item: string | Buffer, ...Optional<EXPIRE>],
    'OK',
    TContext
>;

export type CpcUpdate2Est<TContext extends Context> = Command<
    [key: string | Buffer, item: string | Buffer, ...Optional<EXPIRE>],
    string,
    TContext
>;

export type CpcUpdate2Jud<TContext extends Context> = Command<
    [key: string | Buffer, item: string | Buffer, ...Optional<EXPIRE>],
    [string, string],
    TContext
>;

export type CpcArrayEstimate<TContext extends Context> = Command<
    [key: string | Buffer, timestamp: number],
    string,
    TContext
>;

export type CpcArrayUpdate<TContext extends Context> = Command<
    [
        key: string | Buffer,
        timestamp: number,
        item: string | Buffer,
        ...Optional<EXPIRE>,
        ...Optional<SIZE>,
        ...Optional<WIN>,
    ],
    'OK',
    TContext
>;

export type CpcArrayUpdate2Est<TContext extends Context> = Command<
    [
        key: string | Buffer,
        timestamp: number,
        item: string | Buffer,
        ...Optional<EXPIRE>,
        ...Optional<SIZE>,
        ...Optional<WIN>,
    ],
    string,
    TContext
>;

export type CpcArrayUpdate2Jud<TContext extends Context> = Command<
    [
        key: string | Buffer,
        timestamp: number,
        item: string | Buffer,
        ...Optional<EXPIRE>,
        ...Optional<SIZE>,
        ...Optional<WIN>,
    ],
    [string, string],
    TContext
>;

export type CpcArrayEstimateRange<TContext extends Context> = Command<
    [key: string | Buffer, startTime: number, endTime: number],
    string[],
    TContext
>;

export type CpcArrayEstimateRangeMerge<TContext extends Context> = Command<
    [key: string | Buffer, timestamp: number, range: number],
    string,
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['cpc.estimate']: CpcEstimate<Context>;

        ['cpc.update']: CpcUpdate<Context>;

        ['cpc.update2est']: CpcUpdate2Est<Context>;

        ['cpc.update2jud']: CpcUpdate2Jud<Context>;

        ['cpc.array.estimate']: CpcArrayEstimate<Context>;

        ['cpc.array.update']: CpcArrayUpdate<Context>;

        ['cpc.array.update2est']: CpcArrayUpdate2Est<Context>;

        ['cpc.array.update2jud']: CpcArrayUpdate2Jud<Context>;

        ['cpc.array.estimate.range']: CpcArrayEstimateRange<Context>;

        ['cpc.array.estimate.range.merge']: CpcArrayEstimateRangeMerge<Context>;
    }
}
