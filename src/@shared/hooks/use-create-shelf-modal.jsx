import React, { useState } from 'react'
import { CreateShelfModal } from '../components'

export default function useConfirmModal() {
  const [isOpen, setState] = useState(false)

  const openShelfModal = () => setState(true)
  const closeShelfModal = () => setState(false)

  const ShelfModal = ({ children }) => (
    <CreateShelfModal isOpen={isOpen} onClose={closeShelfModal}>
      {children}
    </CreateShelfModal>
  )

  return {
    ShelfModal,
    openShelfModal,
    closeShelfModal,
  }
}
