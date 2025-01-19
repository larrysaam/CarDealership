import './imageslider.css'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import { useEffect, useState } from 'react';

export const ImageSlider = ({images, name}) =>{


    const [image, setImage] = useState(images[0])
    const [imageLen, setImageLen] = useState(images.length)
    const [index, setIndex] = useState(0)

    
    useEffect(()=>{
        setImage(images[0])
        setImageLen(images.length)
    },[images])


    //slide image to left
    const slideLeft=()=>{
        
        if(index === 0){
            setIndex(imageLen-1)
        }else{
            setIndex(index-1)
        }
        console.log(index)

    }

    //slide image to right
    const slideRight=()=>{

        if(index === imageLen-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
        console.log(index)
    }


    return(
        <div className='image_slider'>
            <h2 style={{textAlign: 'left', marginLeft: '10px'}}>{name}</h2>
            <div className='main_image_box'>
                <FaCircleChevronLeft className='slider-button slider_icon_left'  onClick={()=>slideLeft()}/>
                <img 
                    src={images[index]} 
                    alt={images[index]} 
                    className='main_image'
                />
                <FaChevronCircleRight className='slider-button slider_icon_right' onClick={()=>slideRight()}/>
            </div>      
            <div className='mini_image_box'>
                {
                    images.map((img, i)=>{
                        return(
                            <img src={img} alt={img} className='mini_image' onClick={()=>setIndex(i)} key={i}/>
                        )
                    })
                }
            </div>
        </div>
    )
}