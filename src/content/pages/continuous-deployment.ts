import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const continuousDeployment = {
  path: '/products/continuous-deployment',
  meta: {
    title: 'Continuous Deployment',
    description: 'Get code to cluster with ease.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Enterprise Scale Continuous Deployment',
      description:
        'Get code to cluster with ease. Stop stitching together Argo, Flux, and custom scripts. Plural gives you a single deployment system that scales to any number of clusters, unifies infra and app delivery, and bakes in governance from day one.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/clusters-65a868.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureRow',
      title: 'Deploy to Kubernetes Anywhere',
      body: [
        {
          type: 'p',
          content: [
            'Support for public cloud, private, hybrid, and edge environments.',
          ],
        },
        {
          type: 'p',
          content: [
            'One control plane for all clusters, no separate systems required.',
          ],
        },
        {
          type: 'p',
          content: [
            'Pull-based architecture keeps deployments secure and lightweight.',
          ],
        },
      ],
      image: {
        src: '/images/content/deploy-service-demo-1e7d2b.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Robust, Scalable, Multi-Cluster Workflows',
      body: [
        {
          type: 'p',
          content: [
            'Use global services to apply fleet-wide tags and policies consistently.',
          ],
        },
        {
          type: 'p',
          content: [
            "Interoperate seamlessly with Plura's IaC Management in one pipeline.",
          ],
        },
        {
          type: 'p',
          content: [
            'Automatically indexed deployments into Plural AI for smarter troubleshooting and recommendations.',
          ],
        },
      ],
      image: {
        src: '/images/content/cluster-tagging-cf49e8.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Auto GitOps',
      body: [
        {
          type: 'p',
          content: ['Automate routine changes with PR-driven workflows.'],
        },
        {
          type: 'p',
          content: [
            'Keep humans-in-the-loop with auditable, version-controlled updates.',
          ],
        },
        {
          type: 'p',
          content: [
            'Reduce manual effort and cut down on Kubernetes codebase maintenance.',
          ],
        },
      ],
      image: {
        src: '/images/content/deploy-service-demo-1e7d2b.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'stats',
      eyebrow: 'Our Impact',
      items: [
        {
          value: '88%',
          label: 'Reduction in operational costs',
        },
        {
          value: '95%',
          label: 'Reduction in day-2 operations',
        },
        {
          value: '50%',
          label: 'Increased bandwidth for your engineers',
        },
        {
          value: '50%',
          label: 'ROI over 3 years',
        },
      ],
    },
    {
      type: 'testimonials',
      eyebrow: 'Client Voices',
      items: [
        {
          quote:
            'Plural has significantly enhanced our overall efficiency. It has reduced the time and effort required for cluster management, allowing our developers to focus more on innovation.',
          name: 'Head of Platform Service',
          title: 'Mott MacDonald',
        },
        {
          quote:
            'By adopting Plural for our Kubernetes management solution, we reduced our k8s upgrade cycles from 3 months to 1 day, enabling us to delegate responsibilities more effectively from principal engineers to a single mid-level engineer.',
          name: 'Director of DevOps',
          title: 'Leading Global Cyber Security Provider',
        },
        {
          quote:
            'The widespread adoption of Kubernetes has transformed how enterprises deploy and scale containerized applications. This presents new operational considerations. Plural has its eye on automation, security and addressing controls with large scale enterprises in mind.',
          name: 'Sean Leach',
          title: 'Capital One Ventures',
        },
      ],
    },
    {
      type: 'posts',
      eyebrow: 'Learn More',
      title:
        'Deep dives, best practices, and real-world strategies for Kubernetes at scale',
      items: [
        {
          title:
            'Running Kubernetes at the Edge with Plural: A Practical Guide',
          href: 'https://www.plural.sh/blog/running-kubernetes-at-the-edge-with-plural-a-practical-guide-2/',
        },
        {
          title: 'Product Update | April Edition',
          href: 'https://www.plural.sh/blog/product-updates-2/',
        },
        {
          title: "Introducing Flows: Your Team's Microservice Command Center",
          href: 'https://www.plural.sh/blog/introducing-flows-your-teams-microservice-command-center/',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Enterprise Kubernetes\nmanagement, accelerated.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
    },
  ],
} satisfies ContentPage

export default continuousDeployment
