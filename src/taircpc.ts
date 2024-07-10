import { Result, Callback } from 'ioredis';

export const cpcCommands = [];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
