import { useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { ModalContext, ModalState } from './modalContext'

export const useModal = <T = any>(id: symbol) => {
  const [state, setState] = useContext(ModalContext)

  const { isOpen, params } = (state[id] || { isOpen: false }) as ModalState<T>

  const closeModal = (params?: T) => {
    setState((state) => ({
      ...state,
      [id]: {
        isOpen: false,
        params
      }
    }))
  }

  const openModal = (params?: T) => {
    setState((state) => ({
      ...state,
      [id]: {
        isOpen: true,
        params
      }
    }))
  }

  const setParams = (params: T) => {
    setState((state) => ({
      ...state,
      [id]: {
        isOpen,
        params
      }
    }))
  }

  return {
    isOpen,
    closeModal,
    openModal,
    setParams,
    params
  }
}
