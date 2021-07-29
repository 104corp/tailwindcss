export default function() {
  return function({ addComponents, variants }) {
    addComponents({
      '.loading': {
        '&::after': {
          'display': 'block',
          'margin-right': 'auto',
          'margin-left': 'auto',
          'width': '36px',
          'height': '36px',
          'background-image': 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP93AP93AP93AP93AP93AP92AP91AP92AP92AP93AP91AP93AP93AP93AP93AP92AP92AP91AP93AD8JVi4AAAAUdFJOUwBf7JiK+TYpHER6EafDtW3eUgjQFwRxQAAABOtJREFUaN7Fm0ti6yAMRSF2AYMNBu9/rw/xlZ30lxq9C2XQQU6uJAROU8beV6higdEpdK4JxpgQqMkRaRIa6DRcVv1mrEo/YTyYoUhXdBxj2aHHujlu5NHonmREBS4ojK8u7BgCrUajA87xk2MQVVVjrkzDDN7IBtVWU0aHoTnOlsteqljgxhnGltjVsSyOo8zofnIu6RJpIKvxvSz1jkbNWBBBBw/XFJORExqw3S9Fol+jRRwkZBaeHFORmblg46C6oKhqWRSwpCKbs2FBRw4NWtCS7CIqERqkyMiqZBgCDYuhAgd1ciwE3cVfIaqgTHMkn0SX5oD8ioUy2BcyYbBDgy6wGPI0L4VN+EQrMzJbXgxtsJcc7IXWskrMNGkts1pcC7XlsBQoLKSWVQlzIktay0iMckthsPpflsV/sxxoyyvLE8eaFaqHhTrWvlmmBJtiOA5P2kNYxYJl0iSLTvakSVaVCitpkn2i5oXRJtk3y+TVVUVbXb5LkraQluFS1tzuu+UUZd0Vwco+klZFUNZNcT8V7uNhacH84+PjAfPxGB3t4D2HCcOzrXCjtuFg3tCeJeRHsv0YHWuOLLMPpDAcHEfm8u44anAfC5zzxmY7AqvR4ETNP+xA4MF9zHBesXyBqm4SFOCMXphF4MGnpOJdC5sQWA8+nRBYMI3AKx1YMo/Ag1uXR2DFJAIPbl2R5yrYsIBa5tj9ZBLWZXpsknuBwnSDU+wqFw7CtZyKMIZW1+K4q2i4V/PqF47koSl2nFc25FRWuzAH9i4Vgc1zOo72hMzkaWSkgevSmu86U3EL2sPASFfLOcXxN49qOa7D2rV0TdzlbWuS12J5WF37wkzhLnFdKxU0qIcYh1QfUv0DaRpXWk3VXNgxWQ033O/vc4XuccxjDOs4LpGOXbRi0yJHNI+ELWgU0zVj97QMeIbiWmfLgMY7VlRsGrfvZYm42p2KyOZAR+q+P46bL/YBqBmtcWml5GdodrzfvKW8zsroy66xhQmW9/3WB1bRqDCvLy2K30K+8XhUuuua4bSXCzJrMzcmuGO1fv5IzxzFcpa96XwMXGO5Fy/LseVjn8JNO3jGhl82p3U/6ZbW6SN27uzXRasOZDiOOdzE7YH+pHKWhs3LX6MdeDSLLX96CuhuGOaxmr/V8wxIQGf25x9Sh7WEOcd6P6z8y/4FaGYny191JbXtDZr1dg9bZkSF4b4MXyqwws3s2byZ3io9Z8PfvI7IkW6Oj8O+cUqKMxbI396olhrnjp5+mWnl5hmTgfuDl1hO0GODoX9xAzR8mmGcTP/krQeB/W6Z/WO0AmziYvQPQya34+IY5vz9H1+DcNM0ZcOdq38eL7V1bEQCFmS/fueST1Unx/oX+0KtDXtUbGbPr/9+ohaHqRjtzO/aHXLc2BaGtZPmQsL/BgRjlBTezdO6TjBeOP71ZhRbT++GuEDOWu3aVLBrwfY8v9Fz1VRq64y2GFzg0/rsOGHde6eMt6cU25Pn9ZXjM3l++8po9LZtmHxy/MRu8Bxr/5fjXK7b1fA1zk8pzmj918ddMZ3Jr3JcDXeyvuORU8wIe0qxvcS5ot1dT7pS21c5jlx7Li/AzvzOzxTCMj9v4m657Ccwe/83L82iV2vPWV5POZ7dsC8/Kp/gL5I8u+Hf7Qgqdmcdt2ryGQ8f58Ub//3xD8IBgUKPLKhaAAAAAElFTkSuQmCC\')',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
          'background-size': 'contain',
          'content': '\'\'',
          'animation': 'animate-rotate 1s infinite linear'
        },
        '@keyframes animate-rotate': {
          '100%': {
            'transform': 'rotate(1turn)'
          }
        }
      },
      '.loading-mask': {
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'background-color': 'rgba(41, 41, 41, .16)',
        '&.loading::after' :{
          'position': 'absolute',
          'top': 'calc(50% - 18px)',
          'left': 'calc(50% - 18px)',
        }
      }
    },
    variants('cLoading')
    )
  }
}