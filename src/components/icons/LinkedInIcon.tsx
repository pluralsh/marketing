import createIcon from '@pluralsh/design-system/dist/components/icons/createIcon'

export default createIcon(({ size, color }) => (
  <svg
    width={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m14.8 0h-13.6c-.7 0-1.2.5-1.2 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2v-13.6c0-.7-.5-1.2-1.2-1.2zm-10.1 13.6h-2.3v-7.6h2.4v7.6zm-1.1-8.6c-.8 0-1.4-.7-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4c-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4v-7.7h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"
      fill={color}
    />
  </svg>
))
