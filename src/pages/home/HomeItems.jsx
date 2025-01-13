import React from 'react'
import Medicine  from './../../components/data/medicine.json';
import ContainerHeader from '../../components/home_container_header/ContainerHeader';
import MedicineChart from '../../components/charts/MedicineChart';
import CsvReader from '../../components/csvfiles/CsvReader';
const HomeItems = () => {
  return (
    <div>
      <ContainerHeader logo="" heading="Medicines"/>
      <div  className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <table className="mt-6 w-full text-left table-auto min-w-max">
        <thead className='p-4 border border-blue-gray-100 bg-gray-400'>
          <tr>
            <th>S.No.</th>
            <th>MedicineName</th>
            <th>Type</th>
            <th>Price</th>
            <th>Manufacturing Date</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {Medicine.map((medicine) => (
            <tr key={medicine.id} className='p-3 g-5'>
              <td>{medicine.id}</td>
              <td>{medicine.medicineName}</td>
              <td>{medicine.medicalUse}</td>
              <td>{medicine.price}</td>
              <td>{medicine.createdDate}</td>
              <td>{medicine.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div>
        {/* <MedicineChart/> */}
  
      </div>

    </div>
  )
}

export default HomeItems