/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigation from './pages/base/Navigation';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://ddfa6f7f88274a8dba744cb502ca1cff@sentry.io/1469312').install();

AppRegistry.registerComponent(appName, () => Navigation);
