/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const fs = require('fs-extra');
const path = require('path');
const mkdirp = require('mkdirp');

const generate = (options) => {
    if (typeof options !== 'object') throw new Error('Options must be a object.');

    options = Object.assign({
        name: 'demo',
        root: false
    }, options);

    if (!options.root) throw new Error('You must specify a root directory.');

    const pageRoot = path.resolve(options.root, '..', options.name);

    if (fs.existsSync(pageRoot)) throw new Error(`Directory '${options.name}' is already exists.`);

    mkdirp.sync(pageRoot);

    try {
        fs.copySync('./template/src', pageRoot);
        console.log("generate success!");
    } catch (err) {
        console.error(err);
    }

    return pageRoot;
};

module.exports = generate;
