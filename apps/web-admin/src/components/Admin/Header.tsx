// src/components/Admin/Header.tsx
import React from 'react';
import { NotificationsNone as BellIcon } from '@mui/icons-material';

interface HeaderProps {
    logoText: string;
    isLoggedIn: boolean;
    onLoginLogout: () => void;
    menuItems: { label: string; onClick: () => void }[];
}

const Header: React.FC<HeaderProps> = ({ logoText, isLoggedIn, onLoginLogout, menuItems }) => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">{logoText}</div>
            <nav className="space-x-4">
                {menuItems.map((item, index) => (
                    <button key={index} className="text-gray-700 hover:text-blue-600" onClick={item.onClick}>
                        {item.label === 'Bell' ? <BellIcon /> : item.label}
                    </button>
                ))}
                <button className="text-gray-700 hover:text-blue-600" onClick={onLoginLogout}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </nav>
        </header>
    );
};

export default Header;