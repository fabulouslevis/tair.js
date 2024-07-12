import { Redis } from 'ioredis';
import { Command, Context, Format, Optional, INCR, CH, WRITE, WITHSCORES, LIMIT } from './types';

export const zsetCommands = [
    'exzadd',
    'exzincrby',
    'exzscore',
    'exzrange',
    'exzrevrange',
    'exzrangebyscore',
    'exzrevrangebyscore',
    'exzrangebylex',
    'exzrevrangebylex',
    'exzrem',
    'exzremrangebyscore',
    'exzremrangebyrank',
    'exzremrangebylex',
    'exzcard',
    'exzrank',
    'exzrevrank',
    'exzcount',
    'exzlexcount',
    'exzrankbyscore',
    'exzrevrankbyscore',
];

export type ExZAdd<TContext extends Context, TFromat extends Format = 'default'> = TFromat extends 'buffer'
    ? Command<
          [key: string | Buffer, ...Optional<WRITE>, ...INCR, score: string, member: string | Buffer],
          Buffer,
          TContext
      >
    : Command<
          [
              key: string | Buffer,
              ...Optional<WRITE>,
              ...Optional<CH>,
              score: string,
              member: string | Buffer,
              ...scoreMembers: (number | string | Buffer)[],
          ],
          number,
          TContext
      > &
          Command<
              [key: string | Buffer, ...Optional<WRITE>, ...INCR, score: string, member: string | Buffer],
              string,
              TContext
          >;

export type ExZIncrBy<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, increment: string, member: string | Buffer],
    TFromat extends 'buffer' ? Buffer : string,
    TContext
>;

export type ExZScore<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, member: string | Buffer],
    TFromat extends 'buffer' ? Buffer : string,
    TContext
>;

export type ExZRange<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, min: number, max: number, ...Optional<WITHSCORES>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRevRange<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, min: number, max: number, ...Optional<WITHSCORES>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRangeByScore<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, min: string, max: string, ...Optional<WITHSCORES>, ...Optional<LIMIT>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRevRangeByScore<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, min: string, max: string, ...Optional<WITHSCORES>, ...Optional<LIMIT>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRangeByLex<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, min: string, max: string, ...Optional<WITHSCORES>, ...Optional<LIMIT>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRevRangeByLex<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: string | Buffer, min: string, max: string, ...Optional<WITHSCORES>, ...Optional<LIMIT>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRem<TContext extends Context> = Command<
    [key: string | Buffer, member: string | Buffer, ...members: (string | Buffer)[]],
    number,
    TContext
>;

export type ExZRemRangeByScore<TContext extends Context> = Command<
    [key: string | Buffer, min: string, max: string],
    number,
    TContext
>;

export type ExZRemRangeByRank<TContext extends Context> = Command<
    [key: string | Buffer, start: number, stop: number],
    number,
    TContext
>;

export type ExZRemRangeByLex<TContext extends Context> = Command<
    [key: string | Buffer, min: string, max: string],
    number,
    TContext
>;

export type ExZCard<TContext extends Context> = Command<[key: string | Buffer], number, TContext>;

export type ExZRank<TContext extends Context> = Command<
    [key: string | Buffer, member: string | Buffer],
    number,
    TContext
>;

export type ExZRevRank<TContext extends Context> = Command<
    [key: string | Buffer, member: string | Buffer],
    number,
    TContext
>;

export type ExZCount<TContext extends Context> = Command<
    [key: string | Buffer, min: string, max: string],
    number,
    TContext
>;

export type ExZLexCount<TContext extends Context> = Command<
    [key: string | Buffer, min: string, max: string],
    number,
    TContext
>;

export type ExZRankByScore<TContext extends Context> = Command<[key: string | Buffer, score: string], number, TContext>;

export type ExZRevRankByScore<TContext extends Context> = Command<
    [key: string | Buffer, score: string],
    number,
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        exzadd: ExZAdd<Context>;
        exzaddBuffer: ExZAdd<Context, 'buffer'>;

        exzincrby: ExZIncrBy<Context>;
        exzincrbyBuffer: ExZIncrBy<Context, 'buffer'>;

        exzscore: ExZScore<Context>;
        exzscoreBuffer: ExZScore<Context, 'buffer'>;

        exzrange: ExZRange<Context>;
        exzrangeBuffer: ExZRange<Context, 'buffer'>;

        exzrevrange: ExZRevRange<Context>;
        exzrevrangeBuffer: ExZRevRange<Context, 'buffer'>;

        exzrangebyscore: ExZRangeByScore<Context>;
        exzrangebyscoreBuffer: ExZRangeByScore<Context, 'buffer'>;

        exzrevrangebyscore: ExZRevRangeByScore<Context>;
        exzrevrangebyscoreBuffer: ExZRevRangeByScore<Context, 'buffer'>;

        exzrangebylex: ExZRangeByLex<Context>;
        exzrangebylexBuffer: ExZRangeByLex<Context, 'buffer'>;

        exzrevrangebylex: ExZRevRangeByLex<Context>;
        exzrevrangebylexBuffer: ExZRevRangeByLex<Context, 'buffer'>;

        exzrem: ExZRem<Context>;

        exzremrangebyscore: ExZRemRangeByScore<Context>;

        exzremrangebyrank: ExZRemRangeByRank<Context>;

        exzremrangebylex: ExZRemRangeByLex<Context>;

        exzcard: ExZCard<Context>;

        exzrank: ExZRank<Context>;

        exzrevrank: ExZRevRank<Context>;

        exzcount: ExZCount<Context>;

        exzlexcount: ExZLexCount<Context>;

        exzrankbyscore: ExZRankByScore<Context>;

        exzrevrankbyscore: ExZRevRankByScore<Context>;
    }
}
