module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIDs: false,
          removeTitle: false,
        },
      },
    },
    'removeDimensions',
    'removeXMLNS',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['data-name', 'id']
      }
    }
  ]
}; 