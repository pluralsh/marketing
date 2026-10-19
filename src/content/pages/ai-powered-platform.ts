import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const aiPoweredPlatform = {
  path: '/products/ai-powered-platform',
  meta: {
    title: 'Kubernetes Fleet Management with AI Insights | Plural',
    description:
      'Use AI to monitor, diagnose, and automate your Kubernetes fleet. Gain root‑cause insights, infrastructure telemetry, and auto‑remediations in one platform.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'AI That Understands Your Infrastructure',
      description:
        'Plural’s AI agents query, diagnose, and remediate across Kubernetes and Terraform — generating manifests, PRs, and workflows that keep your platform running smoothly.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      video: {
        youtubeId: 'u2S6EIQ2fLE',
        title: 'Plural | AI-driven Insights on the Plural Platform',
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'Your Challenge',
      title: 'Making AI-Ops Safe for Infrastructure',
      description:
        'AI has the potential to transform infrastructure operations — but applying it directly to Kubernetes fleets and cloud resources isn’t trivial. The risks are high, the data is fragmented, and the guardrails most enterprises need just aren’t there. Without the right foundations, AI can create more problems than it solves.',
      items: [
        {
          title: 'Governance That Scales',
          body: [
            {
              type: 'p',
              content: [
                'Infrastructure data is sensitive. You can’t risk exposing credentials, configs, or tenant information to the wrong systems. AI infrastructure needs a unified permission layer that enforces governance by default — or you’ll be stuck building security controls from scratch.',
              ],
            },
          ],
        },
        {
          title: 'Human-in-the-loop by Design',
          body: [
            {
              type: 'p',
              content: [
                'A misstep in infrastructure isn’t just noise — it can bring production down. Autonomous AI without oversight is a recipe for outages. That’s why AI for infrastructure has to work within GitOps and PR flows — every recommendation reviewable, every change auditable.',
              ],
            },
          ],
        },
        {
          title: 'RAG for Real Infrastructure',
          body: [
            {
              type: 'p',
              content: [
                'AI is only as good as the context it has. With infrastructure, that context lives across Terraform state, Kubernetes APIs, and constantly changing cloud metadata. Without a retrieval-augmented generation (RAG) layer purpose-built for infra, your AI won’t know where to act — or worse, it’ll act on bad data.',
              ],
            },
          ],
        },
        {
          title: 'Explainability Built In',
          body: [
            {
              type: 'p',
              content: [
                'Platform teams need more than suggestions — they need to trust the AI’s context, recommendations, and limits. Without transparency into how recommendations are made, every change risks introducing errors, slowing adoption, and eroding trust.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'featureGrid',
      eyebrow: 'Our Solution',
      title: 'AI-Native Control for Infrastructure',
      description:
        'Plural is the AI-native control plane built for enterprise platform teams. We combine governance, human-in-the-loop workflows, and real-time infrastructure context into one system — so you can safely apply AI to the hardest problems in Kubernetes and cloud management.',
      items: [
        {
          title: 'Powerful Agentic Platform Workflows',
          body: [
            {
              type: 'p',
              content: [
                'Detect anomalies across Terraform, Kubernetes API, and cluster metadata with AI-powered diagnostics.',
              ],
            },
            {
              type: 'p',
              content: [
                'Automatically generate pull requests to remediate issues, keeping humans-in-the-loop for safe, auditable changes.',
              ],
            },
            {
              type: 'p',
              content: [
                'Connect context across your fleet with Plural’s semantic layer, powering richer queries and autonomous workflows.',
              ],
            },
            {
              type: 'p',
              content: [
                'Reduce manual toil with workflows that investigate, explain, and resolve problems in parallel.',
              ],
            },
          ],
        },
        {
          title: 'AI Insights & Auto Troubleshooting',
          body: [
            {
              type: 'p',
              content: [
                'Intelligent AI investigation of failing resources when alerts fire.',
              ],
            },
            {
              type: 'p',
              content: [
                'Get detailed root cause analysis and impact to reduce manual triage.',
              ],
            },
            {
              type: 'p',
              content: [
                'Supporting evidence showing exactly how issues were diagnosed.',
              ],
            },
            {
              type: 'p',
              content: [
                'Proactive detection of potential issues before they impact production.',
              ],
            },
            {
              type: 'p',
              content: [
                'One-click AI-generated fixes delivered through pull requests.',
              ],
            },
          ],
        },
        {
          title: 'Query & Understand Your Infrastructure with Natural Language',
          body: [
            {
              type: 'p',
              content: [
                'Ask questions about your infrastructure in plain English instead of digging through Terraform, YAML or consoles.',
              ],
            },
            {
              type: 'p',
              content: ['Context-aware responses based on your environment.'],
            },
            {
              type: 'p',
              content: ['Ability to explain complex Kubernetes concepts.'],
            },
            {
              type: 'p',
              content: ['Deep integration with your cluster data.'],
            },
            {
              type: 'p',
              content: ['Instant answers to troubleshooting questions.'],
            },
          ],
        },
        {
          title: 'Cost Analysis & Intelligent Right-Sizing',
          body: [
            {
              type: 'p',
              content: [
                'Continuously monitor resource usage across nodes, workloads, and clusters.',
              ],
            },
            {
              type: 'p',
              content: [
                'Identify over-provisioned deployments and underutilized resources.',
              ],
            },
            {
              type: 'p',
              content: [
                'Get AI recommendations to right-size memory and CPU requests.',
              ],
            },
            {
              type: 'p',
              content: [
                'AI-generated pull requests to apply cost-saving changes.',
              ],
            },
          ],
        },
        {
          title: 'Enterprise-Grade Security',
          body: [
            {
              type: 'p',
              content: [
                'Support for major AI providers including OpenAI, Anthropic, Bedrock, and Vertex in a bring-your-own-LLM model.',
              ],
            },
            {
              type: 'p',
              content: ['Full integration with existing RBAC and permissions.'],
            },
            {
              type: 'p',
              content: ['Complete audit trail of all AI interactions.'],
            },
            {
              type: 'p',
              content: ['Data remains within your environment.'],
            },
            {
              type: 'p',
              content: [
                'Agent-based architecture with egress-only communication.',
              ],
            },
          ],
        },
      ],
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

export default aiPoweredPlatform
