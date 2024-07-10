import { Result, Callback } from 'ioredis';

export const stringCommands = ['exset'];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
