import * as React from 'react';
import { useState, useEffect } from 'react';
import FormControl from '../../share/FormControl';
import Button from '../../share/Button';
import Item from './Item';

const searchTabs = [
    {
        title: 'hotels',
        image: '/hotel.webp',
    },
    {
        title: 'car rentals',
        image: '/car.webp',
    },
    {
        title: 'flights',
        image: '/fly.webp',
    },
    {
        title: 'trips',
        image: '/trip.webp',
    },
    {
        title: 'cruises',
        image: '/cruises.webp',
    },
    {
        title: 'activities',
        image: '/activities.webp',
    },
];

function Search() {
    const [searchTab, setSearchTab] = useState<any>('hotels');

    return (
        <div className="flex gap-5 justify-center search relative w-full bg-gradient-to-r from-primary-color to-violet-color">
            <div className="w-[80%]  py-14 flex gap-5 justify-center">
                <FormControl
                    label={`destination`}
                    type={`text`}
                    alt={``}
                    width="w-[33.3333%]"
                />
                <FormControl
                    label={`check in`}
                    type={`text`}
                    alt={`DD-MM-YYY`}
                    width="w-[16.6666%]"
                />
                <FormControl
                    label={`check out`}
                    type={`text`}
                    alt={``}
                    width="w-[16.6666%]"
                />
                <FormControl
                    label={`adults`}
                    type={`select`}
                    alt={``}
                    width="w-[8.33333%]"
                />
                <FormControl
                    label={`children`}
                    type={`select`}
                    alt={``}
                    width="w-[8.33333%]"
                />
                <div className="w-[16.6666%] flex items-end">
                    <Button title="search" color="bg-btn-black-color" />
                </div>
            </div>
            <div className="absolute w-[80%] flex justify-center items-center top-[-52%] right-0 left-0 mx-auto">
                <>
                    {searchTabs.map((item: any, index: any) => {
                        return (
                            <Item
                                key={index}
                                index={index}
                                length={searchTabs.length}
                                item={item}
                                searchTab={searchTab}
                                setSearchTab={setSearchTab}
                            />
                        );
                    })}
                </>
            </div>
        </div>
    );
}

export default Search;
