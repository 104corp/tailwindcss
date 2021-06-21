export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.dialog': {
          padding: '24px',
          'border-radius': '4px',
          width: '100%',
        },
        '.dialog-size-small': {
          'max-width': '328px',
          'min-height': '168px',
          'box-shadow': '0 2px 4px 0 #9d9d9d',
        },
        '.dialog-size-middle': {
          'max-width': '480px',
          'min-height': '184px',
          'box-shadow': '0 0 8px 0 #7e7e7e',
        },
        '.dialog-size-large': {
          'max-width': '720px',
          'min-height': '256px',
          'box-shadow': '0 0 8px 0 #7e7e7e',
        },
      },
      variants('cDialog')
    )
  }
}
