import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const securityAndCompliance = {
  path: '/security-and-compliance',
  meta: {
    title: 'Enhance Security and Compliance',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Enhance Security & Compliance',
      description: 'Protect sensitive data while meeting regulatory demands',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/terraform-stack-list-29d30a.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'For regulated industries like healthcare, finance, and insurance, maintaining security and compliance across environments is critical. Failing to meet standards like HIPAA, GDPR, or PCI DSS can lead to severe penalties and data breaches that erode customer trust. Plural leverages decades of collective industry experience to help organizations achieve enhanced security and maintain compliance with evolving regulations.',
    },
    {
      type: 'featureRow',
      title: 'Enforce compliance with centralized policy management',
      body: [
        {
          type: 'p',
          content: [
            'Regulatory compliance demands strict policy enforcement across your K8s environments. Plural ensures consistency across your entire cluster estate and prevents misconfigurations.\n\nPolicy automation ensures that only compliant resources are created using OPA Gatekeeper',
          ],
        },
        {
          type: 'p',
          content: [
            'Real-time auditing provides logs and alerts for non-compliant actions, helping you stay ahead of potential risks',
          ],
        },
        {
          type: 'p',
          content: [
            'Comprehensive controls enforce role-based access and resource creation standards',
          ],
        },
      ],
      image: {
        src: '/images/content/fix-instance-type-from-aae9b2.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Mitigate vulnerabilities with advanced CVE management',
      body: [
        {
          type: 'p',
          content: [
            'Proactively identifying and addressing vulnerabilities is critical for regulated industries. Plural makes it easy to monitor and manage risks across your K8s fleet.\n\nCentralized CVE visibility identifies vulnerabilities using Trivy-powered image scanning across clusters',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated updates streamline patching processes to fix vulnerabilities quickly',
          ],
        },
        {
          type: 'p',
          content: [
            'Proactive alerts notify teams of security risks, reducing time to mitigation',
          ],
        },
      ],
      links: [
        {
          label: 'Upgrade Management',
          href: '/products/upgrade-management',
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
      type: 'featureRow',
      title: 'Safeguard sensitive data with robust architecture',
      body: [
        {
          type: 'p',
          content: [
            'Protecting sensitive information, such as patient records or financial data, is essential in regulated industries. Plural’s secure-by-design architecture reduces exposure risks.\n\nEgress-only networking minimizes external access to critical systems',
          ],
        },
        {
          type: 'p',
          content: [
            'Integrated RBAC and SSO ensure secure and simplified access management',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized SBOM management ensures visibility into software supply chain integrity',
          ],
        },
      ],
      image: {
        src: '/images/content/permissions-6aa496.svg',
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

export default securityAndCompliance
