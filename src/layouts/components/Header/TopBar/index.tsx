import * as React from 'react';
import { useState, useEffect } from 'react';
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

function TopBar() {
    return (
        <div className="bg-purple-color flex justify-center">
            <div className="h-9 color text-white font-medium text-xs flex justify-between items-center min-w-[80%]">
                <div className="flex justify-between items-center gap-8">
                    <span>+84 945 000 917</span>
                    <div className="flex justify-betweentext-xs items-center gap-5">
                        <button className="hover:text-yellow-color">
                            <FaPinterest />
                        </button>
                        <button className="hover:text-yellow-color">
                            <FaFacebookF />
                        </button>
                        <button className="hover:text-yellow-color">
                            <FaDribbble />
                        </button>
                        <button className="hover:text-yellow-color">
                            <FaBehance />
                        </button>
                        <button className="hover:text-yellow-color">
                            <FaLinkedinIn />
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="hover:text-yellow-color">LOGIN</button>
                    <button className="hover:text-yellow-color">|</button>
                    <button className="hover:text-yellow-color">REGISTER</button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
