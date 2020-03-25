import React from 'react'

function openModal({setIsOpen}) {
  setIsOpen(true)
}

export default ({imgSrc}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return {
    isOpen,
    openModal: openModal.bind(null, {setIsOpen}),
    imgSrc,
  }
}
