import { Comics } from 'api/types';

type ComicsCardProps = {
  comics: Comics
}
export function ComicsCard(props: ComicsCardProps):JSX.Element {
  const { comics } = props
  return (
    <div className='border'>
      <p>{comics.title}</p>
      <img
        src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
        alt={comics.title}
        width={200}
        crossOrigin='anonymous'
      />
    </div>
  )
}