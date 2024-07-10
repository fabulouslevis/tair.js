import { Result, Callback } from 'ioredis';

export const zsetCommands = [];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
