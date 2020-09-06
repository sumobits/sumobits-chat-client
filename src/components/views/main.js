/**
 * @format
 */
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    ContactList, 
    MessageList,
    NewsList,
    SettingsList
} from '../screens';
import { Colors, Styles } from '../../utils';

const Tabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            backBehavior='history'
            initialRouteName='news'
            lazy={true}
            tabBarOptions={{
                activeTintColor: Colors.ghostwhite,
                inactiveTintColor: Colors.white,
                style: Styles.tabBar,
            }}
        >
            <Tab.Screen
                component={NewsList}
                name='news'
                options={{
                    headerStyle: Styles.tabHeader,
                    tabBarLabel: 'News',
                    tabBarIcon: ({
                        color,
                        size
                    }) => (
                            <MaterialCommunityIcons
                                color={color}
                                name="calendar-clock"
                                size={size}
                            />
                        ),
                    title: 'News',
                }}
            />
            <Tab.Screen
                component={MessageList}
                name='message'
                options={{
                    headerStyle: Styles.tabHeader,
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({
                        color,
                        size
                    }) => (
                            <MaterialCommunityIcons
                                color={color}
                                name="calendar-clock"
                                size={size}
                            />
                        ),
                    title: 'Messages',
                }}
            />
            <Tab.Screen
                component={ContactList}
                name='contacts'
                options={{
                    headerStyle: Styles.tabHeader,
                    tabBarLabel: 'Contacts',
                    tabBarIcon: ({
                        color,
                        size
                    }) => (
                            <MaterialCommunityIcons
                                color={color}
                                name="calendar-clock"
                                size={size}
                            />
                        ),
                    title: 'Contacts',
                }}
            />
            <Tab.Screen
                component={SettingsList}
                name='settings'
                options={{
                    headerStyle: Styles.tabHeader,
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({
                        color,
                        size
                    }) => (
                            <MaterialCommunityIcons
                                color={color}
                                name="calendar-clock"
                                size={size}
                            />
                        ),
                    title: 'Settings',
                }}
            />
        </Tab.Navigator>
    );
}

const MainView = props => {
    const {} = props;
    return(
        <Tabs />
    );
};

export default MainView;
