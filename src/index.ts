import { Redis, Cluster } from 'ioredis';
import { bloomCommands, BloomCommands } from './tairbloom';
import { cpcCommands, CpcCommands } from './taircpc';
import { docCommands, DocCommands } from './tairdoc';
import { gisCommands, GisCommands } from './tairgis';
import { hashCommands, HashCommands } from './tairhash';
import { roaringCommands, RoaringCommands } from './tairroaring';
import { searchCommands, SearchCommands } from './tairsearch';
import { stringCommands, StringCommands } from './tairstring';
import { tsCommands, TsCommands } from './tairts';
import { vectorCommands, VectorCommands } from './tairvector';
import { zsetCommands, ZsetCommands } from './tairzset';

export function tair<TClient extends Redis | Cluster>(client: TClient) {
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
        if (!client.addedBuiltinSet.has(command)) client.addBuiltinCommand(command);
    }
    return client;
}

declare module 'ioredis' {
    interface RedisCommander<Context>
        extends BloomCommands<Context>,
            CpcCommands<Context>,
            DocCommands<Context>,
            GisCommands<Context>,
            HashCommands<Context>,
            RoaringCommands<Context>,
            SearchCommands<Context>,
            StringCommands<Context>,
            TsCommands<Context>,
            VectorCommands<Context>,
            ZsetCommands<Context> {}
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
