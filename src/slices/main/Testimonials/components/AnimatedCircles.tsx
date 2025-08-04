'use client'

import { easeInOut, motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const circlePositions = [
  [225.5, 300.071],
  [225.5, 180.361],
  [225.5, 90],
] as const

export default function AnimatedCircles(props: React.ComponentProps<'svg'>) {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['25% end', '-10% start'],
  })

  const circle1Y = useTransform(
    scrollYProgress,
    [0, 1],
    [circlePositions[0][0], circlePositions[0][1]],
    { ease: easeInOut }
  )
  const circle2Y = useTransform(
    scrollYProgress,
    [0, 1],
    [circlePositions[1][0], circlePositions[1][1]],
    { ease: easeInOut }
  )
  const circle3Y = useTransform(
    scrollYProgress,
    [0, 1],
    [circlePositions[2][0], circlePositions[2][1]],
    { ease: easeInOut }
  )

  return (
    <svg
      ref={containerRef}
      width="300"
      height="451"
      viewBox="0 0 300 451"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.circle
        className="stroke-neutral-000/25"
        cx="150"
        cy={circle1Y}
        r="149.5"
      />
      <motion.circle
        className="stroke-neutral-000/25"
        cx="150"
        cy={circle2Y}
        r="119.5"
      />
      <motion.circle
        className="stroke-neutral-000/25"
        cx="150"
        cy={circle3Y}
        r="89.5"
      />
    </svg>
  )
}
