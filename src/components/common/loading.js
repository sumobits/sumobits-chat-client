/**
 * @format
 */
import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import { Colors } from '../../utils';

const LoadingIndicator = () => {
    return (
        <View style={[ styles.container, styles.horizontal ]}>
            <ActivityIndicator size='large' color={Colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.tertiary,
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        left: 0,
        opacity: 0.7,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});

export default LoadingIndicator;
