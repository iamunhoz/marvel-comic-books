import { useAtom, useSetAtom } from 'jotai';
import { loadableQuadrinhosList, pagination } from '../../state';
import { ComicsCard } from '../ComicsCard';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { useEffect, useState } from 'react';
import { Comics } from 'api/types';

export function Main():JSX.Element {
  const [list] = useAtom(loadableQuadrinhosList)
  const setPage = useSetAtom(pagination)
  const [quadrinhos, setQuadrinhos] = useState<Comics[]>([])

  useEffect(() => {
    const endOfPageObserver = () => {
      if (document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev + 1)
      }
    }
    window.addEventListener('scroll', endOfPageObserver );
    return () => {
      window.removeEventListener('scroll', endOfPageObserver)
    }

  }, [])

  useEffect(() => {
    if (list.state === 'hasData') {
      setQuadrinhos(prev => [...prev, ...list.data])
    }
  }, [list.state])

  if (list.state === 'hasError') return <Error />

  return (
    <>
      <main className='grid gap-4 grid-cols-4'>
        {quadrinhos.map(comics => <ComicsCard comics={comics} key={comics.id}/>)}
        {list.state === 'loading' && <Loading />}
      </main>
    </>
  )
}