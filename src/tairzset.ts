import { Command, Context, Format, Optional, StringType, OkType, INCR, CH, LOCK, WITHSCORES, LIMIT } from './types';

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
    ? Command<[key: StringType, ...Optional<LOCK>, ...INCR, score: StringType, member: StringType], Buffer, TContext>
    : Command<
          [
              key: StringType,
              ...Optional<LOCK>,
              ...Optional<CH>,
              score: StringType,
              member: StringType,
              ...scoreMembers: StringType[],
          ],
          number,
          TContext
      > &
          Command<
              [key: StringType, ...Optional<LOCK>, ...INCR, score: StringType, member: StringType],
              string,
              TContext
          >;

export type ExZIncrBy<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: StringType, increment: StringType, member: StringType],
    TFromat extends 'buffer' ? Buffer : string,
    TContext
>;

export type ExZScore<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: StringType, member: StringType],
    TFromat extends 'buffer' ? Buffer : string,
    TContext
>;

export type ExZRange<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: StringType, min: number, max: number, ...Optional<WITHSCORES>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRevRange<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: StringType, min: number, max: number, ...Optional<WITHSCORES>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRangeByScore<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: StringType, min: StringType, max: StringType, ...Optional<WITHSCORES>, ...Optional<LIMIT>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRevRangeByScore<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: StringType, min: StringType, max: StringType, ...Optional<WITHSCORES>, ...Optional<LIMIT>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRangeByLex<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: StringType, min: StringType, max: StringType, ...Optional<WITHSCORES>, ...Optional<LIMIT>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRevRangeByLex<TContext extends Context, TFromat extends Format = 'default'> = Command<
    [key: StringType, min: StringType, max: StringType, ...Optional<WITHSCORES>, ...Optional<LIMIT>],
    TFromat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

export type ExZRem<TContext extends Context> = Command<
    [key: StringType, member: StringType, ...members: StringType[]],
    number,
    TContext
>;

export type ExZRemRangeByScore<TContext extends Context> = Command<
    [key: StringType, min: StringType, max: StringType],
    number,
    TContext
>;

export type ExZRemRangeByRank<TContext extends Context> = Command<
    [key: StringType, start: number, stop: number],
    number,
    TContext
>;

export type ExZRemRangeByLex<TContext extends Context> = Command<
    [key: StringType, min: StringType, max: StringType],
    number,
    TContext
>;

export type ExZCard<TContext extends Context> = Command<[key: StringType], number, TContext>;

export type ExZRank<TContext extends Context> = Command<[key: StringType, member: StringType], number, TContext>;

export type ExZRevRank<TContext extends Context> = Command<[key: StringType, member: StringType], number, TContext>;

export type ExZCount<TContext extends Context> = Command<
    [key: StringType, min: StringType, max: StringType],
    number,
    TContext
>;

export type ExZLexCount<TContext extends Context> = Command<
    [key: StringType, min: StringType, max: StringType],
    number,
    TContext
>;

export type ExZRankByScore<TContext extends Context> = Command<[key: StringType, score: StringType], number, TContext>;

export type ExZRevRankByScore<TContext extends Context> = Command<
    [key: StringType, score: StringType],
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
