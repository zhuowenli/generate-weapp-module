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

    const modulePage = path.resolve(options.root, options.name);
    const tempPath = path.resolve(__dirname, 'template');

    if (fs.existsSync(modulePage)) {
        console.log(modulePage);
        throw new Error(`Directory '${options.name}' is already exists.`)
    };

    mkdirp.sync(modulePage);

    try {
        fs.copySync(tempPath, modulePage);
    } catch (err) {
        throw new Error(err);
    }

    return modulePage;
};

module.exports = generate;
