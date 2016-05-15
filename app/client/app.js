import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';

const config = {
  appContainer: 'builderApp',
  appDataContainer: 'builderData',
  builderData: {}
};

// document.getElementsByTagName('title')[0] = config.appTitle;

config.builderData = JSON.parse(document.getElementById(config.appDataContainer).innerHTML);
document.getElementById(config.appDataContainer).innerHTML = "";

ReactDOM.render(<Main builderData={config.builderData}/>, document.getElementById(config.appContainer));
