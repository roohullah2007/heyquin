import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"instrument-sans-variable"', ...defaultTheme.fontFamily.sans],
                mono: ['Geist Mono', 'monospace'],
            },
            colors: {
                'quin-yellow': '#f4c542',
                'quin-blue': '#87ceeb',
                'quin-beige': '#f5f1e8',
                'quin-tan': '#F0ECDF',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                'marquee-slow': 'marquee 30s linear infinite',
                'marquee-logos': 'marquee 40s linear infinite',
            },
        },
    },

    plugins: [forms],
};
