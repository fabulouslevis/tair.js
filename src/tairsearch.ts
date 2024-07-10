import { Args, Return } from './types';

export const searchCommands = [
    'tft.mappingindex',
    'tft.createindex',
    'tft.updateindex',
    'tft.adddoc',
    'tft.madddoc',
    'tft.updatedoc',
    'tft.updatedocfield',
    'tft.deldoc',
    'tft.delall',
    'tft.getindex',
    'tft.getdoc',
    'tft.search',
    'tft.msearch',
    'tft.exists',
    'tft.scandocid',
    'tft.docnum',
    'tft.incrlongdocfield',
    'tft.incrfloatdocfield',
    'tft.deldocfield',
    'tft.analyzer',
    'tft.explaincost',
    'tft.explainscore',
    'tft.addsug',
    'tft.delsug',
    'tft.sugnum',
    'tft.getsug',
    'tft.getallsugs',
];

declare module 'ioredis' {
    interface RedisCommander<Context> {}
}
