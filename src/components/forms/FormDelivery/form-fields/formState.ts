import { atomWithValidate } from 'jotai-form'
import * as Yup from 'yup'

const deliverySchema = {
  email: Yup.string()
    .email('Insira um email válido')
    .required('E-mail é obrigatório'),
  phone: Yup.string().min(10).required('Telefone é obrigatório'),
  name: Yup.string().required('Nome é obrigatório'),
  address: Yup.string().required('Endereço é obrigatório')
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
