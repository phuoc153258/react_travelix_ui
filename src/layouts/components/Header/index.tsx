import * as React from 'react';
import { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

function Header() {
    const [showTopBar, setShowTopBar] = useState<any>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) setShowTopBar(true);
            if (window.scrollY >= 40) setShowTopBar(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header">
            <TopBar showTopBar={showTopBar} />
            <Navbar showTopBar={showTopBar} />
        </div>
    );
}

export default Header;
