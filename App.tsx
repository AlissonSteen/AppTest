import { AppRegistry } from 'react-native'
import { expo } from './app.json'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Login from './src/app/Login'


const App = createAppContainer(createStackNavigator({
  LoginScreen: {
      screen: Login
  }
}))

export default App

AppRegistry.registerComponent(expo.name, () => App)