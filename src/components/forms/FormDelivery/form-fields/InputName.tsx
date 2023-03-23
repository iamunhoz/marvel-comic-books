import { useAtom } from 'jotai'
import { nameAtom } from './formState'

export function InputName() {
  const [name, setName] = useAtom(nameAtom)

  return (
    <div>
      <label title='Nome'>
        <input
          value={name.value}
          onChange={(e) => setName(e.target.value)}
          className='border'
        />
      </label>
      {!name.isValidating && name.isDirty && (
        <div>
          <span>{name.isValid && 'Valid'}</span>
          <span>{!name.isValid && `${name.error}`}</span>
        </div>
      )}
    </div>
  )
}
