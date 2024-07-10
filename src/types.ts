import { ClientContext, Result, Callback } from 'ioredis';

export type Args<TArgs extends any[], TResult> = [...TArgs, ...([callback: Callback<TResult>] | [])];

export type Return<TResult, TContext extends ClientContext> = Result<TResult, TContext>;
