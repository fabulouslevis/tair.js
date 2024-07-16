import {
    Command,
    Context,
    Format,
    Optional,
    StringType,
    OkType,
    COUNT,
    GEOM,
    SORT,
    WITHDIST,
    WITHOUTWKT,
    RADIUS,
    MEMBER,
} from './types';

export const gisCommands = [
    'gis.add',
    'gis.get',
    'gis.del',
    'gis.search',
    'gis.contains',
    'gis.within',
    'gis.intersects',
    'gis.getall',
];

export type GisAdd<TContext extends Context> = Command<
    [key: StringType, polygonName: StringType, polygonWktText: StringType],
    number,
    TContext
>;

export type GisGet<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: StringType, polygonName: StringType],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type GisDel<TContext extends Context> = Command<[key: StringType, polygonName: StringType], OkType, TContext>;

export type GisSearch<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [
        key: StringType,
        ...(RADIUS | MEMBER),
        ...Optional<GEOM>,
        ...Optional<COUNT>,
        ...Optional<SORT>,
        ...Optional<WITHDIST>,
        ...Optional<WITHOUTWKT>,
    ],
    TFormat extends 'buffer' ? [number, Buffer[]] : [number, string[]],
    TContext
>;

export type GisContains<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: StringType, polygonWkt: StringType, ...Optional<WITHOUTWKT>],
    TFormat extends 'buffer' ? [number, Buffer[]] : [number, string[]],
    TContext
>;

export type GisWithin<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: StringType, polygonWkt: StringType, ...Optional<WITHOUTWKT>],
    TFormat extends 'buffer' ? [number, Buffer[]] : [number, string[]],
    TContext
>;

export type GisIntersects<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: StringType, polygonWkt: StringType, ...Optional<WITHOUTWKT>],
    TFormat extends 'buffer' ? [number, Buffer[]] : [number, string[]],
    TContext
>;

export type GisGetAll<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: StringType, ...Optional<WITHOUTWKT>],
    TFormat extends 'buffer' ? Buffer[] : string[],
    TContext
>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['gis.add']: GisAdd<Context>;

        ['gis.get']: GisGet<Context>;
        ['gis.getBuffer']: GisGet<Context, 'buffer'>;

        ['gis.del']: GisDel<Context>;

        ['gis.search']: GisSearch<Context>;
        ['gis.searchBuffer']: GisSearch<Context, 'buffer'>;

        ['gis.contains']: GisContains<Context>;
        ['gis.containsBuffer']: GisContains<Context, 'buffer'>;

        ['gis.within']: GisWithin<Context>;
        ['gis.withinBuffer']: GisWithin<Context, 'buffer'>;

        ['gis.intersects']: GisIntersects<Context>;
        ['gis.intersectsBuffer']: GisIntersects<Context, 'buffer'>;

        ['gis.getall']: GisGetAll<Context>;
        ['gis.getallBuffer']: GisGetAll<Context, 'buffer'>;
    }
}
