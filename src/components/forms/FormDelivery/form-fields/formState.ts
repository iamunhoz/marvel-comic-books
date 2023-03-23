import { atomWithValidate } from 'jotai-form'
import * as Yup from 'yup'

const deliverySchema = {
  email: Yup.string().email().required(),
  phone: Yup.string().min(10).max(11).required(),
  name: Yup.string().required(),
  address: Yup.string().required()
}

export const emailAtom = atomWithValidate('', {
  validate: async (v) => {
    await deliverySchema.email.validate(v)
    return v
  }
})

export const phoneAtom = atomWithValidate('', {
  validate: async (v) => {
    await deliverySchema.phone.validate(v)
    return v
  }
})

export const nameAtom = atomWithValidate('', {
  validate: async (v) => {
    await deliverySchema.name.validate(v)
    return v
  }
})

export const addressAtom = atomWithValidate('', {
  validate: async (v) => {
    await deliverySchema.address.validate(v)
    return v
  }
})
