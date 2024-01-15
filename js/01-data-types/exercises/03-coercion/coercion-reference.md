# Some useful information about coercion

## Boolean coercion

Happens logical operators are in play (&&, ||)

- undefined turns into false.
- null turns into false.
- 0, -0, and NaN turn into false; other numbers turn into true.
- 0n turns into false; other BigInts turn into true.
- The empty string "" turns into false; other strings turn into true.
- Symbols turn into true.
- All objects become true.

**Values that are coerced to false ar called falsy, while the others are called truthy.**

## String coercion

- Strings are returned as-is.
- undefined turns into "undefined".
- null turns into "null".
- true turns into "true"; false turns into "false".
- Numbers are converted with the same algorithm as toString(10).
- BigInts are converted with the same algorithm as toString(10).
- Symbols throw a TypeError.
- Objects are first converted to a primitive by calling its [@@toPrimitive]() (with "string" as hint), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.

## Number coercion

When using comparison operators or performing mathematical operations (except +)

- undefined turns into NaN.
- null turns into 0.
- true turns into 1; false turns into 0.
- Strings are converted by parsing them as if they contain a number literal. Parsing failure results in NaN. There are some minor differences compared to an actual number literal:
  - Leading and trailing whitespace/line terminators are ignored.
  - A leading 0 digit does not cause the number to become an octal literal (or get rejected in strict mode).
  - \+ and - are allowed at the start of the string to indicate its sign. (In actual code, they "look like" part of the literal, but are actually separate unary operators.) However, the sign can only appear once, and must not be followed by whitespace.
  - Infinity and -Infinity are recognized as literals. In actual code, they are global variables.
  - Empty or whitespace-only strings are converted to 0.
  - Numeric separators are not allowed.
- BigInts throw a TypeError to prevent unintended implicit coercion causing loss of precision.
- Symbols throw a TypeError.
- Objects are first converted to a primitive by calling their [@@toPrimitive]() (with "number" as hint), valueOf(), and toString() methods, in that order. The resulting primitive is then converted to a number.
