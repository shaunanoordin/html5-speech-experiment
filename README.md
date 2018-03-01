# HTML5 Speech Experiment

An experiment to use the still-in-development (as of Mar 2018) Web Speech API.

This experimental web app:
- Captures voice input. (Speech Recognition)
- Reads text. (Speech Synthesis)
- Only works for Chrome (tested on ver 64 on OSX) and with the English language. At least, for the moment.

## References

- Dev Ref: [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

## Development

- This is a web app built on HTML5, JavaScript and CSS.
- It uses Babel to transpile 'modern' ES6 code into 'current' (2016) JavaScript code.
- It uses Webpack to bundle JS files together. (Important for making the transpiled ES6 'import' functionality work.)
- Its also uses Stylus to make writing CSS easier.
- Developing the web app requires Node.js installed on your machine and a handy command line interface. (Bash, cmd.exe, etc)
- However, the _compiled_ web app itself can be run simply by opening the `index.html` in a web browser. (Chrome, Firefox, etc)

Project anatomy:

- Source JS (ES6 JavaScript) and STYL (Stylus CSS) files are in the `/src` folder.
- Compiled JS and CSS files are in the `/app` folder.
- Media assets are meant to be placed in the `/assets` folder, but this is optional.
- Entry point is `index.html`.

Starting the project:

1. Install the project dependencies by running `npm install`
2. Run `npm start` to start the server.
3. Open `http://localhost:3000` on your browser to view the app.

Alternatively, there's a developer mode:

1. `npm install`
2. `npm run dev`
3. `http://localhost:3000`
4. Changes to the JS and STYL files will now be compiled automatically; i.e. Babel/Webpack and Stylus now _watch_ the files. Refreshing the browser window should should show the latest edits.
