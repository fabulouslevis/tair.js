import { ClientContext, Result, Callback } from 'ioredis';

export type Optional<TArgs extends any[]> = TArgs | [];

export type Shift<TArgs extends any[]> = TArgs extends [any, ...infer TOtherArgs] ? TOtherArgs : TArgs;

export type Pop<TArgs extends any[]> = TArgs extends [...infer TOtherArgs, any] ? TOtherArgs : TArgs;

export type Context = ClientContext;

export type CommandType = 'default' | 'buffer';

export type CommandTypeTuple = ['default', 'buffer'];

export type MarkCommandType<TName extends string, TCommandType extends CommandType> = TCommandType extends 'default'
    ? `${TName}`
    : `${TName}${Capitalize<TCommandType>}`;

export type CommandArgsDefine = {
    args: any[];
};

export type CommandReturnDefine<TCommandType extends CommandType> = Record<
    MarkCommandType<'return', TCommandType>,
    any
>;

export type CommandDefine = CommandArgsDefine & Partial<CommandReturnDefine<CommandType>>;

export type CommandMeta = [any[], any];

export type BuildCommandMeta<
    TCommandDefine extends CommandDefine,
    TCommandType extends CommandType,
> = TCommandDefine extends CommandArgsDefine & CommandReturnDefine<TCommandType>
    ? [TCommandDefine['args'], TCommandDefine[MarkCommandType<'return', TCommandType>]]
    : never;

export type BuildCommandMetaTuple<
    TCommandDefineValue extends CommandDefine | CommandDefine[],
    TCommandType extends CommandType,
> = TCommandDefineValue extends CommandDefine
    ? BuildCommandMeta<TCommandDefineValue, TCommandType> extends never
    ? []
    : [BuildCommandMeta<TCommandDefineValue, TCommandType>]
    : TCommandDefineValue extends [CommandDefine, ...infer TCommandDefineTuple]
    ? [
        ...BuildCommandMetaTuple<TCommandDefineValue[0], TCommandType>,
        ...(TCommandDefineTuple extends CommandDefine[]
            ? BuildCommandMetaTuple<TCommandDefineTuple, TCommandType>
            : []),
    ]
    : [];

export type BuildCommand<TCommandMeta extends CommandMeta, TContext extends Context> = (
    ...args: [...TCommandMeta[0], ...Optional<[callback: Callback<TCommandMeta[1]>]>]
) => Result<TCommandMeta[1], TContext>;

export type BuildCommandCombine<
    TCommandMetaTuple extends CommandMeta[],
    TContext extends Context,
> = TCommandMetaTuple extends [CommandMeta, ...infer TOtherCommandMetaTuple]
    ? TOtherCommandMetaTuple extends [CommandMeta, ...CommandMeta[]]
    ? BuildCommand<TCommandMetaTuple[0], TContext> & BuildCommandCombine<TOtherCommandMetaTuple, TContext>
    : BuildCommand<TCommandMetaTuple[0], TContext>
    : never;

export type AssembleCommands<
    TCommandType extends CommandType,
    TCommandDefineValueRecord extends Record<string, CommandDefine | CommandDefine[]>,
    TContext extends Context,
> = {
        [method in keyof TCommandDefineValueRecord & string as BuildCommandCombine<
            BuildCommandMetaTuple<TCommandDefineValueRecord[method], TCommandType>,
            TContext
        > extends never
        ? never
        : MarkCommandType<method, TCommandType>]: BuildCommandCombine<
            BuildCommandMetaTuple<TCommandDefineValueRecord[method], TCommandType>,
            TContext
        >;
    };

export type AssembleCommandsCombine<
    TCommandTypeTuple extends CommandType[],
    TCommandDefineValueRecord extends Record<string, CommandDefine | CommandDefine[]>,
    TContext extends Context,
> = TCommandTypeTuple extends [CommandType, ...infer TOtherCommandTypeTuple]
    ? TOtherCommandTypeTuple extends [CommandType, ...CommandType[]]
    ? AssembleCommands<TCommandTypeTuple[0], TCommandDefineValueRecord, TContext> &
    AssembleCommandsCombine<TOtherCommandTypeTuple, TCommandDefineValueRecord, TContext>
    : AssembleCommands<TCommandTypeTuple[0], TCommandDefineValueRecord, TContext>
    : never;

