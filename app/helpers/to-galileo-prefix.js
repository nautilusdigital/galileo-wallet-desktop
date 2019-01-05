import { helper } from '@ember/component/helper';

import toGalileoPrefix from '../utils/to-galileo-prefix';

export function galileoPrefixHelper([value]) {
  return toGalileoPrefix(value);
}

export default helper(galileoPrefixHelper);
