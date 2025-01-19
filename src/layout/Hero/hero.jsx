import { TbLaurelWreath1 } from "react-icons/tb";
import './index.css'
export const Hero = ()=>{

    return(
        <div className="hero_section">
            <div className='lauerl_div'>
                <p className='hero_laurel'><TbLaurelWreath1 className='laurel_logo'/> Best Dealership of the year</p>
            </div>
            <h1>Find Your <span>Dream</span> Car</h1>
            <p className='text_p'>Carsforall has a variety of imported cars at best prices.</p>

            <div className="hero_image_container">
                <img src='https://res.cloudinary.com/dhhtxax50/image/upload/v1737323583/CarDealership/maincar_qzhp9i.png' alt="hero" className="hero_img heroimg"/>
            </div>

            <div className='hero_btns'>
                <button className='contact_hero_btn herobtn'>Contact Us</button>
                <button className='store_btn herobtn'>View Shop</button>
            </div>
        </div>
    )
}