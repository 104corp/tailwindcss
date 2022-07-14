export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.tag': {
          display: 'inline-flex',
          padding: '2px 8px',
          'max-width': '300px',
          'border-width': '1px',
          'border-radius': '12px',
          'font-size': '14px',
          'line-height': '20px',
        },
        '.tag-primary': {
          color: "theme('colors.lake.100')",
          'background-color': "theme('colors.white')",
          'border-color': "theme('colors.lake.100')",
        },
        '.tag-primary-disabled': {
          color: "theme('colors.gray.500')",
          'background-color': "theme('colors.gray.100')",
          'border-color': "theme('colors.gray.100')",
          'pointer-events': 'none',
        },
        '.tag-secondary': {
          color: "theme('colors.white')",
          'background-color': "theme('colors.lake.100')",
          'border-color': "theme('colors.lake.100')",
        },
        '.tag-secondary-disabled': {
          color: "theme('colors.white')",
          'background-color': "theme('colors.gray.400')",
          'border-color': "theme('colors.gray.400')",
          'pointer-events': 'none',
        },
      },
      variants('tag')
    )
  }
}
