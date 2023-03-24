import { useAtomValue } from 'jotai'
import { selectedComics } from 'state'
import { getContainerSize } from './Map'

export function Details(): JSX.Element {
  const comics = useAtomValue(selectedComics)
  if (!comics) return <></>

  return (
    <div>
      <div className='relative flex flex-auto p-4 flex-col lg:flex-row'>
        <img
          className='rounded-t-lg'
          src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
          alt=''
          style={{ height: getContainerSize().height }}
        />
        <div className='flex flex-col mt-1 lg:mt-0 lg:px-5'>
          <p>
            <strong>Description:</strong>{' '}
            {comics.description || "Sorry, There's no description available."}
          </p>
          <p>
            <strong>Creator:</strong>{' '}
            {comics.creators.items.map((item) => item.name).join(',') ||
              "Sorry, There's no description available."}
          </p>
          <p>
            <strong>Publication Date:</strong>{' '}
            {comics.dates.date || "Sorry, There's no description available."}
          </p>
        </div>
      </div>
    </div>
  )
}
