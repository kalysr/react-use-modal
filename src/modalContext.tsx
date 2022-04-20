import React, { createContext, useState } from 'react'

export type ModalState<T = any> = {
  isOpen: boolean
  params?: T
}

export type ModalContextValue = [
  Record<symbol, ModalState>,
  React.Dispatch<React.SetStateAction<Record<symbol, ModalState>>>
]

export const ModalContext = createContext<ModalContextValue>([{}, () => {}])

export const ModalProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<Record<symbol, ModalState>>({})

  return (
    <ModalContext.Provider value={[state, setState]}>
      {children}
    </ModalContext.Provider>
  )
}
