import type { ContentPage } from '@/content/types'

// Data-driven pages served by the catch-all route, keyed by URL path.
// Loaded lazily so each route only bundles its own content.
export const contentPages: Record<
  string,
  () => Promise<{ default: ContentPage }>
> = {
  '/accelerate-k8s-upgrades': () => import('./accelerate-k8s-upgrades'),
  '/ai-for-platform-teams': () => import('./ai-for-platform-teams'),
  '/democratize-kubernetes-expertise': () =>
    import('./democratize-kubernetes-expertise'),
  '/financial-services': () => import('./financial-services'),
  '/fleet-management': () => import('./fleet-management'),
  '/gitops-transition': () => import('./gitops-transition'),
  '/healthcare': () => import('./healthcare'),
  '/hospitality': () => import('./hospitality'),
  '/insurance': () => import('./insurance'),
  '/internal-developer-platform': () => import('./internal-developer-platform'),
  '/kubernetes-cost-savings': () => import('./kubernetes-cost-savings'),
  '/kubernetes-migration': () => import('./kubernetes-migration'),
  '/legal/privacy-policy': () => import('./privacy-policy'),
  '/legal/terms-and-conditions': () => import('./terms-and-conditions'),
  '/lp-demo': () => import('./lp-demo'),
  '/multi-cloud-k8s-management': () => import('./multi-cloud-k8s-management'),
  '/product': () => import('./product'),
  '/products/ai-powered-platform': () => import('./ai-powered-platform'),
  '/products/continuous-deployment': () => import('./continuous-deployment'),
  '/products/iac-management': () => import('./iac-management'),
  '/products/platform-foundations': () => import('./platform-foundations'),
  '/products/self-service-automations': () =>
    import('./self-service-automations'),
  '/products/upgrade-management': () => import('./upgrade-management'),
  '/reduced-support': () => import('./reduced-support'),
  '/resources': () => import('./resources'),
  '/resources/demos/cluster-upgrade-assistant': () =>
    import('./cluster-upgrade-assistant'),
  '/resources/demos/flows': () => import('./flows'),
  '/resources/demos/plural-ai-walkthrough': () =>
    import('./plural-ai-walkthrough'),
  '/retail': () => import('./retail'),
  '/security-and-compliance': () => import('./security-and-compliance'),
  '/simplify-kubernetes-complexity': () =>
    import('./simplify-kubernetes-complexity'),
  '/unify-hybrid-cloud': () => import('./unify-hybrid-cloud'),
  '/why-plural': () => import('./why-plural'),
  '/why-plural/ai-advantage': () => import('./ai-advantage'),
  '/why-plural/build-vs-buy': () => import('./build-vs-buy'),
  '/why-plural/developer-velocity': () => import('./developer-velocity'),
  '/why-plural/team-efficiency': () => import('./team-efficiency'),
  '/why-plural/upgrade-readiness': () => import('./upgrade-readiness'),
}
