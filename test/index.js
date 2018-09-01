import test from 'ava';
import { rollup } from 'rollup';
import rollup_plugin_jison from '..';
import path from 'path';

test(t =>
  rollup({
    entry: path.join(__dirname, 'grammar.jison'),
    plugins: [rollup_plugin_jison()]
  })
    .then(bundle => bundle.generate({ format: 'cjs' }))
    .then(generated => {
      const exports = {};
      const fn = new Function('exports', 'module', 'require', generated.code);
      fn(exports, module, require);
      const { parse } = exports;
      t.deepEqual(parse('1 + 2'), 3);
      t.deepEqual(parse('1 - 2'), -1);
      t.deepEqual(parse('1 * 2'), 2);
      t.deepEqual(parse('1 / 2'), 0.5);
    })
);
