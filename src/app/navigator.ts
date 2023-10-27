import { createStackNavigator, createAppContainer } from 'react-navigation'

import Login from './Login'


export const navigator = createAppContainer(createStackNavigator({
    LoginScreen: {
        screen: Login
    }
}))