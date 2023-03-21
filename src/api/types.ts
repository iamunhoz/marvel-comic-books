export type MarvelResource =
  | "comics"
  | "characters"
  | "series"
  | "event"
  | "stories"
  | "creators"
  | undefined

export interface Comics {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: []
  resourceURI: string
  urls: { type: string; url: string }[]
  series: { resourceURI: string; name: string }
  variants: { resourceURI: string; name: string }[]
  collections: []
  collectedIssues: []
  dates: { type: string; date: string }
  prices: { type: string; price: number }[]
  thumbnail: { path: string; extension: string }
  images: []
  creators: {
    available: number
    collectionURI: string
    items: { resourceURI: string; name: string; role: string }[]
    returned: number
  }
  characters: {
    available: number
    collectionURI: string
    items: { resourceURI: string; name: string; role: string }[]
    returned: number
  }
  stories: {
    available: number
    collectionURI: string
    items: { resourceURI: string; name: string; type: string }[]
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: { resourceURI: string; name: string; type: string }[]
    returned: number
  }
}
