import {
    Commands,
    Context,
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

export type GisCommands<TContext extends Context> = Commands<
    {
        'gis.add': {
            args: [key: StringType, polygonName: StringType, polygonWktText: StringType];
            return: number;
        };
        'gis.get': {
            args: [key: StringType, polygonName: StringType];
            return: string;
            returnBuffer: Buffer;
        };
        'gis.del': {
            args: [key: StringType, polygonName: StringType];
            return: OkType;
        };
        'gis.search': {
            args: [
                key: StringType,
                ...(RADIUS | MEMBER),
                ...Optional<GEOM>,
                ...Optional<COUNT>,
                ...Optional<SORT>,
                ...Optional<WITHDIST>,
                ...Optional<WITHOUTWKT>,
            ];
            return: [number, string[]];
            returnBuffer: [number, Buffer[]];
        };
        'gis.contains': {
            args: [key: StringType, polygonWkt: StringType, ...Optional<WITHOUTWKT>];
            return: [number, string[]];
            returnBuffer: [number, Buffer[]];
        };
        'gis.within': {
            args: [key: StringType, polygonWkt: StringType, ...Optional<WITHOUTWKT>];
            return: [number, string[]];
            returnBuffer: [number, Buffer[]];
        };
        'gis.intersects': {
            args: [key: StringType, polygonWkt: StringType, ...Optional<WITHOUTWKT>];
            return: [number, string[]];
            returnBuffer: [number, Buffer[]];
        };
        'gis.getall': {
            args: [key: StringType, ...Optional<WITHOUTWKT>];
            return: string[];
            returnBuffer: Buffer[];
        };
    },
    TContext
>;
