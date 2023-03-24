import { useAtom, useAtomValue } from 'jotai'
import { Tab } from '@headlessui/react'
import { selectedComics, showComicsModal } from '../../state'
import { Details } from './Details'
import { Delivery } from './Delivery'

const tabHeaderClassname =
  'p-2 rounded-t ui-selected:bg-blue-400 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black'

export function Modal(): JSX.Element {
  const [showModal, setShowModal] = useAtom(showComicsModal)

  const comics = useAtomValue(selectedComics)

  const closeModal = () => {
    setShowModal(false)
  }

  if (!showModal || !comics) return <></>
  return (
    <div className='border-r lg:mt-12 fixed top-10 p-5 left-0 z-50 h-full w-full overflow-y-auto lg:overflow-y-hidden overflow-x-hidden outline-none'>
      <div className='pointer-events-none relative w-auto lg:translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[1000px]'>
        <div className='px-2 pb-2 min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
          <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
            <h5
              className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
              id='exampleModalLabel'
            >
              {comics.title}
            </h5>
            <button
              type='button'
              className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
              onClick={closeModal}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <Tab.Group>
            <Tab.List>
              <Tab className={tabHeaderClassname}>Informações</Tab>
              <Tab className={tabHeaderClassname}>Entrega</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <Details />
              </Tab.Panel>
              <Tab.Panel>
                <Delivery />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}
