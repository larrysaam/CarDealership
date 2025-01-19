import { useEffect, useRef, useState } from 'react';
import profile from '../../assets/tes2.jpeg'
import './cards.css'
import { FaStar } from "react-icons/fa";

export const TestimonialCards =({text})=>{

    const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
    const boxRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
        if (boxRef.current) {
            const rect = boxRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setGlowPosition({ x, y });
        }
        };

        const handleMouseLeave = () => {
        setGlowPosition({ x: 0, y: 0 }); // Reset position on mouse leave
        };

        const box = boxRef.current; // Get the current box element

        if (box) {
            box.addEventListener('mousemove', handleMouseMove);
            box.addEventListener('mouseleave', handleMouseLeave);
        }



        return () => {
            if (box) {
                box.removeEventListener('mousemove', handleMouseMove);
                box.removeEventListener('mouseleave', handleMouseLeave);
            }

        };
    }, []); // Empty dependency array ensures this runs only on mount/unmount



    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= 100) {
        return <p>{text}</p>; // No need for "Read More" if text is short
    }

    const displayedText = isExpanded ? text : text.slice(0, 150) + '...';


    
    return(
        <div className='testimonial_card' ref={boxRef}>
            <div className='sub_tes_div'>
                <div
                    className="glow"

                    style={{
                        left: glowPosition.x,
                        top: glowPosition.y,
                        opacity: glowPosition.x !== 0 || glowPosition.y !== 0 ? 1 : 0, //conditionally set opacity based on whether the mouse is inside the box
                    }}
                ></div>
                <div className='tes_stars_div'>
                    <FaStar className='star_icon'/>
                    <FaStar className='star_icon'/>
                    <FaStar className='star_icon'/>
                    <FaStar className='star_icon'/>
                    <FaStar className='star_icon'/>
                </div>
                <div className='test_text_container'>
                    <p id='tes_comment'>{displayedText}</p>
                    <button className="read-more-button" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
            <div className='tes_bottom_per_id'>
                <img src={profile} alt='' className='tes_per_img'/>
                <div className='tes_per_details'>
                    <h4>Larrien</h4>
                    <p></p>
                </div>
            </div>
        </div>
    )
}




// Video Testimonial
export const VideoTestimonialCards =({text, video})=>{

    const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
    const boxRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
        if (boxRef.current) {
            const rect = boxRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setGlowPosition({ x, y });
        }
        };

        const handleMouseLeave = () => {
        setGlowPosition({ x: 0, y: 0 }); // Reset position on mouse leave
        };

        const box = boxRef.current; // Get the current box element

        if (box) {
            box.addEventListener('mousemove', handleMouseMove);
            box.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (box) {
                box.removeEventListener('mousemove', handleMouseMove);
                box.removeEventListener('mouseleave', handleMouseLeave);
            }

        };
    }, []); // Empty dependency array ensures this runs only on mount/unmount



    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= 100) {
        return <p>{text}</p>; // No need for "Read More" if text is short
    }

    const displayedText = isExpanded ? text : text.slice(0, 150) + '...';


    return(
        <div className='vid_test_card'>
            <div className='vid_div'>
                <img src={video} alt='' id='video_tes'/>
            </div>
            <div className='vid_sub_tes_div' ref={boxRef}>
                <div
                    className="glow"

                    style={{
                        left: glowPosition.x,
                        top: glowPosition.y,
                        opacity: glowPosition.x !== 0 || glowPosition.y !== 0 ? 1 : 0, //conditionally set opacity based on whether the mouse is inside the box
                    }}
                ></div>
                <div className='tes_stars_div'>
                    <FaStar className='star_icon'/>
                    <FaStar className='star_icon'/>
                    <FaStar className='star_icon'/>
                    <FaStar className='star_icon'/>
                    <FaStar className='star_icon'/>
                </div>
                <div className='test_text_container'>
                    <p id='tes_comment'>{displayedText}</p>
                    <button className="read-more-button" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    )
}