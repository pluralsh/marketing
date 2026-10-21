import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const resources = {
  path: '/resources',
  meta: {
    title: 'Plural Resource Center',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      eyebrow: {
        label:
          'The Cursor Moment For DevOps: Read About Our Groundbreaking New Release 🚀',
        href: 'https://www.plural.sh/blog/the-cursor-moment-for-devops/',
      },
      title: 'Resource Center',
      description:
        "Explore Plural's Resource Center for in-depth guides, case studies, videos, and best practices to help you optimize Kubernetes management and scale with confidence.",
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'Case Studies',
      items: [
        {
          title:
            "Mott MacDonald's transforms their Kubernetes fleet with Plural",
          body: [
            {
              type: 'p',
              content: [
                'Learn how Mott MacDonald integrated Plural into its internal developer platform, Digital Workspaces, to simplify Kubernetes fleet management, enabling developers to focus on innovation while improving operational effiency, scalability, and cost savings.',
              ],
            },
          ],
          href: '/customers/mott-macdonald',
        },
        {
          title:
            'How a F50 Financial Services Company Uses Plural to Automate 95% of Routine Maintenance Tasks',
          body: [
            {
              type: 'p',
              content: [
                "A leading U.S. financial services institution operates hundreds of Kubernetes clusters across multiple environments, supporting thousands of microservices. Plural's self-hosted architecture satisfied stringent security standards while providing robust fleet management capabilities at scale.",
              ],
            },
          ],
          href: '/customers/large-enterprise-financial-services',
        },
        {
          title:
            'Global Cyber Security Leader Uses Plural to Slash Kubernetes Upgrades From 3 Months to 1 Day',
          body: [
            {
              type: 'p',
              content: [
                'A global leader in cyber security faced significant hurdles in managing its extensive Kubernetes fleet. Plural delivered a comprehensive solution, transforming how the company managed its Kubernetes clusters, enabling efficiency, rock-solid compliance, and better resource utilization. ',
              ],
            },
          ],
          href: '/customers/enterprise-cybersecurity',
        },
      ],
    },
    {
      type: 'featureGrid',
      eyebrow: 'Demo Videos',
      items: [
        {
          title: 'Plural 15 Minute Demo',
          body: [
            {
              type: 'p',
              content: [
                'Take a deep dive into Plural with this 15-minute walkthrough. Explore how its features simplify Kubernetes management, from automated upgrades to compliance enforcement, and see Plural in action managing multi-cluster environments with ease.',
              ],
            },
          ],
          href: '/resources/demos/plural-ai-walkthrough',
        },
        {
          title: 'Plural Upgrade Assistant',
          body: [
            {
              type: 'p',
              content: [
                "Explore a demo of Plural's upgrade assistant, including key features such as API Deprecation Detection, Add-On Compatibility Checking, Automated Add-On Upgrades (via PRs and Plural global services), and Automated Terraform Upgrade PR Generation.",
              ],
            },
          ],
          href: '/resources/demos/cluster-upgrade-assistant',
        },
        {
          title: 'Plural Flows Demo',
          body: [
            {
              type: 'p',
              content: [
                'Check out Flows, a holistic application developer experience, integrating GitOps, log aggregation and time series metrics, and the full Plural AI suite for automated troubleshooting and remediation. ',
              ],
            },
          ],
          href: '/resources/demos/flows',
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

export default resources
