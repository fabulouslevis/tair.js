import { Command, Context, Format } from './types';

export const hashCommands = [
    'exhset',
    'exhsetnx',
    'exhmset',
    'exhmsetwithopts',
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
    'exhget',
    'exhgetwithver',
    'exhmget',
    'exhdel',
    'exhlen',
    'exhexists',
    'exhstrlen',
    'exhkeys',
    'exhvals',
    'exhgetall',
    'exhmgetwithver',
    'exhscan',
    'exhscanunorder',
];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
