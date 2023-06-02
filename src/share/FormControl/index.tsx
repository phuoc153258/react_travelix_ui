import * as React from 'react';
import { useState, useEffect } from 'react';

function FormControl({ label, type, alt, width }: any) {
    return (
        <div className={width}>
            <label
                htmlFor=""
                className="block text-white-color text-sm font-bold uppercase mb-3"
            >
                {label}
            </label>
            {type === 'select' ? (
                <select className="w-full border-none text-[#929191] py-3 px-4">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            ) : (
                <input
                    type={type}
                    placeholder={alt}
                    className="w-full border-none text-[#929191] py-3 px-4"
                />
            )}
        </div>
    );
}

export default FormControl;
