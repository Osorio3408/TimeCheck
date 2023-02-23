import React from 'react'
import { DivLogo } from '../../iu/DivLogo/DivLogo'
import { FormLogin } from '../FormLogin/FormLogin'


export const SectionLogin = () => {
  return (
    <section className='bg-teal-100 h-screen m-5 border border-slate-600 rounded-lg shadow-lg shadow-slate-600'>
      <DivLogo/>
      <FormLogin/>
    </section>
  )
}
