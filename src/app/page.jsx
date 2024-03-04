import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns,faCode,faUserSecret,faCreditCard,faChartLine,faComment,faMagnifyingGlassDollar} from '@fortawesome/free-solid-svg-icons'
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
                            <p>Global Banking integration solutions</p>
                        </div>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon className="card-icon" icon={faUserSecret} />
                        <div>
                            <Link href='#'>Fraudify</Link>
                            <p>Real-time fraud detection & prevention</p>
                        </div>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon className="card-icon" icon={faCreditCard} />
                        <div>
                            <Link href='#'>B2B Payment</Link>
                            <p>Platform for banking and finance</p>
                        </div>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon className="card-icon" icon={faChartLine} />
                        <div>
                            <Link href='#'>Finalytics</Link>
                            <p>Unleashing AI powered market insights</p>
                        </div>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon className="card-icon" icon={faComment} />
                        <div>
                            <Link href='#'>Chatbot</Link>
                            <p>Advanced chatbot for empowering conversations</p>
                        </div>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon className="card-icon" icon={faMagnifyingGlassDollar} />
                        <div>
                            <Link href='#'>Transaction Monitoring</Link>
                            <p>UI powered anti-money laundering solution</p>
                        </div>
                    </div>
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