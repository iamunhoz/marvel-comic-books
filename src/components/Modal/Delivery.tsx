import { FormDelivery } from 'components/forms/FormDelivery'
import Map from './Map'

export function Delivery(): JSX.Element {
  return (
    <div className='flex flex-col lg:flex-row gap-4'>
      <Map />
      <FormDelivery />
    </div>
  )
}
