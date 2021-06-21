export default function() {
  return function({ addComponents, variants }) {
    addComponents(
      {
        '.tooltips': {
          'position': 'relative',
          'display': 'inline-block',
          'padding': '6px 12px',
          'width': 'auto',
          'min-width': '108px',
          'max-width': '314px',
          'min-height': '32px',
          'font-size': '14px',
          'line-height': '20px',
          'text-align': 'left',
          'color': 'theme(\'colors.white\')',
          'background-color': 'theme(\'colors.gray.600\')',
          'border-radius': '4px'
        },
      
        '.tooltips-bl, .tooltips-bm, .tooltips-br, .tooltips-lt, .tooltips-lm, .tooltips-lb, .tooltips-rt, .tooltips-rm, .tooltips-rb, .tooltips-tl, .tooltips-tm, .tooltips-tr': {
          '&::after': {
            'position': 'absolute',
            'top': 'auto',
            'bottom': 'auto',
            'right': 'auto',
            'left': 'auto',
            'width': '0',
            'height': '0',
            'border-style': 'solid',
            'border-width': '8px 6px 0 6px',
            'border-color': 'theme(\'colors.gray.600\') transparent transparent transparent',
            'content': '\'\'',
            'transform': 'rotate(0deg)',
          }
        },
      
        '.tooltips-bl, .tooltips-bm, .tooltips-br': {
          '&::after': {
            'bottom': '-8px'
          }
        },
      
        '.tooltips-tl, .tooltips-tm, .tooltips-tr': {
          '&::after': {
            'top': '-8px',
            'transform': 'rotate(-180deg)'
          }
        },
      
        '.tooltips-tl, .tooltips-bl': {
          '&::after': {
            'left': '4px'
          }
        },
      
        '.tooltips-tm, .tooltips-bm': {
          '&::after': {
            'right': `calc(50% - 6px)`
          }
        },
      
        '.tooltips-tr, .tooltips-br': {
          '&::after': {
            'right': '4px'
          }
        },
      
        '.tooltips-lt, .tooltips-lm, .tooltips-lb': {
          '&::after': {
            'left': '-10px',
            'transform': 'rotate(90deg)'
          }
        },
      
        '.tooltips-rt, .tooltips-rm, .tooltips-rb': {
          '&::after': {
            'right': '-10px',
            'transform': 'rotate(-90deg)'
          }
        },
      
        '.tooltips-rt, .tooltips-lt': {
          '&::after': {
            'top': '6px'
          }
        },
      
        '.tooltips-rm, .tooltips-lm': {
          '&::after': {
            'top': 'calc(50% - 4px)'
          }
        },
      
        '.tooltips-rb, .tooltips-lb': {
          '&::after': {
            'bottom': '6px'
          }
        }
      },
      variants('cTooltip')
    )
  }
}