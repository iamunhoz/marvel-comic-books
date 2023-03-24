import { FormDelivery } from 'components/forms/FormDelivery'
import Map from './Map'

export function Delivery(): JSX.Element {
  return (
    <div className='flex gap-4'>
      <Map />
      <FormDelivery />
    </div>
  )
}
