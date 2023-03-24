import { useAtom } from 'jotai'
import { useState } from 'react'
import { PatternFormat } from 'react-number-format'
import { phoneAtom } from './formState'
import { GenericInput } from './GenericInput'

export function InputTelephone(): JSX.Element {
  const [phone, setPhone] = useAtom(phoneAtom)

  const setValue = (value: string) => {
    setPhone(value)
  }

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

  const CustomInput = (className: string) => {
    return (
      <PatternFormat
        {...config}
        onBlur={onFormat}
        value={phone.value}
        onChange={(evt) => {
          setPhone(evt.target.value)
        }}
        onClick={() => setNumberLength(0)}
        className={className}
      />
    )
  }

  const onFormat = (): void => {
    setNumberLength(phone.value.length)
  }

  return (
    <GenericInput
      setValue={setValue}
      title='Telefone'
      value={phone}
      customInput={CustomInput}
    />
  )
}
