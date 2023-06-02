import * as React from 'react';
import Logo from '../Logo';
import Item from '../Item';
import Search from '../Search';

function Navbar({ showTopBar }: any) {
    return (
        <div
            className={`fixed uppercase w-full  ${
                showTopBar
                    ? 'pt-[80px] bg-header-color'
                    : 'pt-[40px] animate-change-navbar-animation bg-header-scroll-color'
            } pb-[40px]  top-0 z-[8]`}
        >
            <div className="mx-auto max-w-[80%] flex justify-between items-center">
                <Logo />
                <Item />
                <Search />
            </div>
        </div>
    );
}

export default Navbar;
