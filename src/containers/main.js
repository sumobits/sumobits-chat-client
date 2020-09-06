/**
 * @format
 */
import React, { useState } from 'react';
import { AuthContext } from '../contexts';
import MainView from '../components/views/main';

const MainContainer = props => {
    const { activeUser} = props;
    return (
        <AuthContext.Consumer>
            {context => {
                <MainView {...context} />
            }}
        </AuthContext.Consumer>
    );
};

export default MainContainer;
