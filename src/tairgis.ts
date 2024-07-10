import { Args, Return } from './types';

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

export type GisAddArgs<T> = Args<
    [key: string | Buffer, polygonName: string | Buffer, polygonWktText: string | Buffer],
    T
>;

export type GisGetArgs<T> = Args<[key: string | Buffer, polygonName: string | Buffer], T>;

export type GisDelArgs<T> = Args<[key: string | Buffer, polygonName: string | Buffer], T>;

export type GisSearchArgs<T> = Args<
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
    T
>;

export type GisContainsArgs<T> = Args<[key: string | Buffer, polygonWkt: string | Buffer, ...(['WITHOUTWKT'] | [])], T>;

export type GisWithinArgs<T> = Args<[key: string | Buffer, polygonWkt: string | Buffer, ...(['WITHOUTWKT'] | [])], T>;

export type GisIntersectsArgs<T> = Args<
    [key: string | Buffer, polygonWkt: string | Buffer, ...(['WITHOUTWKT'] | [])],
    T
>;

export type GisGetAllArgs<T> = Args<[key: string | Buffer, ...(['WITHOUTWKT'] | [])], T>;

declare module 'ioredis' {
    interface RedisCommander<Context> {
        ['gis.add'](...args: GisAddArgs<number>): Return<number, Context>;

        ['gis.get'](...args: GisGetArgs<string>): Return<string, Context>;
        ['gis.getBuffer'](...args: GisGetArgs<Buffer>): Return<Buffer, Context>;

        ['gis.del'](...args: GisDelArgs<'OK'>): Return<'OK', Context>;

        ['gis.search'](...args: GisSearchArgs<[number, string[]]>): Return<[number, string[]], Context>;
        ['gis.searchBuffer'](...args: GisSearchArgs<[number, Buffer[]]>): Return<[number, Buffer[]], Context>;

        ['gis.contains'](...args: GisContainsArgs<[number, string[]]>): Return<[number, string[]], Context>;
        ['gis.containsBuffer'](...args: GisContainsArgs<[number, Buffer[]]>): Return<[number, Buffer[]], Context>;

        ['gis.within'](...args: GisContainsArgs<[number, string[]]>): Return<[number, string[]], Context>;
        ['gis.withinBuffer'](...args: GisContainsArgs<[number, Buffer[]]>): Return<[number, Buffer[]], Context>;

        ['gis.intersects'](...args: GisIntersectsArgs<[number, string[]]>): Return<[number, string[]], Context>;
        ['gis.intersectsBuffer'](...args: GisIntersectsArgs<[number, Buffer[]]>): Return<[number, Buffer[]], Context>;

        ['gis.getall'](...args: GisGetAllArgs<string[]>): Return<string[], Context>;
        ['gis.getallBuffer'](...args: GisGetAllArgs<Buffer[]>): Return<Buffer[], Context>;
    }
}
