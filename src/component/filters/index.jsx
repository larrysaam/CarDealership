import './filter.css'


//filter checkbox
const Check = ({setCarType, name})=>{
    return(
        <div className='checkbox_div'>
            <input type="checkbox" name={name} value={name} onChange={setCarType}/>
            <label for={name}>{name}</label><br/>
        </div>
    )
}


//car type filter component
export const CarTypeFilter =({setCarType})=>{

    return(
        <div className="car_type_filter">
            <p style={{color: 'gray', fontSize: '14px'}}>Car type</p>

            <Check setCarType={()=>setCarType('Mini')} name={'Mini'}/>
            <Check setCarType={()=>setCarType('Standard')} name={'Standard'}/>
            <Check setCarType={()=>setCarType('Compact')} name={'Compact'}/>
            <Check setCarType={()=>setCarType('Economy')} name={'Economy'}/>
            <Check setCarType={()=>setCarType('Van')} name={'Van'}/>
            <Check setCarType={()=>setCarType('Pickup')} name={'Pickup'}/>
            <Check setCarType={()=>setCarType('Others')} name={'Others'}/>
        </div>
    )
}


//vehicle capacity filter
export const CapacityFilter =({setCapacity})=>{

    return(
        <div className='capacity_filter'>
            <p style={{color: 'gray', fontSize: '14px'}}>Capacity</p>
            <Check setCarType={()=>setCapacity('5')} name={'2-5 passengers'}/>
            <Check setCarType={()=>setCapacity('6')} name={'6 or more passengers'}/>
        </div>
    )
}


//Pricing Fiter
export const PricingFilter = ({setPrice, price})=>{

    return(
        <div className='capacity_filter'>
            <h4>Max Budget : <span className="price_value">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'XAF'}</span></h4>
            <input type="range" min="100000" max="20000000" step="50000" id="price_range" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        </div>
    )
}