import { useAtom, useSetAtom } from 'jotai'
import { loadableComicsList, pagination } from 'state'
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
  const [comics, setComics] = useState<Comics[]>([])

  useEndOfPageObserver()

  useEffect(() => {
    if (asyncComicsList.state === 'hasData') {
      setComics((prev) => [...prev, ...asyncComicsList.data])
    }
  }, [asyncComicsList.state])

  if (asyncComicsList.state === 'hasError') return <Error />

  return (
    <main className='grid gap-4 grid-cols-4'>
      {comics.map((comics) => (
        <ComicsCard comics={comics} key={comics.id} />
      ))}
      {asyncComicsList.state === 'loading' && <Loading />}
    </main>
  )
}
