import React from 'react'

export default ({imgSrc}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return {
    isOpen,
    openModal: () => setIsOpen(true),
    imgSrc,
    closeModal: () => setIsOpen(false),
  }
}
