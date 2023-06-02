import * as React from 'react';
import { useState, useEffect } from 'react';
import { FaEllipsisH } from 'react-icons/fa';

function Button({ title, color, customStyle = '' }: any) {
    return (
        //  hover:from-violet-color hover:to-primary-color transition-all duration-300 delay-300 ease-linear
        <button
            className={`text-sm uppercase rounded-full text-white-color font-bold flex gap-5 items-center mx-auto px-8 py-4 ${color} ${customStyle}`}
        >
            {title} <FaEllipsisH />
        </button>
    );
}

export default Button;
