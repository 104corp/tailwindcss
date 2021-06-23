module.exports = {
  screens: {
    sm: { min: '100%' },
    md: { min: '1024px' },
    lg: { min: '1281px' },
    xl: { min: '1680px' }
  },
  colors: {
    transparent: 'transparent',
    current: 'currentColor',

    black: '#000',
    white: '#fff',

    gray: {
      100: '#F3F3F3',
      200: '#EEEEEE',
      300: '#DDDDDD',
      400: '#A9A9A9',
      500: '#7E7E7E',
      600: '#292929'
    },
    red: {
      100: '#FFE9EC',
      200: '#EA475B'
    },
    orange: {
      100: '#FFEEDF',
      200: '#FFA573',
      300: '#FF843F'
    },
    lake: {
      100: '#39C8D0',
      200: '#00AFB8'
    },
    green: {
      100: '#E9F6DC',
      200: '#70BE20'
    },
    blue: {
      100: '#E6f9FA',
      200: '#DBE8FF',
      300: '#4E91FF',
      400: '#1654B9'
    },
    purple: {
      100: '#78269F'
    }
  },
  spacing: () => {
    const multipleFour = {}
    for (let i = 2; i <= 120; i++) {
      multipleFour[i * 4] = i * 4 + 'px'
    }
    return Object.assign({}, {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px'
    }, multipleFour)
  },
  backgroundColor: theme => theme('colors'),
  backgroundImage: {
    none: 'none',
    'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
    'gradient-to-tr': 'linear-gradient(to top right, var(--gradient-color-stops))',
    'gradient-to-r': 'linear-gradient(to right, var(--gradient-color-stops))',
    'gradient-to-br': 'linear-gradient(to bottom right, var(--gradient-color-stops))',
    'gradient-to-b': 'linear-gradient(to bottom, var(--gradient-color-stops))',
    'gradient-to-bl': 'linear-gradient(to bottom left, var(--gradient-color-stops))',
    'gradient-to-l': 'linear-gradient(to left, var(--gradient-color-stops))',
    'gradient-to-tl': 'linear-gradient(to top left, var(--gradient-color-stops))',
  },
  gradientColorStops: theme => theme('colors'),
  backgroundOpacity: theme => theme('opacity'),
  backgroundPosition: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    right: 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    top: 'top',
  },
  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain',
  },
  borderColor: theme => ({
    ...theme('colors'),
    default: theme('colors.gray.300', 'currentColor'),
  }),
  borderOpacity: theme => theme('opacity'),
  borderRadius: {
    none: '0',
    default: '4px',
    full: '50%'
  },
  borderWidth: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },
  boxShadow: {
    none: 'none',
    '028': '0 2px 8px 0 rgba(41, 41, 41, .2)',
    '008': '0 0 8px 0 rgba(41, 41, 41, .2)',
    '024': '0 2px 4px 0 rgba(41, 41, 41, .2)'
  },
  container: {},
  cursor: {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    'not-allowed': 'not-allowed',
  },
  divideColor: theme => theme('borderColor'),
  divideOpacity: theme => theme('borderOpacity'),
  divideWidth: theme => theme('borderWidth'),
  fill: {
    current: 'currentColor',
  },
  flex: {
    1: '1 1 0%',
    auto: '1 1 auto',
    initial: '0 1 auto',
    none: 'none',
    '10a': '1 0 auto'
  },
  flexGrow: {
    '0': '0',
    default: '1',
  },
  flexShrink: {
    '0': '0',
    default: '1',
  },
  fontFamily: {
    sans: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
  },
  fontSize: {
    12: ['12px', { lineHeight: '18px' }],
    14: ['14px', { lineHeight: '20px' }],
    16: ['16px', { lineHeight: '22px' }],
    base: ['16px', { lineHeight: '28px' }],
    18: ['18px', { lineHeight: '24px' }],
    20: ['20px', { lineHeight: '28px' }],
    24: ['24px', { lineHeight: '32px' }],
    28: ['28px', { lineHeight: '38px' }],
    36: ['36px', { lineHeight: '48px' }],
    45: ['45px', { lineHeight: '64px' }]
  },
  fontWeight: {
    400: 400,
    700: 700
  },
  height: theme => ({
    auto: 'auto',
    ...theme('spacing'),
    full: '100%',
    screen: '100vh',
  }),
  inset: {
    '0': '0',
    auto: 'auto',
    '1/2': '50%'
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    28: '28px',
    32: '32px',
    38: '38px',
    48: '48px',
    64: '64px'
  },
  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
  },
  margin: (theme, { negative }) => ({
    auto: 'auto',
    ...theme('spacing'),
    ...negative(theme('spacing')),
  }),
  maxHeight: {
    full: '100%',
    screen: '100vh',
  },
  maxWidth: (theme, { breakpoints }) => ({
    none: 'none',
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
    full: '100%',
    ...breakpoints(theme('screens')),
  }),
  minHeight: {
    '0': '0',
    full: '100%',
    screen: '100vh',
  },
  minWidth: {
    '0': '0',
    full: '100%',
  },
  objectPosition: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    right: 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    top: 'top',
  },
  opacity: {
    '0': '0',
    '25': '0.25',
    '50': '0.5',
    '75': '0.75',
    '100': '1',
    '16': '.16'
  },
  order: {
    first: '-9999',
    last: '9999',
    none: '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    '11': '11',
    '12': '12',
  },
  outline: {
    none: ['2px solid transparent', '2px'],
    white: ['2px dotted white', '2px'],
    black: ['2px dotted black', '2px'],
  },
  padding: theme => theme('spacing'),
  placeholderColor: theme => theme('colors'),
  placeholderOpacity: theme => theme('opacity'),
  space: (theme, { negative }) => ({
    ...theme('spacing'),
    ...negative(theme('spacing')),
  }),
  stroke: {
    current: 'currentColor',
  },
  strokeWidth: {
    '0': '0',
    '1': '1',
    '2': '2',
  },
  textColor: theme => theme('colors'),
  textOpacity: theme => theme('opacity'),
  width: theme => ({
    auto: 'auto',
    ...theme('spacing'),
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    screen: '100vw',
  }),
  zIndex: {
    auto: 'auto',
    '0': '0',
    '10': '10',
    '20': '20',
    '30': '30',
    '40': '40',
    '50': '50',
  },
  gap: theme => theme('spacing'),
  gridTemplateColumns: {
    none: 'none',
    '1': 'repeat(1, minmax(0, 1fr))',
    '2': 'repeat(2, minmax(0, 1fr))',
    '3': 'repeat(3, minmax(0, 1fr))',
    '4': 'repeat(4, minmax(0, 1fr))',
    '5': 'repeat(5, minmax(0, 1fr))',
    '6': 'repeat(6, minmax(0, 1fr))',
    '7': 'repeat(7, minmax(0, 1fr))',
    '8': 'repeat(8, minmax(0, 1fr))',
    '9': 'repeat(9, minmax(0, 1fr))',
    '10': 'repeat(10, minmax(0, 1fr))',
    '11': 'repeat(11, minmax(0, 1fr))',
    '12': 'repeat(12, minmax(0, 1fr))',
  },
  gridAutoColumns: {
    auto: 'auto',
    min: 'min-content',
    max: 'max-content',
    fr: 'minmax(0, 1fr)',
  },
  gridColumn: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-7': 'span 7 / span 7',
    'span-8': 'span 8 / span 8',
    'span-9': 'span 9 / span 9',
    'span-10': 'span 10 / span 10',
    'span-11': 'span 11 / span 11',
    'span-12': 'span 12 / span 12',
    'span-full': '1 / -1',
  },
  gridColumnStart: {
    auto: 'auto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    '11': '11',
    '12': '12',
    '13': '13',
  },
  gridColumnEnd: {
    auto: 'auto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    '11': '11',
    '12': '12',
    '13': '13',
  },
  gridTemplateRows: {
    none: 'none',
    '1': 'repeat(1, minmax(0, 1fr))',
    '2': 'repeat(2, minmax(0, 1fr))',
    '3': 'repeat(3, minmax(0, 1fr))',
    '4': 'repeat(4, minmax(0, 1fr))',
    '5': 'repeat(5, minmax(0, 1fr))',
    '6': 'repeat(6, minmax(0, 1fr))',
  },
  gridAutoRows: {
    auto: 'auto',
    min: 'min-content',
    max: 'max-content',
    fr: 'minmax(0, 1fr)',
  },
  gridRow: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-full': '1 / -1',
  },
  gridRowStart: {
    auto: 'auto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
  },
  gridRowEnd: {
    auto: 'auto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
  },
  transformOrigin: {
    center: 'center',
    top: 'top',
    'top-right': 'top right',
    right: 'right',
    'bottom-right': 'bottom right',
    bottom: 'bottom',
    'bottom-left': 'bottom left',
    left: 'left',
    'top-left': 'top left',
  },
  scale: {
    '0': '0',
    '50': '.5',
    '75': '.75',
    '90': '.9',
    '95': '.95',
    '100': '1',
    '105': '1.05',
    '110': '1.1',
    '125': '1.25',
    '150': '1.5',
  },
  rotate: {
    '-180': '-180deg',
    '-90': '-90deg',
    '-45': '-45deg',
    '-12': '-12deg',
    '-6': '-6deg',
    '-3': '-3deg',
    '-2': '-2deg',
    '-1': '-1deg',
    '0': '0',
    '1': '1deg',
    '2': '2deg',
    '3': '3deg',
    '6': '6deg',
    '12': '12deg',
    '45': '45deg',
    '90': '90deg',
    '180': '180deg',
  },
  translate: (theme, { negative }) => ({
    ...theme('spacing'),
    ...negative(theme('spacing')),
    '-full': '-100%',
    '-1/2': '-50%',
    '1/2': '50%',
    full: '100%',
  }),
  skew: {
    '-12': '-12deg',
    '-6': '-6deg',
    '-3': '-3deg',
    '-2': '-2deg',
    '-1': '-1deg',
    '0': '0',
    '1': '1deg',
    '2': '2deg',
    '3': '3deg',
    '6': '6deg',
    '12': '12deg',
  },
  transitionProperty: {
    none: 'none',
    all: 'all',
    default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
  transitionTimingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  transitionDuration: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms',
  },
  transitionDelay: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms',
  },
  animation: {
    none: 'none',
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite',
  },
  keyframes: {
    spin: {
      to: { transform: 'rotate(360deg)' },
    },
    ping: {
      '75%, 100%': { transform: 'scale(2)', opacity: '0' },
    },
    pulse: {
      '50%': { opacity: '.5' },
    },
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
      },
      '50%': {
        transform: 'none',
        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
      },
    },
  },
}