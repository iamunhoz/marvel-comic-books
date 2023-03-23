import { useAtom } from 'jotai'
import { addressAtom } from './formState'

export function InputAddress() {
  const [address, setAddress] = useAtom(addressAtom)

  return (
    <div>
      <input
        value={address.value}
        onChange={(e) => setAddress(e.target.value)}
      />
      {!address.isValidating && address.isDirty && (
        <div>
          <span>{address.isValid && 'Valid'}</span>
          <span>{!address.isValid && `${address.error}`}</span>
        </div>
      )}
    </div>
  )
}
