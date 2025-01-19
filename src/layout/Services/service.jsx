import './index.css'
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";

export const Services=()=>{

    return(
        <div className='services_section'>
            <h1>Our services</h1>

            <div className='service_inner_div'>
                <div className='service_card'>
                    <FaDollarSign className='service_logo'/>
                    <h3>Vehicle Financing</h3>
                    <p>Making your dream car a reality is easier than ever with our flexible financing options. We work with leading financial institutions to secure competitive loan rates and terms tailored to your budget. </p>
                </div>
                <div className='service_card'>
                    <MdOutlineSecurity className='service_logo'/>
                    <h3>Insurance</h3>
                    <p>Protect your investment with our comprehensive vehicle insurance options. We partner with reputable insurance providers to offer a range of coverage plans to suit your needs and budget. </p>
                </div>
                <div className='service_card'>
                    <FaClipboardCheck className='service_logo'/>
                    <h3>Maintenance</h3>
                    <p>Keep your vehicle running smoothly with our state-of-the-art service center. Our certified technicians provide expert maintenance and repair services using genuine parts. From routine oil changes to complex diagnostics, we're committed to keeping your car in top condition.</p>
                </div>
                <div className='service_card'>
                    <FaHandHoldingDollar className='service_logo'/>
                    <h3>Vehicle Trade-Ins</h3>
                    <p>"Looking to upgrade your current vehicle? We offer competitive trade-in values to make your transition to a new car seamless. Our experienced appraisers will provide a fair and accurate assessment of your vehicle's worth.</p>
                </div>
            </div>
        </div>
    )
}