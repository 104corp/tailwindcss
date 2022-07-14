export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.btn': {
          display: 'inline-block',
          'font-weight': '700',
          'border-radius': '4px',

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
          'font-size': '14px',
          'line-height': '20px',
        },

        '.btn-size-middle': {
          padding: '5px 16px',
          'min-width': '120px',
          'font-size': '14px',
          'line-height': '20px',
        },

        '.btn-size-large': {
          padding: '9px 16px',
          'min-width': '154px',
          'font-size': '18px',
          'line-height': '24px',
        },

        '.btn-primary': {
          color: '#ffffff',
          'background-color': "theme('colors.orange.300')",
          'border-width': '1px',
          'border-color': "theme('colors.orange.300')",

          '&:hover': {
            'background-color': "theme('colors.orange.400')",
            'border-color': "theme('colors.orange.400')",
            'box-shadow': 'none',
          },
        },

        '.btn-primary-disabled': {
          color: "theme('colors.white')",
          'background-color': "theme('colors.gray.400')",
          'border-width': '1px',
          'border-color': "theme('colors.gray.400')",
        },

        '.btn-secondary': {
          color: "theme('colors.orange.400')",
          'border-width': '1px',
          'border-color': "theme('colors.orange.400')",

          '&-gray': {
            color: "theme('colors.gray.500')",
            'border-width': '1px',
            'border-color': "theme('colors.gray.500')",
          },

          '&:hover, &-gray:hover': {
            color: "theme('colors.orange.300')",
            'border-color': "theme('colors.orange.300')",
            'box-shadow': "0 0 4px 0 theme('colors.orange.300')",
          },
        },

        '.btn-secondary-disabled': {
          color: "theme('colors.gray.400')",
          'border-width': '1px',
          'border-color': "theme('colors.gray.400')",
        },

        '.btn-third': {
          'font-size': '14px',
          'line-height': '20px',
          color: "theme('colors.gray.500')",

          '&:hover': {
            color: "theme('colors.orange.400')",
          },
        },

        '.btn-fourth': {
          'font-size': '14px',
          'line-height': '20px',
          color: "theme('colors.blue.200')",

          '&:hover': {
            color: "theme('colors.blue.100')",
          },

          '&:visited': {
            color: "theme('colors.purple.100')",
          },
        },

        '.btn-third-disabled, .btn-fourth-disabled': {
          'font-size': '14px',
          'line-height': '20px',
          color: "theme('colors.gray.400')",
        },
      },
      variants('cButton')
    )
  }
}
