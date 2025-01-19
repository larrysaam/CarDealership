import { useNavigate } from 'react-router-dom'
import { ListingFeatures, ListingName, ListingPrice } from '../../component/listing/listing'
import './index.css'
import { useEffect, useRef, useState } from 'react'


export const Listing = ({data, name, cartype, capacity, fuel, transmission, price})=>{

    const nav = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const timerRef = useRef(null);
  
    useEffect(() => {
      return () => {
        // Clear the timer when the component unmounts to prevent memory leaks
        clearTimeout(timerRef.current);
      };
    }, []);
  
    //change image index on hover if and only if image array length is greater than 1
    const handleMouseEnter = () => {
        if(data.images.length > 1){
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
        }
    };
  
    const handleMouseLeave = () => {
      clearTimeout(timerRef.current);
      setCurrentImageIndex(0); // Reset to the first image on mouse leave
    };

    return(
        <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="listing_div" 
            onClick={()=>nav('/details', {state: {data}})}
        >
            <div className="image_listing">
                <img src={data.images[currentImageIndex]}  alt={data.images[currentImageIndex]} className="list_image"/>
            </div>
            <div className="listing_details">
                <ListingName cartype={cartype} name={name}/>
                <p style={{width:'90%', color: "gray", fontSize: '12px',marginTop: "30px" ,marginBottom: '-14px', textAlign: 'left'}}>Features</p>
                <ListingFeatures capacity={capacity} fuel={fuel} transmission={transmission}/>
                <ListingPrice price={price}/>
            </div>
        </div>
    )
}