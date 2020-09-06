/**
 * @format
 */
import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Colors, Styles } from '../../../utils';

const RegisterScreen = props => {
    const { 
        actions: { handleCreate },
        navigation,
        state: { activeUser },
    } = props;
    const [ email, setEmail ] = useState(); 
    const [ nickName, setNickName ] = useState();
    const [ firstName, setFirstName ] = useState();
    const [ lastName, setLastName ] = useState();
    const [ password, setPassword ] = useState(); 
    const [ verifyPassword, setVerifyPassword ] = useState();

    const onSubmit = async () => {
        if (!firstName || !lastName || 
                !email || !nickName || !password) {
            Alert.alert('Validation Error',  'One or more fields is not supplied');
            return;
        }

        if (password !== verifyPassword) {
            Alert.alert('Validation Error', 'Passwords do not match.');
            return;
        }

        handleCreate({
            variables: {
                firstName,
                lastName,
                email,
                password,
                nickName,
            }
        });
    };

    return (
        <>
            <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.formContainer}>
                <View style={styles.form}>
                    <TextInput
                        onChangeText={v => setEmail(v)}
                        placeholder='Email*' style={Styles.input} />
                    <TextInput
                        onChangeText={v => setNickName(v)}
                        placeholder='Nickname*' style={Styles.input} />
                    <TextInput
                        onChangeText={v => setFirstName(v)}
                        placeholder='First Name*' style={Styles.input} />
                    <TextInput
                        onChangeText={v => setLastName(v)}
                        placeholder='Last Name*' style={Styles.input} />
                    <TextInput
                        onChangeText={v => setPassword(v)}
                        placeholder='Password*' secureTextEntry={true} 
                        style={Styles.input} />
                    <TextInput
                        onChangeText={v => setVerifyPassword(v)}
                        placeholder='Verify Password*' secureTextEntry={true} 
                        style={Styles.input} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onSubmit}
                        style={[Styles.button, styles.button]}>
                            <Text style={[Styles.buttonText, styles.buttonText]}>Create</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {
                activeUser &&
                Alert.alert('Success', 'User created!', [
                    {
                        onPress: () => {
                            navigation.navigate('login');
                            return;
                        },
                        text: 'OK'
                    }
                ])
            }
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
    buttonText: {
        color: Colors.ghostwhite,
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
    scrollContainer: {
        paddingBottom: 50,
    },
});

export default RegisterScreen;
