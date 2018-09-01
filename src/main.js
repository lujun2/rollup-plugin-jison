import { Jison } from 'jison';
import { createFilter } from 'rollup-pluginutils';

export default (options = {}) => ({
  name: 'jison',
  transform (grammar, id) {
    const {
      include = ['*.jison', '**/*.jison'],
      exclude,
      type = 'lalr'
    } = options;
    const filter = createFilter(include, exclude);
    if (!filter(id)) return null;

    const parser = new Jison.Generator(grammar, {
      moduleType: 'js',
      type
    });

    const source = parser.generate();
    const exporter = `
const parse = parser.parse.bind(parser);
parser.parse = parse;

export { parse };
export default parser;
    `;

    return {
      code: `${source} ${exporter}`,
      map: { mappings: '' }
    };
  }
});
