export interface ITokens {
  access: string
  refresh: string
}

export interface IResource {
  uuid: string,
  title: string
}

export interface IResourceResponse {
  count: number,
  next: string | null,
  previous: string | null,
  results: IResource[]
}