import { createContext, useContext } from 'react'

import type { MinRepo } from '../data/getRepos'

export type ReposContextT = any
export const ReposContext = createContext<MinRepo[]>([])
export const useRepos = () => useContext(ReposContext)
export const ReposProvider = ReposContext.Provider
