import {Navigation} from 'react-native-navigation';
import {defaultNavigationStyle, navigationStyleWithTopBar} from './stackConfig';

export const navigatorPush = (props) => {
  const {componentId, screenName, passProps} = props;
  Navigation.push(componentId, {
    component: {
      name: screenName,
      passProps: passProps,
      options: defaultNavigationStyle(passProps),
    },
  });
};

export const navigatorPushWithTopBar = (props) => {
  const {componentId, screenName, passProps, title} = props;
  Navigation.push(componentId, {
    component: {
      name: screenName,
      passProps: passProps,
      options: navigationStyleWithTopBar(title, passProps),
    },
  });
};

export const navigatorPop = (props) => {
  const {componentId} = props;
  Navigation.pop(componentId, props);
};

export const navigatorPopTo = (props) => {
  Navigation.popTo(props);
};

export const navigatorRoot = (screenName, passProps) => {
  Navigation.setRoot({
    root: {
      stack: {
        id: screenName,
        children: [
          {
            component: {
              name: screenName,
              options: defaultNavigationStyle(passProps),
              passProps: passProps,
            },
          },
        ],
      },
    },
  });
};

export const navigatorReset = (props) => {
  const {componentId, screenName} = props;
  Navigation.setStackRoot(componentId, [
    {
      component: {
        name: screenName,
        options: defaultNavigationStyle(props.passProps),
      },
    },
  ]);
};

export const setSideMenuRoot = (screenName, sideMenuName, passProps) => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: sideMenuName,
            id: sideMenuName,
            passProps: {
              rootStack: screenName,
            },
            options: {
              statusBar: {
                visible: true,
                drawBehind: false,
                backgroundColor: passProps.SafeAreaColor,
              },
              topBar: {
                visible: false,
              },
            },
          },
        },
        center: {
          stack: {
            id: screenName,
            children: [
              {
                component: {
                  name: screenName,
                  options: {
                    statusBar: {
                      visible: true,
                      drawBehind: false,
                      backgroundColor: passProps.SafeAreaColor,
                    },
                    topBar: {
                      visible: false,
                    },
                  },
                  passProps: passProps,
                },
              },
            ],
          },
        },
      },
    },
  });
};

export const setSideMenuVisibility = (componentId, setVisibility) => {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: setVisibility,
      },
    },
  });
};

export const navigateToOtherScreen = (
  rootStack,
  navigationScreen,
  passProps,
) => {
  Navigation.push(rootStack, {
    component: {
      name: navigationScreen,
      options: {
        sideMenu: {
          left: {
            visible: false,
          },
        },
        topBar: {
          visible: false,
        },
        statusBar: {
          visible: true,
          drawBehind: false,
          backgroundColor: passProps,
        },
      },
      passProps: {SafeAreaColor: passProps},
    },
  });
};
