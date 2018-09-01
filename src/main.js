import { Jison } from 'jison';
import { createFilter } from 'rollup-pluginutils';

export default (options = {}) => ({
  name: 'jison',
  transform (grammar, id) {
    const { include = ['*.jison', '**/*.jison'], exclude } = options;
    const filter = createFilter(include, exclude);
    if (!filter(id)) return null;

    const parser = new Jison.Generator(grammar, { moduleType: 'js' });

    const source = parser.generate();
    const exporter = `
parser.parse = parser.parse.bind(parser);
export default parser;
    `;

    return {
      code: `${source} ${exporter}`,
      map: { mappings: '' }
    };
  }
});
