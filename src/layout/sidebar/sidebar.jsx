import { useState } from "react"
import './index.css'
import { CapacityFilter, CarTypeFilter, PricingFilter } from "../../component/filters"


export const Sidebar = ({price, setPrice})=>{

    const [carType, setCarType] = useState('')
    const [capacity, setCapacity] = useState('2')

    return(
        <div className="sidebar_main">
            <h3 style={{color: 'black', fontStyle: 'Bold', fontSize: '20px'}}>Filter by</h3>

            <CarTypeFilter setCarType={setCarType}/>
            <CapacityFilter setCapacity={setCapacity}/>
            <PricingFilter setPrice={setPrice} price={price}/>
        </div>
    )
}