/**
 * @format
 */
import React, { useState } from 'react';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { useMutation } from '@apollo/react-hooks';
import { UserContext } from '../contexts';
import LoginView from '../components/views/login';
import { 
    createGql,
    loginGql,
    logoutGql,
} from '../gql/user';
import { Constants } from '../utils';
import MainContainer from './main';

const _context = {
    execution: {
        error: undefined,
        loading: false,
    },
    storedUserId: undefined,
    user: undefined,
};

const storeActiveUserId = id => {
    useAsyncStorage(Constants.STORARGE_USER_KEY).setItem(id);
};

(async () => {
    console.log('checking storage ....');
    await useAsyncStorage(Constants.STORARGE_USER_KEY).getItem((error, result) => {
            if (error) {
                console.error(`error reading from async storage -> ${error}`);
                return;
            }

            if (result) {
                console.debug(`found stored user id -> ${result}`);
                _context.storedUserId = result;
            }
        });
})();

const UserContainer = () => {
    const [ context, setContext ] = useState(_context);
    const [handleCreate] = useMutation(createGql, {
        onCompleted: d => {
            setContext({
                execution:{
                    error: undefined,
                    loading: false,
                },
                user: d.createUser,
            });
            storeActiveUserId(d.createUser.id);
        },
        onError: e => {
            setContext({
                execution: {
                    error: e,
                    loading: false,
                },
                user: undefined,
            });
        },
    });
    const [handleLogin] = useMutation(loginGql, {
        onCompleted: d => {
            setContext({
                execution: {
                    error: undefined,
                    loading: false,
                },
                user: d.loginUser,
            });
            storeActiveUserId(d.loginUser.id);
        },
        onError: e => {
            setContext({
                execution: {
                    error: e,
                    loading: false,
                },
                user: undefined,
            });
        },
    });
    const [handleLogout]  = useMutation(logoutGql, {
        onCompleted: d => {
            setContext({
                execution: {
                    error: undefined,
                    loading: false,
                },
                user: undefined
            });
            storeActiveUserId(undefined);
        },
        onError: e => {
            setContext({
                execution: {
                    error: e,
                    loading: false,
                },
                user: undefined,
            });
        },
    });

    context.create = (firstName, lastName, email, nickname, password) => {
        setContext({
            execution: {
                error: undefined,
                loading: true,
            },
            user: undefined,
        });
        handleCreate({
            variables: {
                firstName,
                lastName,
                email,
                password,
                nickname,
            }
        });
    };

    context.login = (email, password) => {
        setContext({
            execution: {
                error: undefined,
                loading: true,
            },
            user: undefined,
        });
        handleLogin({
            variables: {
                email,
                password,
            }
        });
    };

    context.logout = id => {
        setContext({
            execution: {
                error: undefined,
                loading: true,
            },
            user: undefined,
        });
        handleLogout({
            variables: {
                id,
            }
        });
    };

    return (
        <UserContext.Provider value={context}>
            {
                context.user && context.user.online 
                ? <MainContainer />
                : <LoginView />
            }
        </UserContext.Provider>
    );
};


export default UserContainer;
