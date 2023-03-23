import { useState } from 'react'
import { PatternFormat } from 'react-number-format'
import { useAtom } from 'jotai'
import { phoneAtom } from './formState'

export function InputTelephone(): JSX.Element {
  const [phone, setPhone] = useAtom(phoneAtom)
  const initial_length = phone.value ? phone.value.replace(/\D/g, '').length : 0
  const [numberLength, setNumberLength] = useState(initial_length)

  const config = {
    mask: '_',
    allowEmptyFormatting: true,
    format:
      numberLength > 0 && numberLength <= 10
        ? '(##) ####-####'
        : '(##) #####-####'
  }

  const onFormat = (): void => {
    setNumberLength(phone.value.length)
  }

  return (
    <div>
      <PatternFormat
        {...config}
        onBlur={onFormat}
        value={phone.value}
        onChange={(evt) => {
          setPhone(evt.target.value)
        }}
        onClick={() => setNumberLength(0)}
      />

      {!phone.isValidating && phone.isDirty && (
        <div>
          <span>{phone.isValid && 'Valid'}</span>
          <span>{!phone.isValid && `${phone.error}`}</span>
        </div>
      )}
    </div>
  )
}
