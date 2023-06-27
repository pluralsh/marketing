import styled from 'styled-components'

export const GradientBG = styled(
  ({ children, position: _position, image: _image, size: _size, ...props }) => (
    <div {...props}>
      <div className="bg" />
      <div className="content">{children}</div>
    </div>
  )
)<{ position?: string; image?: string }>(
  ({
    theme,
    position = 'top center',
    size = '100%',
    image = '/images/gradients/gradient-bg-1.jpg',
  }) => ({
    position: 'relative',
    '.bg, .bg::after': {
      '--blur-amount': '0px',
      overflow: 'hidden',
      content: '""',
      position: 'absolute',
      top: 'calc(var(--blur-amount) * -1.5)',
      left: 'calc(var(--blur-amount) * -1.5)',
      right: 'calc(var(--blur-amount) * -1.5)',
      bottom: 'calc(var(--blur-amount) * -1.5)',
    },
    '.bg::after': {
      '--blur-amount': '10px',
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.colors['fill-zero'],
      filter: 'blur(var(--blur-amount))',
    },
    '.content': {
      position: 'relative',
    },
  })
)
