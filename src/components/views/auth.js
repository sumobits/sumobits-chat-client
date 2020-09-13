/**
 * @format
 */
import React from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../../contexts';
import { 
    LoginScreen, 
    RegisterScreen 
} from '../screens';
import LoadingIndicator from '../common/loading';
import { Colors } from '../../utils';

const RegisterScreenWrapper = ({ navigation, route }) => {
    return (
        <AuthContext.Consumer>
            {context => {
                return (
                    <RegisterScreen {...context} navigation={navigation} />
                );
            }}
        </AuthContext.Consumer>
    );
};

const LoginScreenWrapper = ({ navigation, route }) => {
    return (
        <AuthContext.Consumer>
            {context => {
                return (
                    <LoginScreen {...context} navigation={navigation} />
                );
            }}
        </AuthContext.Consumer>
    );
};

const StackNavigator = createStackNavigator();

const AuthView = props => {
    const {
        error,
        loading,
    } = props;

    return (
        <>
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
                        title: 'Register',
                    }}
                />
            </StackNavigator.Navigator>
            { loading && <LoadingIndicator /> }
            { error && Alert.alert('Error', error) }
        </>
    );
};

export default AuthView;
