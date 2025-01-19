import useFetchVehicle from '../../hook/useFetchVehicles'
import { Listing } from '../Listing/listing'
import './index.css'

export const HomeListing = ()=>{

    const {response, loading, error} = useFetchVehicle(`${process.env.REACT_APP_BACKEND_URL}/vehicle`)

    return(
        <div className='homeListing_div'>
            <h1>New Arrivals</h1>
            <p id='hl_p'>Here is a few of our most recent and top vehicles in our store.</p>

            <div className='listing_inner_div'>
                {response.slice(9,13).map((vehicle, i)=>{
                    return(
                        <Listing data={vehicle} name={vehicle.model} cartype={vehicle.made} capacity={"5"} fuel={vehicle.fuel} transmission={vehicle.transmition} price={vehicle.price} key={i}/>
                    )
                })}
            </div>
            <div style={{display:'flex', justifyContent: 'center', marginTop:"40px"}}>
                <button className='store_btn herobtn'>View More</button>
            </div>
        </div>
    )
}