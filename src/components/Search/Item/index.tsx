import { title } from 'process';
import * as React from 'react';
import { useState, useEffect } from 'react';

function Item({ item, index, length, searchTab, setSearchTab }: any) {
    return (
        <div
            className={`group w-full`}
            onClick={() => {
                setSearchTab(item.title);
            }}
        >
            <div
                className={`${index === 0 ? 'rounded-tl-3xl' : ''} ${
                    index === length - 1 ? 'rounded-tr-3xl' : ''
                } flex items-center justify-center  h-[6.3rem] w-full cursor-pointer  hover:bg-primary-color hover:text-white-color ${
                    item.title === searchTab
                        ? ' bg-primary-color text-white-color'
                        : 'text-black-color bg-white-color'
                }`}
            >
                <div className="flex items-center justify-center gap-2 p-auto ">
                    <img
                        src={item.image}
                        alt={item.title}
                        className={`group-hover:brightness-[200%] group-hover:grayscale-[100%] ${
                            item.title === searchTab
                                ? ' brightness-[200%] grayscale-[100%]'
                                : ''
                        }`}
                    />
                    <span className="text-sm uppercase font-bold">
                        {item.title}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Item;
