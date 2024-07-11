import { Command, Context, Format } from './types';

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
    [key: string | Buffer, polygonName: string | Buffer, polygonWktText: string | Buffer],
    number,
    TContext
>;

export type GisGet<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, polygonName: string | Buffer],
    TFormat extends 'buffer' ? Buffer : string,
    TContext
>;

export type GisDel<TContext extends Context> = Command<
    [key: string | Buffer, polygonName: string | Buffer],
    'OK',
    TContext
>;

export type GisSearch<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [
        key: string | Buffer,
        ...(
            | ['RADIUS', longitude: number, latitude: number, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI']
            | ['MEMBER', field: string, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI']
        ),
        ...(['GEOM', geom: string] | []),
        ...(['COUNT', count: number] | []),
        ...(['ASC' | 'DESC'] | []),
        ...(['WITHDIST'] | []),
        ...(['WITHOUTWKT'] | []),
    ],
    TFormat extends 'buffer' ? [number, Buffer[]] : [number, string[]],
    TContext
>;

export type GisContains<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, polygonWkt: string | Buffer, ...(['WITHOUTWKT'] | [])],
    TFormat extends 'buffer' ? [number, Buffer[]] : [number, string[]],
    TContext
>;

export type GisWithin<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, polygonWkt: string | Buffer, ...(['WITHOUTWKT'] | [])],
    TFormat extends 'buffer' ? [number, Buffer[]] : [number, string[]],
    TContext
>;

export type GisIntersects<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, polygonWkt: string | Buffer, ...(['WITHOUTWKT'] | [])],
    TFormat extends 'buffer' ? [number, Buffer[]] : [number, string[]],
    TContext
>;

export type GisGetAll<TContext extends Context, TFormat extends Format = 'default'> = Command<
    [key: string | Buffer, ...(['WITHOUTWKT'] | [])],
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
