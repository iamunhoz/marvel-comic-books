import { useAtom } from 'jotai'
import { nameAtom } from './formState'
import { GenericInput } from './GenericInput'

export function InputName() {
  const [name, setName] = useAtom(nameAtom)

  const setValue = (value: string) => {
    setName(value)
  }

  return <GenericInput setValue={setValue} title='Nome' value={name} />
}
