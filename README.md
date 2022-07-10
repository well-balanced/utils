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
  - [License](#license)


## Installation

```sh
$ npm i @well-balanced/utils
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

[source](https://github.com/well-balanced/utils/blob/main/src/reduceSeries/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/reduceSeries/reduceSeries.spec.ts)

### mapSeries

[source](https://github.com/well-balanced/utils/blob/main/src/mapSeries/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/mapSeries/mapSeries.spec.ts)

### readdirRecursive

[source](https://github.com/well-balanced/utils/blob/main/src/readdirRecursive/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/readdirRecursive/readdirRecursive.spec.ts)

### setPropertyRecursive

[source](https://github.com/well-balanced/utils/blob/main/src/setPropertyRecursive/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/setPropertyRecursive/setPropertyRecursive.spec.ts)

### cursor

source
- [encodeCursor](https://github.com/well-balanced/utils/blob/main/src/cursor/encodeCursor.ts)
- [decodeCursor](https://github.com/well-balanced/utils/blob/main/src/cursor/decodeCursor.ts)
  
[test](https://github.com/well-balanced/utils/blob/main/src/cursor/cursor.spec.ts)

### getFulfilledResult

[source](https://github.com/well-balanced/utils/blob/main/src/getFulfilledResult/index.ts)

[test](https://github.com/well-balanced/utils/blob/main/src/getFulfilledResult/getFulfilledResult.spec.ts)

### msleep

[source](https://github.com/well-balanced/utils/blob/main/src/msleep/index.ts)



## License

MIT
