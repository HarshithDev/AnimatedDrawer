import React from 'react';
import ApplicationNavigator from './src/engine/Navigator/RootNavigator';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {

  return (
    <React.Fragment>
      <ApplicationNavigator />
    </React.Fragment>
  );
}

export default App;
