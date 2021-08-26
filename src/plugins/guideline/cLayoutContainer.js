export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.layout-container': {
          '@apply max-w-full': {},
          '@screen md':{
            'max-width':'960px'
          },
          '@screen lg':{
            'max-width':'1200px'
          },
          '@screen xl':{
            'max-width':'1320px'
          },
        }
      },
      variants('cLayoutContainer')
    )
  }
}