import {navigatorRoot, setSideMenuRoot} from './navigationOptions';

export const authorization = () => navigatorRoot('Login');
export const dashboard = (SafeAreaColor) =>
  setSideMenuRoot('Dashboard', 'SideMenu', SafeAreaColor);