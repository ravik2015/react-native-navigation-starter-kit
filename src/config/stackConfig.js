export function defaultNavigationStyle(passProps) {
  return {
    statusBar: {
      visible: true,
      style: 'light',
      hideWithTopBar: false,
      blur: false,
      backgroundColor: passProps ? passProps.SafeAreaColor : '#A8A8A8',
    },
    topBar: {
      visible: false,
      height: 0,
    },
    animations: {
      push: {
        waitForRender: true,
      },
    },
  };
}

export function navigationStyleWithTopBar(title, passProps) {
  return {
    statusBar: {
      visible: true,
      style: 'light',
      hideWithTopBar: false,
      blur: false,
      backgroundColor: passProps.SafeAreaColor
    },
    topBar: {
      visible: true,
      height: 0,
      title: {
        text:title
      }
    },
    animations: {
      push: {
        waitForRender: true,
      },
    },
  };
}

