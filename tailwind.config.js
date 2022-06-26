module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#7C3AED',
                accent: '#34D399',
            },
            backgroundImage: {
                'entry-helper': `linear-gradient(to right bottom, rgba(59, 130, 246, 0.4), rgba(124, 58, 237, 0.3)), url('assets/img/entryHelperBg.png')`
            },
            fontFamily: {
                'logo': "'Anton', sans-serif",
            }
        },
    },
    plugins: [],
}
