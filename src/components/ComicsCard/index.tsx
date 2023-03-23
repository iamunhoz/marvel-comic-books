import { Comics } from 'api/types'
import { useSetAtom } from 'jotai'
import { selectedComics, showComicsModal } from 'state'

type ComicsCardProps = {
  comics: Comics
}
export function ComicsCard(props: ComicsCardProps): JSX.Element {
  const { comics } = props

  const setComics = useSetAtom(selectedComics)
  const setShowModal = useSetAtom(showComicsModal)

  const handleSelectComics = () => {
    setComics(comics)
    setShowModal(true)
  }

  return (
    <div className='h-full mx-auto'>
      <div className='bg-white h-full shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
        <img
          className='rounded-t-lg'
          src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
          alt=''
          style={{
            height: 512
          }}
        />
        <div className='p-5 flex flex-col justify-between h-60'>
          <h5 className='text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white'>
            {comics.title}
          </h5>
          <p className='font-normal text-sm text-ellipsis-three-lines text-gray-700 mb-3 dark:text-gray-400'>
            {comics.description || "Sorry, there's no description available."}
          </p>
          <button
            className='w-2/5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={handleSelectComics}
          >
            Read more
            <svg
              className='-mr-1 ml-2 h-4 w-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
