import { Commands, Context, Optional, StringType, OkType, NumberType, EXPIRY, SIZE, WIN } from './types';

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

export type CpcCommands<TContext extends Context> = Commands<
    {
        'cpc.estimate': {
            args: [key: StringType];
            return: NumberType;
        };
        'cpc.update': {
            args: [key: StringType, item: StringType, ...Optional<EXPIRY>];
            return: OkType;
        };
        'cpc.update2est': {
            args: [key: StringType, item: StringType, ...Optional<EXPIRY>];
            return: NumberType;
        };
        'cpc.update2jud': {
            args: [key: StringType, item: StringType, ...Optional<EXPIRY>];
            return: [NumberType, NumberType];
        };
        'cpc.array.estimate': {
            args: [key: StringType, timestamp: number];
            return: NumberType;
        };
        'cpc.array.update': {
            args: [
                key: StringType,
                timestamp: number,
                item: StringType,
                ...Optional<EXPIRY>,
                ...Optional<SIZE>,
                ...Optional<WIN>,
            ];
            return: OkType;
        };
        'cpc.array.update2est': {
            args: [
                key: StringType,
                timestamp: number,
                item: StringType,
                ...Optional<EXPIRY>,
                ...Optional<SIZE>,
                ...Optional<WIN>,
            ];
            return: NumberType;
        };
        'cpc.array.update2jud': {
            args: [
                key: StringType,
                timestamp: number,
                item: StringType,
                ...Optional<EXPIRY>,
                ...Optional<SIZE>,
                ...Optional<WIN>,
            ];
            return: [NumberType, NumberType];
        };
        'cpc.array.estimate.range': {
            args: [key: StringType, startTime: number, endTime: number];
            return: NumberType[];
        };
        'cpc.array.estimate.range.merge': {
            args: [key: StringType, timestamp: number, range: number];
            return: NumberType;
        };
    },
    TContext
>;
