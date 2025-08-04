export default function SvgArrowDown(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.66667 10L10 13.3333L13.3333 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M2.66667 2.66699H7.33333C8.04058 2.66699 8.71885 2.94794 9.21895 3.44804C9.71905 3.94814 10 4.62641 10 5.33366V13.3337"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
