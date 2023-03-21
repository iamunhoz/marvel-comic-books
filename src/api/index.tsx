import md5 from "md5"

const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

const timeStamp = Date.now()
const hash = md5(timeStamp.toString() + PRIVATE_KEY + PUBLIC_KEY)
const server = "https://gateway.marvel.com/v1/public/"

const getMarvelData = async (
  resource: string,
  options?: string | undefined | null
) => {
  const url = new URL(`${server}${resource}`)
  url.searchParams.set("ts", timeStamp.toString())
  url.searchParams.set("limit", "100")
  url.searchParams.set("apikey", PUBLIC_KEY)
  url.searchParams.set("hash", hash)

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
