import React, { useId } from 'react'

function Input() {

    const id = useId()

  return (
    <>
        <label htmlFor={id}>Username</label>
        <input type="text" id={id} />
    </>
  )
}

export default Input