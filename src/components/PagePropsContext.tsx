import { createContext } from 'react'

import { type GlobalPageProps } from '@pages/_app'

export const PagePropsContext = createContext<GlobalPageProps>({})
