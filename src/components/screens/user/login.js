/**
 * @format
 */
import React, { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LoadingIndicator from '../../common/loading';
import { Colors, Styles } from '../../../utils';
import { IMAGE_CALLOUT_LIGHT } from '../../../assets';

const LoginScreen = props => {
    const { context , navigation } = props;
    const [ email, setEmail ] = useState(context.user && context.user.email);
    const [ password, setPassword ] = useState();

    const onLogin = () => {
        if (!email || !password) {
            Alert.alert('Validation Error', 
                'One or more fields is missing.');
            return;
        }

        context.login(email, password);
    };

    const onRegister = () => {
        navigation.setOptions(context);
        navigation.navigate('register');
    };

    return (
        <>
            <ScrollView style={styles.formContainer} >
                    <View style={styles.heading}>
                        <Image source={IMAGE_CALLOUT_LIGHT} style={styles.headingImg}/>
                        <Text style={styles.headingText}>
                            Welcome to Sumobits Chat
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <TextInput onChangeText={v => setEmail(v)}
                            placeholder='Email' style={Styles.input} />
                        <TextInput onChangeText={v => setPassword(v)}
                            placeholder='Password' secureTextEntry={true}
                            style={Styles.input} />
                        <View styles={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={onLogin} style={[Styles.button, styles.button]}>
                                <Text style={[Styles.buttonText, styles.buttonText]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                        <TouchableOpacity onPress={onRegister}>
                            <Text style={[Styles.link, styles.createLink]}>Create Account</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
            </ScrollView>
            {context.execution.loading && 
                <LoadingIndicator />}
            {context.execution.error && 
                Alert.alert('Error', context.execution.error.message)}
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.quaternary,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 30,
        width: '85%',
    },
    buttonGradient: {
        flex: 1,
    },
    buttonText: {
        color: Colors.ghostwhite,
    },
    createLink: {
        alignSelf: 'center',
        color: Colors.quaternary,
        fontSize: 18,
    },
    form: {
        padding: 10,
    },
    formContainer: {
        alignContent: 'center',
        backgroundColor: Colors.ghostwhite,
        color: Colors.base,
        flex: 1,
    },
    heading: {
        alignSelf: 'center',
        flex: 1,
        paddingTop: 20,
    },
    headingImg: {
        height: 200,
        marginLeft: 30,
        resizeMode: 'contain',
        width: 200,
    },
    headingText: {
        color: Colors.quaternary,
        fontSize: 20,
        marginTop: 10,
    },
});

export default LoginScreen;
