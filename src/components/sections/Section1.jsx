
import { Data1, Data2 } from './../data/data';
import Container from './../container/Container';
import { useState } from 'react';

const Section1 = () => {
    const [openModal, setOpenModal] = useState(null);
  return (
    <div className="flex flex-row gap-8">
        <section className="p-2">
        <div className='text-blue-900 font-bold text-xl mb-3'>
          <h2>Section 1</h2>
        </div>
        
        <div className='grid grid-cols-2 gap-10' >
          {Data1.map((container, index) => (
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
      <section >
        <div className="w-48 h-40">
            <img
              src="logoimage2.png"
              alt="Center Image"
              className="w-40 h-35 rounded-lg "
            />
            <h1 className='text-xl font-bold  text-orange-400 items-center justify-center flex -mt-7'  > Health care</h1>
            <h4 className='text-sm font-semibold text-blue-900 items-center flex justify-center'>Welcome to the Health Page</h4>
      </div>

      </section>
      <section className="p-2">
        <div className='text-blue-900 font-bold text-xl mb-3'>
          <h2>Section 2</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-10">
          {Data2.map((container, index) => (
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

export default Section1