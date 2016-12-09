# generate-weapp-module

> Auto generate wechat weapp modules

## Install

```bash
$ npm install generate-weapp-module --save
```

## Useage

```js
const generate = require('generate-weapp-module');

const res = generate({
    root: __dirname,
    name: 'demo'
});

console.log(res);
```

## OPTIONS

### options

Type: `Object`

### return file

Type: `String`
generated file path.

