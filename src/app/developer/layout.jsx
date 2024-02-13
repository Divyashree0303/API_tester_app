"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import "./styles.css";

export default function Layout({ children }) {

    const[menuOpen,setMenuOpen] = useState(false);
    const[productsOpen,setProductsOpen] = useState(false);
    const[showHamburger,setShowHamburger]=useState(true);
    

    const openMenu = () => {
        setMenuOpen(true);
        setShowHamburger(false);

    };

    const closeMenu =() => {
        setMenuOpen(false);
        setShowHamburger(true);
        setProductsOpen(false);
    }

    const toggleProducts =() =>{
        setProductsOpen(!productsOpen);
    }

    return (
        <div className="nav-container">
            <nav className="navbar">
                <div className="navbarLeft">
                    <Link href="/">
                        <img src="/FG_logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="navbarRight">
                    <div className="productsDropdown">
                        <button className="productsButton">Products</button>
                        <div className="productsDropdownContent">
                            <Link href="/developer/globalBanking/docs/introduction">Global Banking</Link>
                            <Link href="#">Product 2</Link>
                            <Link href="#">Product 3</Link>
                        </div>
                    </div>
                    <button className="loginButton"><Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}} href="https://globalbanking.fintractglobal.com/signin">Login</Link></button>
                </div>
                <div className="hamburger" >
                    <div>{!showHamburger?<FontAwesomeIcon  className="hamburgerIconOpen" onClick={closeMenu} icon={faXmark} />:<FontAwesomeIcon onClick={openMenu} className="hamburgerIcon" icon={faBars} />}</div>
                </div>
            </nav>

            <div className={menuOpen?`menu`:``}>
            {menuOpen && (
                        <div>
                            <ul>
                                <li><div onClick={()=> {
                                    setProductsOpen(true);
                                    setMenuOpen(false);
                                }} >Products <FontAwesomeIcon icon={faArrowRight} /></div></li>
                            </ul>
                            <button className="loginButton"><Link style={{textDecoration:"none",color:"white",fontSize: "18px"}} href="https://globalbanking.fintractglobal.com/signin">Login</Link></button>
                        </div>
                        )}
                    
                    {productsOpen &&(
                        <div>
                        
                        <div className='menuTitle'>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={() => {setProductsOpen(false);
                        setMenuOpen(true);}}/>
                        <div>Products</div>

                        </div>
                        <ul>
                        <li><Link href="/developer/globalBanking/docs/introduction">Global Banking</Link></li>
                        <li><Link href="#">Product 2</Link></li>
                        <li><Link href="#">Product 3</Link></li>
                    </ul>
                    <button className="loginButton"><Link style={{textDecoration:"none",color:"white",fontSize: "18px"}} href="https://globalbanking.fintractglobal.com/signin">Login</Link></button>
                    </div>
            )}
                    
                </div>
            
            <main className="main">{children}</main>
        </div>
    );
}