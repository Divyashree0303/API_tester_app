"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight, faCaretDown,faCaretUp} from '@fortawesome/free-solid-svg-icons';
import "./styles.css";

export default function Layout({ children }) {
    const [dropdowns, setDropdowns] = useState({});
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [clicked,setClicked] =useState({})

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
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
    };

    return (
        <div className={sidebarOpen ? `sub-container` : `sub-container collapsed`}>
            {sidebarOpen && <Sidebar toggleDropdown={toggleDropdown} dropdowns={dropdowns} handleClick={handleClick} clicked={clicked}/>}
            <FontAwesomeIcon icon={sidebarOpen?faArrowLeft:faArrowRight} className="toggleButton" onClick={toggleSidebar}/>
               
            <main className="sub-main">{children}</main>
        </div>
    );
}

function Sidebar({ toggleDropdown, dropdowns, handleClick, clicked }) {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className='bold'>Global Banking</li>
                <li><Link href="/developer/globalBanking/docs/introduction" onClick={() => handleClick('introduction')} className={clicked['introduction'] ? `clicked` : ``} >Introduction</Link></li>
                <li><Link href="/developer/globalBanking/docs/authGuide" onClick={() => handleClick('authGuide')} className={clicked['authGuide'] ? `clicked` : ``}>Authentication Guide</Link></li>
                <li><Link href="/developer/globalBanking/docs/overview" onClick={() => handleClick('overview')} className={clicked['overview'] ? `clicked` : ``}>Overview</Link></li>
                <li className={dropdowns['tokenization'] ? `withDropdown open` : `withDropdown`}>
                    
                    <span onClick={() => toggleDropdown('tokenization')} >
                    {dropdowns['tokenization'] ?<FontAwesomeIcon icon={faCaretDown} />:<FontAwesomeIcon icon={faCaretUp}/>} Tokenization </span>
                    
                    <ul className="dropdownMenu">
                    <li><Link href="/developer/globalBanking/docs/tokenization" onClick={() => handleClick('tokenization')} className={clicked['tokenization'] ? `clicked` : ``}>Tokenization</Link></li>
                        <li><Link href="/developer/globalBanking/docs/tokenization#tokenize" onClick={() => handleClick('tokenize')} className={clicked['tokenize'] ? `clicked` : ``}><div className="method post">POST</div> Tokenize</Link></li>
                        <li><Link href="/developer/globalBanking/docs/tokenization#detokenize" onClick={() => handleClick('detokenize')} className={clicked['detokenize'] ? `clicked` : ``}><div className="method post">POST</div> Detokenize</Link></li>
                    </ul>
                </li>
                <li className={dropdowns['support'] ? `withDropdown open` : `withDropdown`}>
                    
                    <span onClick={() => toggleDropdown('support')}>
                    {dropdowns['support'] ?<FontAwesomeIcon icon={faCaretDown} />:<FontAwesomeIcon icon={faCaretUp}/>} Support </span>
                    
                    <ul className="dropdownMenu">
                        <li><Link href="#tokenized">Ticket</Link></li>
                        <li><Link href="#tokenized">Ticket</Link></li>
                        <li><Link href="#detokenize">Ticket</Link></li>
                    </ul>
                </li>
                {/* Add more headings with dropdowns as needed */}
                <li><Link href="/" target="_blank" className='bold'>API Testing</Link></li>
            </ul>
        </div>
    );
}
