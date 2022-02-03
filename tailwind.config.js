module.exports = {
  mode: 'jit',
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    options: {
      // Whitelisting some classes to avoid purge
      safelist: [],
    },
    content: ['node_modules/tv-*/dist/tv-*.umd.min.js'],
  },
}
