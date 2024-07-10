import { Result, Callback } from 'ioredis';

export const cpcCommands = [
    'cpc.estimate',
    'cpc.array.estimate',
    'cpc.update2est',
    'cpc.update',
    'cpc.update2jud',
    'cpc.array.update',
    'cpc.array.update2est',
    'cpc.array.update2jud',
    'cpc.array.estimate.range',
    'cpc.array.estimate.range.merge',
];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
