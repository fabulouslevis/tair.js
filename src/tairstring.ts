import {
    Commands,
    Context,
    Optional,
    StringType,
    OkType,
    NumberType,
    EXPIRY,
    LOCK,
    VERSION,
    KEEPTTL,
    MIN,
    MAX,
} from './types';

export const stringCommands = [
    'exset',
    'exget',
    'exsetver',
    'exincrby',
    'exincrbyfloat',
    'excas',
    'excad',
    'exappend',
    'exprepend',
    'exgae',
];

export type StringCommands<TContext extends Context> = Commands<
    {
        exset: {
            args: [
                key: StringType,
                value: StringType,
                ...(
                    | [...Optional<EXPIRY>, ...Optional<LOCK>, ...Optional<VERSION>]
                    | [...Optional<LOCK>, ...Optional<VERSION>, ...Optional<KEEPTTL>]
                ),
            ];
            return: OkType;
        };
        exget: {
            args: [key: StringType];
            return: [string, number];
            returnBuffer: [Buffer, number];
        };
        exsetver: {
            args: [key: StringType, version: number];
            return: number;
        };
        exincrby: {
            args: [
                key: StringType,
                num: number,
                ...(
                    | [...Optional<EXPIRY>, ...Optional<LOCK>, ...Optional<VERSION>, ...Optional<MIN>, ...Optional<MAX>]
                    | [
                          ...Optional<LOCK>,
                          ...Optional<VERSION>,
                          ...Optional<MIN>,
                          ...Optional<MAX>,
                          ...Optional<KEEPTTL>,
                      ]
                ),
            ];
            return: number;
        };
        exincrbyfloat: {
            args: [
                key: StringType,
                num: number,
                ...(
                    | [...Optional<EXPIRY>, ...Optional<LOCK>, ...Optional<VERSION>, ...Optional<MIN>, ...Optional<MAX>]
                    | [
                          ...Optional<LOCK>,
                          ...Optional<VERSION>,
                          ...Optional<MIN>,
                          ...Optional<MAX>,
                          ...Optional<KEEPTTL>,
                      ]
                ),
            ];
            return: NumberType;
        };
        excas: {
            args: [key: StringType, newvalue: StringType, version: number];
            return: [OkType, string, number];
            returnBuffer: [Buffer, Buffer, number];
        };
        excad: {
            args: [key: StringType, version: number];
            return: number;
        };
        exappend: {
            args: [key: StringType, value: StringType, ...LOCK, ...VERSION];
            return: number;
        };
        exprepend: {
            args: [key: StringType, value: StringType, ...LOCK, ...VERSION];
            return: number;
        };
        exgae: {
            args: [key: StringType, ...EXPIRY];
            return: [string, number, number];
            returnBuffer: [Buffer, number, number];
        };
    },
    TContext
>;
