import type { SliceSimulatorParams } from '@slicemachine/adapter-next/simulator'

import { SliceZone } from '@prismicio/react'
import { getSlices, SliceSimulator } from '@slicemachine/adapter-next/simulator'

import { components as mainComponents } from '@/slices/main'

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const { state } = await searchParams
  const slices = getSlices(state)

  const allComponents = {
    ...mainComponents,
  }

  return (
    <SliceSimulator background="none">
      <SliceZone
        slices={slices}
        components={allComponents}
      />
    </SliceSimulator>
  )
}
