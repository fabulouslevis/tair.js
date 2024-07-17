import { Commands, Context, Optional, Shift, StringType, OkType, BitType, NumberType, COUNT, JSON } from './types';

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

type OperationType = 'AND' | 'OR' | 'XOR' | 'NOT' | 'DIFF';

export type RoaringCommands<TContext extends Context> = Commands<
    {
        'tr.setbit': {
            args: [key: StringType, offset: number, value: BitType];
            return: number;
        };
        'tr.setbits': {
            args: [key: StringType, offset: number, ...offsets: number[]];
            return: number;
        };
        'tr.clearbits': {
            args: [key: StringType, offset: number, ...offsets: number[]];
            return: number;
        };
        'tr.setrange': {
            args: [key: StringType, start: number, end: number];
            return: number;
        };
        'tr.appendbitarray': {
            args: [key: StringType, offset: number, bitarray: StringType];
            return: number;
        };
        'tr.fliprange': {
            args: [key: StringType, start: number, end: number];
            return: number;
        };
        'tr.appendintarray': {
            args: [key: StringType, value: number, ...values: number[]];
            return: OkType;
        };
        'tr.setintarray': {
            args: [key: StringType, value: number, ...values: number[]];
            return: OkType;
        };
        'tr.setbitarray': {
            args: [key: StringType, value: StringType];
            return: OkType;
        };
        'tr.bitop': {
            args: [destkey: StringType, operation: OperationType, key: StringType, ...keys: StringType[]];
            return: number;
        };
        'tr.bitopcard': {
            args: [operation: OperationType, key: StringType, ...keys: StringType[]];
            return: number;
        };
        'tr.optimize': {
            args: [key: StringType];
            return: OkType;
        };
        'tr.getbit': {
            args: [key: StringType, offset: number];
            return: BitType;
        };
        'tr.getbits': {
            args: [key: StringType, offset: number, ...offsets: number[]];
            return: BitType[];
        };
        'tr.bitcount': {
            args: [key: StringType, ...Optional<[start: number, end: number]>];
            return: number;
        };
        'tr.bitpos': {
            args: [key: StringType, value: BitType, ...Optional<Shift<COUNT>>];
            return: number;
        };
        'tr.scan': {
            args: [key: StringType, startOffset: number, ...Optional<COUNT>];
            return: [number, number[]];
        };
        'tr.range': {
            args: [key: StringType, start: number, end: number];
            return: number[];
        };
        'tr.rangebitarray': {
            args: [key: StringType, start: number, end: number];
            return: string;
            returnBuffer: Buffer;
        };
        'tr.min': {
            args: [key: StringType];
            return: number;
        };
        'tr.max': {
            args: [key: StringType];
            return: number;
        };
        'tr.stat': {
            args: [key: StringType, ...Optional<JSON>];
            return: string;
            returnBuffer: Buffer;
        };
        'tr.jaccard': {
            args: [key1: StringType, key2: StringType];
            return: NumberType;
        };
        'tr.contains': {
            args: [key1: StringType, key2: StringType];
            return: BitType;
        };
        'tr.rank': {
            args: [key: StringType, offset: number];
            return: number;
        };
    },
    TContext
>;
