import { type ClassValue, clsx } from 'clsx'

import { twMerge } from '@src/utils/tailwindMerge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
