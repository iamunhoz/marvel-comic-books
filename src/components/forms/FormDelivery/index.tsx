import {
  InputAddress,
  InputEmail,
  InputName,
  InputTelephone
} from './form-fields'

export function FormDelivery(): JSX.Element {
  return (
    <div>
      <form action=''>
        <InputName />
        <InputEmail />
        <InputTelephone />
        <InputAddress />
      </form>
    </div>
  )
}
