import { createContext, useContext } from 'react'

import type { BasicRepo } from '../data/getRepos'

export type ReposContextT = any
export const ReposContext = createContext<BasicRepo[]>([])
export const useRepos = () => useContext(ReposContext)
export const ReposProvider = ReposContext.Provider
