import React from 'react'

function openModal({setIsOpen}) {
  setIsOpen(true)
}

export default () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return {
    isOpen,
    openModal: openModal.bind(null, {setIsOpen}),
  }
}
