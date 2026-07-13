import type { SliceSimulatorParams } from '@slicemachine/adapter-next/simulator'

import { SliceZone } from '@prismicio/react'
import { getSlices } from '@slicemachine/adapter-next/simulator'

import SliceSimulatorClient from '@/components/slice-simulator/SliceSimulatorClient'
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
    <SliceSimulatorClient
      background="none"
      hasSlices={slices.length > 0}
    >
      <SliceZone
        slices={slices}
        components={allComponents}
      />
    </SliceSimulatorClient>
  )
}
