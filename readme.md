# gatsby-theme-andy

<p style="text-align:center;" align="center">
<img src="https://github.com/aravindballa/gatsby-theme-andy/raw/master/andy-logo.png" alt="theme andy logo"  width="200" height="auto"/>
<br/>
<img alt="npm" src="https://img.shields.io/npm/v/gatsby-theme-andy">
</p>

This is inspired by the work of [Andy](https://notes.andymatuschak.org/About_these_notes) and is based on [gatsby-theme-brain](https://github.com/aengusmcmillin/gatsby-theme-brain). Also uses [react-stacked-pages-hook](https://github.com/mathieudutour/gatsby-n-roamresearch/tree/master/packages/react-stacked-pages-hook) for staking up the notes side by side. And unleashes the power of [theme-ui](https://theme-ui.com/home) for easy themeable components.

[https://notes.aravindballa.com](https://notes.aravindballa.com/) uses this with a few custom components and custom styles.

## Getting started

> This theme requires alteast NodeJS v12. You can check your version by running `node -v` in your terminal. [Know more](https://github.com/aengusmcmillin/gatsby-theme-brain#note-this-theme-requires-nodejs-v12)

### From scratch

Video tutorial 👇

[![click to watch](https://i.ytimg.com/vi/bf5Wj-1IHa4/hqdefault.jpg)](https://youtu.be/bf5Wj-1IHa4)

_Link to the [video](https://youtu.be/bf5Wj-1IHa4)_

- Create a new directory and from that directory, run `npm init`.
- Add all the dependencies `yarn add gatsby react react-dom gatsby-theme-andy`.
- Create a file `gatsby-config.js`. Now we add `gatsby-theme-andy` to plugins and a `title` in `siteMetadata` in that config.

  ```js
  module.exports = {
    siteMetadata: {
      title: 'My Notes',
    },
    plugins: [`gatsby-theme-andy`],
  };
  ```

- Create directory `content` at root and add a few `md` files. We can use `[[]]` syntax to interlink the pages. Look at [this directory](./sample-content) for an example.
- Now we add these scripts below to `package.json` and run `yarn develop`.

  ```json
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "clean": "gatsby clean"
  },
  ```

### Adding to an exsisting Gatsby project

> _Detailed steps coming soon_

## Configuration

All the plugin options valid for [gatsby-theme-brain](https://github.com/aengusmcmillin/gatsby-theme-brain) can be given to this theme as well. Other than those, we have

| Option                       | Default Value | Description                                                    |
| ---------------------------- | ------------- | -------------------------------------------------------------- |
| `themeUIOtherwiseConfigured` | `false`       | Enable this if you have already setup theme-ui in your project |

### Configuring the theme

This project uses `theme-ui` which allows us to easily theme the site. You can customize the theme by adding a file at `.src/gatsby-theme-andy/theme.js`. The default values for the theme are at [src/theme.js](./src/theme.js). You can copy these to the new file you created and edit the values as you wish. 😎

<!-- TODO add example from notes.aravindballa.com after updating it -->

### Shadowing components

You can shadow/override a few components for increased customizability. In your project, you would need to place them at `./gatsby-theme-andy/src/components`. ⚡️Have a look at the default components to see what `props` they get. Components you can override -

| Component                                                       | Description                                                                                                                                                                               |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [BrainNote.js](./src/components/BrainNote.js)                   | This is the note page and it is responsible for collecting all the popups and passing them to the `MdxComponents.js`. It's really a cool way of doing it.                                 |
| [BrainNoteContainer.js](./src/components/BrainNoteContainer.js) | This is the layout page that stacks up the notes side by side.                                                                                                                            |
| [Popover.js](./src/components/Popover.js)                       | The component that pops up when you hover over an internal link.                                                                                                                          |
| [Header.js](./src/components/Header.js)                         | The top bar of the website. If you just want to change the text, you can do it in `gatsby-config.js -> siteMetadata -> title`.                                                            |
| [Footer.js](./src/components/Footer.js)                         | Footer that contains the `ReferredBlock` as well as the message at the bottom of the note.                                                                                                |
| [RefererdBlock.js](./src/components/ReferredBlock.js)           | The block which contains all the references (Referred in section) to the note.                                                                                                            |
| [Tippy.js](./src/components/Tippy.js)                           | This has the TippyJS configs. You can configure things like the [hover animations](https://atomiks.github.io/tippyjs/v6/animations/) here. Remember to change the css import as well.     |
| [MdxComponents.js](./src/components/MdxComponents.js)           | This has a custom component `AnchorTag` which gets the popover as a prop and displays it when we hover over an internal link. If you wish to add extra MDX components, this is the place! |

## Contribution

This project is relatively new. Please report issues you face and yes, I'd be happy to accept PRs. 😉
