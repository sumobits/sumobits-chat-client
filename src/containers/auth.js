/**
 * @format
 */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../contexts';
import AuthView from '../components/views/auth';
import MainContainer from './main';
import {
    createGql,
    findGql,
    loginGql,
} from '../gql/user';

const AuthContainer = () => {
    const [ activeUser, setActiveUser ] = useState(false);
    const [ loginSuccess, setLoginSuccess ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ handleCreate, { loading: createLoading } ] = useMutation(createGql, {
        onCompleted: d => {
            setActiveUser(d.createUser);
            setError(false);
        },
        onError: e => {
            setActiveUser(false);
            setError(e.message);
        },
    });
    const [ handleLogin, { loading: loginLoading } ] = useMutation(loginGql, {
        onCompleted: d => {
            setActiveUser(d.loginUser);
            setError(false);
            setLoginSuccess(true);
        },
        onError: e => {
            setActiveUser(false);
            setError(e.message);
            setLoginSuccess(false);
        },
        update: (cache, { data }) => {
            const activeUser = data.loginUser;
            cache.writeQuery({
                query: findGql,
                data: { findUser: activeUser, }
            });
        },
    });

    const context = {
        actions: {
            handleCreate,
            handleLogin,
        },
        state: { activeUser },
    };

    if (loginSuccess) {
        return (
            <MainContainer activeUser={activeUser} />
        );
    } else {
        return (
            <AuthContext.Provider value={context}>
                <AuthView 
                    error={error}
                    loading={(createLoading || loginLoading)}
                />
            </AuthContext.Provider>
        );
    }
};

export default AuthContainer;
