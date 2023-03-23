import { useAtom } from 'jotai'
import { emailAtom } from './formState'

export function InputEmail() {
  const [email, setEmail] = useAtom(emailAtom)

  return (
    <div>
      <input value={email.value} onChange={(e) => setEmail(e.target.value)} />
      {!email.isValidating && email.isDirty && (
        <div>
          <span>{email.isValid && 'Valid'}</span>
          <span>{!email.isValid && `${email.error}`}</span>
        </div>
      )}
    </div>
  )
}
