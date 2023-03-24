import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { comicsSearchValue, loadableComicsList, pagination } from 'state'
import { ComicsCard, Loading, Error } from 'components'
import { useEffect, useState } from 'react'
import { Comics } from 'api/types'

export const useEndOfPageObserver = () => {
  const setPage = useSetAtom(pagination)

  useEffect(() => {
    const endOfPageObserver = () => {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1)
      }
    }
    window.addEventListener('scroll', endOfPageObserver)
    return () => {
      window.removeEventListener('scroll', endOfPageObserver)
    }
  }, [])
}

export function Main(): JSX.Element {
  const [asyncComicsList] = useAtom(loadableComicsList)
  const [searchValue] = useAtom(comicsSearchValue)
  const [prevSearchValue, setPrevSearchValue] = useState('')
  const [comics, setComics] = useState<Comics[]>([])

  useEndOfPageObserver()

  useEffect(() => {
    if (asyncComicsList.state === 'hasData') {
      setComics((prev) => [...prev, ...asyncComicsList.data])
    }
  }, [asyncComicsList.state])

  if (asyncComicsList.state === 'hasError') return <Error />

  useEffect(() => {
    if (searchValue !== prevSearchValue) {
      setComics([])
      setPrevSearchValue(searchValue)
    }
  }, [searchValue, searchValue])

  return (
    <main
      className={
        !comics.length
          ? '100vh flex flex-col justify-center'
          : 'grid gap-4 grid-cols-4 mt-14 mx-2'
      }
    >
      {comics.map((comics) => (
        <ComicsCard comics={comics} key={comics.id} />
      ))}
      {asyncComicsList.state === 'loading' && <Loading />}
    </main>
  )
}
