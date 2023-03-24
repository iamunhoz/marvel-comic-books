import { useAtom } from 'jotai'
import { addressAtom } from './formState'
import { GenericInput } from './GenericInput'

export function InputAddress() {
  const [address, setAddress] = useAtom(addressAtom)

  const setValue = (value: string) => {
    setAddress(value)
  }
  return <GenericInput setValue={setValue} title='Endereço' value={address} />
}
