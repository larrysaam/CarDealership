import './index.css'
import { SiToyota } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { TbCircleLetterBFilled } from "react-icons/tb";
import { SiRollsroyce } from "react-icons/si";
import { SiMitsubishi } from "react-icons/si";
import { SiMazda } from "react-icons/si";

export const LogosBanner =()=>{

    return(
        <div>
            <div className='logobanner_div'>
                <SiToyota className=" smallLogo"/>
                <SiMercedes className="car_logo"/>
                <TbCircleLetterBFilled className=" smallLogo"/>
                <SiRollsroyce className="car_logo"/>
                <SiMitsubishi className="car_logo"/>
                <SiMazda className="car_logo"/>
            </div>
        </div>
        
    )
}