import { Redis } from 'ioredis';
import { bloomCommands } from './tairbloom';
import { cpcCommands } from './taircpc';
import { docCommands } from './tairdoc';
import { gisCommands } from './tairgis';
import { hashCommands } from './tairhash';
import { roaringCommands } from './tairroaring';
import { searchCommands } from './tairsearch';
import { stringCommands } from './tairstring';
import { tsCommands } from './tairts';
import { vectorCommands } from './tairvector';
import { zsetCommands } from './tairzset';

export function tair(redis: Redis) {
    const commands = [
        ...bloomCommands,
        ...cpcCommands,
        ...docCommands,
        ...gisCommands,
        ...hashCommands,
        ...roaringCommands,
        ...searchCommands,
        ...stringCommands,
        ...tsCommands,
        ...vectorCommands,
        ...zsetCommands,
    ];

    for (const command of commands) {
        if (!redis.addedBuiltinSet.has(command)) redis.addBuiltinCommand(command);
    }
    return redis;
}

export * from './tairbloom';
export * from './taircpc';
export * from './tairdoc';
export * from './tairgis';
export * from './tairhash';
export * from './tairroaring';
export * from './tairsearch';
export * from './tairstring';
export * from './tairts';
export * from './tairvector';
export * from './tairzset';
