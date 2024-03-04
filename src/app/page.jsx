import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns,faCode } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function Body() {
    return (
        <div className="home">
            <div className="top-container" >
                
                <h1>Fintract Global Developer</h1>
                <p>Welcome to the Fintract Global Developer Platform, where innovation meets fintech expertise.</p>
                <p> Our comprehensive suite of APIs and developer tools empowers you to revolutionize the financial industry with cutting-edge solutions.</p>
                <div className='sub-top-container'>
                    <button href="https://globalbanking.fintractglobal.com/signup">Get API Credentials</button>
                    <Link href="#products-container">Explore all Products</Link>
                </div>
                
            </div>

            <div className="products-container">
                <h2>Browse docs by products</h2>
                <div className="card-container">
                    <div className="card">
                        <FontAwesomeIcon className="card-icon" icon={faBuildingColumns} />
                        <div>
                            <Link href='/globalBanking/overview'>Global Banking</Link>
                            <p>Global Banking Integration Solutions</p>
                        </div>
                    </div>
                    <div className="card">Product 2</div>
                    <div className="card">Product 3</div>
                    <div className="card">Product 4</div>
                </div>
            </div>

            <div className='tools-container'>
                <div className='tools-container-heading'>
                    <h2>Developer Tools</h2>
                </div>

                <div className='tools-card'>
                    <div>
                    <div className='tools-sub-heading'>
                     <FontAwesomeIcon className="card-icon" icon={faCode} />
                        <h2>API testing portal</h2>
                    </div>
                    <p>Experience the ease of testing Fintract Global's APIs with our user-friendly portal.</p>
                    <p><Link href='/apiTester'>Test APIs</Link></p>
                    </div>
                </div>

            </div>


        </div>
    )
}