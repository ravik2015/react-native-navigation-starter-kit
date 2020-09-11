/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {registerScreens} from './src/config/routes';
import {store} from './src/store/setup';

console.disableYellowBox = true;

// Navigation.events().registerAppLaunchedListener(() => {
//   registerScreens(store, Provider);
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'Login',
//       },
//     },
//   });
// });

Navigation.events().registerAppLaunchedListener(() => {
  registerScreens(store, Provider);
});

// Navigation.events().registerAppLaunchedListener(() => {
//   registerScreens(store, Provider);
// });