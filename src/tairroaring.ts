import { Command, Context, Format, Optional, Shift, COUNT, JSON } from './types';

export const roaringCommands = [
    'tr.setbit',
    'tr.setbits',
    'tr.clearbits',
    'tr.setrange',
    'tr.appendbitarray',
    'tr.fliprange',
    'tr.appendintarray',
    'tr.setintarray',
    'tr.setbitarray',
    'tr.bitop',
    'tr.bitopcard',
    'tr.optimize',
    'tr.getbit',
    'tr.getbits',
    'tr.bitcount',
    'tr.bitpos',
    'tr.scan',
    'tr.range',
    'tr.rangebitarray',
    'tr.min',
    'tr.max',
    'tr.stat',
    'tr.jaccard',
    'tr.contains',
    'tr.rank',
    'tr.loadstring',
    'tr.diff',
];

export type TrSetBit<TContext extends Context> = Command<
    [key: string | Buffer, offset: number, value: 0 | 1],
    number,
    TContext
>;

export type TrSetBits<TContext extends Context> = Command<
    [key: string | Buffer, offset: number, ...offsets: number[]],
    number,
    TContext
>;

export type TrClearBits<TContext extends Context> = Command<
    [key: string | Buffer, offset: number, ...offsets: number[]],
    number,
    TContext
>;

export type TrSetRange<TContext extends Context> = Command<
    [key: string | Buffer, start: number, end: number],
    number,
    TContext
>;

export type TrAppendBitArray<TContext extends Context> = Command<
    [key: string | Buffer, offset: number, bitarray: string | Buffer],
    number,
    TContext
>;

export type TrFlipRange<TContext extends Context> = Command<
    [key: string | Buffer, start: number, end: number],
    number,
    TContext
>;

export type TrAppendIntArray<TContext extends Context> = Command<
    [key: string | Buffer, value: number, ...values: number[]],
    'OK',
    TContext
>;

export type TrSetIntArray<TContext extends Context> = Command<
    [key: string | Buffer, value: number, ...values: number[]],
    'OK',
    TContext
>;

export type TrSetBitArray<TContext extends Context> = Command<
    [key: string | Buffer, value: string | Buffer],
    'OK',
    TContext
>;

export type TrBitOp<TContext extends Context> = Command<
    [
        destkey: string | Buffer,
        operation: 'AND' | 'OR' | 'XOR' | 'NOT' | 'DIFF',
        key: string | Buffer,
        ...keys: (string | Buffer)[],
    ],
    number,
    TContext
>;

export type TrBitOpCard<TContext extends Context> = Command<
    [operation: 'AND' | 'OR' | 'XOR' | 'NOT' | 'DIFF', key: string | Buffer, ...keys: (string | Buffer)[]],
    number,
    TContext
>;

export type TrOptimize<TContext extends Context> = Command<[key: string | Buffer], 'OK', TContext>;

export type TrGetBit<TContext extends Context> = Command<[key: string | Buffer, offset: number], 0 | 1, TContext>;

export type TrGetBits<TContext extends Context> = Command<
    [key: string | Buffer, offset: number, ...offsets: number[]],
    (0 | 1)[],
    TContext
>;

export type TrBitCount<TContext extends Context> = Command<
    [key: string | Buffer, ...Optional<[start: number, end: number]>],
    number,
    TContext
>;

export type TrBitOps<TContext extends Context> = Command<
    [key: string | Buffer, value: 0 | 1, ...Optional<Shift<COUNT>>],
    number,
    TContext
>;

export type TrScan<TContext extends Context> = Command<
    [key: string | Buffer, startOffset: number, ...Optional<COUNT>],
    [number, number[]],
    TContext
>;

export type TrRange<TContext extends Context> = Command<
    [key: string | Buffer, start: number, end: number],
    number[],
    TContext
>;

export type TrRangeBitArray<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, start: number, end: number],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TrMin<TContext extends Context> = Command<[key: string | Buffer], number, TContext>;

export type TrMax<TContext extends Context> = Command<[key: string | Buffer], number, TContext>;

export type TrStat<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, ...Optional<JSON>],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type TrJaccard<TContext extends Context> = Command<
    [key1: string | Buffer, key2: string | Buffer],
    string,
    TContext
>;

export type TrContains<TContext extends Context> = Command<
    [key1: string | Buffer, key2: string | Buffer],
    0 | 1,
    TContext
>;

export type TrRank<TContext extends Context> = Command<[key: string | Buffer, offset: number], number, TContext>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['tr.setbit']: TrSetBit<Context>;

        ['tr.setbits']: TrSetBits<Context>;

        ['tr.clearbits']: TrClearBits<Context>;

        ['tr.setrange']: TrSetRange<Context>;

        ['tr.appendbitarray']: TrAppendBitArray<Context>;

        ['tr.fliprange']: TrFlipRange<Context>;

        ['tr.appendintarray']: TrAppendIntArray<Context>;

        ['tr.setintarray']: TrSetIntArray<Context>;

        ['tr.setbitarray']: TrSetBitArray<Context>;

        ['tr.bitop']: TrBitOp<Context>;

        ['tr.bitopcard']: TrBitOpCard<Context>;

        ['tr.optimize']: TrOptimize<Context>;

        ['tr.getbit']: TrGetBit<Context>;

        ['tr.getbits']: TrGetBits<Context>;

        ['tr.bitcount']: TrBitCount<Context>;

        ['tr.bitpos']: TrBitOps<Context>;

        ['tr.scan']: TrScan<Context>;

        ['tr.range']: TrRange<Context>;

        ['tr.rangebitarray']: TrRangeBitArray<Context>;
        ['tr.rangebitarrayBuffer']: TrRangeBitArray<Context, 'buffer'>;

        ['tr.min']: TrMin<Context>;

        ['tr.max']: TrMax<Context>;

        ['tr.stat']: TrStat<Context>;
        ['tr.statBuffer']: TrStat<Context, 'buffer'>;

        ['tr.jaccard']: TrJaccard<Context>;

        ['tr.contains']: TrContains<Context>;

        ['tr.rank']: TrRank<Context>;
    }
}
