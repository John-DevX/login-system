import { createContext } from "react";
import {User} from '../../types/User';
export interface UserType {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<UserType>(null!);