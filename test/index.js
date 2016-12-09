/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const generate = require('../')

const res = generate({
    root: __dirname,
    name: 'demo'
});

console.log(res);
