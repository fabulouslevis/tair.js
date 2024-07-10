import { Result, Callback } from 'ioredis';

export const roaringCommands = [];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
