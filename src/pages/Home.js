import './home.css'
import search_logo from '../assets/search.png'
import Header from "../component/header/header"
import Budget from "../component/selectors/budgetSelector/Budget"
import Location from '../component/selectors/otherSelector/Location'
import Model from '../component/selectors/otherSelector/Model'
import Item from '../component/item'
import { useEffect, useState } from 'react'
import { Sidebar } from '../layout/sidebar/sidebar'
import { Listing } from '../layout/Listing/listing'
import useFetchVehicle from '../hook/useFetchVehicles'



const Home = ()=>{

    const {response, loading, error} = useFetchVehicle(`${process.env.REACT_APP_BACKEND_URL}/vehicle`)

    const [search, setSearch] = useState('')
    const [location, setLocation] = useState('Yaounde')
    const [model, setModel] = useState('All')
    const [price, setPrice] = useState('1000000')

    const [data, setData] = useState([])

    useEffect(()=>{
        console.log(response)
        console.log(price)
        console.log(location)
        console.log(model)
        if(model === "All"){
            const newdata = response.filter(item =>( parseInt(item.price) <= price)  && item.location === location)
            setData(newdata)
        }else{
            const newdata = response.filter(item => ( parseInt(item.price) <= price)  && item.model === model && item.location === location)
            setData(newdata)
        }

        if(search !== ""){
            const newdata = response.filter(item => item.model.startsWith(search) || item.made.startsWith(search) && ( parseInt(item.price) <= price))
            setData(newdata)
        }
        console.log(data)
    },[response, price, model, location, search])


    return(
        <div className="body_container">
            <div className='home_container'>
                <Sidebar price={price} setPrice={setPrice}/>
                
                <div className='listing_main'>
                    <div>
                        <p style={{color: 'gray'}}>{data.length} results</p>
                    </div>
                    <div className='item_div_main'>

                        {data.map((vehicle, i)=>{
                            return(
                                <Listing key={i} data={vehicle} imageURL={vehicle.images[0]} name={vehicle.model} cartype={vehicle.made} capacity={"5"} fuel={vehicle.fuel} transmission={vehicle.transmition} price={vehicle.price}/>
                            )
                        })}
                    {/* <Item price={price} model={model} location={location} search={search}/> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home