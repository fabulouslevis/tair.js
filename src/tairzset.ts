import { Commands, Context, Optional, StringType, INCR, CH, LOCK, WITHSCORES, LIMIT } from './types';

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

export type ZsetCommands<TContext extends Context> = Commands<
    {
        exzadd: [
            {
                args: [key: StringType, ...Optional<LOCK>, ...INCR, score: StringType, member: StringType];
                return: string;
                returnBuffer: Buffer;
            },
            {
                args: [
                    key: StringType,
                    ...Optional<LOCK>,
                    ...Optional<CH>,
                    score: StringType,
                    member: StringType,
                    ...scoreMembers: StringType[],
                ];
                return: number;
            },
        ];
        exzincrby: {
            args: [key: StringType, increment: StringType, member: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        exzscore: {
            args: [key: StringType, member: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        exzrange: {
            args: [key: StringType, min: number, max: number, ...Optional<WITHSCORES>];
            return: string[];
            returnBuffer: Buffer[];
        };
        exzrevrange: {
            args: [key: StringType, min: number, max: number, ...Optional<WITHSCORES>];
            return: string[];
            returnBuffer: Buffer[];
        };
        exzrangebyscore: {
            args: [key: StringType, min: StringType, max: StringType, ...Optional<WITHSCORES>, ...Optional<LIMIT>];
            return: string[];
            returnBuffer: Buffer[];
        };
        exzrevrangebyscore: {
            args: [key: StringType, min: StringType, max: StringType, ...Optional<WITHSCORES>, ...Optional<LIMIT>];
            return: string[];
            returnBuffer: Buffer[];
        };
        exzrangebylex: {
            args: [key: StringType, min: StringType, max: StringType, ...Optional<WITHSCORES>, ...Optional<LIMIT>];
            return: string[];
            returnBuffer: Buffer[];
        };
        exzrevrangebylex: {
            args: [key: StringType, min: StringType, max: StringType, ...Optional<WITHSCORES>, ...Optional<LIMIT>];
            return: string[];
            returnBuffer: Buffer[];
        };
        exzrem: {
            args: [key: StringType, member: StringType, ...members: StringType[]];
            return: number;
        };
        exzremrangebyscore: {
            args: [key: StringType, min: StringType, max: StringType];
            return: number;
        };
        exzremrangebyrank: {
            args: [key: StringType, start: number, stop: number];
            return: number;
        };
        exzremrangebylex: {
            args: [key: StringType, min: StringType, max: StringType];
            return: number;
        };
        exzcard: {
            args: [key: StringType];
            return: number;
        };
        exzrank: {
            args: [key: StringType, member: StringType];
            return: number;
        };
        exzrevrank: {
            args: [key: StringType, member: StringType];
            return: number;
        };
        exzcount: {
            args: [key: StringType, min: StringType, max: StringType];
            return: number;
        };
        exzlexcount: {
            args: [key: StringType, min: StringType, max: StringType];
            return: number;
        };
        exzrankbyscore: {
            args: [key: StringType, score: StringType];
            return: number;
        };
        exzrevrankbyscore: {
            args: [key: StringType, score: StringType];
            return: number;
        };
    },
    TContext
>;
