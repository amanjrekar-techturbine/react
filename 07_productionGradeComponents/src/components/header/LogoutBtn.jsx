import React from 'react'

function LogoutBtn() {

    const logoutHandler = () => { }

  return (
    <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn