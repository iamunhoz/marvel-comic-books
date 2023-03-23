import { getMarvelData } from 'api'
import { Comics } from 'api/types'
import { atom } from 'jotai'
import { loadable } from 'jotai/utils'

// busca dados na api da marvel e salva no state
export const loadableComicsList = loadable(
  atom<Promise<Comics[]>>(async (get) => {
    const page = get(pagination)
    const comics = await getMarvelData({ resource: 'comics', page })

    if (!comics) return []
    return comics
  })
)

// filtros e paginação para busca de dados
export const ComicsSearchValue = atom('')
export const pagination = atom(1)

// exibição de dados extras do comics selecionado
export const showComicsModal = atom(false)
export const selectedComics = atom<Comics | null>(null)

// endereço buscado no mapa para envio do comics selecionado
export const destinationAddress = atom('')
