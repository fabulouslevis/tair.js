import { Commands, Context, Optional, StringType, OkType, NumberType, FORMAT, ROOTNAME, ARRNAME, LOCK } from './types';

export const docCommands = [
    'json.del',
    'json.get',
    'json.mget',
    'json.set',
    'json.type',
    'json.numincrby',
    'json.strappend',
    'json.strlen',
    'json.arrappend',
    'json.arrpop',
    'json.arrinsert',
    'json.arrlen',
    'json.arrtrim',
];

export type DocCommands<TContext extends Context> = Commands<
    {
        'json.del': {
            args: [key: StringType, ...Optional<[path: StringType]>];
            return: number;
        };
        'json.get': {
            args: [
                key: StringType,
                ...Optional<[path: StringType, ...Optional<FORMAT>, ...Optional<ROOTNAME>, ...Optional<ARRNAME>]>,
            ];
            return: string;
            returnBuffer: Buffer;
        };
        'json.mget': {
            args: [key: StringType, ...keys: StringType[], path: StringType];
            return: string[];
            returnBuffer: Buffer[];
        };
        'json.set': {
            args: [key: StringType, path: StringType, json: StringType, ...Optional<LOCK>];
            return: OkType;
        };
        'json.type': {
            args: [key: StringType, ...Optional<[path: StringType]>];
            return: string;
            returnBuffer: Buffer;
        };
        'json.numincrby': {
            args: [key: StringType, ...Optional<[path: StringType]>, value: number];
            return: NumberType;
        };
        'json.strappend': {
            args: [key: StringType, ...Optional<[path: StringType]>, json: StringType];
            return: number;
        };
        'json.strlen': {
            args: [key: StringType, ...Optional<[path: StringType]>];
            return: number;
        };
        'json.arrappend': {
            args: [key: StringType, path: StringType, json: StringType, ...jsons: StringType[]];
            return: number;
        };
        'json.arrpop': {
            args: [key: StringType, path: StringType, ...Optional<[index: number]>];
            return: number;
        };
        'json.arrinsert': {
            args: [key: StringType, path: StringType, index: number, json: StringType, ...jsons: StringType[]];
            return: number;
        };
        'json.arrlen': {
            args: [key: StringType, ...Optional<[path: StringType]>];
            return: number;
        };
        'json.arrtrim': {
            args: [key: StringType, path: StringType, start: number, stop: number];
            return: number;
        };
    },
    TContext
>;
