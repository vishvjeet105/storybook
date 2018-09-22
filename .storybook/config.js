//import { configure } from '@storybook/react';
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: [],
});

// function loadStories() {
//   require('../src/stories/story.js');
//   // You can require as many stories as you need.
// }

// configure(loadStories, module);
import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
