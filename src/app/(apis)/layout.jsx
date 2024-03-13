"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCaretDown, faCaretUp, } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import "./styles.css";


export default function Layout({ children }) {

    const [dropdowns, setDropdowns] = useState({});
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [clicked, setClicked] = useState({})

   
    useEffect(() => {
    

        const handleWindowResize = () => {
            if (window.innerWidth > 768) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    },[]);


    const toggleSidebarRight = () => {
        setSidebarOpen(true);
    };

    const toggleSidebarLeft = () => {
        setSidebarOpen(false);
    };

    const toggleDropdown = (heading) => {
        if(heading==="globalBanking" && dropdowns["globalBanking"]===false){
            setDropdowns({
                ...dropdowns,
                ["tokenization"]:false,
                ["kyc"]:false,
                [heading]: !dropdowns[heading]
            });
        }
        else{
            setDropdowns({
                ...dropdowns,
                [heading]: !dropdowns[heading]
            });
        }
        
    };

    const handleClick = (heading) => {
        setClicked(prevState => {
            const newState = { ...prevState };
            for (let key in newState) {
                if (newState.hasOwnProperty(key)) {
                    newState[key] = false;
                }
            }
            newState[heading] = true;
            return newState;
        });

        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        }

    };

    return (
        <div className={sidebarOpen ? `main sub-container` : `main sub-container collapsed`}>
            {sidebarOpen && <Sidebar toggleDropdown={toggleDropdown} dropdowns={dropdowns} toggleSidebarLeft={toggleSidebarLeft} handleClick={handleClick} clicked={clicked} />}
            {!sidebarOpen && <FontAwesomeIcon icon={faRectangleList} className="toggleButton toggleButtonLeft " onClick={toggleSidebarRight} />}

            <main className="sub-main">{children}</main>
        </div>

    );
}

