# use-react-modal

> react use modal hook

[![NPM](https://img.shields.io/npm/v/use-react-modal.svg)](https://www.npmjs.com/package/use-react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-react-modal
```

## Usage

```tsx
import React from 'react'

import { useModal, ModalProvider, useModalDynamic } from 'use-react-modal'

const modalId = Symbol()
const modalId2 = Symbol()

const App = () => {
  const { openModal } = useModalDynamic<string>()
  const handleClick1 = () => {
    openModal(modalId, 'test data for modal 1')
  }
  const handleClick2 = () => {
    openModal(modalId2, 'test data for modal 2')
  }
  return (
    <div>
      <button onClick={handleClick1}>Open modal 1</button>
      <button onClick={handleClick2}>Open modal 2</button>
      <TestModal modalId={modalId} />
      <TestModal modalId={modalId2} />
    </div>
  )
}

const TestModal: React.FC<{ modalId: symbol }> = ({ modalId }) => {
  const { params, closeModal, isOpen } = useModal<string>(modalId)
  const handleClick = () => {
    closeModal()
  }
  return (
    <div style={{ border: '1px solid' }}>
      <h1>My modal</h1>
      <h2>is open : {String(isOpen)} </h2>
      <h2>params : {params} </h2>
      <button onClick={handleClick}>Close modal</button>
    </div>
  )
}

export default function () {
  return (
    <ModalProvider>
      <App />
    </ModalProvider>
  )
}

```

## License

MIT © [Kalysr](https://github.com/Kalysr)
