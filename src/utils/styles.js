/**
 * @format
 */
import { StyleSheet } from 'react-native';
import Colors from './colors';

export default Styles = StyleSheet.create({
    body: {
        fontFamily: 'Helvetica, Arial, sans-serif;',
        fontSize: 16,
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    button: {
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderColor: Colors.tertiary,
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth,
        paddingVertical: 12,
        textShadowColor: Colors.primary,
        textShadowOffset: { height: 1, width: 1 },
        textShadowRadius: 1,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: Colors.white,
        borderColor: Colors.tertiary,
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
    },
    link: {
        color: Colors.white,
        fontSize: 12,
        paddingTop: 8,
        textDecorationLine: 'underline',
    },
    tabBar: { 
        backgroundColor: Colors.quaternary 
    },
    tabHeader: {
        backgroundColor: Colors.quaternary,
        color: Colors.white,
    },
});
