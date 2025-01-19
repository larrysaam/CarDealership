import Logo from "../../assets/logo2.png"
import './index.css'
import { IoSendSharp } from "react-icons/io5";


export const Footer =()=>{

    const currentYear = new Date().getFullYear();

    return(
        <div className="footer_div">
            <div className="footer_inner_div innerfooter">
                <div className="footer_col">
                    <img src={Logo} alt="" id="footer_logo_img"/>
                    <h4>No need to worry, we will get you your dream car.</h4>

                    <div className="input_div_footer">
                        <input type="text" placeholder="Enter your email" id="footer_input"/>
                        <button className="send_email_btn"><IoSendSharp className="send_icon"/></button>
                    </div>
                </div>
                

                {/* columns */}
                <div className="footer_link_col">
                    <div className="footer_col"> 
                        <h3>About</h3>
                        <ul>
                            <li>Dealership</li>
                            <li>Shop</li>
                            <li>Insurrance</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <div className="footer_col">
                        <h3>Social</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>X</li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer className="footer_copyright_div">
                <p>&copy; <span id="currentYear">{currentYear}</span> UNFOLDIX</p>
            </footer>
        </div>
    )
}