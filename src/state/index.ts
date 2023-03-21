import { getMarvelData } from "../api"
import { Comics } from "api/types"

import { atom } from "jotai"
import { loadable } from "jotai/utils"

export const quadrinhoSearchValue = atom("")

export const showQuadrinhoModal = atom(false)

export const quadrinhosList = atom<Comics[]>([])

export const asyncQuadList = atom<Promise<Comics[]>>(async () =>
  getMarvelData("comics").then((res) => res.data.results as Comics[])
)

export const loadableQuadrinhosList = loadable(asyncQuadList)
