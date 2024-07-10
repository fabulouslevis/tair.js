import { Result, Callback } from 'ioredis';

export const hashCommands = [];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
