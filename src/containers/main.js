/**
 * @format
 */
import React, { useState } from 'react';
import { MainView } from '../components/views';

const MainContainer = props => {
    const { activeUser } = props;
    return (
        <>
            <MainView activeUser={activeUser} />
        </>
    );
};

export default MainContainer;
