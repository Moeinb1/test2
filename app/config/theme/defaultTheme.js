const { getDynamicSpaces } = require('./util.module');
const colors = require('./colors');

const defaultSizes = {
  ...getDynamicSpaces(1000),
  xs: '0.25rem',
  sm: '0.5rem',
  base: '1rem',
  lg: '1.5rem',
  xl: '2.5rem',
  '2xl': '3.5rem',
  '3xl': '4.5rem',
  '4xl': '5rem',
  container: '1024px',
  mobile: '360px',
};

module.exports = {
  colors,
  spacing: {
    space: defaultSizes,
  },
  direction: 'ltr',
  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
    loading: 2000,
    navbar: 9999,
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.375rem',
    large: '2.5rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    '4xl': '3rem',
    full: '9999px',
  },
  blur: {
    none: 0,
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeights: {
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: '1.75rem',
    tall: 1.625,
    taller: '2',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fonts: {
    IRANSans_Black: 'IRANSans_Black',
    IRANSans_Bold: 'IRANSans_Bold',
    IRANSans_Medium: 'IRANSans_Medium',
    IRANSans_Light: 'IRANSans_Light',
    IRANSans_UltraLight: 'IRANSans_UltraLight',
    IRANSans: 'IRANSans',
    heading: 'IRANSans',
    body: 'IRANSans',
  },
  fontSizes: {
    base: '0.75rem',
    body: '0.875rem',
    subHeading: '0.875rem',
    heading: '1.5rem',
    '3xs': '0.45rem',
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  sizes: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    px: '1px',
    0.5: '0.125rem',
    1.5: '0.375rem',
    2.5: '0.625rem',
    3.5: '0.875rem',
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    prose: '60ch',
    base: '1rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  shadows: {
    xs: `0 0 0 1px var(--arzesh-colors-shadow-0)`,
    sm: `0 1px 2px 0 var(--arzesh-colors-shadow-1)`,
    card: `0px 0px 9px -3px  gray`,
    base: `0 1px 12px 1px var(--arzesh-colors-shadow-2), 0 1px 2px 0 var(--arzesh-colors-shadow-3)`,
    md: `0 4px 6px -1px var(--arzesh-colors-shadow-4), 0 2px 4px -1px var(--arzesh-colors-shadow-5)`,
    lg: `0 10px 15px -3px var(--arzesh-colors-shadow-6), 0 4px 6px -2px var(--arzesh-colors-shadow-7)`,
    xl: `0 20px 25px -5px var(--arzesh-colors-shadow-8), 0 10px 10px -5px var(--arzesh-colors-shadow-9)`,
    '2xl': `0 25px 50px -12px var(--arzesh-colors-shadow-10)`,
    outline: `0 0 0 3px var(--arzesh-colors-primary-500)22`,
    inner: `inset 0 2px 4px 0 var(--arzesh-colors-shadow-11)`,
    none: `none`,
    'dark-lg': `var(--arzesh-colors-shadow-12) 0px 0px 0px 1px, var(--arzesh-colors-shadow-13) 0px 5px 10px, var(--arzesh-colors-shadow-14) 0px 15px 40px`,
    full: `50px 50px 100px 5000px var(--arzesh-colors-shadow-15)`,
    header: `0px 5px 15px var(--arzesh-colors-shadow-15)`,
    // capture: `shadow-[0_0px_50px_0px_rgba(18,255,57,0.8)]`,
    capture: `0 0 60px 0 rgba(18,255,57,0.8)`,

    cardShadow: ` 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)`,
  },
  borders: {
    DEFAULT: '1px',
    0: '0',
    2: '2px',
    3: '3px',
    4: '4px',
    6: '6px',
    8: '8px',
  },
};
