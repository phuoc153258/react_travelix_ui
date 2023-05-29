/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            colors: {
                'purple-color': '#350a4e',
                'primary-color': '#fa9e1b',
                'white-color': '#fff',
                'violet-color': '#8d4fff',
                'yellow-color': '#fa9e1b',
                'black-color': '#2d2c2c',
                'btn-black': '#31124b',
                'bg-header': 'rgba(54, 19, 84, 0.6)',
                'bg-header-scroll': 'rgba(54, 19, 84, 0.85)',
                'offer-color': '#eda84a',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
