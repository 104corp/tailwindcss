export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.tag': {
          '@apply text-14': {},
          display: 'inline-flex',
          padding: '2px 8px',
          'max-width': '300px',
          'border-width': '1px',
          'border-radius': '12px',
        },
        '.tag-primary': {
          '@apply text-lake-100 bg-white border-lake-100': {},
        },
        '.tag-primary-disabled': {
          '@apply text-gray-500 bg-gray-100 border-gray-100': {},
          '@apply pointer-events-none': {},
        },
        '.tag-secondary': {
          '@apply text-white bg-lake-100 border-lake-100': {},
        },
        '.tag-secondary-disabled': {
          '@apply text-white bg-gray-400 border-gray-400': {},
          '@apply pointer-events-none': {},
        },
      },
      variants('tag')
    )
  }
}
