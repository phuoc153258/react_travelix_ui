import * as React from 'react';
import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Search from '../../components/Search';
import Tour from '../../components/Tour';

function Home() {
    return (
        <>
            <Banner />
            <Search />
            <Tour />
        </>
    );
}

export default Home;
