// src/components/Admin/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationsNone as BellIcon } from '@mui/icons-material';
import { menuItems } from './menuConfig';

interface HeaderProps {
    logoText: string;
    isLoggedIn: boolean;
    onLoginLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ logoText, isLoggedIn, onLoginLogout }) => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">{logoText}</div>
            <nav className="space-x-4">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="text-gray-700 hover:text-blue-600"
                        onClick={item.onClick}
                    >
                        {item.label === 'Bell' ? <BellIcon /> : item.label}
                    </Link>
                ))}
                <button className="text-gray-700 hover:text-blue-600" onClick={onLoginLogout}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </nav>
        </header>
    );
};

export default Header;