export type Commands<
    TCommandDefineValueRecord extends Record<string, CommandDefine | CommandDefine[]>,
    TContext extends Context,
> = AssembleCommandsCombine<CommandTypeTuple, TCommandDefineValueRecord, TContext>;

export type StringType = string | Buffer;

export type NumberType = `${number}`;

export type BitType = 0 | 1;

export type OkType = 'OK';

export type CAPACITY = [capacityToken: 'CAPACITY', capacity: number];

export type ERROR = [errorToken: 'ERROR', errorRate: number];

export type NOCREATE = [nocreateToken: 'NOCREATE'];

export type SIZE = [sizeToken: 'SIZE', size: number];

export type WIN = [winToken: 'WIN', windowLength: number];

export type FORMAT = [formatToken: 'FORMAT', format: 'XML' | 'YAML'];

export type ROOTNAME = [rootnameToken: 'ROOTNAME', root: StringType];

export type ARRNAME = [arrnameToken: 'ARRNAME', arr: StringType];

export type WITHOUTWKT = [withoutwktToken: 'WITHOUTWKT'];

export type WITHDIST = [withdistToken: 'WITHDIST'];

export type GEOM = [geomToken: 'GEOM', geom: StringType];

export type COUNT = [countToken: 'COUNT', count: number];

export type RADIUS = [
    radiusToken: 'RADIUS',
    longitude: number,
    latitude: number,
    distance: number,
    unit: 'M' | 'KM' | 'FT' | 'MI',
];

export type MEMBER = [memberToken: 'MEMBER', field: StringType, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type KEEPTTL = [keepttlToken: 'KEEPTTL'];

export type MIN = [minToken: 'MIN', minval: number];

export type MAX = [maxToken: 'MAX', maxval: number];

export type ITEMS = [itemsToken: 'ITEMS', item: StringType, ...items: StringType[]];

export type NOEXP = [noexpToken: 'NOEXP'];

export type MATCH = [matchToken: 'MATCH', pattern: StringType];

export type CH = [chToken: 'CH'];

export type INCR = [incrToken: 'INCR'];

export type WITHSCORES = [withscoresToken: 'WITHSCORES'];

export type LIMIT = [limitToken: 'LIMIT', offset: number, count: number];

export type WITH_ID = [withIdToken: 'WITH_ID', docId: StringType];

export type INDEX = [indexToken: 'INDEX', indexName: StringType];

export type SHOW_TIME = [showTimeToken: 'SHOW_TIME'];

export type MAX_COUNT = [maxCountToken: 'MAX_COUNT', count: number];

export type FUZZY = [fuzzyToken: 'FUZZY'];

export type JSON = [jsonToken: 'JSON'];

export type DATA_ET = [dataEtToken: 'DATA_ET', time: number];

export type CHUNK_SIZE = [chunkSizeToken: 'CHUNK_SIZE', size: number];

export type UNCOMPRESSED = [uncompressedToken: 'UNCOMPRESSED'];

export type LABELS = [labelsToken: 'LABELS', label: StringType, val: StringType, ...labelVals: StringType[]];

export type MAXCOUNT = [maxcountToken: 'MAXCOUNT', count: number];

export type VECTOR = [vectorToken: 'VECTOR', vector: StringType];

export type MAX_DIST = [maxDistToken: 'MAX_DIST', maxDistance: number];

export type TOPN = [topNToken: 'TOPN', topN: number];

export type AGGREGATION = [
    aggregationToken: 'AGGREGATION',
    aggregationType:
    | 'MAX'
    | 'MIN'
    | 'AVG'
    | 'SUM'
    | 'FIRST'
    | 'LAST'
    | 'RANGE'
    | 'COUNT'
    | 'STD.P'
    | 'STD.S'
    | 'VAR.P'
    | 'VAR.S',
    timeBucket: number,
];

export type FILTER = [filterToken: 'FILTER', filter: StringType, ...filters: StringType[]];

export type WITHLABELS = [withlabelsToken: 'WITHLABELS'];

export type VERSION = [versionToken: 'VER' | 'ABS', version: number];
export type EXPIRY = [expiryToken: 'EX' | 'EXAT' | 'PX' | 'PXAT', time: number];
export type LOCK = [lockToken: 'NX' | 'XX'];
export type SORT = [sortToken: 'ASC' | 'DESC'];
