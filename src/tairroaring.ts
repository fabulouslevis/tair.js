import { Result, Callback } from 'ioredis';

export const roaringCommands = [
    'tr.setbit',
    'tr.setbits',
    'tr.getbit',
    'tr.getbits',
    'tr.clearbits',
    'tr.range',
    'tr.setrange',
    'tr.rangebitarray',
    'tr.appendbitarray',
    'tr.fliprange',
    'tr.bitop',
    'tr.bitopcard',
    'tr.bitcount',
    'tr.scan',
    'tr.bitpos',
    'tr.min',
    'tr.max',
    'tr.load',
    'tr.stat',
    'tr.optimize',
    'tr.loadstring',
    'tr.appendintarray',
    'tr.setintarray',
    'tr.setbitarray',
    'tr.diff',
    'tr.jaccard',
    'tr.contains',
    'tr.rank',
];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
