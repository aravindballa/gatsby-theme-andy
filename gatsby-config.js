const path = require('path');

module.exports = ({
  notesDirectory = 'content/',
  notesFileExtensions = ['.md', '.mdx'],
  noteTemplate = path.join(__dirname, 'src/templates/note.js'),
  additionalNoteTypes = {},
  rootPath = '/',
  rootNote = 'about',
  linkifyHashtags = false,
  hideDoubleBrackets = false,
  mdxOtherwiseConfigured = false,
}) => ({
  siteMetadata: {
    title: 'My Notes',
  },
  plugins: [
    {
      resolve: '@aengusm/gatsby-theme-brain',
      options: {
        notesDirectory,
        notesFileExtensions,
        noteTemplate,
        additionalNoteTypes,
        rootPath,
        rootNote,
        linkifyHashtags,
        hideDoubleBrackets,
        mdxOtherwiseConfigured,
      },
    },
  ],
});
