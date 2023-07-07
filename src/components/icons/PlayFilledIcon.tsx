import createIcon from '@pluralsh/design-system/dist/components/icons/createIcon'

export default createIcon(({ size, color }) => (
  <svg
    width={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="m14.8 7.2-11.7-6.8c-.6-.3-1.4.1-1.4.9v13.5c0 .7.8 1.2 1.4.8l11.7-6.7c.6-.4.6-1.4 0-1.7z"
    />
  </svg>
))
