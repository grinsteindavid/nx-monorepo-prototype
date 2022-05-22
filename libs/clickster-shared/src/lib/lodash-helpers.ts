import { VERSION as V4 } from 'lodash';
import { VERSION as V3 } from 'lodash3';

export const testLodashVersions = () => {
  console.log(`lodash3`, JSON.stringify(V3));
  console.log(`lodash4`, JSON.stringify(V4));
};
