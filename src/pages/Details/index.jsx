import { useLocation } from 'react-router-dom'
import { ImageSlider } from '../../component/ImageSlider/imageSlider'
import { SideDetails } from '../../layout/sideDetails/sideDetails'
import './index.css'

export const Details = () =>{

    const {state} = useLocation()

    return(
        <div className="detials_main">
            <ImageSlider images={state.data.images} name={state.data.model}/>
            <SideDetails capacity={'5'} speed={'240'} air={state.data.ac} camera={state.data.reverse_camera} fuel={state.data.fuel} gear={state.data.transmition} location={state.data.location} price={state.data.price}/>
        </div>
    )
}