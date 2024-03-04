
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faSquareFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./styles.css";

export default function Footer() {
    return (
        <div className="footer">

            <div className="footer-content">
                {/* <div className='footer-des'><p>At Fintract Global Ltd, we combine a cutting-edge tech stack with exceptional talent from Europe, Asia and America to lead change in how financial entities work. Headquartered in London, Fintract Global develops cutting edge fintech and regtech products.</p></div> */}


                <div className="footer-section social-icons">
                    <h3>Follow Us</h3>
                    <ul className="social-icons">
                        <li><a href="https://twitter.com/FintractGlobal"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="https://www.facebook.com/fintractglobal/"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                        <li><a href="https://www.instagram.com/fintractglobal/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="https://www.linkedin.com/company/fintractg/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <ul className="footer-nav">
                        <li>&copy; 2024 Fintract Global</li>
                        <li><a href="https://www.fintractglobal.com/">Fintractglobal.com</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className='footer-des'>
                    <p>Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purpose which are in our interests and enable us to enhance the service we provide.</p>
                </div>


            </div>
        </div>
    )
}