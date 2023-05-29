import * as React from 'react';
import { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

function Header() {
    return (
        <div>
            <TopBar />
            <Navbar />
        </div>
    );
}

export default Header;
