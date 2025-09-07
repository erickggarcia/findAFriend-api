
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Ong
 * 
 */
export type Ong = $Result.DefaultSelection<Prisma.$OngPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pets
 * const pets = await prisma.pet.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pets
   * const pets = await prisma.pet.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs>;

  /**
   * `prisma.ong`: Exposes CRUD operations for the **Ong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ongs
    * const ongs = await prisma.ong.findMany()
    * ```
    */
  get ong(): Prisma.OngDelegate<ExtArgs>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pet: 'Pet',
    Ong: 'Ong',
    City: 'City',
    State: 'State'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'pet' | 'ong' | 'city' | 'state'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>,
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Ong: {
        payload: Prisma.$OngPayload<ExtArgs>
        fields: Prisma.OngFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OngFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OngFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          findFirst: {
            args: Prisma.OngFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OngFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          findMany: {
            args: Prisma.OngFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          create: {
            args: Prisma.OngCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          createMany: {
            args: Prisma.OngCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OngCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          delete: {
            args: Prisma.OngDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          update: {
            args: Prisma.OngUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          deleteMany: {
            args: Prisma.OngDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OngUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OngUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          aggregate: {
            args: Prisma.OngAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOng>
          }
          groupBy: {
            args: Prisma.OngGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OngGroupByOutputType>[]
          }
          count: {
            args: Prisma.OngCountArgs<ExtArgs>,
            result: $Utils.Optional<OngCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>,
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>,
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OngCountOutputType
   */

  export type OngCountOutputType = {
    Pets: number
  }

  export type OngCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pets?: boolean | OngCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * OngCountOutputType without action
   */
  export type OngCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngCountOutputType
     */
    select?: OngCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OngCountOutputType without action
   */
  export type OngCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    Ongs: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ongs?: boolean | CityCountOutputTypeCountOngsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountOngsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OngWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    city: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | StateCountOutputTypeCountCityArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    age: number | null
  }

  export type PetSumAggregateOutputType = {
    age: number | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    photoUrl: string | null
    name: string | null
    breed: string | null
    color: string | null
    age: number | null
    size: string | null
    details: string | null
    created_at: Date | null
    updated_at: Date | null
    ongId: string | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    photoUrl: string | null
    name: string | null
    breed: string | null
    color: string | null
    age: number | null
    size: string | null
    details: string | null
    created_at: Date | null
    updated_at: Date | null
    ongId: string | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    photoUrl: number
    name: number
    breed: number
    color: number
    age: number
    size: number
    details: number
    created_at: number
    updated_at: number
    ongId: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    age?: true
  }

  export type PetSumAggregateInputType = {
    age?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    photoUrl?: true
    name?: true
    breed?: true
    color?: true
    age?: true
    size?: true
    details?: true
    created_at?: true
    updated_at?: true
    ongId?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    photoUrl?: true
    name?: true
    breed?: true
    color?: true
    age?: true
    size?: true
    details?: true
    created_at?: true
    updated_at?: true
    ongId?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    photoUrl?: true
    name?: true
    breed?: true
    color?: true
    age?: true
    size?: true
    details?: true
    created_at?: true
    updated_at?: true
    ongId?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    photoUrl: string
    name: string
    breed: string
    color: string
    age: number
    size: string
    details: string
    created_at: Date
    updated_at: Date
    ongId: string
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    name?: boolean
    breed?: boolean
    color?: boolean
    age?: boolean
    size?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    ongId?: boolean
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    name?: boolean
    breed?: boolean
    color?: boolean
    age?: boolean
    size?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    ongId?: boolean
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    photoUrl?: boolean
    name?: boolean
    breed?: boolean
    color?: boolean
    age?: boolean
    size?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    ongId?: boolean
  }

  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      ong: Prisma.$OngPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      photoUrl: string
      name: string
      breed: string
      color: string
      age: number
      size: string
      details: string
      created_at: Date
      updated_at: Date
      ongId: string
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>
    ): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>
    ): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
    **/
    create<T extends PetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PetCreateArgs<ExtArgs>>
    ): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PetCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
    **/
    delete<T extends PetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PetDeleteArgs<ExtArgs>>
    ): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PetUpdateArgs<ExtArgs>>
    ): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
    **/
    upsert<T extends PetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PetUpsertArgs<ExtArgs>>
    ): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ong<T extends OngDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OngDefaultArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pet model
   */ 
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly photoUrl: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly color: FieldRef<"Pet", 'String'>
    readonly age: FieldRef<"Pet", 'Int'>
    readonly size: FieldRef<"Pet", 'String'>
    readonly details: FieldRef<"Pet", 'String'>
    readonly created_at: FieldRef<"Pet", 'DateTime'>
    readonly updated_at: FieldRef<"Pet", 'DateTime'>
    readonly ongId: FieldRef<"Pet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Ong
   */

  export type AggregateOng = {
    _count: OngCountAggregateOutputType | null
    _min: OngMinAggregateOutputType | null
    _max: OngMaxAggregateOutputType | null
  }

  export type OngMinAggregateOutputType = {
    id: string | null
    photoUrl: string | null
    name: string | null
    socialReason: string | null
    cnpj: string | null
    whatsapp: string | null
    email: string | null
    password_hash: string | null
    address: string | null
    zipcode: string | null
    created_at: Date | null
    updated_at: Date | null
    role: $Enums.Role | null
    cityId: string | null
  }

  export type OngMaxAggregateOutputType = {
    id: string | null
    photoUrl: string | null
    name: string | null
    socialReason: string | null
    cnpj: string | null
    whatsapp: string | null
    email: string | null
    password_hash: string | null
    address: string | null
    zipcode: string | null
    created_at: Date | null
    updated_at: Date | null
    role: $Enums.Role | null
    cityId: string | null
  }

  export type OngCountAggregateOutputType = {
    id: number
    photoUrl: number
    name: number
    socialReason: number
    cnpj: number
    whatsapp: number
    email: number
    password_hash: number
    address: number
    zipcode: number
    created_at: number
    updated_at: number
    role: number
    cityId: number
    _all: number
  }


  export type OngMinAggregateInputType = {
    id?: true
    photoUrl?: true
    name?: true
    socialReason?: true
    cnpj?: true
    whatsapp?: true
    email?: true
    password_hash?: true
    address?: true
    zipcode?: true
    created_at?: true
    updated_at?: true
    role?: true
    cityId?: true
  }

  export type OngMaxAggregateInputType = {
    id?: true
    photoUrl?: true
    name?: true
    socialReason?: true
    cnpj?: true
    whatsapp?: true
    email?: true
    password_hash?: true
    address?: true
    zipcode?: true
    created_at?: true
    updated_at?: true
    role?: true
    cityId?: true
  }

  export type OngCountAggregateInputType = {
    id?: true
    photoUrl?: true
    name?: true
    socialReason?: true
    cnpj?: true
    whatsapp?: true
    email?: true
    password_hash?: true
    address?: true
    zipcode?: true
    created_at?: true
    updated_at?: true
    role?: true
    cityId?: true
    _all?: true
  }

  export type OngAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ong to aggregate.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ongs
    **/
    _count?: true | OngCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OngMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OngMaxAggregateInputType
  }

  export type GetOngAggregateType<T extends OngAggregateArgs> = {
        [P in keyof T & keyof AggregateOng]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOng[P]>
      : GetScalarType<T[P], AggregateOng[P]>
  }




  export type OngGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OngWhereInput
    orderBy?: OngOrderByWithAggregationInput | OngOrderByWithAggregationInput[]
    by: OngScalarFieldEnum[] | OngScalarFieldEnum
    having?: OngScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OngCountAggregateInputType | true
    _min?: OngMinAggregateInputType
    _max?: OngMaxAggregateInputType
  }

  export type OngGroupByOutputType = {
    id: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at: Date
    updated_at: Date
    role: $Enums.Role
    cityId: string
    _count: OngCountAggregateOutputType | null
    _min: OngMinAggregateOutputType | null
    _max: OngMaxAggregateOutputType | null
  }

  type GetOngGroupByPayload<T extends OngGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OngGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OngGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OngGroupByOutputType[P]>
            : GetScalarType<T[P], OngGroupByOutputType[P]>
        }
      >
    >


  export type OngSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    name?: boolean
    socialReason?: boolean
    cnpj?: boolean
    whatsapp?: boolean
    email?: boolean
    password_hash?: boolean
    address?: boolean
    zipcode?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    cityId?: boolean
    Pets?: boolean | Ong$PetsArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    _count?: boolean | OngCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ong"]>

  export type OngSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photoUrl?: boolean
    name?: boolean
    socialReason?: boolean
    cnpj?: boolean
    whatsapp?: boolean
    email?: boolean
    password_hash?: boolean
    address?: boolean
    zipcode?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ong"]>

  export type OngSelectScalar = {
    id?: boolean
    photoUrl?: boolean
    name?: boolean
    socialReason?: boolean
    cnpj?: boolean
    whatsapp?: boolean
    email?: boolean
    password_hash?: boolean
    address?: boolean
    zipcode?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    cityId?: boolean
  }

  export type OngInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pets?: boolean | Ong$PetsArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    _count?: boolean | OngCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OngIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $OngPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ong"
    objects: {
      Pets: Prisma.$PetPayload<ExtArgs>[]
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      photoUrl: string
      name: string
      socialReason: string
      cnpj: string
      whatsapp: string
      email: string
      password_hash: string
      address: string
      zipcode: string
      created_at: Date
      updated_at: Date
      role: $Enums.Role
      cityId: string
    }, ExtArgs["result"]["ong"]>
    composites: {}
  }

  type OngGetPayload<S extends boolean | null | undefined | OngDefaultArgs> = $Result.GetResult<Prisma.$OngPayload, S>

  type OngCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OngFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OngCountAggregateInputType | true
    }

  export interface OngDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ong'], meta: { name: 'Ong' } }
    /**
     * Find zero or one Ong that matches the filter.
     * @param {OngFindUniqueArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OngFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OngFindUniqueArgs<ExtArgs>>
    ): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ong that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OngFindUniqueOrThrowArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OngFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OngFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindFirstArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OngFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OngFindFirstArgs<ExtArgs>>
    ): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindFirstOrThrowArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OngFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OngFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ongs
     * const ongs = await prisma.ong.findMany()
     * 
     * // Get first 10 Ongs
     * const ongs = await prisma.ong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ongWithIdOnly = await prisma.ong.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OngFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OngFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ong.
     * @param {OngCreateArgs} args - Arguments to create a Ong.
     * @example
     * // Create one Ong
     * const Ong = await prisma.ong.create({
     *   data: {
     *     // ... data to create a Ong
     *   }
     * })
     * 
    **/
    create<T extends OngCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OngCreateArgs<ExtArgs>>
    ): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ongs.
     * @param {OngCreateManyArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ong = await prisma.ong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends OngCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OngCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ongs and returns the data saved in the database.
     * @param {OngCreateManyAndReturnArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ong = await prisma.ong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ongs and only return the `id`
     * const ongWithIdOnly = await prisma.ong.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends OngCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, OngCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Ong.
     * @param {OngDeleteArgs} args - Arguments to delete one Ong.
     * @example
     * // Delete one Ong
     * const Ong = await prisma.ong.delete({
     *   where: {
     *     // ... filter to delete one Ong
     *   }
     * })
     * 
    **/
    delete<T extends OngDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OngDeleteArgs<ExtArgs>>
    ): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ong.
     * @param {OngUpdateArgs} args - Arguments to update one Ong.
     * @example
     * // Update one Ong
     * const ong = await prisma.ong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OngUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OngUpdateArgs<ExtArgs>>
    ): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ongs.
     * @param {OngDeleteManyArgs} args - Arguments to filter Ongs to delete.
     * @example
     * // Delete a few Ongs
     * const { count } = await prisma.ong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OngDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OngDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ongs
     * const ong = await prisma.ong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OngUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OngUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ong.
     * @param {OngUpsertArgs} args - Arguments to update or create a Ong.
     * @example
     * // Update or create a Ong
     * const ong = await prisma.ong.upsert({
     *   create: {
     *     // ... data to create a Ong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ong we want to update
     *   }
     * })
    **/
    upsert<T extends OngUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OngUpsertArgs<ExtArgs>>
    ): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngCountArgs} args - Arguments to filter Ongs to count.
     * @example
     * // Count the number of Ongs
     * const count = await prisma.ong.count({
     *   where: {
     *     // ... the filter for the Ongs we want to count
     *   }
     * })
    **/
    count<T extends OngCountArgs>(
      args?: Subset<T, OngCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OngCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OngAggregateArgs>(args: Subset<T, OngAggregateArgs>): Prisma.PrismaPromise<GetOngAggregateType<T>>

    /**
     * Group by Ong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OngGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OngGroupByArgs['orderBy'] }
        : { orderBy?: OngGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OngGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ong model
   */
  readonly fields: OngFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OngClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Pets<T extends Ong$PetsArgs<ExtArgs> = {}>(args?: Subset<T, Ong$PetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, 'findMany'> | Null>;

    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ong model
   */ 
  interface OngFieldRefs {
    readonly id: FieldRef<"Ong", 'String'>
    readonly photoUrl: FieldRef<"Ong", 'String'>
    readonly name: FieldRef<"Ong", 'String'>
    readonly socialReason: FieldRef<"Ong", 'String'>
    readonly cnpj: FieldRef<"Ong", 'String'>
    readonly whatsapp: FieldRef<"Ong", 'String'>
    readonly email: FieldRef<"Ong", 'String'>
    readonly password_hash: FieldRef<"Ong", 'String'>
    readonly address: FieldRef<"Ong", 'String'>
    readonly zipcode: FieldRef<"Ong", 'String'>
    readonly created_at: FieldRef<"Ong", 'DateTime'>
    readonly updated_at: FieldRef<"Ong", 'DateTime'>
    readonly role: FieldRef<"Ong", 'Role'>
    readonly cityId: FieldRef<"Ong", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ong findUnique
   */
  export type OngFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong findUniqueOrThrow
   */
  export type OngFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong findFirst
   */
  export type OngFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ongs.
     */
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong findFirstOrThrow
   */
  export type OngFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ongs.
     */
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong findMany
   */
  export type OngFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ongs to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong create
   */
  export type OngCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The data needed to create a Ong.
     */
    data: XOR<OngCreateInput, OngUncheckedCreateInput>
  }

  /**
   * Ong createMany
   */
  export type OngCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ongs.
     */
    data: OngCreateManyInput | OngCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ong createManyAndReturn
   */
  export type OngCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ongs.
     */
    data: OngCreateManyInput | OngCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ong update
   */
  export type OngUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The data needed to update a Ong.
     */
    data: XOR<OngUpdateInput, OngUncheckedUpdateInput>
    /**
     * Choose, which Ong to update.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong updateMany
   */
  export type OngUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ongs.
     */
    data: XOR<OngUpdateManyMutationInput, OngUncheckedUpdateManyInput>
    /**
     * Filter which Ongs to update
     */
    where?: OngWhereInput
  }

  /**
   * Ong upsert
   */
  export type OngUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The filter to search for the Ong to update in case it exists.
     */
    where: OngWhereUniqueInput
    /**
     * In case the Ong found by the `where` argument doesn't exist, create a new Ong with this data.
     */
    create: XOR<OngCreateInput, OngUncheckedCreateInput>
    /**
     * In case the Ong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OngUpdateInput, OngUncheckedUpdateInput>
  }

  /**
   * Ong delete
   */
  export type OngDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter which Ong to delete.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong deleteMany
   */
  export type OngDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ongs to delete
     */
    where?: OngWhereInput
  }

  /**
   * Ong.Pets
   */
  export type Ong$PetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Ong without action
   */
  export type OngDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    stateId: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stateId: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    stateId: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    name: string
    stateId: string
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    Ongs?: boolean | City$OngsArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    stateId?: boolean
  }

  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ongs?: boolean | City$OngsArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      Ongs: Prisma.$OngPayload<ExtArgs>[]
      state: Prisma.$StatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stateId: string
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends CityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CityCreateArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CityCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends CityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CityDeleteArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpdateArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends CityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpsertArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Ongs<T extends City$OngsArgs<ExtArgs> = {}>(args?: Subset<T, City$OngsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, 'findMany'> | Null>;

    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the City model
   */ 
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly stateId: FieldRef<"City", 'String'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }

  /**
   * City.Ongs
   */
  export type City$OngsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    where?: OngWhereInput
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    cursor?: OngWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StateMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: string
    name: string
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean | State$cityArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | State$cityArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>
    ): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>
    ): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
    **/
    create<T extends StateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StateCreateArgs<ExtArgs>>
    ): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends StateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends StateCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
    **/
    delete<T extends StateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StateDeleteArgs<ExtArgs>>
    ): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StateUpdateArgs<ExtArgs>>
    ): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
    **/
    upsert<T extends StateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StateUpsertArgs<ExtArgs>>
    ): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    city<T extends State$cityArgs<ExtArgs> = {}>(args?: Subset<T, State$cityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the State model
   */ 
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'String'>
    readonly name: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
  }

  /**
   * State.city
   */
  export type State$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PetScalarFieldEnum: {
    id: 'id',
    photoUrl: 'photoUrl',
    name: 'name',
    breed: 'breed',
    color: 'color',
    age: 'age',
    size: 'size',
    details: 'details',
    created_at: 'created_at',
    updated_at: 'updated_at',
    ongId: 'ongId'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const OngScalarFieldEnum: {
    id: 'id',
    photoUrl: 'photoUrl',
    name: 'name',
    socialReason: 'socialReason',
    cnpj: 'cnpj',
    whatsapp: 'whatsapp',
    email: 'email',
    password_hash: 'password_hash',
    address: 'address',
    zipcode: 'zipcode',
    created_at: 'created_at',
    updated_at: 'updated_at',
    role: 'role',
    cityId: 'cityId'
  };

  export type OngScalarFieldEnum = (typeof OngScalarFieldEnum)[keyof typeof OngScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stateId: 'stateId'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    photoUrl?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    color?: StringFilter<"Pet"> | string
    age?: IntFilter<"Pet"> | number
    size?: StringFilter<"Pet"> | string
    details?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    updated_at?: DateTimeFilter<"Pet"> | Date | string
    ongId?: StringFilter<"Pet"> | string
    ong?: XOR<OngRelationFilter, OngWhereInput>
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    breed?: SortOrder
    color?: SortOrder
    age?: SortOrder
    size?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ongId?: SortOrder
    ong?: OngOrderByWithRelationInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    photoUrl?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    color?: StringFilter<"Pet"> | string
    age?: IntFilter<"Pet"> | number
    size?: StringFilter<"Pet"> | string
    details?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    updated_at?: DateTimeFilter<"Pet"> | Date | string
    ongId?: StringFilter<"Pet"> | string
    ong?: XOR<OngRelationFilter, OngWhereInput>
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    breed?: SortOrder
    color?: SortOrder
    age?: SortOrder
    size?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ongId?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    photoUrl?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    breed?: StringWithAggregatesFilter<"Pet"> | string
    color?: StringWithAggregatesFilter<"Pet"> | string
    age?: IntWithAggregatesFilter<"Pet"> | number
    size?: StringWithAggregatesFilter<"Pet"> | string
    details?: StringWithAggregatesFilter<"Pet"> | string
    created_at?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    ongId?: StringWithAggregatesFilter<"Pet"> | string
  }

  export type OngWhereInput = {
    AND?: OngWhereInput | OngWhereInput[]
    OR?: OngWhereInput[]
    NOT?: OngWhereInput | OngWhereInput[]
    id?: StringFilter<"Ong"> | string
    photoUrl?: StringFilter<"Ong"> | string
    name?: StringFilter<"Ong"> | string
    socialReason?: StringFilter<"Ong"> | string
    cnpj?: StringFilter<"Ong"> | string
    whatsapp?: StringFilter<"Ong"> | string
    email?: StringFilter<"Ong"> | string
    password_hash?: StringFilter<"Ong"> | string
    address?: StringFilter<"Ong"> | string
    zipcode?: StringFilter<"Ong"> | string
    created_at?: DateTimeFilter<"Ong"> | Date | string
    updated_at?: DateTimeFilter<"Ong"> | Date | string
    role?: EnumRoleFilter<"Ong"> | $Enums.Role
    cityId?: StringFilter<"Ong"> | string
    Pets?: PetListRelationFilter
    city?: XOR<CityRelationFilter, CityWhereInput>
  }

  export type OngOrderByWithRelationInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    socialReason?: SortOrder
    cnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
    Pets?: PetOrderByRelationAggregateInput
    city?: CityOrderByWithRelationInput
  }

  export type OngWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    email?: string
    AND?: OngWhereInput | OngWhereInput[]
    OR?: OngWhereInput[]
    NOT?: OngWhereInput | OngWhereInput[]
    photoUrl?: StringFilter<"Ong"> | string
    name?: StringFilter<"Ong"> | string
    socialReason?: StringFilter<"Ong"> | string
    whatsapp?: StringFilter<"Ong"> | string
    password_hash?: StringFilter<"Ong"> | string
    address?: StringFilter<"Ong"> | string
    zipcode?: StringFilter<"Ong"> | string
    created_at?: DateTimeFilter<"Ong"> | Date | string
    updated_at?: DateTimeFilter<"Ong"> | Date | string
    role?: EnumRoleFilter<"Ong"> | $Enums.Role
    cityId?: StringFilter<"Ong"> | string
    Pets?: PetListRelationFilter
    city?: XOR<CityRelationFilter, CityWhereInput>
  }, "id" | "cnpj" | "email">

  export type OngOrderByWithAggregationInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    socialReason?: SortOrder
    cnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
    _count?: OngCountOrderByAggregateInput
    _max?: OngMaxOrderByAggregateInput
    _min?: OngMinOrderByAggregateInput
  }

  export type OngScalarWhereWithAggregatesInput = {
    AND?: OngScalarWhereWithAggregatesInput | OngScalarWhereWithAggregatesInput[]
    OR?: OngScalarWhereWithAggregatesInput[]
    NOT?: OngScalarWhereWithAggregatesInput | OngScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ong"> | string
    photoUrl?: StringWithAggregatesFilter<"Ong"> | string
    name?: StringWithAggregatesFilter<"Ong"> | string
    socialReason?: StringWithAggregatesFilter<"Ong"> | string
    cnpj?: StringWithAggregatesFilter<"Ong"> | string
    whatsapp?: StringWithAggregatesFilter<"Ong"> | string
    email?: StringWithAggregatesFilter<"Ong"> | string
    password_hash?: StringWithAggregatesFilter<"Ong"> | string
    address?: StringWithAggregatesFilter<"Ong"> | string
    zipcode?: StringWithAggregatesFilter<"Ong"> | string
    created_at?: DateTimeWithAggregatesFilter<"Ong"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Ong"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"Ong"> | $Enums.Role
    cityId?: StringWithAggregatesFilter<"Ong"> | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    stateId?: StringFilter<"City"> | string
    Ongs?: OngListRelationFilter
    state?: XOR<StateRelationFilter, StateWhereInput>
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    Ongs?: OngOrderByRelationAggregateInput
    state?: StateOrderByWithRelationInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    stateId?: StringFilter<"City"> | string
    Ongs?: OngListRelationFilter
    state?: XOR<StateRelationFilter, StateWhereInput>
  }, "id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    stateId?: StringWithAggregatesFilter<"City"> | string
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: StringFilter<"State"> | string
    name?: StringFilter<"State"> | string
    city?: CityListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: CityOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    name?: StringFilter<"State"> | string
    city?: CityListRelationFilter
  }, "id">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"State"> | string
    name?: StringWithAggregatesFilter<"State"> | string
  }

  export type PetCreateInput = {
    id?: string
    photoUrl: string
    name: string
    breed: string
    color: string
    age: number
    size: string
    details: string
    created_at?: Date | string
    updated_at?: Date | string
    ong: OngCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    photoUrl: string
    name: string
    breed: string
    color: string
    age: number
    size: string
    details: string
    created_at?: Date | string
    updated_at?: Date | string
    ongId: string
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ong?: OngUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ongId?: StringFieldUpdateOperationsInput | string
  }

  export type PetCreateManyInput = {
    id?: string
    photoUrl: string
    name: string
    breed: string
    color: string
    age: number
    size: string
    details: string
    created_at?: Date | string
    updated_at?: Date | string
    ongId: string
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ongId?: StringFieldUpdateOperationsInput | string
  }

  export type OngCreateInput = {
    id?: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.Role
    Pets?: PetCreateNestedManyWithoutOngInput
    city: CityCreateNestedOneWithoutOngsInput
  }

  export type OngUncheckedCreateInput = {
    id?: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.Role
    cityId: string
    Pets?: PetUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Pets?: PetUpdateManyWithoutOngNestedInput
    city?: CityUpdateOneRequiredWithoutOngsNestedInput
  }

  export type OngUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: StringFieldUpdateOperationsInput | string
    Pets?: PetUncheckedUpdateManyWithoutOngNestedInput
  }

  export type OngCreateManyInput = {
    id?: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.Role
    cityId: string
  }

  export type OngUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type OngUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    id?: string
    name: string
    Ongs?: OngCreateNestedManyWithoutCityInput
    state: StateCreateNestedOneWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    stateId: string
    Ongs?: OngUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Ongs?: OngUpdateManyWithoutCityNestedInput
    state?: StateUpdateOneRequiredWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
    Ongs?: OngUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
    stateId: string
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
  }

  export type StateCreateInput = {
    id?: string
    name: string
    city?: CityCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: string
    name: string
    city?: CityUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: string
    name: string
  }

  export type StateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OngRelationFilter = {
    is?: OngWhereInput
    isNot?: OngWhereInput
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    breed?: SortOrder
    color?: SortOrder
    age?: SortOrder
    size?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ongId?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    breed?: SortOrder
    color?: SortOrder
    age?: SortOrder
    size?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ongId?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    breed?: SortOrder
    color?: SortOrder
    age?: SortOrder
    size?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ongId?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type CityRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OngCountOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    socialReason?: SortOrder
    cnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
  }

  export type OngMaxOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    socialReason?: SortOrder
    cnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
  }

  export type OngMinOrderByAggregateInput = {
    id?: SortOrder
    photoUrl?: SortOrder
    name?: SortOrder
    socialReason?: SortOrder
    cnpj?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    address?: SortOrder
    zipcode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    cityId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type OngListRelationFilter = {
    every?: OngWhereInput
    some?: OngWhereInput
    none?: OngWhereInput
  }

  export type StateRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type OngOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OngCreateNestedOneWithoutPetsInput = {
    create?: XOR<OngCreateWithoutPetsInput, OngUncheckedCreateWithoutPetsInput>
    connectOrCreate?: OngCreateOrConnectWithoutPetsInput
    connect?: OngWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OngUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<OngCreateWithoutPetsInput, OngUncheckedCreateWithoutPetsInput>
    connectOrCreate?: OngCreateOrConnectWithoutPetsInput
    upsert?: OngUpsertWithoutPetsInput
    connect?: OngWhereUniqueInput
    update?: XOR<XOR<OngUpdateToOneWithWhereWithoutPetsInput, OngUpdateWithoutPetsInput>, OngUncheckedUpdateWithoutPetsInput>
  }

  export type PetCreateNestedManyWithoutOngInput = {
    create?: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput> | PetCreateWithoutOngInput[] | PetUncheckedCreateWithoutOngInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOngInput | PetCreateOrConnectWithoutOngInput[]
    createMany?: PetCreateManyOngInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type CityCreateNestedOneWithoutOngsInput = {
    create?: XOR<CityCreateWithoutOngsInput, CityUncheckedCreateWithoutOngsInput>
    connectOrCreate?: CityCreateOrConnectWithoutOngsInput
    connect?: CityWhereUniqueInput
  }

  export type PetUncheckedCreateNestedManyWithoutOngInput = {
    create?: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput> | PetCreateWithoutOngInput[] | PetUncheckedCreateWithoutOngInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOngInput | PetCreateOrConnectWithoutOngInput[]
    createMany?: PetCreateManyOngInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PetUpdateManyWithoutOngNestedInput = {
    create?: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput> | PetCreateWithoutOngInput[] | PetUncheckedCreateWithoutOngInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOngInput | PetCreateOrConnectWithoutOngInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOngInput | PetUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: PetCreateManyOngInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOngInput | PetUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOngInput | PetUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type CityUpdateOneRequiredWithoutOngsNestedInput = {
    create?: XOR<CityCreateWithoutOngsInput, CityUncheckedCreateWithoutOngsInput>
    connectOrCreate?: CityCreateOrConnectWithoutOngsInput
    upsert?: CityUpsertWithoutOngsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutOngsInput, CityUpdateWithoutOngsInput>, CityUncheckedUpdateWithoutOngsInput>
  }

  export type PetUncheckedUpdateManyWithoutOngNestedInput = {
    create?: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput> | PetCreateWithoutOngInput[] | PetUncheckedCreateWithoutOngInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOngInput | PetCreateOrConnectWithoutOngInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOngInput | PetUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: PetCreateManyOngInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOngInput | PetUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOngInput | PetUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type OngCreateNestedManyWithoutCityInput = {
    create?: XOR<OngCreateWithoutCityInput, OngUncheckedCreateWithoutCityInput> | OngCreateWithoutCityInput[] | OngUncheckedCreateWithoutCityInput[]
    connectOrCreate?: OngCreateOrConnectWithoutCityInput | OngCreateOrConnectWithoutCityInput[]
    createMany?: OngCreateManyCityInputEnvelope
    connect?: OngWhereUniqueInput | OngWhereUniqueInput[]
  }

  export type StateCreateNestedOneWithoutCityInput = {
    create?: XOR<StateCreateWithoutCityInput, StateUncheckedCreateWithoutCityInput>
    connectOrCreate?: StateCreateOrConnectWithoutCityInput
    connect?: StateWhereUniqueInput
  }

  export type OngUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<OngCreateWithoutCityInput, OngUncheckedCreateWithoutCityInput> | OngCreateWithoutCityInput[] | OngUncheckedCreateWithoutCityInput[]
    connectOrCreate?: OngCreateOrConnectWithoutCityInput | OngCreateOrConnectWithoutCityInput[]
    createMany?: OngCreateManyCityInputEnvelope
    connect?: OngWhereUniqueInput | OngWhereUniqueInput[]
  }

  export type OngUpdateManyWithoutCityNestedInput = {
    create?: XOR<OngCreateWithoutCityInput, OngUncheckedCreateWithoutCityInput> | OngCreateWithoutCityInput[] | OngUncheckedCreateWithoutCityInput[]
    connectOrCreate?: OngCreateOrConnectWithoutCityInput | OngCreateOrConnectWithoutCityInput[]
    upsert?: OngUpsertWithWhereUniqueWithoutCityInput | OngUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: OngCreateManyCityInputEnvelope
    set?: OngWhereUniqueInput | OngWhereUniqueInput[]
    disconnect?: OngWhereUniqueInput | OngWhereUniqueInput[]
    delete?: OngWhereUniqueInput | OngWhereUniqueInput[]
    connect?: OngWhereUniqueInput | OngWhereUniqueInput[]
    update?: OngUpdateWithWhereUniqueWithoutCityInput | OngUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: OngUpdateManyWithWhereWithoutCityInput | OngUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: OngScalarWhereInput | OngScalarWhereInput[]
  }

  export type StateUpdateOneRequiredWithoutCityNestedInput = {
    create?: XOR<StateCreateWithoutCityInput, StateUncheckedCreateWithoutCityInput>
    connectOrCreate?: StateCreateOrConnectWithoutCityInput
    upsert?: StateUpsertWithoutCityInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutCityInput, StateUpdateWithoutCityInput>, StateUncheckedUpdateWithoutCityInput>
  }

  export type OngUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<OngCreateWithoutCityInput, OngUncheckedCreateWithoutCityInput> | OngCreateWithoutCityInput[] | OngUncheckedCreateWithoutCityInput[]
    connectOrCreate?: OngCreateOrConnectWithoutCityInput | OngCreateOrConnectWithoutCityInput[]
    upsert?: OngUpsertWithWhereUniqueWithoutCityInput | OngUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: OngCreateManyCityInputEnvelope
    set?: OngWhereUniqueInput | OngWhereUniqueInput[]
    disconnect?: OngWhereUniqueInput | OngWhereUniqueInput[]
    delete?: OngWhereUniqueInput | OngWhereUniqueInput[]
    connect?: OngWhereUniqueInput | OngWhereUniqueInput[]
    update?: OngUpdateWithWhereUniqueWithoutCityInput | OngUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: OngUpdateManyWithWhereWithoutCityInput | OngUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: OngScalarWhereInput | OngScalarWhereInput[]
  }

  export type CityCreateNestedManyWithoutStateInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CityUpdateManyWithoutStateNestedInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutStateInput | CityUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutStateInput | CityUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CityUpdateManyWithWhereWithoutStateInput | CityUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutStateInput | CityUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutStateInput | CityUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CityUpdateManyWithWhereWithoutStateInput | CityUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type OngCreateWithoutPetsInput = {
    id?: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.Role
    city: CityCreateNestedOneWithoutOngsInput
  }

  export type OngUncheckedCreateWithoutPetsInput = {
    id?: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.Role
    cityId: string
  }

  export type OngCreateOrConnectWithoutPetsInput = {
    where: OngWhereUniqueInput
    create: XOR<OngCreateWithoutPetsInput, OngUncheckedCreateWithoutPetsInput>
  }

  export type OngUpsertWithoutPetsInput = {
    update: XOR<OngUpdateWithoutPetsInput, OngUncheckedUpdateWithoutPetsInput>
    create: XOR<OngCreateWithoutPetsInput, OngUncheckedCreateWithoutPetsInput>
    where?: OngWhereInput
  }

  export type OngUpdateToOneWithWhereWithoutPetsInput = {
    where?: OngWhereInput
    data: XOR<OngUpdateWithoutPetsInput, OngUncheckedUpdateWithoutPetsInput>
  }

  export type OngUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: CityUpdateOneRequiredWithoutOngsNestedInput
  }

  export type OngUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type PetCreateWithoutOngInput = {
    id?: string
    photoUrl: string
    name: string
    breed: string
    color: string
    age: number
    size: string
    details: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PetUncheckedCreateWithoutOngInput = {
    id?: string
    photoUrl: string
    name: string
    breed: string
    color: string
    age: number
    size: string
    details: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PetCreateOrConnectWithoutOngInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput>
  }

  export type PetCreateManyOngInputEnvelope = {
    data: PetCreateManyOngInput | PetCreateManyOngInput[]
    skipDuplicates?: boolean
  }

  export type CityCreateWithoutOngsInput = {
    id?: string
    name: string
    state: StateCreateNestedOneWithoutCityInput
  }

  export type CityUncheckedCreateWithoutOngsInput = {
    id?: string
    name: string
    stateId: string
  }

  export type CityCreateOrConnectWithoutOngsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutOngsInput, CityUncheckedCreateWithoutOngsInput>
  }

  export type PetUpsertWithWhereUniqueWithoutOngInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutOngInput, PetUncheckedUpdateWithoutOngInput>
    create: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput>
  }

  export type PetUpdateWithWhereUniqueWithoutOngInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutOngInput, PetUncheckedUpdateWithoutOngInput>
  }

  export type PetUpdateManyWithWhereWithoutOngInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutOngInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: StringFilter<"Pet"> | string
    photoUrl?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    color?: StringFilter<"Pet"> | string
    age?: IntFilter<"Pet"> | number
    size?: StringFilter<"Pet"> | string
    details?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    updated_at?: DateTimeFilter<"Pet"> | Date | string
    ongId?: StringFilter<"Pet"> | string
  }

  export type CityUpsertWithoutOngsInput = {
    update: XOR<CityUpdateWithoutOngsInput, CityUncheckedUpdateWithoutOngsInput>
    create: XOR<CityCreateWithoutOngsInput, CityUncheckedCreateWithoutOngsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutOngsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutOngsInput, CityUncheckedUpdateWithoutOngsInput>
  }

  export type CityUpdateWithoutOngsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StateUpdateOneRequiredWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutOngsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateId?: StringFieldUpdateOperationsInput | string
  }

  export type OngCreateWithoutCityInput = {
    id?: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.Role
    Pets?: PetCreateNestedManyWithoutOngInput
  }

  export type OngUncheckedCreateWithoutCityInput = {
    id?: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.Role
    Pets?: PetUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngCreateOrConnectWithoutCityInput = {
    where: OngWhereUniqueInput
    create: XOR<OngCreateWithoutCityInput, OngUncheckedCreateWithoutCityInput>
  }

  export type OngCreateManyCityInputEnvelope = {
    data: OngCreateManyCityInput | OngCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type StateCreateWithoutCityInput = {
    id?: string
    name: string
  }

  export type StateUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
  }

  export type StateCreateOrConnectWithoutCityInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCityInput, StateUncheckedCreateWithoutCityInput>
  }

  export type OngUpsertWithWhereUniqueWithoutCityInput = {
    where: OngWhereUniqueInput
    update: XOR<OngUpdateWithoutCityInput, OngUncheckedUpdateWithoutCityInput>
    create: XOR<OngCreateWithoutCityInput, OngUncheckedCreateWithoutCityInput>
  }

  export type OngUpdateWithWhereUniqueWithoutCityInput = {
    where: OngWhereUniqueInput
    data: XOR<OngUpdateWithoutCityInput, OngUncheckedUpdateWithoutCityInput>
  }

  export type OngUpdateManyWithWhereWithoutCityInput = {
    where: OngScalarWhereInput
    data: XOR<OngUpdateManyMutationInput, OngUncheckedUpdateManyWithoutCityInput>
  }

  export type OngScalarWhereInput = {
    AND?: OngScalarWhereInput | OngScalarWhereInput[]
    OR?: OngScalarWhereInput[]
    NOT?: OngScalarWhereInput | OngScalarWhereInput[]
    id?: StringFilter<"Ong"> | string
    photoUrl?: StringFilter<"Ong"> | string
    name?: StringFilter<"Ong"> | string
    socialReason?: StringFilter<"Ong"> | string
    cnpj?: StringFilter<"Ong"> | string
    whatsapp?: StringFilter<"Ong"> | string
    email?: StringFilter<"Ong"> | string
    password_hash?: StringFilter<"Ong"> | string
    address?: StringFilter<"Ong"> | string
    zipcode?: StringFilter<"Ong"> | string
    created_at?: DateTimeFilter<"Ong"> | Date | string
    updated_at?: DateTimeFilter<"Ong"> | Date | string
    role?: EnumRoleFilter<"Ong"> | $Enums.Role
    cityId?: StringFilter<"Ong"> | string
  }

  export type StateUpsertWithoutCityInput = {
    update: XOR<StateUpdateWithoutCityInput, StateUncheckedUpdateWithoutCityInput>
    create: XOR<StateCreateWithoutCityInput, StateUncheckedCreateWithoutCityInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutCityInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutCityInput, StateUncheckedUpdateWithoutCityInput>
  }

  export type StateUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateWithoutStateInput = {
    id?: string
    name: string
    Ongs?: OngCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    Ongs?: OngUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutStateInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityCreateManyStateInputEnvelope = {
    data: CityCreateManyStateInput | CityCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityUpdateWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
  }

  export type CityUpdateManyWithWhereWithoutStateInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutStateInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    stateId?: StringFilter<"City"> | string
  }

  export type PetCreateManyOngInput = {
    id?: string
    photoUrl: string
    name: string
    breed: string
    color: string
    age: number
    size: string
    details: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PetUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngCreateManyCityInput = {
    id?: string
    photoUrl: string
    name: string
    socialReason: string
    cnpj: string
    whatsapp: string
    email: string
    password_hash: string
    address: string
    zipcode: string
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.Role
  }

  export type OngUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Pets?: PetUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Pets?: PetUncheckedUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CityCreateManyStateInput = {
    id?: string
    name: string
  }

  export type CityUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Ongs?: OngUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Ongs?: OngUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OngCountOutputTypeDefaultArgs instead
     */
    export type OngCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OngCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityCountOutputTypeDefaultArgs instead
     */
    export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StateCountOutputTypeDefaultArgs instead
     */
    export type StateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PetDefaultArgs instead
     */
    export type PetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OngDefaultArgs instead
     */
    export type OngArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OngDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityDefaultArgs instead
     */
    export type CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StateDefaultArgs instead
     */
    export type StateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StateDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}