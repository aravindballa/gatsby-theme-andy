const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'My Notes',
  },
  plugins: [
    {
      resolve: '@aengusm/gatsby-theme-brain',
      options: {
        notesDirectory: 'content/',
        notesFileExtensions: ['.md', '.mdx'],
        noteTemplate: path.join(__dirname, 'src/templates/note.js'),
        additionalNoteTypes: {},
        rootPath: '/',
        rootNote: 'about',
        linkifyHashtags: false,
        hideDoubleBrackets: true,
        mdxOtherwiseConfigured: false,
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
