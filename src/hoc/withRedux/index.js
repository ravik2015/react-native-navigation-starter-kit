import React, {createRef, PureComponent, Suspense} from 'react';
import {ActivityIndicator, BackHandler, SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';

export const ThemeContext = React.createContext('light');

const withRedux = (store) => (WrappedComponent) => () => {
  class ReduxWrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.componentRef = createRef();
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
      return true;
    }

    hasMethod(method) {
      return (
        this.componentRef &&
        this.componentRef.current &&
        this.componentRef.current[method] &&
        this.componentRef.current[method].apply
      );
    }

    onNavigationButtonPressed(...args) {
      if (this.hasMethod('onNavigationButtonPressed')) {
        this.componentRef.current.onNavigationButtonPressed(...args);
      }
    }

    render() {
      const {SafeAreaColor} = this.props;
      return (
        <Provider store={store}>
          <ThemeContext.Provider value="dark">
            <Suspense
              fallback={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator />
                </View>
              }>
              <SafeAreaView
                style={{
                  backgroundColor: SafeAreaColor ? SafeAreaColor : 'white',
                }}
              />
              <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
              <SafeAreaView />
            </Suspense>
          </ThemeContext.Provider>
        </Provider>
      );
    }
  }
  return React.forwardRef((props, ref) => {
    return <ReduxWrapper {...props} forwardedRef={ref} />;
  });
};

export default withRedux;