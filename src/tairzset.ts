import { Command, Context, Format } from './types';

export const zsetCommands = [
    'exzadd',
    'exzincrby',
    'exzrem',
    'exzremrangebyscore',
    'exzremrangebyrank',
    'exzremrangebylex',
    'exzscore',
    'exzrange',
    'exzrevrange',
    'exzrangebyscore',
    'exzrevrangebyscore',
    'exzrangebylex',
    'exzrevrangebylex',
    'exzcard',
    'exzrank',
    'exzrevrank',
    'exzrankbyscore',
    'exzrevrankbyscore',
    'exzcount',
    'exzlexcount',
];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
