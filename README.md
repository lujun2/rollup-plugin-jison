# Still under development

# rollup-plugin-jison

[![Build Status](https://travis-ci.org/lujun2/rollup-plugin-jison.svg?branch=master)](https://travis-ci.org/lujun2/rollup-plugin-jison) [![NPM Version](https://img.shields.io/npm/v/rollup-plugin-jison.svg)](https://npmjs.org/package/rollup-plugin-jison) [![License](https://img.shields.io/npm/l/rollup-plugin-jison.svg)](https://github.com/lujun2/rollup-plugin-jison/blob/master/LICENSE.md)

A [rollup](http://rollupjs.org) plugin allowing you to import [Jison](https://zaa.ch/jison/) grammars as parsers directly in your code.

```js
import { parse } from "grammar.jison";
console.log(parse("language to parse"));
```

## Install

```sh
npm install --save-dev rollup-plugin-jison
```

## Usage

```js
import { rollup } from "rollup";
import jison from "rollup-plugin-jison";

rollup({
  entry: "main.js",
  plugins: [jison()]
});
```
