import createIcon from '@pluralsh/design-system/dist/components/icons/createIcon'

export default createIcon(({ size, color }) => (
  <svg
    width={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill={color}>
      <path d="m10.3 3.8c0 .3.2.5.5.5h3.2s0 0 0-.1l-3.5-4s0 0-.1-.1v3.7z" />
      <path d="m10.8 4.5c-.4 0-.7-.3-.7-.7v-3.8c-.1 0-.2 0-.3 0h-7.2c-.3 0-.7.3-.7.7v14.6c0 .4.3.7.7.7h10.7c.4 0 .7-.3.7-.7v-10.6-.1h-3.2zm-2.3 2.6h-4.8v-.2h4.8zm0-1.8h-4.8v-.3h4.8zm0-1.9h-4.8v-.2h4.8z" />
    </g>
  </svg>
))
