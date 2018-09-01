import { Jison } from 'jison';
import { createFilter } from 'rollup-pluginutils';

export default (options = {}) => ({
  name: 'jison',
  transform (grammar, id) {
    const { include = ['*.jison', '**/*.jison'], exclude } = options;
    const filter = createFilter(include, exclude);
    if (!filter(id)) return null;

    const parser = new Jison.Generator(grammar);
    return {
      code: parser.generate(),
      map: { mappings: '' }
    };
  }
});
