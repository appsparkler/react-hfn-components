module.exports = {
  'plugins': [],
  'recurseDepth': 10,
  'source': {
    include: ['./src'],
    includePattern: '.js$',
    excludePattern: '(node_modules/|docs)',
    // 'includePattern': '.+\\.js(doc|x)?$',
    // 'includePattern': '**/*.js',
    // 'excludePattern': '(^|\\/|\\\\)_',
  },
  'sourceType': 'module',
  'tags': {
    'allowUnknownTags': true,
    'dictionaries': ['jsdoc', 'closure'],
  },
  'templates': {
    'cleverLinks': false,
    'monospaceLinks': false,
  },
  'opts': {
    template: './node_modules/ink-docstrap/template',
  },
  'templates': {
    theme: 'cerulean',
  },
}
