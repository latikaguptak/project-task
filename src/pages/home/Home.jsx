


import { Outlet } from "react-router";
import Section from "../../components/sections/Section";


const Home = () => {
  

  return (
    <div className="">
   
      <div>

      
      <Section/>
    
      

      </div>
      {/* <section className="p-2">
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        <div className="absolute top-96 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-10 items-center">
            <img
              src="https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE=" // Replace with your image URL
              alt="Center Image"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
      </section> */}
      
  
    </div>
  );
};

export default Home;
