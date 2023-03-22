import { useAtom, useAtomValue } from 'jotai'
import { selectedComics, showComicsModal } from '../../state';

export function Modal():JSX.Element {
  const [showModal, setShowModal] = useAtom(showComicsModal)

  const comics = useAtomValue(selectedComics)

  const closeModal = () => {
    setShowModal(false)
  }

  if (!showModal || !comics) return <></>

  return (
    <div className="fixed top-10 p-5 left-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
      <div className="pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[1000px]">
        <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <h5
              className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
              id="exampleModalLabel">
                {comics.title}
            </h5>
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
      </div>
      <div className="relative flex-auto p-4 flex">
        <img
          className="rounded-t-lg"
          src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
          alt=""
          style={{
            height: 512
          }}
        />
        <div className='flex flex-col px-5'>
          <p>
            <strong>Description:</strong> {comics.description || "Sorry, There's no description available."}
          </p>
          <p>
            <strong>Creator:</strong> {comics.creators.items.map(item => item.name).join(',') || "Sorry, There's no description available."}
          </p>
          <p>
            <strong>Publication Date:</strong> {comics.dates.date || "Sorry, There's no description available."}
          </p>
        </div>
      </div>
      <div
        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button"
          className="inline-block rounded bg-blue-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-blue-accent-100 focus:bg-blue-accent-100 focus:outline-none focus:ring-0 active:bg-blue-accent-200"
          onClick={closeModal}
          >
          Close
        </button>
        <button
          type="button"
          className="ml-1 inline-block rounded bg-blue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
  )
}