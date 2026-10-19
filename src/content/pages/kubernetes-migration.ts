import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const kubernetesMigration = {
  path: '/kubernetes-migration',
  meta: {
    title: 'Kubernetes Migration',
    description: 'Kubernetes Migration',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Simplify your Kubernetes migration',
      description:
        'Let Plural handle all the usual migration challenges so you don’t have to. Plural’s tailored upgrade packages help you seamlessly transition to K8s—sans the headaches',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/financial-services-f1d12f.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'Migrating to Kubernetes offers immense benefits, from enhanced scalability to better resource utilization. However, the transition can be complex and resource-intensive, involving challenges such as compatibility issues, downtime risks, and steep learning curves for development teams. Plural simplifies Kubernetes migration by automating critical processes, ensuring seamless transitions with minimal risk.',
    },
    {
      type: 'featureRow',
      title: 'Get to value faster',
      body: [
        {
          type: 'p',
          content: [
            'Kubernetes migration projects often face delays due to configuration and setup complexities. Plural streamlines migration processes, ensuring that clusters are operational faster and with less manual effort.\n\nAutomated configuration tools to simplify the setup of Kubernetes clusters',
          ],
        },
        {
          type: 'p',
          content: [
            'Built-in compatibility checks to resolve issues before deployment',
          ],
        },
        {
          type: 'p',
          content: [
            'Pre-tested workflows for smooth transitions from existing systems',
          ],
        },
      ],
      image: {
        src: '/images/content/check-add-on-compatibilities-726a05.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Minimize downtime',
      body: [
        {
          type: 'p',
          content: [
            'Downtime during migrations can disrupt business operations and customer experiences. Plural reduces the risk of disruptions with reliable, automated workflows and rollback capabilities.\n\nControlled phased rollouts to validate configurations before full deployment',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated dependency resolution to prevent cascading failures',
          ],
        },
        {
          type: 'p',
          content: [
            'Rollback capabilities to quickly recover from unexpected issues',
          ],
        },
      ],
      image: {
        src: '/images/content/clusters-with-violation-4a2878.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Simplify resource optimization and scaling',
      body: [
        {
          type: 'p',
          content: [
            'Migrating to Kubernetes introduces new resource management challenges. Plural ensures optimized resource utilization across environments, helping you achieve cost efficiency and scalability.\n\nReal-time monitoring & telemetry for resource planning during migration',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated scaling policies to adjust resources dynamically',
          ],
        },
        {
          type: 'p',
          content: [
            'Insights into cluster performance and bottlenecks for proactive adjustments',
          ],
        },
      ],
      image: {
        src: '/images/content/solutions-unify-visual-3845f6.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Tailored migration services',
      body: [
        {
          type: 'p',
          content: [
            'Plural simplifies complex migrations by offering tailored upgrade solutions as part of the transition process. Managed upgrade packages include expert guidance, automated workflows, and proactive compatibility checks to ensure a seamless upgrade during migration.\n\nTailored upgrade plans to fit your organization’s unique requirements',
          ],
        },
        {
          type: 'p',
          content: [
            'Dedicated Success Team to provide expert support along your journey',
          ],
        },
        {
          type: 'p',
          content: ['Customized training for your entire team'],
        },
      ],
      image: {
        src: '/images/content/api-deprecations-113b01.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
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
        href: '/contact',
      },
    },
  ],
} satisfies ContentPage

export default kubernetesMigration
