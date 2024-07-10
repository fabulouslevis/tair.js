import { Result, Callback } from 'ioredis';

export const searchCommands = [];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
