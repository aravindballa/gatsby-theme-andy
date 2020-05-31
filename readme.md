# gatsby-theme-andy

<p style="text-align:center;" align="center">
<img src="https://github.com/aravindballa/gatsby-theme-andy/raw/master/andy-logo.png" alt="theme andy logo"  width="200" height="auto"/>
<br/>
<img alt="npm" src="https://img.shields.io/npm/v/gatsby-theme-andy">
</p>

This is inspired by the work of [Andy](https://notes.andymatuschak.org/About_these_notes) and is based on [gatsby-theme-brain](https://github.com/aengusmcmillin/gatsby-theme-brain). Also uses [react-stacked-pages-hook](https://github.com/mathieudutour/gatsby-n-roamresearch/tree/master/packages/react-stacked-pages-hook) for staking up the notes side by side. This has the functionality of stacking up and backlinking with out any style elements.

Simple Demo - https://codesandbox.io/s/gatsby-theme-andy-demo-tnv6r

[https://notes.aravindballa.com](https://notes.aravindballa.com/) uses this with a few custom components and custom styles.

## Usage

- Create a new Gatsby project
- `yarn add gatsby-theme-andy`
- Add `gatsby-theme-andy` to plugins in `gatsby-config.js`. Add a `title` in `siteMetadata` in your config.
- Create directory `content` at root and add `md` files.
- `gatsby develop`

## Configuration

All the plugin options valid for [gatsby-theme-brain](https://github.com/aengusmcmillin/gatsby-theme-brain) can be given to this theme as well.

You can shadow/override few componenets in your project. In your directory, you would need to place them at `./gatsby-theme-andy/src/components`. Have a look at the default components to see what `props` they get. Components you can override -

- [Popover.js](https://github.com/aravindballa/gatsby-theme-andy/blob/master/src/components/Popover.js) - This is the component which is shown when you hover over an internal link.
- [RefferedBlock.js](https://github.com/aravindballa/gatsby-theme-andy/blob/master/src/components/ReferredBlock.js) - The block which contains all the references (Referred in section) to the note. This is at the bottom of the page.
- [BrainNote.js](https://github.com/aravindballa/gatsby-theme-andy/blob/master/src/components/BrainNote.js) - This is the note page.
- [BrainNoteContainer.js](https://github.com/aravindballa/gatsby-theme-andy/blob/master/src/components/BrainNoteContainer.js) - This is the layout page that stacks up the notes.
- [Tippy.js](https://github.com/aravindballa/gatsby-theme-andy/blob/master/src/components/Tippy.js) - This has the TippyJS configs. You'll have to override this if you want to change the props to Tippy.

## Contribution

This project is relatively new. Please report issues you face and make PRs by forking the project.
