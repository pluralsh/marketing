import styled from 'styled-components'

export function CircleEmbellishment({
  width,
  height,
  rotate,
  position,
}: {
  width?: number | string
  height?: number | string
  rotate?: number
  position?: {
    top?: number | string
    left?: number | string
    right?: number | string
    bottom?: number | string
  }
}) {
  return (
    <div className="hidden md:block">
      <EmbellishmentSC
        $width={width}
        $height={height}
        $rotate={rotate}
        $position={position}
      >
        <EmbellishmentSVG />
      </EmbellishmentSC>
    </div>
  )
}

const EmbellishmentSC = styled.div<{
  $width?: number | string
  $height?: number | string
  $rotate?: number
  $position?: {
    top?: number | string
    left?: number | string
    right?: number | string
    bottom?: number | string
  }
  $showMobile?: boolean
}>(({ $width = 300, $height = 300, $rotate, $position }) => ({
  position: 'absolute',
  zIndex: 0,
  ...$position,
  width: $width,
  height: $height,
  transform: $rotate ? `rotate(${$rotate}deg)` : 'none',
  '& svg': {
    width: '100%',
    height: '100%',
  },
}))

function EmbellishmentSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
    >
      <defs>
        <linearGradient
          id="grad1"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor="#5C77FF"
          />
          <stop
            offset="25%"
            stopColor="transparent"
          />
          <stop
            offset="65%"
            stopColor="#52F4D94D"
          />
          <stop
            offset="85%"
            stopColor="#8FD6FF5C"
          />
          <stop
            offset="98%"
            stopColor="#494FF299"
          />
        </linearGradient>
      </defs>
      <circle
        cx="50%"
        cy="50%"
        r="49.5%"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="1"
      />
    </svg>
  )
}
