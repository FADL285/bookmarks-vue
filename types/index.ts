export type ItemsType = "challenges" | "labs"
export interface ITokens {
  access: string
  refresh: string
}

export interface IResource {
  uuid: string
  title: string
  type?: "Challenge" | "Lab"
  bookmarkId?: string
}

export interface IResourceResponse {
  count: number
  next: string | null
  previous: string | null
  results: IResource[]
}

export interface IBookmarkResource {
  uuid: string
  challenge?: IResource
  lab?: IResource
  user: number
}

export interface IBookmarkResourceResponse {
  count: number
  next: string | null
  previous: string | null
  results: IBookmarkResource[]
}
