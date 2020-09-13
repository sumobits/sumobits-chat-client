/**
 * @format
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    ContactScreen,
    ConversationScreen,
    NewsScreen,
    SettingsScreen
} from '../screens';
import { Colors, Styles } from '../../utils';

const Tab = createBottomTabNavigator();

const MainView = () => {
    return (
        <Tab.Navigator
                backBehavior='history'
                initialRouteName='conversations'
                lazy={true}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'conversations') {
                            iconName = 'chat';
                        }
                        else if (route.name === 'contacts') {
                            iconName = 'contacts';
                        }
                        else if (route.name === 'news') {
                            iconName = 'newspaper-variant';
                        }
                        else if (route.name === 'settings') {
                            iconName = 'account-settings';
                        }

                        if (focused) {
                            iconName = (`${iconName  }-outline`);
                        }

                        return <MaterialCommunityIcons
                            color={color}
                            name={iconName}
                            size={size}
                        />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: Colors.ghostwhite,
                    inactiveTintColor: Colors.white,
                    style: Styles.tabBar,
                }}
            >
            <Tab.Screen
                component={ConversationScreen}
                name='conversations'
                options={{
                    headerStyle: Styles.tabHeader,
                    tabBarLabel: 'Conversations',
                    title: 'Conversations',
                }}
            />
            <Tab.Screen
                component={ContactScreen}
                name='contacts'
                options={{
                    headerStyle: Styles.tabHeader,
                    tabBarLabel: 'Contacts',
                    title: 'Contacts',
                }}
            />
            <Tab.Screen
                component={NewsScreen}
                name='news'
                options={{
                    headerStyle: Styles.tabHeader,
                    tabBarLabel: 'News',
                    title: 'News',
                }}
            />
            <Tab.Screen
                component={SettingsScreen}
                name='settings'
                options={{
                    headerStyle: Styles.tabHeader,
                    tabBarLabel: 'Settings',
                    title: 'Settings',
                }}
            />
        </Tab.Navigator>
    );
};

export default MainView;
