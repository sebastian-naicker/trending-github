type PopularRepository = {
  repositoryName: string
  description: string
  url: string
}

export type GithubDeveloper = {
  rank: number
  username: string
  fullname: boolean
  url: string
  avatar: string
  since: string
  popularRepository: PopularRepository
}
