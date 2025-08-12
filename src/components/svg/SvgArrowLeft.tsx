export default function SvgArrowLeft(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 6C5.72786 6 6.27214 6 1 6M1 6L6.14291 11M1 6L6.14291 1"
        stroke="currentColor"
        strokeWidth="1.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
