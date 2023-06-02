import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className="text-3xl font-extrabold text-white-color flex items-center gap-3">
            <Link to={'/'}>
                <img src="/logo.webp" alt="Logo" />
            </Link>
            <Link to={'/'}>TRAVELIX</Link>
        </div>
    );
}

export default Logo;
