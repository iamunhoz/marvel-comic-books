import { useAtom } from 'jotai'
import { showQuadrinhoModal } from '../../state';

export function Modal():JSX.Element {
  const [showModal, setShowModal] = useAtom(showQuadrinhoModal)

  const closeModal = () => {
    setShowModal(false)
  }

  if (!showModal) return <></>
  return (
    <div className='absolute top-1/2 left-1/2 z-50 w-28 h-28 bg-yellow-700'
    >Modal

    <button onClick={closeModal}>fechar</button>
    </div>
  )
}