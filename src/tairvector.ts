import { Command, Context, Format } from './types';

export const vectorCommands = [
    'tvs.createindex',
    'tvs.getindex',
    'tvs.delindex',
    'tvs.scanindex',
    'tvs.hset',
    'tvs.hgetall',
    'tvs.hmget',
    'tvs.del',
    'tvs.hdel',
    'tvs.scan',
    'tvs.knnsearch',
    'tvs.knnsearchfield',
    'tvs.mknnsearch',
    'tvs.mindexknnsearch',
    'tvs.mindexknnsearchfield',
    'tvs.mindexmknnsearch',
    'tvs.hincrby',
    'tvs.hincrbyfloat',
    'tvs.getdistance',
    'tvs.hexpire',
    'tvs.hpexpire',
    'tvs.hexpireat',
    'tvs.hpexpireat',
    'tvs.httl',
    'tvs.hpttl',
    'tvs.hexpiretime',
    'tvs.hpexpiretime',
];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
