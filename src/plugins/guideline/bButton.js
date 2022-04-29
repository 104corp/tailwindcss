export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.btn': {
          '@apply inline-block font-700 rounded': {},

          '&:focus:not(:focus-visible)': {
            outline: 'none',
          },

          "&[class*='disabled']": {
            cursor: 'default',
            'pointer-events': 'none',
          },
        },

        '.btn-size-small': {
          padding: '5px 16px',
          'min-width': '90px',
          '@apply text-14': {},
        },

        '.btn-size-middle': {
          padding: '5px 16px',
          'min-width': '120px',
          '@apply text-14': {},
        },

        '.btn-size-large': {
          padding: '6px 16px',
          'min-width': '154px',
          '@apply text-18': {},
        },

        '.btn-primary': {
          '@apply text-white bg-lake-200 border border-lake-200': {},

          '&:hover': {
            '@apply bg-lake-100 border-lake-100 shadow-none': {},
          },
        },

        '.btn-primary-disabled': {
          '@apply text-white bg-gray-400 border border-gray-400': {},
        },

        '.btn-secondary': {
          '@apply text-lake-200 border border-lake-200': {},

          '&:hover': {
            'box-shadow': "0 0 4px 0 theme('colors.lake.100')",
            '@apply text-lake-100 border-lake-100': {},
          },
        },

        '.btn-secondary-disabled': {
          '@apply text-gray-400 border border-gray-400': {},
        },

        '.btn-third': {
          '@apply text-14 text-lake-200': {},

          '&:hover': {
            '@apply text-lake-100': {},
          },
        },

        '.btn-fourth': {
          '@apply text-14 text-blue-400': {},

          '&:hover': {
            '@apply text-blue-300': {},
          },

          '&:visited': {
            '@apply text-purple-100': {},
          },
        },

        '.btn-third-disabled, .btn-fourth-disabled': {
          '@apply text-14 text-gray-400': {},
        },
      },
      variants('bButton')
    )
  }
}
