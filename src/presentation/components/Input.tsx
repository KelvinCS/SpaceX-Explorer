import React from 'react'

export const Input = (props: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <input 
      {...props as any} 
      className='bg-background-slate-dark rounded-lg px-5 text-gray-800 outline-none border' 
    />
  )
}