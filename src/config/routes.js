import { Navigation } from 'react-native-navigation';
import withRedux from '../hoc/withRedux';
import { lazy } from 'react';

const LoginContainer = lazy(() => import('../containers/login'));
const DashboardContainer = lazy(() => import('../containers/dashboard'));

export const registerScreens = (store, Provider) => {
  const withReduxStore = withRedux(store);

  Navigation.registerComponentWithRedux(
    'Login',
    withReduxStore(LoginContainer),
  );
  Navigation.registerComponentWithRedux(
    'DashboardContainer',
    withReduxStore(DashboardContainer),
  );
};
