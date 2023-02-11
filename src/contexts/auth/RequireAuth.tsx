import {useContext} from 'react';
import { AuthContext } from './authContext';
import { Home } from '../../pages/Home';
export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const {user} :any = useContext(AuthContext);
    if(!user){
        return <Home/>
    };    
    
    return children;
}