'use client'
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Footer from "./_components/footer/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import "./styles.css";
import Head from 'next/head';



export default function RootLayout({ children }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [showHamburger, setShowHamburger] = useState(true);

    useEffect(() => {


        const handleWindowResize = () => {
            if (window.innerWidth <= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);



    const openMenu = () => {
        setMenuOpen(true);
        setShowHamburger(false);

    };

    const closeMenu = () => {
        setMenuOpen(false);
        setShowHamburger(true);
        setProductsOpen(false);
    }

    const toggleProducts = () => {
        setProductsOpen(!productsOpen);
    }

    return (
        <html lang="en">
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Access comprehensive developer documentation for Fintract Global, a London-based company focused on building cutting-edge fintech and regtech platforms using SaaS and BaaS models. Explore innovative products like Fraudify and Finalytics designed to support the digital economy." />
        <meta name="keywords" content="Fintract Global, fintech, regtech, SaaS, BaaS, developer documentation, fintech platform, regtech platform, Fraudify, Funalytics, digital economy" />
        <meta name="author" content="Fintract Global" />
        <meta name="publisher" content="Fintract Global" />
        <meta name="version" content="1.0" />
        <meta name="audience" content="Developers, programmers, software engineers, fintech enthusiasts" />
        <meta name="content-type" content="Technical documentation, tutorials, API reference, code examples" />
        <meta name="language" content="English" />
        <meta name="accessibility" content="Accessible to all users" />
        <title>Fintract Global Developer Documentation</title>
        </Head>
            <body style={{ margin: 0, fontFamily: "sans-serif", position: "relative", minHeight: "100vh" }}>




                <nav className="navbar">
                    <div className="navbarLeft">

                        <img src="/FG_logo.jpeg" alt="Logo" />

                        <div className='developer'><p>Developer</p></div>
                    </div>
                    <div className="navbarRight">
                        <div className="rightList productsButton" ><Link href="/">Home</Link></div>
                        <div className="rightList productsButton" ><Link href="/introduction">APIs</Link></div>
                        <div className=" rightList products">
                            <button className="productsButton">Docs</button>
                            <div className="productsDropdownContent">
                                <Link href="/globalBanking/overview">Global Banking</Link>
                                <Link href="#">Fraudify</Link>
                                <Link href="#">B2B Payment</Link>
                                <Link href="#">Finalytics</Link>
                                <Link href="#">Chatbot</Link>
                                <Link href="#">Transaction Monitoring</Link>
                            </div>
                        </div>
                        <div className=" rightList tools">
                            <button className="toolsButton">Tools</button>
                            <div className="toolsDropdownContent">
                                <Link href="/apiTester" target="_blank">API Testing</Link>
                            </div>
                        </div>
                        <div className="rightList productsButton" ><Link href="/">Support</Link></div>
                        <button className="loginButton"><Link style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="https://globalbanking.fintractglobal.com/signin">Login</Link></button>
                    </div>
                    <div className="hamburger" >
                        <div>{!showHamburger ? <FontAwesomeIcon className="hamburgerIconOpen" onClick={closeMenu} icon={faXmark} /> : <FontAwesomeIcon onClick={openMenu} className="hamburgerIcon" icon={faBars} />}</div>
                    </div>
                </nav>

                <div className={menuOpen ? `menu` : ``}>
                    {menuOpen && (
                        <div>
                            <ul>
                                <li><Link href="/introduction">APIs</Link></li>
                                <li><div onClick={() => {
                                    setProductsOpen(true);
                                    setMenuOpen(false);
                                }} >Docs <FontAwesomeIcon icon={faArrowRight} /></div></li>
                                <li><div onClick={() => {
                                    setToolsOpen(true);
                                    setMenuOpen(false);
                                }} >Tools <FontAwesomeIcon icon={faArrowRight} /></div></li>
                                <li><div><Link href="/">Support</Link></div></li>
                            </ul>

                            <button className="loginButton"><Link style={{ textDecoration: "none", color: "white" }} href="https://globalbanking.fintractglobal.com/signin">Login</Link></button>
                        </div>
                    )}

                    {productsOpen && (
                        <div className='menu'>

                            <div className='menuTitle'>
                                <FontAwesomeIcon icon={faArrowLeft} onClick={() => {
                                    setProductsOpen(false);
                                    setMenuOpen(true);
                                }} />
                                <div>Docs</div>

                            </div>
                            <ul>
                                <li><Link href="/globalBanking">Global Banking</Link></li>
                                <li><Link href="#">Fraudify</Link></li>
                                <li><Link href="#">B2B Payment</Link></li>
                                <li><Link href="#">Finalytics</Link></li>
                                <li><Link href="#">Chatbot</Link></li>
                                <li><Link href="#">Transaction Monitoring</Link></li>
                            </ul>

                        </div>
                    )}

                    {toolsOpen && (
                        <div className='menu'>

                            <div className='menuTitle'>
                                <FontAwesomeIcon icon={faArrowLeft} onClick={() => {
                                    setToolsOpen(false);
                                    setMenuOpen(true);
                                }} />
                                <div>Tools</div>

                            </div>
                            <ul>
                                <li><Link href="/apiTester">API Testing</Link></li>

                            </ul>

                        </div>
                    )}

                </div>



                <SessionProvider session={Session}>
                    {children}
                </SessionProvider>

                <Footer />

            </body>
        </html>)

}
