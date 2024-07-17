import { Commands, Context, Optional, Shift, StringType, OkType, CAPACITY, ERROR, NOCREATE, ITEMS } from './types';

export const bloomCommands = ['bf.add', 'bf.madd', 'bf.exists', 'bf.mexists', 'bf.insert', 'bf.reserve', 'bf.info'];

export type BloomCommands<TContext extends Context> = Commands<
    {
        'bf.add': {
            args: [key: StringType, item: StringType];
            return: number;
        };
        'bf.madd': {
            args: [key: StringType, ...Shift<ITEMS>];
            return: number[];
        };
        'bf.exists': {
            args: [key: StringType, item: StringType];
            return: number;
        };
        'bf.mexists': {
            args: [key: StringType, ...Shift<ITEMS>];
            return: number[];
        };
        'bf.insert': {
            args: [key: StringType, ...([...Optional<CAPACITY>, ...Optional<ERROR>] | NOCREATE), ...ITEMS];
            return: number[];
        };
        'bf.reserve': {
            args: [key: StringType, ...Shift<ERROR>, ...Shift<CAPACITY>];
            return: OkType;
        };
        'bf.info': {
            args: [key: StringType];
            return: string[];
            returnBuffer: Buffer[];
        };
    },
    TContext
>;
