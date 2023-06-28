import { type CommunityContributor } from '@src/data/getGithubStats'

export default function ContributorsSection({
  contributors,
}: {
  contributors: CommunityContributor[]
}) {
  return (
    <div>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <h1 className="hero1 mb-medium w-full md:w-3/4">Contributors</h1>
        <div className="flex flex-col gap-medium">
          {contributors.map((contributor) => (
            <div className="rounded-md bg-fill-one p-medium">
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noreferrer nofollow"
              >
                <div className="w-xxxlarge [border-radius:50%] overflow-hidden background-">
                  <img src={contributor.avatar_url} />
                </div>
                <div>@{contributor.login}</div>
                <div>contributions: {contributor.contributions}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
