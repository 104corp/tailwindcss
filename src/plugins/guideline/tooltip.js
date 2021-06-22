export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.tooltip': {
          position: 'relative',
          display: 'inline-block',
          padding: '6px 12px',
          width: 'auto',
          'min-width': '108px',
          'max-width': '314px',
          'min-height': '32px',
          'font-size': '14px',
          'line-height': '20px',
          'text-align': 'left',
          color: "theme('colors.white')",
          'background-color': "theme('colors.gray.600')",
          'border-radius': '4px',
        },

        '.tooltip-bl, .tooltip-bm, .tooltip-br, .tooltip-lt, .tooltip-lm, .tooltip-lb, .tooltip-rt, .tooltip-rm, .tooltip-rb, .tooltip-tl, .tooltip-tm, .tooltip-tr': {
          '&::after': {
            position: 'absolute',
            top: 'auto',
            bottom: 'auto',
            right: 'auto',
            left: 'auto',
            width: '0',
            height: '0',
            'border-style': 'solid',
            'border-width': '8px 6px 0 6px',
            'border-color': "theme('colors.gray.600') transparent transparent transparent",
            content: "''",
            transform: 'rotate(0deg)',
          },
        },

        '.tooltip-bl, .tooltip-bm, .tooltip-br': {
          '&::after': {
            bottom: '-8px',
          },
        },

        '.tooltip-tl, .tooltip-tm, .tooltip-tr': {
          '&::after': {
            top: '-8px',
            transform: 'rotate(-180deg)',
          },
        },

        '.tooltip-tl, .tooltip-bl': {
          '&::after': {
            left: '4px',
          },
        },

        '.tooltip-tm, .tooltip-bm': {
          '&::after': {
            right: `calc(50% - 6px)`,
          },
        },

        '.tooltip-tr, .tooltip-br': {
          '&::after': {
            right: '4px',
          },
        },

        '.tooltip-lt, .tooltip-lm, .tooltip-lb': {
          '&::after': {
            left: '-10px',
            transform: 'rotate(90deg)',
          },
        },

        '.tooltip-rt, .tooltip-rm, .tooltip-rb': {
          '&::after': {
            right: '-10px',
            transform: 'rotate(-90deg)',
          },
        },

        '.tooltip-rt, .tooltip-lt': {
          '&::after': {
            top: '6px',
          },
        },

        '.tooltip-rm, .tooltip-lm': {
          '&::after': {
            top: 'calc(50% - 4px)',
          },
        },

        '.tooltip-rb, .tooltip-lb': {
          '&::after': {
            bottom: '6px',
          },
        },
      },
      variants('tooltip')
    )
  }
}
