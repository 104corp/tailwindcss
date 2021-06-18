export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.mask': {
          'background-color': 'rgba(41, 41, 41, .2)',
        },
        '.bg-gradient-to-t-orange': {
          'background-image': 'linear-gradient(to top, #ffc31b, #ff9100)',
        },
        '.bg-gradient-to-tr-orange': {
          'background-image': 'linear-gradient(to top right, #ffc31b, #ff9100)',
        },
        '.bg-gradient-to-r-orange': {
          'background-image': 'linear-gradient(to right, #ffc31b, #ff9100)',
        },
        '.bg-gradient-to-br-orange': {
          'background-image': 'linear-gradient(to bottom right, #ffc31b, #ff9100)',
        },
        '.bg-gradient-to-b-orange': {
          'background-image': 'linear-gradient(to bottom, #ffc31b, #ff9100)',
        },
        '.bg-gradient-to-bl-orange': {
          'background-image': 'linear-gradient(to bottom left, #ffc31b, #ff9100)',
        },
        '.bg-gradient-to-l-orange': {
          'background-image': 'linear-gradient(to left, #ffc31b, #ff9100)',
        },
        '.bg-gradient-to-tl-orange': {
          'background-image': 'linear-gradient(to top left, #ffc31b, #ff9100)',
        },
      },
      variants('cColor')
    )
  }
}
