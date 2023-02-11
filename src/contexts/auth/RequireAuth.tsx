import {useContext} from 'react';
import { AuthContext } from './authContext';
import Login from '../../components/login/Login';
export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const {user} :any = useContext(AuthContext);
    if(!user){
        return <Login/>
    };    
    
    return children;
}