import { GiGearStickPattern } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFuelPumpFill } from "react-icons/bs";
import { MdCamera } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { PiSeatbeltBold } from "react-icons/pi";
import { IoSpeedometerOutline } from "react-icons/io5";

import './sideDetails.css'


export const SideDetails = ({capacity, speed, air, camera, fuel, gear, location, price}) =>{

    const handleclick = () => {
        const whatsappLink = 'https://we.me/+237670019205?text=CarsForAll';
        window.location.href = whatsappLink;
    };

    return(
        <div className="side_details">
            <div className="details">
                <p style={{color: 'gray', fontSize: '14px'}}>Vehicle details</p>
                <p style={{fontSize: '16px'}}><PiSeatbeltBold className="detail_icon"/> {capacity} Passengers</p>
                <p style={{fontSize: '16px'}}><IoSpeedometerOutline className="detail_icon"/> {speed} km/h</p>
                <p style={{fontSize: '16px'}}><TbAirConditioning className="detail_icon"/> {air} </p>
                <p style={{fontSize: '16px'}}><MdCamera className="detail_icon"/> {camera}</p>
                <p style={{fontSize: '16px'}}><BsFuelPumpFill className="detail_icon"/> {fuel}</p>
                <p style={{fontSize: '16px'}}><GiGearStickPattern className="detail_icon"/> {gear}</p>
            </div>
            <div className="location_details">
                <p style={{color: 'gray', fontSize: '14px'}}>Location</p>
                <p style={{fontSize: '16px'}}><FaLocationDot className="detail_icon"/> {location}</p>
            </div>
            <div className="price_details">
                <h3>{price} FCFA</h3>
                <button className="contactnow_btn contactnow" onClick={()=>handleclick()}>Contact Now</button>
            </div>
        </div>
    )
}