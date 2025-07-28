// src/components/Admin/Footer.tsx
import React from 'react';

interface FooterProps {
    content: string;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
    return (
        <footer className="bg-white shadow-inner p-4 text-center text-gray-600">
            {content}
        </footer>
    );
};

export default Footer;