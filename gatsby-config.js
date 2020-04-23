const path = require("path");

module.exports = ({
  notesDirectory = "content/",
  noteTemplate = path.join(__dirname, "src/templates/note.js"),
  rootPath = "/",
  rootNote = "about",
  mdxOtherwiseConfigured = false,
}) => ({
  plugins: [
    {
      resolve: "@aengusm/gatsby-theme-brain",
      options: {
        notesDirectory,
        rootPath,
        rootNote,
        noteTemplate,
        mdxOtherwiseConfigured,
      },
    },
  ],
});
