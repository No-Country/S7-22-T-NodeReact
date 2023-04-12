import React from 'react'
import { subjectoptions as options } from './subjects-options'

function Subjects() {
  return (
    <div className='bg-[#022647]'>
    <div className="grid grid-cols-3 gap-4 p-24">
  {options.map((option) => (
    <div key={option.id} className="flex flex-col items-center justify-center bg-white rounded-md">
      <div className="w-16 h-16 mr-6 align-middle mt-10">{option.icon}</div>
      <a href={option.url} className="w-full flex flex-col items-center justify-end  h-[140px] font-semibold text-sm leading-4">
        
        <span className="text-white bg-[#D3E4F3] rounded-t-md p-2 text-center w-full h-[73px]"><p className='mt-4 text-lg text-black'>{option.label}</p></span>
      </a>
    </div>
  ))}
</div>
</div>
  )
}

export default Subjects