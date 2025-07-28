// src/components/Admin/menuConfig.ts
import { ReactNode } from 'react';

export interface MenuItem {
    label: string | ReactNode;
    path: string;
    onClick?: () => void;
}

export const menuItems: MenuItem[] = [
    { label: 'Bell', path: '#', onClick: () => {} }, // Placeholder, à remplacer par une logique si besoin
    { label: 'Orders', path: '/orders' },
    { label: 'Captain Monitoring', path: '/validate-profile' },
];