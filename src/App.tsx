/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import FirstScreen from "./screens/FirstScreen";




const App = () => {

  return (
      <SafeAreaProvider>

          <FirstScreen />


      </SafeAreaProvider>
  )
}

export default App;
