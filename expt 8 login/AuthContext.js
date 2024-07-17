import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function Auth({ children }) {
    const [user, setUser] = useState(false);

    const login = (username, password) => {
        const predefinedUsers = [
            { 'Username': 'someone1', 'Password': 'pass' },
            { 'Username': 'someone2', 'Password': 'pass' },
            { 'Username': 'someone3', 'Password': 'pass' }
        ];
        const userData = predefinedUsers.find((u) => u.Username === username && u.Password === password);
        if (userData) {
            setUser(true);
            localStorage.setItem('user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(false);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}
