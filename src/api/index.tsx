import md5 from "md5"
import { MarvelResource } from './types';

const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

const timeStamp = Date.now()
const hash = md5(timeStamp.toString() + PRIVATE_KEY + PUBLIC_KEY)
const server = "https://gateway.marvel.com/v1/public/"
const resultsPerPage = 10
const getOffset = (pag: number): string => {
  if (pag < 2) return '0'
  return ((pag - 1) * resultsPerPage).toString()
}

const getMarvelData = async (
  config: {
    resource: MarvelResource,
    page: number
  }
) => {
  const { resource, page } = config

  const url = new URL(`${server}${resource}`)
  url.searchParams.set("ts", timeStamp.toString())
  url.searchParams.set("limit", resultsPerPage.toString())
  url.searchParams.set("apikey", PUBLIC_KEY)
  url.searchParams.set("hash", hash)
  url.searchParams.set("offset", getOffset(page))

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    })
    return await response.json()
  } catch (e) {
    console.log(e)
  }
}

export { getMarvelData }
