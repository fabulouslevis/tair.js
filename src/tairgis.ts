import { Result, Callback } from 'ioredis';

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

export type GisAddArgs<T> = [
    key: string | Buffer,
    polygonName: string | Buffer,
    polygonWktText: string | Buffer,
    ...([callback: Callback<T>] | []),
];

export type GisGetArgs<T> = [key: string | Buffer, polygonName: string | Buffer, ...([callback: Callback<T>] | [])];

export type GisDelArgs<T> = [key: string | Buffer, polygonName: string | Buffer, ...([callback: Callback<T>] | [])];

export type GisSearchArgs<T> = [
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
    ...([callback: Callback<T>] | []),
];

export type GisContainsArgs<T> = [
    key: string | Buffer,
    polygonWkt: string | Buffer,
    ...(['WITHOUTWKT'] | []),
    ...([callback: Callback<T>] | []),
];

export type GisWithinArgs<T> = [
    key: string | Buffer,
    polygonWkt: string | Buffer,
    ...(['WITHOUTWKT'] | []),
    ...([callback: Callback<T>] | []),
];

export type GisIntersectsArgs<T> = [
    key: string | Buffer,
    polygonWkt: string | Buffer,
    ...(['WITHOUTWKT'] | []),
    ...([callback: Callback<T>] | []),
];

export type GisGetAllArgs<T> = [key: string | Buffer, ...(['WITHOUTWKT'] | []), ...([callback: Callback<T>] | [])];

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['gis.add'](...args: GisAddArgs<number>): Result<number, Context>;

        ['gis.get'](...args: GisGetArgs<string>): Result<string, Context>;
        ['gis.getBuffer'](...args: GisGetArgs<Buffer>): Result<Buffer, Context>;

        ['gis.del'](...args: GisDelArgs<'OK'>): Result<'OK', Context>;

        ['gis.search'](...args: GisSearchArgs<[number, string[]]>): Result<[number, string[]], Context>;
        ['gis.searchBuffer'](...args: GisSearchArgs<[number, Buffer[]]>): Result<[number, Buffer[]], Context>;

        ['gis.contains'](...args: GisContainsArgs<[number, string[]]>): Result<[number, string[]], Context>;
        ['gis.containsBuffer'](...args: GisContainsArgs<[number, Buffer[]]>): Result<[number, Buffer[]], Context>;

        ['gis.within'](...args: GisContainsArgs<[number, string[]]>): Result<[number, string[]], Context>;
        ['gis.withinBuffer'](...args: GisContainsArgs<[number, Buffer[]]>): Result<[number, Buffer[]], Context>;

        ['gis.intersects'](...args: GisIntersectsArgs<[number, string[]]>): Result<[number, string[]], Context>;
        ['gis.intersectsBuffer'](...args: GisIntersectsArgs<[number, Buffer[]]>): Result<[number, Buffer[]], Context>;

        ['gis.getall'](...args: GisGetAllArgs<string[]>): Result<string[], Context>;
        ['gis.getallBuffer'](...args: GisGetAllArgs<Buffer[]>): Result<Buffer[], Context>;
    }
}
