import { useAtomValue } from 'jotai'
import { selectedComics } from 'state'

export function Details(): JSX.Element {
  const comics = useAtomValue(selectedComics)
  if (!comics) return <></>

  return (
    <div>
      <div className='relative flex-auto p-4 flex'>
        <img
          className='rounded-t-lg'
          src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
          alt=''
          style={{
            height: 512
          }}
        />
        <div className='flex flex-col px-5'>
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
