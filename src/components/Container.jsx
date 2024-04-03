import React from 'react'
import Sidemenu from './Sidemenu/Sidemenu'
import Body from './Body/Body'

export const Container = () => {
  return (
    <div className='flex m-auto h-[90vh] items-center justify-center w-[85vw] my-10 rounded-xl
    overflow-hidden'>
      <Sidemenu />
      <Body />
    </div>
  )
}

export default Container
