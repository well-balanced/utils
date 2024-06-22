# utils

[![NPM Version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@well-balanced/utils.svg
[npm-url]: https://npmjs.org/package/@well-balanced/utils

JavaScript / TypeScript utils

## Table of Contents

- [utils](#utils)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [cleanObject](#cleanobject)
    - [reduceSeries](#reduceseries)
    - [mapSeries](#mapseries)
    - [readdirRecursive](#readdirrecursive)
    - [setPropertyRecursive](#setpropertyrecursive)
    - [cursor](#cursor)
    - [getFulfilledResult](#getfulfilledresult)
    - [msleep](#msleep)
    - [kst](#kst)
    - [formatKst](#formatkst)
    - [filterOut](#filterout)
    - [hashIndex](#hashindex)
    - [notEmpty](#notempty)
    - [randomInt](#randomint)
    - [safeSample](#safesample)
    - [sample](#sample)
  - [License](#license)

## Installation

```sh
$ npm i @well-balanced/utils
$ pnpm add @well-balanced/utils
$ yarn add @well-balanced/utils
```

## Usage

### cleanObject

If the object has fields with an `undefined` value, clean it.

**example**

```ts
const user = { id: 'id', name: 'name', age: 20, gender: undefined }
const cleaned = cleanObject(user) // { id: 'id', name: 'name', age: 20}
```

### reduceSeries

Execute a function on each element of an array, sequentially.

**example**

```ts
import { reduceSeries } from '@well-balanced/utils'

const array = [1, 2, 3, 4, 5]
const sum = await reduceSeries(array, async (prev, curr) => prev + curr, 0)
console.log(sum) // 15
```

[source](https://github.com/well-balanced/utils/blob/main/src/reduceSeries/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/reduceSeries/reduceSeries.spec.ts)

### mapSeries

Map over an array, applying an asynchronous function sequentially.

**example**

```ts
import { mapSeries } from '@well-balanced/utils'

const array = [1, 2, 3, 4, 5]
const results = await mapSeries(array, async (item) => item * 2)

console.log(results) // [2, 4, 6, 8, 10]
```

[source](https://github.com/well-balanced/utils/blob/main/src/mapSeries/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/mapSeries/mapSeries.spec.ts)

### readdirRecursive

Read a directory recursively and return a list of file paths.

**example**

```ts
import { readdirRecursive } from '@well-balanced/utils'

const files = await readdirRecursive('/path/to/directory')
console.log(files)
```

[source](https://github.com/well-balanced/utils/blob/main/src/readdirRecursive/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/readdirRecursive/readdirRecursive.spec.ts)

### setPropertyRecursive

Set a nested property on an object, creating intermediate objects as necessary.

**example**

```ts
import { setPropertyRecursive } from '@well-balanced/utils'

const obj = { hello: 'world' }
const updated = setPropertyRecursive(
  ['key1', 'key2', 'key3'],
  'hello world',
  obj,
)

console.log(updated) // { key1: { key2: { key3: 'hello world' } }, hello: 'world' }
```

[source](https://github.com/well-balanced/utils/blob/main/src/setPropertyRecursive/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/setPropertyRecursive/setPropertyRecursive.spec.ts)

### cursor

Encode and decode cursors for pagination.

**example**

```ts
import { encodeCursor, decodeCursor } from '@well-balanced/utils'

const obj = { page: 1, limit: 10 }
const cursor = encodeCursor(obj)
console.log(cursor) // Encoded cursor string

const decoded = decodeCursor(cursor)
console.log(decoded) // { page: 1, limit: 10 }
```

source

- [encodeCursor](https://github.com/well-balanced/utils/blob/main/src/cursor/encodeCursor.ts)
- [decodeCursor](https://github.com/well-balanced/utils/blob/main/src/cursor/decodeCursor.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/cursor/cursor.spec.ts)

### getFulfilledResult

Extract fulfilled results from an array of settled promises.

**example**

```ts
import { getFulfilledResult } from '@well-balanced/utils'

const promises = [
  Promise.resolve(1),
  Promise.reject(new Error('Failure')),
  Promise.resolve(3),
]

const settled = await Promise.allSettled(promises)
const results = getFulfilledResult(settled)

console.log(results) // [1, 3]
```

[source](https://github.com/well-balanced/utils/blob/main/src/getFulfilledResult/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/getFulfilledResult/getFulfilledResult.spec.ts)

### msleep

Sleep for a given number of milliseconds.

**example**

```ts
import { msleep } from '@well-balanced/utils'

await msleep(1000) // Sleep for 1 second
console.log('1 second later')
```

[source](https://github.com/well-balanced/utils/blob/main/src/msleep/index.ts)

### kst

Get the current date and time in Korea Standard Time.

**example**

```ts
import { kst } from '@well-balanced/utils'

const koreanTime = kst()
console.log(koreanTime)
```

### formatKst

Format a date object to a string in Korea Standard Time.

**example**

```ts
import { formatKst } from '@well-balanced/utils'

const date = new Date()
const formattedDate = formatKst(date, 'yyyy-MM-dd HH:mm:ss')
console.log(formattedDate)
```

### filterOut

Filter out elements from an array based on a comparator function.

**example**

```ts
import { filterOut } from '@well-balanced/utils'

const array = [1, 2, 3, 4, 5]
const valuesToRemove = [2, 4]
const comparator = (a: number, b: number) => a === b

const result = filterOut(array, valuesToRemove, comparator)
console.log(result) // [1, 3, 5]
```

### hashIndex

Generate a hash index from a string.

**example**

```ts
import { hashIndex } from '@well-balanced/utils'

const index = hashIndex('example', 10)
console.log(index)
```

### notEmpty

Check if a value is not null or undefined.

**example**

```ts
import { notEmpty } from '@well-balanced/utils'

const value = 'example'
if (notEmpty(value)) {
  console.log('Value is not empty')
}
```

### randomInt

Generate a random integer between a given range.

**example**

```ts
import { randomInt } from '@well-balanced/utils'

const randomValue = randomInt(1, 10)
console.log(randomValue)
```

### safeSample

Get a random element from an array excluding certain values.

**example**

```ts
import { safeSample } from '@well-balanced/utils'

const array = [1, 2, 3, 4, 5]
const valuesToExclude = [2, 4]
const comparator = (a: number, b: number) => a === b

const result = safeSample(array, valuesToExclude, comparator)
console.log(result)
```

### sample

Get a random element from an array.

**example**

```ts
import { sample } from '@well-balanced/utils'

const array = [1, 2, 3, 4, 5]
const result = sample(array)
console.log(result)
```

## License

MIT
