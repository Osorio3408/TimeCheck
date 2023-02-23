import React from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

export const ListNavbar = () => {
  return (
    <ul className='flex items-center h-10'>
      <li className='text-emerald-800 text-2xl'><BsFillArrowLeftCircleFill/></li>
      <li className='relative left-1/4 text-2xl font-thin'>Iniciar Sesión</li>
    </ul>
  )
}
