import React from 'react'

const ContainerHeader = ({logo, heading}) => {
  return (
    <div className='mt-4 border-b pb-4 border-gray-400'>
        <header className='flex items-center gap-2'>
        <logo>
          <img src={logo} alt="logo" className='h-10 w-10'/>
        </logo>
        <h1 className="font-semibold text-2xl"> {heading} </h1>
      </header>
    </div>
  )
}

export default ContainerHeader