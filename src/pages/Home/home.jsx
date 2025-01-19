import { About, OurGoal } from "../../layout/About/about"
import { Footer } from "../../layout/Footer/footer"
import { Hero } from "../../layout/Hero/hero"
import { HomeListing } from "../../layout/HomeListing/homeListing"
import { LogosBanner } from "../../layout/LogosBanner/banner"
import { Services } from "../../layout/Services/service"
import { TextTestimonials, VideoTestimonial } from "../../layout/Testimonial/testimonial"


export const HomePage = ()=>{

    return(
        <div className="Home_page">
            <Hero/>
            <LogosBanner/>
            <HomeListing/>
            <About/>
            <OurGoal/>
            <Services/>
            <TextTestimonials/>
            <VideoTestimonial/>
            <Footer/>
        </div>
    )
}