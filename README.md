# generate-weapp-init

> Auto generate wechat weapp menus

## Install

```bash
$ npm install generate-weapp-init --save
```

## Useage

```js
const generate = require('generate-weapp-init');

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

