# rollup-plugin-jison

[![Build Status](https://travis-ci.org/wisefin/rollup-plugin-jison.svg?branch=master)]

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
