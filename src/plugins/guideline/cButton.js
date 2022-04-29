export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.btn': {
          '@apply inline-block font-700 rounded': {},
    
          '&:focus:not(:focus-visible)': {
            'outline': 'none'
          },
    
          '&[class*=\'disabled\']': {
            'cursor': 'default',
            'pointer-events': 'none'
          }
        },
    
        '.btn-size-small': {
          'padding': '5px 16px',
          'min-width': '90px',
          '@apply text-14': {}
        },
    
        '.btn-size-middle': {
          'padding': '5px 16px',
          'min-width': '120px',
          '@apply text-14': {}
        },
    
        '.btn-size-large': {
          'padding': '9px 16px',
          'min-width': '154px',
          '@apply text-18': {}
        },
    
        '.btn-primary': {
          '@apply text-white bg-orange-300 border border-orange-300':{},
    
          '&:hover': {
            '@apply bg-orange-400 border-orange-400 shadow-none': {}
          }
        },
    
        '.btn-primary-disabled': {
          '@apply text-white bg-gray-400 border border-gray-400': {}
        },
    
        '.btn-secondary': {
          '@apply text-orange-400 bg-white border border-orange-400': {},
    
          '&:hover': {
            'box-shadow': '0 0 4px 0 theme(\'colors.orange.300\')',
            '@apply bg-white border-orange-300 text-orange-300': {}
          }
        },
    
        '.btn-secondary-disabled': {
          '@apply text-gray-400 bg-white border border-gray-400': {}
        },
    
        '.btn-third': {
          '@apply text-14 text-gray-500': {},
    
          '&:hover': {
            '@apply text-orange-400': {}
          }
        },
    
        '.btn-fourth': {
          '@apply text-14 text-blue-200': {},
    
          '&:hover': {
            '@apply text-blue-100': {}
          },
    
          '&:visited': {
            '@apply text-purple-100': {}
          }
        },
    
        '.btn-third-disabled, .btn-fourth-disabled': {
          '@apply text-14 text-gray-400': {}
        }
      },
      variants('cButton')
    )
  }
}