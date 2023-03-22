import { getMarvelData } from "../api"
import { Comics } from "api/types"
import { atom } from "jotai"
import { loadable } from "jotai/utils"

export const quadrinhoSearchValue = atom("")

export const pagination = atom(1)

export const showQuadrinhoModal = atom(false)

export const quadrinhosList = atom<Comics[]>([])

// saga: paginar usando fim de pagina como trigger
export const asyncQuadList = atom<Promise<Comics[]>>(async (get) => {
  const page = get(pagination)
  const quadrinhosExistentes = get(quadrinhosList)
  return getMarvelData({ resource: "comics", page }).then(
    (res) => res.data.results as Comics[]
  )
})

export const loadableQuadrinhosList = loadable(asyncQuadList)
