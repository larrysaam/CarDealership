import { BsPeopleFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa6";
import { BsSpeedometer } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";

import './listing.css'


//features listing
export const ListingFeatures = ({capacity, fuel, transmission})=>{

    return(
        <div className="features">
            <div className="features_1">
                <p><BsPeopleFill className="feature_logo"/> {capacity}</p>
                <p><FaGasPump className="feature_logo"/> {fuel}</p>
            </div>
            <p><GiGearStickPattern className="feature_logo"/> {transmission}</p>
        </div>
    )
}


//model and name
export const ListingName = ({cartype, name})=>{

    return(
        <div className="name_section">
            <h3 style={{marginBottom: '-10px'}}>{name}</h3>
            <p style={{color: "gray", fontSize: '16px'}}>{cartype}</p>
        </div>
    )
}

//price section of listing box
export const ListingPrice = ({price})=>{

    const handleclick = () => {
        const whatsappLink = 'https://we.me/+237670019205?text=CarsForAll';
        window.location.href = whatsappLink;
    };

    return(
        <div className="price_listing">
            <h3>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} F</h3>
            <button className="contact_btn" onClick={()=>handleclick()}><FaWhatsapp className="whatsapp_icon"/>Contact</button>
        </div>
    )
}