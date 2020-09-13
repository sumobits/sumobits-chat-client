/**
 * @format
 */
import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Colors, Styles } from '../../../utils';

const renderConversation = conversation => {
    return (
        <View>

        </View>
    );
};

const ConversationScreen = props => {
    const { conversations } = props;

    return (
        <View style={styles.container}>
            <FlatList
                data={conversations}
                ListHeaderComponent={
                    () => (!conversations ||  !conversations.length ?
                    <Text style={styles.empty}>No Active Conversations</Text>
                    : null)
                }
                renderItem={renderConversation}
                style={styles.listStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    list: { justifyContent: 'center' },
    empty: { textAlign: 'center', }
});

export default ConversationScreen;
