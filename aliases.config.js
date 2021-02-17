/**
 * alias 정의 파일
 */
const path = require('path');
module.exports = {
  webpack: {}
};

const aliases = {
  '@': 'src',
  '@images': 'src/assets/images'
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports.webpack[alias] = resolveSrc(aliasTo);
}

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
