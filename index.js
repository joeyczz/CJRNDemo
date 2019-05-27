/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigation from './pages/base/Navigation';

AppRegistry.registerComponent(appName, () => Navigation);
