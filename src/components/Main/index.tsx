import { useAtom } from 'jotai';
import { loadableQuadrinhosList } from '../../state';
import { ComicsCard } from '../ComicsCard';
import { Loading } from '../Loading';
import { Error } from '../Error';

export function Main():JSX.Element {
  const [list] = useAtom(loadableQuadrinhosList)

  if (list.state === 'loading') return <Loading />

  if (list.state === 'hasError') return <Error />

  return (
    <main className='grid gap-4 grid-cols-4'>
      {list.data &&list.data.map(comics => <ComicsCard comics={comics} key={comics.id}/>)}
    </main>
  )
}