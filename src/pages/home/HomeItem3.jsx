import React from 'react'
import ContainerHeader from '../../components/home_container_header/ContainerHeader'
import MedicineChart from '../../components/charts/MedicineChart'

const HomeItem3 = () => {
  return (
    <div>
        <div>
            <ContainerHeader logo="" heading="Medicine Chart"/>
        </div>
        <div>
            <MedicineChart/>
        </div>
    </div>
  )
}

export default HomeItem3