import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const aiAdvantage = {
  path: '/why-plural/ai-advantage',
  meta: {
    title: 'An AI Copilot You Can’t Build Yourself',
    noindex: true,
  },
  sections: [
    {
      type: 'hero',
      title: 'An AI Copilot You Can’t Build Yourself',
      description:
        'Plural’s AI capabilities are deeply integrated into your infrastructure stack — fed by live telemetry, trained on platform behavior, and wired into every fix workflow.',
      video: {
        youtubeId: 'u2S6EIQ2fLE',
        title: 'Plural | AI-driven Insights on the Plural Platform',
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'The Problem',
      title: 'Why DIY or Bolt-on AI Fails',
      items: [
        {
          body: [
            {
              type: 'p',
              content: [
                'General-purpose AI can’t see your logs, configs, or telemetry.',
              ],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['In-house scripts break under real-world complexity.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: [
                'Critical operational know-how stays scattered across teams.',
              ],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: [
                'AI that acts without human oversight risks outages and broken infra.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'featureRow',
      eyebrow: 'Our Solution',
      title: 'AI With Live Infrastructure Context',
      body: [
        {
          type: 'p',
          content: [
            'Ingests live telemetry, logs, manifests, configs, and cloud metadata.',
          ],
        },
        {
          type: 'p',
          content: [
            'Semantic layer unifies Kubernetes + Terraform into a single indexed graph.',
          ],
        },
        {
          type: 'p',
          content: [
            'Every workflow is grounded in real infrastructure state, not guesswork.',
          ],
        },
      ],
      image: {
        src: '/images/content/ai-interactive-visual-b3dcbd.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Governance Built In',
      body: [
        {
          type: 'p',
          content: [
            'Bring-your-own-LLM with support for major providers OpenAI, Anthropic, Bedrock, Vertex etc.',
          ],
        },
        {
          type: 'p',
          content: [
            'RBAC and tenant-aware permissions enforced automatically.',
          ],
        },
        {
          type: 'p',
          content: ['Audit trails capture every interaction for compliance.'],
        },
      ],
      image: {
        src: '/images/content/product-platform-visual-53b075.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Human-in-the-Loop Safety',
      body: [
        {
          type: 'p',
          content: ['Every fix proposed as a pull request.'],
        },
        {
          type: 'p',
          content: [
            'No “autonomous black box” changes — everything reviewable.',
          ],
        },
        {
          type: 'p',
          content: [
            'Builds trust with developers, platform teams, and compliance officers.',
          ],
        },
      ],
      image: {
        src: '/images/content/product-selfservice-visual-38ce4e.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'AI That Acts, Not Just Chats',
      body: [
        {
          type: 'p',
          content: [
            'Agentic workflows diagnose, explain, and remediate issues via PR.',
          ],
        },
        {
          type: 'p',
          content: ['Auto-generate manifests and Terraform changes.'],
        },
        {
          type: 'p',
          content: ['Proactive right-sizing and cost-saving PRs.'],
        },
      ],
      image: {
        src: '/images/content/frame1996663892-afe28f.png',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'table',
      title: "Why It's Different",
      description:
        'Plural’s AI Copilot isn’t a bolt-on — it’s embedded in how the platform works.',
      rowLabel: 'Capability',
      columns: [
        {
          label: 'General-Purpose AI (e.g. ChatGPT)',
          emphasized: false,
        },
        {
          label: 'In-House Automation',
          emphasized: true,
        },
        {
          label: 'Plural',
          emphasized: false,
        },
      ],
      rows: [
        {
          label: 'Infrastructure context awareness',
          values: [
            'No  No access to your environment',
            'No Hard-coded assumptions',
            'Ingests live telemetry, logs, configs',
          ],
        },
        {
          label: 'Fix generation tied to GitOps',
          values: [
            'No No PR generation or repo integration',
            'No Manual effort, brittle',
            'AI-generated PRs in Git workflows',
          ],
        },
        {
          label: 'Semantic understanding of Kubernetes + Terraform',
          values: [
            'No Needs prompting, often wrong',
            'No Script-based, not adaptive',
            'Embedded understanding of K8s/IaC models',
          ],
        },
        {
          label: 'Trained on operational knowledge',
          values: [
            'No Trained on public data',
            'No Tribal knowledge, fragmented',
            'Encodes battle-tested operational best practices',
          ],
        },
        {
          label: 'Actionable, environment-specific insight Automation',
          values: [
            'No Lacks access or precision',
            'No Depends on manual data stitching',
            'AI sees your state, config, and workloads in real time',
          ],
        },
      ],
    },
    {
      type: 'featureGrid',
      title: 'Why Plural Delivers for your Whole Team',
      description: 'Proven results that reduce toil and boost velocity.',
      items: [
        {
          title: '10x Faster Incident Response',
          body: [
            {
              type: 'p',
              content: [
                'Quickly pinpoint root causes and resolve issues in minutes, not hours.',
              ],
            },
          ],
        },
        {
          title: 'Safe, automated configuration changes',
          body: [
            {
              type: 'p',
              content: [
                'Generate validated, version-aware pull requests that prevent misconfigurations.',
              ],
            },
          ],
        },
        {
          title: 'Flattened Technical Curve',
          body: [
            {
              type: 'p',
              content: [
                'Help any engineer understand, troubleshoot, and operate K8s — no deep expertise required.',
              ],
            },
          ],
        },
        {
          title: 'Make Everyone a 10x Engineer',
          body: [
            {
              type: 'p',
              content: [
                'Augment your team with AI that delivers expert-level diagnostics and recommendations instantly.',
              ],
            },
          ],
        },
        {
          title: 'Institutionalize expertise',
          body: [
            {
              type: 'p',
              content: ['AI captures and reuses tribal knowledge.'],
            },
          ],
        },
        {
          title: 'Slash onboarding time',
          body: [
            {
              type: 'p',
              content: [
                'New hires get instant context and intelligent guidance from day one.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'cta',
      title:
        'This Is What AI Infrastructure Should \nLook Like. See how we can help.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
    },
  ],
} satisfies ContentPage

export default aiAdvantage
