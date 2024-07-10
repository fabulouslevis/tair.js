import { Args, Return } from './types';

export const tsCommands = [
    'exts.p.create',
    'exts.s.create',
    'exts.s.alter',
    'exts.s.add',
    'exts.s.madd',
    'exts.s.incrby',
    'exts.s.mincrby',
    'exts.s.del',
    'exts.s.get',
    'exts.s.info',
    'exts.s.queryindex',
    'exts.s.range',
    'exts.s.range.keys',
    'exts.s.mrange',
    'exts.p.range',
    'exts.s.raw_modify',
    'exts.s.raw_mmodify',
    'exts.s.raw_incrby',
    'exts.s.raw_mincrby',
];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
