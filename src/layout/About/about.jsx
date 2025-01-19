import './index.css'
import about1 from '../../assets/about1.jpeg'
import about2 from '../../assets/about2.jpeg'
import about3 from '../../assets/about3.jpeg'


export const About=()=>{

    return(
        <div className='about_section'>
            <div className='inner_about'>
                <div className='about_img_div'>
                    <div className='img_1_about'>
                        <img src={about2} alt='' className='about_img'/>
                    </div>
                    <div className='img_2_about'>
                        <img src={about1} alt='' className='about_img'/>
                        <img src={about3} alt='' className='about_img'/>
                    </div>
                </div>
                <div className='about_text'>
                    <h1>Our <span>Dealership</span></h1>
                    <p>Established in 1995 in Yaoundé, Cameroon, [Dealership Name] has been a trusted source for quality vehicles for nearly three decades. We pride ourselves on serving the local community with integrity and exceptional service. We offer a diverse selection of new and pre-owned vehicles, specializing in popular brands such as Toyota, Hyundai, Kia, and Mitsubishi. Whether you're seeking a reliable family car, a rugged 4x4 for exploring Cameroon's diverse terrain, or a fuel-efficient city commuter, our experienced team is dedicated to helping you find the perfect vehicle to meet your needs and budget. Visit us today and experience the [Dealership Name] difference.</p>
                </div>
            </div>
        </div>
    )
}


export const OurGoal =()=>{

    return(
        <div className='goals_section'>
            <h1>What we stand for.</h1>
            <div className='goals_list'>
                <ul>
                    <li><p>1</p> Integrity</li>
                    <li><p>2</p> Customer Focus</li>
                    <li><p>3</p> Quality</li>
                </ul>
            </div>
        </div>
    )
}