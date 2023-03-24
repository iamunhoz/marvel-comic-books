import { ButtonSend } from './ButtonSend'
import {
  InputAddress,
  InputEmail,
  InputName,
  InputTelephone
} from './form-fields'

export function FormDelivery(): JSX.Element {
  return (
    <div className='w-full flex flex-col justify-between mb-8 pr-4'>
      <h5>
        Preencha seus dados para que possamos enviar o quadrinho escolhido até
        você :)
      </h5>
      <div>
        <InputName />
        <InputEmail />
        <InputTelephone />
        <InputAddress />
      </div>
      <ButtonSend />
    </div>
  )
}
