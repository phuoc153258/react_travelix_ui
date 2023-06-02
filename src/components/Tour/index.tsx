import * as React from 'react';
import { useState, useEffect } from 'react';

function Tour() {
    return (
        <div className="tour ">
            <div className="px-8 py-20 text-center">
                <h2 className="font-bold pb-8 text-4xl text-black-color">
                    We have the best tours
                </h2>
                <p className="text-2xl italic text-gray-italic-color pb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam eu convallis tortor.
                    <br /> Suspendisse potenti. In faucibus massa arcu, vitae
                    cursus mi hendrerit nec.
                </p>
            </div>
        </div>
    );
}

export default Tour;
