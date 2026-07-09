/**
 * Workbench demo tour — TypeScript entry for the marketing frame.
 * Copy lives in workbenchDemoTour.json (single source of truth).
 * Run `npm run sync:workbench-tour` to refresh public/workbench-demo/tour-config.js for the iframe.
 */
import tourJson from './workbenchDemoTour.json'

export type WorkbenchDemoTourHint = {
  label: string
  description: string
}

export type WorkbenchDemoTourStep = {
  title: string
  barVerb: string
  barRest: string
  srCaption: string
  hints: Record<string, WorkbenchDemoTourHint>
}

export type WorkbenchDemoTourConfig = {
  total: number
  steps: WorkbenchDemoTourStep[]
}

export const WORKBENCH_DEMO_TOUR = tourJson as WorkbenchDemoTourConfig

export const WORKBENCH_DEMO_TOUR_TOTAL = WORKBENCH_DEMO_TOUR.total

export const WORKBENCH_DEMO_TOUR_STEPS = WORKBENCH_DEMO_TOUR.steps

export function getWorkbenchDemoTourStep(
  stepIndex: number
): WorkbenchDemoTourStep {
  return WORKBENCH_DEMO_TOUR_STEPS[stepIndex] ?? WORKBENCH_DEMO_TOUR_STEPS[0]
}

export function getWorkbenchDemoTourTitle(stepIndex: number): string {
  return getWorkbenchDemoTourStep(stepIndex).title
}

export function getWorkbenchDemoTourBar(stepIndex: number): {
  verb: string
  rest: string
} {
  const step = getWorkbenchDemoTourStep(stepIndex)
  return { verb: step.barVerb, rest: step.barRest }
}

export function getWorkbenchDemoTourSrCaption(stepIndex: number): string {
  return getWorkbenchDemoTourStep(stepIndex).srCaption
}

/** Payload the iframe posts to the parent frame (derived from shared config). */
export function getWorkbenchDemoTourFramePayload(stepIndex: number) {
  const step = getWorkbenchDemoTourStep(stepIndex)
  return {
    step: stepIndex,
    total: WORKBENCH_DEMO_TOUR_TOTAL,
    title: step.title,
    barVerb: step.barVerb,
    barRest: step.barRest,
    srCaption: step.srCaption,
  }
}
