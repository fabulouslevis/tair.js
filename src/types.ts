import { ClientContext, Result, Callback } from 'ioredis';

export type Format = 'default' | 'buffer';

export type Context = ClientContext;

export type Command<TArgs extends any[], TReturn, TContext extends Context> = (
    ...args: [...TArgs, ...([callback: Callback<TReturn>] | [])]
) => Result<TReturn, TContext>;
