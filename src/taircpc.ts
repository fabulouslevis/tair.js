import { Command, Context, Optional, StringType, OkType, NumberType, EXPIRY, SIZE, WIN } from './types';

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

export type CpcEstimate<TContext extends Context> = Command<[key: StringType], NumberType, TContext>;

export type CpcUpdate<TContext extends Context> = Command<
    [key: StringType, item: StringType, ...Optional<EXPIRY>],
    OkType,
    TContext
>;

export type CpcUpdate2Est<TContext extends Context> = Command<
    [key: StringType, item: StringType, ...Optional<EXPIRY>],
    NumberType,
    TContext
>;

export type CpcUpdate2Jud<TContext extends Context> = Command<
    [key: StringType, item: StringType, ...Optional<EXPIRY>],
    [NumberType, NumberType],
    TContext
>;

export type CpcArrayEstimate<TContext extends Context> = Command<
    [key: StringType, timestamp: number],
    NumberType,
    TContext
>;

export type CpcArrayUpdate<TContext extends Context> = Command<
    [key: StringType, timestamp: number, item: StringType, ...Optional<EXPIRY>, ...Optional<SIZE>, ...Optional<WIN>],
    OkType,
    TContext
>;

export type CpcArrayUpdate2Est<TContext extends Context> = Command<
    [key: StringType, timestamp: number, item: StringType, ...Optional<EXPIRY>, ...Optional<SIZE>, ...Optional<WIN>],
    NumberType,
    TContext
>;

export type CpcArrayUpdate2Jud<TContext extends Context> = Command<
    [key: StringType, timestamp: number, item: StringType, ...Optional<EXPIRY>, ...Optional<SIZE>, ...Optional<WIN>],
    [NumberType, NumberType],
    TContext
>;

export type CpcArrayEstimateRange<TContext extends Context> = Command<
    [key: StringType, startTime: number, endTime: number],
    NumberType[],
    TContext
>;

export type CpcArrayEstimateRangeMerge<TContext extends Context> = Command<
    [key: StringType, timestamp: number, range: number],
    NumberType,
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
