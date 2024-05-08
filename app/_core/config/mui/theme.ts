'use client'

import createTheme from '@mui/material/styles/createTheme'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1B9A9C',
        },
        secondary: {
            main: '#A4D7D7',
        },
    },

    typography: {
        fontFamily: ['iransans'].join(','),
        button: {
            textTransform: 'none',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    gap: '1rem',
                    width: '100%',
                    display: 'flex',
                    borderRadius: '0',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            },
        },

        MuiInput: {
            styleOverrides: {
                root: {
                    width: '100%',

                    '&::before ': {
                        border: 'none',
                    },

                    '&::after': {
                        border: 'none',
                    },

                    '&:hover:not(.Mui-disabled, .Mui-error)::before': {
                        border: 'none',
                    },

                    '& input[type="number"]': {
                        MozAppearance: 'textfield',
                    },

                    '& input[type="number"]::-webkit-outer-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },

                    '& input[type="number"]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    outline: 'none',
                },
                icon: {
                    left: '0.5rem',
                    right: 'auto',
                },
                select: {
                    paddingLeft: '2rem',
                    paddingRight: '0.5rem !important',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: 'none',
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
            },
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    textAlign: 'center',
                },
            },
        },

        // MuiTableRow: {
        //     styleOverrides: {
        //         root: {
        //             '& .MuiTableRow-hover:hover': {
        //                 backgroundColor: '#000 !important',
        //             },
        //         },
        //     },
        // },

        MuiDialog: {
            styleOverrides: {
                paper: {
                    padding: '1rem',
                    borderRadius: '0',
                },
            },
        },
    },
})
