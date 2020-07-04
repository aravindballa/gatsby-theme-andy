const path = require('path');

module.exports = ({
  notesDirectory = 'content/',
  notesFileExtensions = ['.md', '.mdx'],
  noteTemplate = path.join(__dirname, 'src/templates/note.js'),
  additionalNoteTypes = {},
  rootPath = '/',
  rootNote = 'about',
  linkifyHashtags = false,
  hideDoubleBrackets = true,
  mdxOtherwiseConfigured = false,
  themeUIOtherwiseConfigured = false,
  generateRSS = false,
  rssPath = '/rss.xml',
  rssTitle = 'My Notes',
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
        generateRSS,
        rssPath,
        rssTitle,
      },
    },
    !themeUIOtherwiseConfigured && `gatsby-plugin-theme-ui`,
  ],
});
