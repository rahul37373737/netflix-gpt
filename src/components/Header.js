  import React from 'react'

  const Header = () => {
    return (
      <div className=" flex absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 justify-between">
          <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
     
      <div className="flex p-2">
        <img className='w-12 h-12'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8L-U4J52M78FwsXjH2rwpicIpG4BrZB0p9sx9-6NtmcCv6HsUrA72cx5Z47sJ1BYBPI&usqp=CAU' alt="usericon"></img>
      <button className="font-bold text-white">(Sign out)</button>
      </div>
       </div>
    )
  }
  export default Header
