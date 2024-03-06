import { extendTailwindMerge, mergeConfigs } from 'tailwind-merge'

import { textStyleKeys } from 'tailwind.config'

export const twMerge = extendTailwindMerge((config) =>
  mergeConfigs<string>(config, {
    extend: {
      classGroups: {
        txt: [
          {
            txt: textStyleKeys,
          },
        ],
      },
    },
  })
)
