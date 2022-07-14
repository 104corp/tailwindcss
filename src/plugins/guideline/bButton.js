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
          padding: '6px 16px',
          'min-width': '154px',
          'font-size': '18px',
          'line-height': '24px',
        },

        '.btn-primary': {
          color: '#ffffff',
          'background-color': "theme('colors.lake.200')",
          'border-width': '1px',
          'border-color': "theme('colors.lake.200')",

          '&:hover': {
            'background-color': "theme('colors.lake.100')",
            'border-color': "theme('colors.lake.100')",
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
          color: "theme('colors.lake.200')",
          'border-width': '1px',
          'border-color': "theme('colors.lake.200')",

          '&:hover': {
            color: "theme('colors.lake.100')",
            'border-color': "theme('colors.lake.100')",
            'box-shadow': "0 0 4px 0 theme('colors.lake.100')",
          },
        },

        '.btn-secondary-disabled': {
          color: "theme('colors.white')",
          'background-color': "theme('colors.gray.400')",
          'border-width': '1px',
          'border-color': "theme('colors.gray.400')",
        },

        '.btn-third': {
          'font-size': '14px',
          'line-height': '20px',
          color: "theme('colors.lake.200')",

          '&:hover': {
            color: "theme('colors.lake.100')",
          },
        },

        '.btn-fourth': {
          'font-size': '14px',
          'line-height': '20px',
          color: "theme('colors.blue.400')",

          '&:hover': {
            color: "theme('colors.blue.300')",
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
      variants('bButton')
    )
  }
}
