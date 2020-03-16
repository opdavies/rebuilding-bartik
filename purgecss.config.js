let glob = require('glob-all')

module.exports = {
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  paths: () => glob.sync([
    'public/index.html'
  ]),
  whitelist: [],
  whitelistPatterns: []
}
