import { Result, Callback } from 'ioredis';

export const vectorCommands = [];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