function Sidebar({ toggleDropdown, dropdowns, handleClick, clicked, toggleSidebarLeft }) {
   

    return (
        <div className="sidebar">
            <div className="subSidebar">
                <ul className="sidebarList">
                    <li><Link href="/introduction" onClick={() => handleClick('introduction')} className={clicked['introduction'] ? `clicked` : ``} >Introduction</Link></li>
                    <li><Link href="/authentication" onClick={() => handleClick('authGuide')} className={clicked['authGuide'] ? `clicked` : ``}>Authentication</Link></li>

                    <li style={{padding:"10px 0"}} className={dropdowns['globalBanking'] ? `withDropdown open` : `withDropdown`}>

                        <span style={{fontWeight:"bold"}} onClick={() => toggleDropdown('globalBanking')} >
                            {dropdowns['globalBanking'] ? <FontAwesomeIcon className="icon" icon={faCaretDown} /> : <FontAwesomeIcon className="icon" icon={faCaretUp} />} Global Banking </span>

                        <ul className="dropdownMenu">
                            <li><Link href="/globalBanking/overview" onClick={() => handleClick('overview')} className={clicked['overview'] ? `clicked` : ``}>Overview</Link></li>
                            <li style={{ padding: "10px 0" }} className={dropdowns['auth']? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('auth')} >
                                    {dropdowns['auth'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Auth </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/auth/docs" onClick={() => handleClick('auth')} className={clicked['auth'] ? `clicked` : ``}>Auth</Link></li>
                                    <li><div><Link href="/globalBanking/auth/docs#deactivate-account" onClick={() => handleClick('deactivate-account')} className={clicked['deactivate-account'] ? `clicked` : ``}><div className="method-side put">PUT</div><div className='api-div'><p>Deactivate account</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#register" onClick={() => handleClick('register')} className={clicked['register'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Register</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#login" onClick={() => handleClick('login')} className={clicked['login'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Login</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#verify-otp" onClick={() => handleClick('verify-otp')} className={clicked['verify-otp'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Verify OTP</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#admin-approval" onClick={() => handleClick('admin-approval')} className={clicked['admin-approval'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Admin approval</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#upload-user-avatar" onClick={() => handleClick('upload-user-avatar')} className={clicked['upload-user-avatar'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Upload user avatar</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#delete-user" onClick={() => handleClick('delete-user')} className={clicked['delete-user'] ? `clicked` : ``}><div className="method-side delete">DELETE</div><div className='api-div'><p>Delete user</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#reverification-mail" onClick={() => handleClick('reverification-mail')} className={clicked['reverification-mail'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Resend verification mail</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#user-info" onClick={() => handleClick('user-info')} className={clicked['user-info'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get user info</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#update-info" onClick={() => handleClick('update-info')} className={clicked['update-info'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Update user info</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#update-user" onClick={() => handleClick('update-user')} className={clicked['update-user'] ? `clicked` : ``}><div className="method-side put">PUT</div><div className='api-div'><p>Update username & name</p></div></Link></div></li>
                                </ul>
                            </li>
                            <li style={{ padding: "10px 0" }} className={dropdowns['bankaccounts']? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('bankaccounts')} >
                                    {dropdowns['bankaccounts'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Bank accounts </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/bankaccounts/docs" onClick={() => handleClick('auth')} className={clicked['auth'] ? `clicked` : ``}>Bank accounts</Link></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#all-user-bank-accounts" onClick={() => handleClick('ll-user-bank-accounts')} className={clicked['ll-user-bank-accounts'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get user's all bank accounts</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#all-banks" onClick={() => handleClick('all-banks')} className={clicked['all-banks'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all banks</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#all-bank-accounts" onClick={() => handleClick('all-bank-accounts')} className={clicked['all-bank-accounts'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all bank accounts</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#all-bank-admins-accounts" onClick={() => handleClick('all-bank-admins-accounts')} className={clicked['all-bank-admins-accounts'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all bank admins' bank accounts</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#bank-admin-all-accounts" onClick={() => handleClick('bank-admin-all-accounts')} className={clicked['bank-admin-all-accounts'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get bank admin's bank account</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#all-bank-admins" onClick={() => handleClick('all-bank-admins')} className={clicked['all-bank-admins'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all bank admins</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#all-bank-customers" onClick={() => handleClick('all-bank-customers')} className={clicked['all-bank-customers'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all customers</p></div></Link></div></li>
                                    {/* <li><div><Link href="/globalBanking/bankaccounts/docs#reverification-mail" onClick={() => handleClick('reverification-mail')} className={clicked['reverification-mail'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Resend Verification Mail</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#user-info" onClick={() => handleClick('user-info')} className={clicked['user-info'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get User Info</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#update-info" onClick={() => handleClick('update-info')} className={clicked['update-info'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Update User Info</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bankaccounts/docs#update-user" onClick={() => handleClick('update-user')} className={clicked['update-user'] ? `clicked` : ``}><div className="method-side put">PUT</div><div className='api-div'><p>Update Username & name</p></div></Link></div></li> */}
                                </ul>
                            </li>
                            <li style={{ padding: "10px 0" }} className={dropdowns['getAccessToken']? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('getAccessToken')} >
                                    {dropdowns['getAccessToken'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Get Access Token </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/api/docs" onClick={() => handleClick('getAccessToken')} className={clicked['getAccessToken'] ? `clicked` : ``}>Get Access Token</Link></li>
                                </ul>
                            </li>

                            <li style={{ padding: "10px 0" }} className={dropdowns['kyc'] ? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('kyc')}>
                                    {dropdowns['kyc'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} KYC </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/kyc/docs" onClick={() => handleClick('kyc')} className={clicked['kyc'] ? `clicked` : ``}>KYC</Link></li>
                                    <li><div><Link href="/globalBanking/kyc/docs#userRegistration" onClick={() => handleClick('register-user')} className={clicked['register-user'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>User registration</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/kyc/docs#userVerification" onClick={() => handleClick('verify-user-id')} className={clicked['verify-user-id'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>User verification</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/kyc/docs#userVerificationWithPass" onClick={() => handleClick('verify-user-pass')} className={clicked['verify-user-pass'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>User verification with passport</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/kyc/docs#faceVerification" onClick={() => handleClick('verify-face')} className={clicked['verify-face'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Face verification</p></div></Link></div></li>
                                </ul>
                            </li>
                            
                            <li style={{ padding: "10px 0" }} className={dropdowns['tokenization']? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('tokenization')} >
                                    {dropdowns['tokenization'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Tokenization </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/tokenization/docs" onClick={() => handleClick('tokenization')} className={clicked['tokenization'] ? `clicked` : ``}>Tokenization</Link></li>
                                    <li><div><Link href="/globalBanking/tokenization/docs#tokenize" onClick={() => handleClick('tokenize')} className={clicked['tokenize'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Tokenize</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/tokenization/docs#detokenize" onClick={() => handleClick('detokenize')} className={clicked['detokenize'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Detokenize</p></div></Link></div></li>
                                </ul>
                            </li>
                            
                            
                        </ul>
                    </li>


                    {/* Add more headings with dropdowns as needed */}
                    <li><Link href="/apiTester" target="_blank" className='bold'>API Testing</Link></li>
                </ul>
                <FontAwesomeIcon icon={faXmark} className="toggleButton toggleButtonXmark" onClick={() => toggleSidebarLeft()} />
            </div>
        </div>
    );
}
