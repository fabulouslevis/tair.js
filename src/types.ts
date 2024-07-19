import { ClientContext, Result, Callback } from 'ioredis';

export type Optional<TArgs extends any[]> = TArgs | [];

export type Shift<TArgs extends any[]> = TArgs extends [any, ...infer TOtherArgs] ? TOtherArgs : TArgs;

export type Pop<TArgs extends any[]> = TArgs extends [...infer TOtherArgs, any] ? TOtherArgs : TArgs;

export type Context = ClientContext;

export type CommandMeta = [any[], any];

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

export type BuildCommandMeta<
    TCommandDefine extends CommandDefine,
    TCommandType extends CommandType,
> = TCommandDefine extends CommandArgsDefine & CommandReturnDefine<TCommandType>
    ? [TCommandDefine['args'], TCommandDefine[MarkCommandType<'return', TCommandType>]]
    : never;

export type BuildCommandMetaTuple<
    TCommandDefineTuple extends CommandDefine[],
    TCommandType extends CommandType,
> = TCommandDefineTuple extends [CommandDefine, ...infer TOtherCommandDefineTuple]
    ? BuildCommandMeta<TCommandDefineTuple[0], TCommandType> extends never
        ? TOtherCommandDefineTuple extends CommandDefine[]
            ? BuildCommandMetaTuple<TOtherCommandDefineTuple, TCommandType>
            : []
        : [
              BuildCommandMeta<TCommandDefineTuple[0], TCommandType>,
              ...(TOtherCommandDefineTuple extends CommandDefine[]
                  ? BuildCommandMetaTuple<TOtherCommandDefineTuple, TCommandType>
                  : []),
          ]
    : [];

export type BuildCommand<TCommandMeta extends CommandMeta, TContext extends Context> = (
    ...args: [...TCommandMeta[0], ...Optional<[callback: Callback<TCommandMeta[1]>]>]
) => Result<TCommandMeta[1], TContext>;

export type BuildCommandTuple<
    TCommandMetaTuple extends CommandMeta[],
    TContext extends Context,
> = TCommandMetaTuple extends [CommandMeta, ...infer TOtherCommandMetaTuple]
    ? TOtherCommandMetaTuple extends [CommandMeta, ...CommandMeta[]]
        ? BuildCommand<TCommandMetaTuple[0], TContext> & BuildCommandTuple<TOtherCommandMetaTuple, TContext>
        : BuildCommand<TCommandMetaTuple[0], TContext>
    : never;

export type Command<
    TCommandDefineValue extends CommandDefine | CommandDefine[],
    TCommandType extends CommandType,
    TContext extends Context,
> = TCommandDefineValue extends CommandDefine[]
    ? BuildCommandTuple<BuildCommandMetaTuple<TCommandDefineValue, TCommandType>, TContext>
    : TCommandDefineValue extends CommandDefine
      ? BuildCommandTuple<BuildCommandMetaTuple<[TCommandDefineValue], TCommandType>, TContext>
      : never;

export type CommandRecord<
    TCommandDefineValueRecord extends Record<string, CommandDefine | CommandDefine[]>,
    TCommandType extends CommandType,
    TContext extends Context,
> = {
    [method in keyof TCommandDefineValueRecord & string as Command<
        TCommandDefineValueRecord[method],
        TCommandType,
        TContext
    > extends never
        ? never
        : MarkCommandType<method, TCommandType>]: Command<TCommandDefineValueRecord[method], TCommandType, TContext>;
};

export type CommandRecordTuple<
    TCommandDefineValueRecord extends Record<string, CommandDefine | CommandDefine[]>,
    TCommandTypeTuple extends CommandType[],
    TContext extends Context,
> = TCommandTypeTuple extends [CommandType, ...infer TOtherCommandTypeTuple]
    ? TOtherCommandTypeTuple extends [CommandType, ...CommandType[]]
        ? CommandRecord<TCommandDefineValueRecord, TCommandTypeTuple[0], TContext> &
              CommandRecordTuple<TCommandDefineValueRecord, TOtherCommandTypeTuple, TContext>
        : CommandRecord<TCommandDefineValueRecord, TCommandTypeTuple[0], TContext>
    : never;

export type Commands<
    TCommandDefineValueRecord extends Record<string, CommandDefine | CommandDefine[]>,
    TContext extends Context,
> = CommandRecordTuple<TCommandDefineValueRecord, CommandTypeTuple, TContext>;

export type StringType = string | Buffer;

export type NumberType = `${number}`;

export type BitType = 0 | 1;

export type OkType = 'OK';

export type CAPACITY = ['CAPACITY', capacity: number];

export type ERROR = ['ERROR', errorRate: number];

export type NOCREATE = ['NOCREATE'];

export type SIZE = ['SIZE', size: number];

export type WIN = ['WIN', windowLength: number];

export type FORMAT = ['FORMAT', 'XML' | 'YAML'];

export type ROOTNAME = ['ROOTNAME', root: StringType];

export type ARRNAME = ['ARRNAME', arr: StringType];

export type WITHOUTWKT = ['WITHOUTWKT'];

export type WITHDIST = ['WITHDIST'];

export type GEOM = ['GEOM', geom: StringType];

export type COUNT = ['COUNT', count: number];

export type RADIUS = ['RADIUS', longitude: number, latitude: number, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type MEMBER = ['MEMBER', field: StringType, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type KEEPTTL = ['KEEPTTL'];

export type MIN = ['MIN', minval: number];

export type MAX = ['MAX', maxval: number];

export type ITEMS = ['ITEMS', item: StringType, ...items: StringType[]];

export type NOEXP = ['NOEXP'];

export type MATCH = ['MATCH', pattern: StringType];

export type CH = ['CH'];

export type INCR = ['INCR'];

export type WITHSCORES = ['WITHSCORES'];

export type LIMIT = ['LIMIT', offset: number, count: number];

export type WITH_ID = ['WITH_ID', docId: StringType];

export type INDEX = ['INDEX', indexName: StringType];

export type SHOW_TIME = ['SHOW_TIME'];

export type MAX_COUNT = ['MAX_COUNT', count: number];

export type FUZZY = ['FUZZY'];

export type JSON = ['JSON'];

export type DATA_ET = ['DATA_ET', time: number];

export type CHUNK_SIZE = ['CHUNK_SIZE', size: number];

export type UNCOMPRESSED = ['UNCOMPRESSED'];

export type LABELS = ['LABELS', label: StringType, val: StringType, ...labelVals: StringType[]];

export type MAXCOUNT = ['MAXCOUNT', count: number];

export type VECTOR = ['VECTOR', vector: StringType];

export type MAX_DIST = ['MAX_DIST', maxDistance: number];

export type TOPN = ['TOPN', topN: number];

export type AGGREGATION = [
    'AGGREGATION',
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

export type FILTER = ['FILTER', filter: StringType, ...filters: StringType[]];

export type WITHLABELS = ['WITHLABELS'];

export type VERSION = ['VER' | 'ABS', version: number];
export type EXPIRY = ['EX' | 'EXAT' | 'PX' | 'PXAT', time: number];
export type LOCK = ['NX' | 'XX'];
export type SORT = ['ASC' | 'DESC'];
