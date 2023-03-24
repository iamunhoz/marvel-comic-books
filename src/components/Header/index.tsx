import { useAtom, useSetAtom } from 'jotai'
import { comicsSearchValue, shouldFilterSearch } from 'state'

export function Header(): JSX.Element {
  const [searchValue, setSearchValue] = useAtom(comicsSearchValue)
  const setShouldFilterSearch = useSetAtom(shouldFilterSearch)

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setShouldFilterSearch(true)
    }
  }
  return (
    <header className='bg-blue-500 h-12 fixed w-full z-20 flex justify-around items-center'>
      <h1 className='text-center text-yellow-50 lg:text-xl font-bold'>
        Consulta de Quadrinhos Marvel
      </h1>
      <div className='flex items-center rounded'>
        <input
          value={searchValue}
          className='bg-blue-300 text-yellow-50 p-1 rounded-l w-24 lg:w-48'
          onChange={(evt) => {
            setSearchValue(evt.target.value)
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className='bg-blue-300 text-yellow-50 rounded-r flex justify-center items-center'
          style={{ height: 32, aspectRatio: 1 }}
        >
          <EyeGlassIcon />
        </button>
      </div>
    </header>
  )
}

function EyeGlassIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='h-5 w-5'
    >
      <path
        fillRule='evenodd'
        d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
        clipRule='evenodd'
      />
    </svg>
  )
}
