/**
 * @format
 */
import { gql } from '@apollo/client';

export const createGql = gql`
    mutation createUser($firstName: String!, $lastName: String!, 
        $email: String!, $nickName: String!, $password: String!) {
            createUser(firstName: $firstName, lastName: $lastName,
                email: $email, nickname: $nickName, password: $password) {
                    id
                    email
                    nickname
                    refreshToken
                    status
            }
    }
`;

export const findGql = gql`
    query findUser($id: String!) {
        findUser(id: $id) {
            id
            email
            nickname
            contacts {
                id
                email
                nickname
                lastLogin
                online
                status
            }
        }
    }
`;

export const loginGql = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password){
            id
            email
            nickname
            online
            contacts {
                id
                email
                nickname
                lastLogin
                online
                status
            }
        }
    }
`;

export const logoutGql = gql`
    mutation logoutUser($id: String!) {
        logoutUser(id: $id)
    }
`;
