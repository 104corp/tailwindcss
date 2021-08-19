export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.layout-container': {
          '@apply max-w-full': {},
          '@screen md':{
            'max-width':'1024px'
          },
          '@screen lg':{
            'max-width':'1168px'
          },
          '@screen xl':{
            'max-width':'1440px'
          },
        }
      },
      variants('bLayoutContainer')
    )
  }
}