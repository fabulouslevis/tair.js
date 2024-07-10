import { Result, Callback } from 'ioredis';

export const tsCommands = [];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
