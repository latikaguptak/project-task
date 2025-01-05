import React, { useState } from 'react'
import { Data3 } from '../data/data'
import Container from '../container/Container'

const Section2 = () => {
    const [openModal, setOpenModal] = useState(null);
  return (
    <div>
        <section className="flex flex-col">
          <dev className='text-blue-900 font-bold text-xl mb-3'>
            <h2>Section 3</h2>
          
          </dev>
        
        <div className='grid grid-cols-5 gap-10' >
          {Data3.map((container, index) => (
            <Container
              key={index}
              {...container}
              isOpen={openModal === index}
              onClose={() => setOpenModal(null)}
              onClick={() => setOpenModal(index)
              
              }
            />
          ))}
        </div>
        
      </section>

    </div>
  )
}

export default Section2