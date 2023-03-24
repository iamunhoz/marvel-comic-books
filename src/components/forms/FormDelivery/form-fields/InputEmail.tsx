import { useAtom } from 'jotai'
import { emailAtom } from './formState'
import { GenericInput } from './GenericInput'

export function InputEmail() {
  const [email, setEmail] = useAtom(emailAtom)

  const setValue = (value: string) => {
    setEmail(value)
  }

  return <GenericInput setValue={setValue} title='E-mail' value={email} />
}
