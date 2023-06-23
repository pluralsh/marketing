import styled from 'styled-components'

export const GradientBG = styled(
  ({ children, position: _position, image: _image, ...props }) => (
    <div {...props}>
      <div className="bg" />
      <div className="content">{children}</div>
    </div>
  )
)<{ position?: string; image?: string }>(
  ({
    theme,
    position = 'top center',
    image = '/images/gradients/gradient-bg-1.jpg',
  }) => ({
    position: 'relative',
    '.bg': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.colors['fill-zero'],
      filter: 'blur(10px)',
    },
    '.content': {
      position: 'relative',
    },
  })
)
