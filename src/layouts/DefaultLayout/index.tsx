import * as React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

const DefaultLayout = ({ children, medium }: any): JSX.Element | React.ReactNode | any => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default DefaultLayout;
