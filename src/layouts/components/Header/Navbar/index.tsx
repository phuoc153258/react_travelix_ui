import * as React from 'react';
import { useState, useEffect } from 'react';
import Logo from '../Logo';
import Item from '../Item';

function Navbar() {
    return (
        <div className="fixed uppercase ">
            <div className="min-w-[80%]">
                <Logo />
                <Item />
            </div>
        </div>
    );
}

export default Navbar;
