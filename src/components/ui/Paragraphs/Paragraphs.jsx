import React from 'react'

const Paragraphs = (text) => {
  return (
    <div>
      <h2 className='text-emerald-600 text-5xl  p-2 '>TimeCheck</h2>
        <p className="text-xl capitalize p-2 font-bold ">{text.content}</p>
    </div>
  )
}

export default Paragraphs