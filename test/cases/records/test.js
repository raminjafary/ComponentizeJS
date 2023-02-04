import { deepStrictEqual, strictEqual } from 'node:assert';

export function test (instance) {
  strictEqual(instance.exports.tupleArg(['z', 23]), undefined);
  deepStrictEqual(instance.exports.tupleResult(), ['z', 23]);
}

// interface records {
//   tuple-arg: func(x: tuple<char, u32>)
//   tuple-result: func() -> tuple<char, u32>

//   record empty {}

//   empty-arg: func(x: empty)
//   empty-result: func() -> empty

//   /// A record containing two scalar fields
//   /// that both have the same type
//   record scalars {
//       /// The first field, named a
//       a: u32,
//       /// The second field, named b
//       b: u32,
//   }

//   scalar-arg: func(x: scalars)
//   scalar-result: func() -> scalars

//   /// A record that is really just flags
//   /// All of the fields are bool
//   record really-flags {
//       a: bool,
//       b: bool,
//       c: bool,
//       d: bool,
//       e: bool,
//       f: bool,
//       g: bool,
//       h: bool,
//       i: bool,
//   }

//   flags-arg: func(x: really-flags)
//   flags-result: func() -> really-flags

//   record aggregates {
//       a: scalars,
//       b: u32,
//       c: empty,
//       d: string,
//       e: really-flags,
//   }

//   aggregate-arg: func(x: aggregates)
//   aggregate-result: func() -> aggregates

//   type tuple-typedef = tuple<s32>
//   type int-typedef = s32
//   type tuple-typedef2 = tuple<int-typedef>
//   typedef-inout: func(e: tuple-typedef2) -> s32
// }

// default world the-world {
//   import imports: self.records
//   export exports: self.records
// }
