import * as React from 'react';
import { Link } from 'react-router-dom';

function Item() {
    return (
        <ul className="flex items-center gap-7 text-white-color">
            <li
                className={`relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:mx-auto w-max after:h-[3px] after:bg-gradient-to-r after:from-primary-color after:to-violet-color`}
            >
                <Link to={'/'}>HOME</Link>
            </li>
            <li
                className={`relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:mx-auto w-max after:h-[3px] after:transition-all after:duration-300 after:ease-linear hover:after:bg-gradient-to-r hover:after:from-primary-color hover:after:to-violet-color`}
            >
                <Link to={'/about'}>ABOUT</Link>
            </li>
            <li
                className={`relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:mx-auto w-max after:h-[3px]  after:transition-all after:duration-300 after:ease-linear hover:after:bg-gradient-to-r hover:after:from-primary-color hover:after:to-violet-color`}
            >
                <Link to={'/offers'}>OFFERS</Link>
            </li>
            <li
                className={`relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:mx-auto w-max after:h-[3px]  after:transition-all after:duration-300 after:ease-linear hover:after:bg-gradient-to-r hover:after:from-primary-color hover:after:to-violet-color`}
            >
                <Link to={'/news'}>NEWS</Link>
            </li>
            <li
                className={`relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:mx-auto w-max after:h-[3px]  after:transition-all after:duration-300 after:ease-linear hover:after:bg-gradient-to-r hover:after:from-primary-color hover:after:to-violet-color`}
            >
                <Link to={'/contact'}>CONTACT</Link>
            </li>
        </ul>
    );
}

export default Item;
