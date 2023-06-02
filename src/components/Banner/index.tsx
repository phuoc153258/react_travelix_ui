import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '../../share/Button';

function Banner() {
    return (
        <div className="banner">
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(64, 6, 97, 0.4), rgba(64, 6, 97, 0.4)), url('/bg_header.webp')`,
                }}
            >
                <div className="text-center absolute top-[30%] m-auto left-0 right-0 mx-auto">
                    <h1 className="text-8xl uppercase text-white-color font-black">
                        Discover
                    </h1>
                    <h1 className="text-8xl text-white-color font-black font-['Beyond']">
                        the world
                    </h1>
                    <Button
                        customStyle="mt-16"
                        title={`explore now`}
                        color={` bg-gradient-to-r from-primary-color to-violet-color`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
