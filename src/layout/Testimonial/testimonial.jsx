import { TestimonialCards, VideoTestimonialCards } from '../../component/testimonial/cards'
import './index.css'
import video1 from '../../assets/tes1.jpeg'
import video2 from '../../assets/tes2.jpeg'
import video3 from '../../assets/tes3.jpeg'


export const TextTestimonials =()=>{

    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return(
        <div className='testimonial_div'>
            <h1>Trusted by those who value quality.</h1>
            <p>Don't just take our words for it - Hear from those who bought from us.</p>

            <div className='test_sub_div'>
                <TestimonialCards text={text}/>
                <TestimonialCards text={text}/>
                <TestimonialCards text={text}/>
            </div>
            
        </div>
    )
}


export const VideoTestimonial =()=>{

    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    const header = ''

    return(
        <div className='vid_testimonial_div'>
            <h1>Hear from those who value quality.</h1>
            <p>Don't just take our words for it - Hear from those who bought from us.</p>

            <div className='vid_test_sub_div'>
                <VideoTestimonialCards text={text} video={video1}/>
                <VideoTestimonialCards text={text} video={video2}/>
                <VideoTestimonialCards text={text} video={video3}/>
            </div>

        </div>
    )
}