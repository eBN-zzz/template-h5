module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      mediaQuery: false,
      exclude: [/node_modules/],
    },
  },
}
