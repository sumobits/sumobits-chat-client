/**
 * @format
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserContext } from '../../contexts';
import { 
    LoginScreen, 
    RegisterScreen 
} from '../screens';
import { Colors } from '../../utils';

const LoginScreenWrapper = ({ navigation, route }) => {
    return (
        <UserContext.Consumer>
            {
                context => {
                    return (
                        <LoginScreen context={context} navigation={navigation} />
                    );
                }
            }
        </UserContext.Consumer>
    );
};

const RegisterScreenWrapper = ({ navigation, route }) => {
    return (
        <UserContext.Consumer>
            {
                context => {
                    return (
                        <RegisterScreen context={context} navigation={navigation} />
                    );
                }
            }
        </UserContext.Consumer>
    );
};

const LoginView = () => {
    const StackNavigator = createStackNavigator();

    return (
        <StackNavigator.Navigator
            initialRouteName='login'>
            <StackNavigator.Screen
                component={LoginScreenWrapper}
                name='login'
                options={{
                    headerShown: false,
                    title: 'Login',
                }}
            />
            <StackNavigator.Screen
                component={RegisterScreenWrapper}
                name='register'
                options={{
                    title: 'Register',
                    headerStyle: {
                        backgroundColor: Colors.quaternary,
                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                    headerTintColor: Colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        paddingLeft: 90,
                    },
                }}
            />
        </StackNavigator.Navigator>
    );
};

export default LoginView;
