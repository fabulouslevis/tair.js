import { Result, Callback } from 'ioredis';

export const bloomCommands = ['bf.add', 'bf.madd', 'bf.exists', 'bf.mexists', 'bf.insert', 'bf.reserve', 'bf.debug'];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
