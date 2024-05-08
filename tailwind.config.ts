import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                red: '#E53E3E',
                green: '#48BB78',

                blue: {
                    light: '#4766FF32',
                    medium: '#4766FF',
                },

                orange: {
                    light: '#FE9A244c',
                    medium: '#FE9A24',
                    mediumDark: '#ed8936',
                },

                primary: {
                    50: '#F3FCFCFF',
                    100: '#e5f5f5',
                    200: '#A4D7D7',
                    300: '#76C2C4',
                    400: '#49AEB0',
                    500: '#1B9A9C',
                    600: '#167B7D',
                    700: '#105C5E',
                    800: '#0B3E3E',
                    900: '#051F1F',
                },

                secondary: {
                    100: '#FCEBCC',
                    200: '#F8D799',
                    300: '#F5C366',
                    400: '#F1AF33',
                    500: '#EE9B00',
                    600: '#BE7C00',
                    700: '#8F5D00',
                    800: '#5F3E00',
                    900: '#301F00',
                },

                // blue: {
                //     50: '#CAE6FC',
                //     100: '#B9DDFB',
                //     200: '#A1D2FA',
                //     300: '#82C3F8',
                //     400: '#58AFF6',
                //     500: '#0079FF',
                //     600: '#0C80DE',
                //     700: '#0A6DBD',
                //     800: '#095CA1',
                //     900: '#074E89',
                // },
            },
        },
    },
    plugins: [],
}
export default config
