import { useAtomValue } from 'jotai'
import { useMemo } from 'react'
import {
  emailAtom,
  phoneAtom,
  nameAtom,
  addressAtom
} from './form-fields/formState'

const handleSend = (payload: {
  phone: string
  name: string
  address: string
  email: string
}) => {
  const { phone, name, address, email } = payload
  const whatsappBaseUrl = 'https://api.whatsapp.com/send'
  const text = `Olá, *${
    name.split(' ')[0] // just the first name
  }*. Recebemos seu pedido e em até 30 dias úteis você receberá gratuitamente seu quadrinho no endereço: *${address}*. Também enviamos seu comprovante no email *${email}* `

  const url = new URL(whatsappBaseUrl)
  url.searchParams.set('phone', `55${phone}`)
  url.searchParams.set('text', text)

  window.open(url)
}

export function ButtonSend(): JSX.Element {
  const email = useAtomValue(emailAtom)
  const phone = useAtomValue(phoneAtom)
  const name = useAtomValue(nameAtom)
  const address = useAtomValue(addressAtom)

  const btnDisabled = useMemo((): boolean => {
    // type issue: value 'isValid' only exists when value 'isValidating' is false
    if (
      email.isValidating ||
      phone.isValidating ||
      name.isValidating ||
      address.isValidating
    )
      return true

    return !(email.isValid && phone.isValid && name.isValid && address.isValid)
  }, [email, phone, name, address])

  return (
    <div className='w-full flex justify-center mt-8'>
      <button
        className='rounded bg-green-500 text-white py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={btnDisabled}
        onClick={() => {
          if (
            email.isValidating ||
            phone.isValidating ||
            name.isValidating ||
            address.isValidating ||
            !(email.isValid && phone.isValid && name.isValid && address.isValid)
          )
            return
          handleSend({
            phone: phone.value,
            email: email.value,
            name: name.value,
            address: address.value
          })
        }}
      >
        Enviar
      </button>
    </div>
  )
}
