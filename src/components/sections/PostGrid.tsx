import { ArrowLink } from '@/components/ui/Button'
import { SmartLink } from '@/components/ui/SmartLink'
import { latestPosts, URLS } from '@/content/site'
import { cn } from '@/utils/cn'

import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

type Post = { title: string; href: string; tag?: string; description?: string }

type PostGridProps = {
  title?: string
  posts?: Post[]
}

export function PostGrid({
  title = 'The latest from Plural',
  posts = latestPosts,
}: PostGridProps) {
  return (
    <Section className="flex flex-col gap-7">
      <SectionHeading
        title={title}
        size="lg"
        action={<ArrowLink href={URLS.blog}>View blog</ArrowLink>}
      />
      <div className="border-line grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] border-t">
        {posts.map((post, i) => (
          <SmartLink
            key={post.href}
            href={post.href}
            className={cn(
              'text-ink group flex flex-col gap-2.5 py-6 no-underline',
              i > 0 && 'md:border-line md:border-l md:pl-6',
              i < posts.length - 1 && 'md:pr-6'
            )}
          >
            {post.tag && (
              <span className={cn('text-label', i === 0 && 'text-accent-ink')}>
                {post.tag}
              </span>
            )}
            <span className="group-hover:text-accent-ink text-[19px] leading-[1.3] font-medium">
              {post.title}
            </span>
            {post.description && (
              <span className="text-body text-[15px]">{post.description}</span>
            )}
          </SmartLink>
        ))}
      </div>
    </Section>
  )
}
