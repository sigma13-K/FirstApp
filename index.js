/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from '~/App';    // babel-plugin-root-import usage ~
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
