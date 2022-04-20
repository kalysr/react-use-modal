import { useContext } from 'react'
import { ModalContext } from './modalContext'

export const useModalDynamic = <T = any>() => {
  const [state, setState] = useContext(ModalContext)

  const closeModal = (id: symbol, params?: T) => {
    setState((state) => ({
      ...state,
      [id]: {
        isOpen: false,
        params
      }
    }))
  }

  const openModal = (id: symbol, params?: T) => {
    setState((state) => ({
      ...state,
      [id]: {
        isOpen: true,
        params
      }
    }))
  }

  const setParams = (id: symbol, params: T) => {
    setState((state) => ({
      ...state,
      [id]: {
        isOpen: state[id]?.isOpen || false,
        params
      }
    }))
  }

  const getParams = (id: symbol): T | undefined => {
    return state[id]?.params
  }

  const isOpen = (id: symbol): boolean => {
    return state[id]?.isOpen || false
  }

  return {
    isOpen,
    closeModal,
    openModal,
    setParams,
    getParams
  }
}
