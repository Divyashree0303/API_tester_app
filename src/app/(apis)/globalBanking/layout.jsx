"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCaretDown, faCaretUp,  } from '@fortawesome/free-solid-svg-icons';
import {faRectangleList} from '@fortawesome/free-regular-svg-icons';
import "./styles.css";


export default function Layout({ children }) {

    const [dropdowns, setDropdowns] = useState({});
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [clicked, setClicked] = useState({})

    useEffect(() => {
      const handleWindowResize = () => {
        if(window.innerWidth>768){
            setSidebarOpen(true);
        }else{
            setSidebarOpen(false);
        }
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });


    const toggleSidebarRight = () => {
        setSidebarOpen(true);
    };

    const toggleSidebarLeft = () => {
        setSidebarOpen(false);
    };

    const toggleDropdown = (heading) => {
        setDropdowns({
            ...dropdowns,
            [heading]: !dropdowns[heading]
        });
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

        if(window.innerWidth<=768){
            setSidebarOpen(false);
        }

    };

    return (
        <div className={sidebarOpen ? `sub-container` : `sub-container collapsed`}>
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
                <li className='bold'>Global Banking</li>
                <li><Link href="/globalBanking/introduction" onClick={() => handleClick('introduction')} className={clicked['introduction'] ? `clicked` : ``} >Introduction</Link></li>
                <li><Link href="/globalBanking/authGuide" onClick={() => handleClick('authGuide')} className={clicked['authGuide'] ? `clicked` : ``}>Authentication Guide</Link></li>
                <li><Link href="/globalBanking/overview" onClick={() => handleClick('overview')} className={clicked['overview'] ? `clicked` : ``}>Overview</Link></li>
                <li className={dropdowns['tokenization'] ? `withDropdown open` : `withDropdown`}>

                    <span onClick={() => toggleDropdown('tokenization')} >
                        {dropdowns['tokenization'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Tokenization </span>

                    <ul className="dropdownMenu">
                        <li><Link href="/globalBanking/tokenization/docs" onClick={() => handleClick('tokenization')} className={clicked['tokenization'] ? `clicked` : ``}>Tokenization</Link></li>
                        <li><div><Link href="/globalBanking/tokenization/docs#tokenize" onClick={() => handleClick('tokenize')} className={clicked['tokenize'] ? `clicked` : ``}><div className="method post">POST</div><div className='api-div'><p>Tokenize</p></div></Link></div></li>
                        <li><div><Link href="/globalBanking/tokenization/docs#detokenize" onClick={() => handleClick('detokenize')} className={clicked['detokenize'] ? `clicked` : ``}><div className="method post">POST</div><div className='api-div'><p>Detokenize</p></div></Link></div></li>
                    </ul>
                </li>
                <li className={dropdowns['kyc'] ? `withDropdown open` : `withDropdown`}>

                    <span onClick={() => toggleDropdown('kyc')}>
                        {dropdowns['kyc'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} KYC </span>

                    <ul className="dropdownMenu">
                    <li><Link href="/globalBanking/kyc/docs" onClick={() => handleClick('kyc')} className={clicked['kyc'] ? `clicked` : ``}>KYC</Link></li>
                        <li><div><Link href="/globalBanking/kyc/docs#userRegistration" onClick={() => handleClick('register-user')} className={clicked['register-user'] ? `clicked` : ``}><div className="method post">POST</div><div className='api-div'><p>User registration</p></div></Link></div></li>
                        <li><div><Link href="/globalBanking/kyc/docs#userVerification" onClick={() => handleClick('verify-user-id')} className={clicked['verify-user-id'] ? `clicked` : ``}><div className="method post">POST</div><div className='api-div'><p>User verification</p></div></Link></div></li>
                        <li><div><Link href="/globalBanking/kyc/docs#userVerificationWithPass" onClick={() => handleClick('verify-user-pass')} className={clicked['verify-user-pass'] ? `clicked` : ``}><div className="method post">POST</div><div className='api-div'><p>User verification with passport</p></div></Link></div></li>
                        <li><div><Link href="/globalBanking/kyc/docs#faceVerification" onClick={() => handleClick('verify-face')} className={clicked['verify-face'] ? `clicked` : ``}><div className="method post">POST</div><div className='api-div'><p>Face verification</p></div></Link></div></li>
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
