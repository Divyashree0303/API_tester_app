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
                                    <li><div><Link href="/globalBanking/auth/docs#resend-verification-mail" onClick={() => handleClick('resend-verification-mail')} className={clicked['resend-verification-mail'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Resend verification mail</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#user-info" onClick={() => handleClick('user-info')} className={clicked['user-info'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get user info</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#update-info" onClick={() => handleClick('update-info')} className={clicked['update-info'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Update user info</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#update-user" onClick={() => handleClick('update-user')} className={clicked['update-user'] ? `clicked` : ``}><div className="method-side put">PUT</div><div className='api-div'><p>Update username & name</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/auth/docs#upload-file" onClick={() => handleClick('upload-file')} className={clicked['upload-file'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Upload file</p></div></Link></div></li>

                                </ul>
                            </li>
                            <li style={{ padding: "10px 0" }} className={dropdowns['bankaccounts']? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('bankaccounts')} >
                                    {dropdowns['bankaccounts'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Bank accounts </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/bank-accounts/docs" onClick={() => handleClick('bank-accounts')} className={clicked['bank-accounts'] ? `clicked` : ``}>Bank accounts</Link></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#banks" onClick={() => handleClick('banks')} className={clicked['banks'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all banks</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#user-bank-accounts" onClick={() => handleClick('user-bank-accounts')} className={clicked['user-bank-accounts'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get user's all bank accounts</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#create-bank" onClick={() => handleClick('create-bank')} className={clicked['create-bank'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Create bank</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#update-bank" onClick={() => handleClick('update-bank')} className={clicked['update-bank'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Update bank</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#verify-bank" onClick={() => handleClick('verify-bank')} className={clicked['verify-bank'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Verify bank</p></div></Link></div></li>
                                   
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#bank-accounts" onClick={() => handleClick('bank-accounts')} className={clicked['bank-accounts'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all bank accounts</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#bank-admins-accounts" onClick={() => handleClick('bank-admins-accounts')} className={clicked['bank-admins-accounts'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all bank-admins' bank accounts</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#create-bank-admin-account" onClick={() => handleClick('create-bank-admin-account')} className={clicked['create-bank-admin-account'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Create bank account for bank-admin</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#bank-admin-accounts" onClick={() => handleClick('bank-admin-accounts')} className={clicked['bank-admin-accounts'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get bank-admin's bank accounts</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#bank-admins" onClick={() => handleClick('bank-admins')} className={clicked['bank-admins'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all bank-admins</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#admin-approve-bank-admin" onClick={() => handleClick('admin-approve-bank-admin')} className={clicked['admin-approve-bank-admin'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Admin approve bank admin</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#bank-customers" onClick={() => handleClick('bank-customers')} className={clicked['bank-customers'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all customers</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#bank-branches" onClick={() => handleClick('bank-branches')} className={clicked['bank-branches'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get bank branches of authenticated bank-admin</p></div></Link></div></li>
                                    {/* <li><div><Link href="/globalBanking/bank-accounts/docs#create-bank-branches" onClick={() => handleClick('bank-branches')} className={clicked['bank-branches'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get bank branches of authenticated bank-admin</p></div></Link></div></li> */}
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#interest-rates" onClick={() => handleClick('interest-rates')} className={clicked['interest-rates'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get interest rates of a particular bank</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#add-interest-rate" onClick={() => handleClick('add-interest-rate')} className={clicked['add-interest-rate'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Add interest rate</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#create-bank-account" onClick={() => handleClick('create-bank-account')} className={clicked['create-bank-account'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Create bank account</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#card-apply" onClick={() => handleClick('card-apply')} className={clicked['card-apply'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Apply for card</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#card-applications" onClick={() => handleClick('card-applications')} className={clicked['card-applications'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all card applications</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#approve-card" onClick={() => handleClick('approve-card')} className={clicked['approve-card'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Approve card</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#user-card-applications" onClick={() => handleClick('user-card-applications')} className={clicked['user-card-applications'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get user's card applications</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#exchange-rates" onClick={() => handleClick('exchange-rates')} className={clicked['exchange-rates'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get exchange rates</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#add-exchange-rates" onClick={() => handleClick('exchange-rates')} className={clicked['exchange-rates'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get exchange rates</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#update-exchange-rates" onClick={() => handleClick('update-exchange-rates')} className={clicked['update-exchange-rates'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Update exchange rates</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#add-payee" onClick={() => handleClick('add-payee')} className={clicked['add-payee'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Add payee</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#payees" onClick={() => handleClick('payees')} className={clicked['payees'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all payees</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#account-creation-requests" onClick={() => handleClick('account-creation-requests')} className={clicked['account-creation-requests'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all account creation requests</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#request-bank-account" onClick={() => handleClick('request-bank-account')} className={clicked['request-bank-account'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Request for bank account</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#activate-bank-account" onClick={() => handleClick('activate-bank-account')} className={clicked['activate-bank-account'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Activate bank account</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#suspend-bank-account" onClick={() => handleClick('suspend-bank-account')} className={clicked['suspend-bank-account'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Suspend bank account</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#delete-bank-account" onClick={() => handleClick('delete-bank-account')} className={clicked['delete-bank-account'] ? `clicked` : ``}><div className="method-side delete">DELETE</div><div className='api-div'><p>Delete bank account</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#statements" onClick={() => handleClick('statements')} className={clicked['statements'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get credit/debit statements</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#transaction-report" onClick={() => handleClick('transaction-report')} className={clicked['transaction-report'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get transaction report</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#bank-transaction-report" onClick={() => handleClick('bank-transaction-report')} className={clicked['bank-transaction-report'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get transaction report of a bank</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#user-transactions" onClick={() => handleClick('user-transactions')} className={clicked['user-transactions'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all transactions of user</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#user-yearwise-transactions" onClick={() => handleClick('user-yearwise-transactions')} className={clicked['user-yearwise-transactions'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all transactions of user yearwise</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#transfer-money" onClick={() => handleClick('transfer-money')} className={clicked['transfer-money'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Transfer money</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#fund_account" onClick={() => handleClick('fund_account')} className={clicked['fund_account'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Fund account</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#fund_ledger" onClick={() => handleClick('fund_ledger')} className={clicked['fund_ledger'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Fund ledger</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/bank-accounts/docs#ledger-transactions" onClick={() => handleClick('ledger-transactions')} className={clicked['ledger-transactions'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get ledger account transactions</p></div></Link></div></li>





                                </ul>
                            </li>
                            <li style={{ padding: "10px 0" }} className={dropdowns['getAccessToken']? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('getAccessToken')} >
                                    {dropdowns['getAccessToken'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Get access token </span>

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
                            <li style={{ padding: "10px 0" }} className={dropdowns['payment-schedular'] ? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('payment-schedular')}>
                                    {dropdowns['payment-schedular'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Payment schedular </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/payment-schedular/docs" onClick={() => handleClick('payment-schedular')} className={clicked['payment-schedular'] ? `clicked` : ``}>Payment schedular</Link></li>
                                    <li><div><Link href="/globalBanking/payment-schedular/docs#scheduled-payments" onClick={() => handleClick('scheduled-payments')} className={clicked['scheduled-payments'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get all scheduled payments</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/payment-schedular/docs#schedule-payment" onClick={() => handleClick('schedule-payment')} className={clicked['schedule-payment'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Schedule payment</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/payment-schedular/docs#update-scheduled-payment" onClick={() => handleClick('update-scheduled-payment')} className={clicked['update-scheduled-payment'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Update scheduled payment</p></div></Link></div></li>

                                </ul>
                            </li>
                        
                            <li style={{ padding: "10px 0" }} className={dropdowns['support-ticket'] ? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('support-ticket')}>
                                    {dropdowns['support-ticket'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Support ticket </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/support-ticket/docs" onClick={() => handleClick('support-ticket')} className={clicked['support-ticket'] ? `clicked` : ``}>Support ticket</Link></li>
                                    <li><div><Link href="/globalBanking/support-ticket/docs#support-tickets" onClick={() => handleClick('support-tickets')} className={clicked['support-tickets'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Get support tickets</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/support-ticket/docs#create-support-ticket" onClick={() => handleClick('create-support-ticket')} className={clicked['create-support-ticket'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Create support ticket</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/support-ticket/docs#update-support-ticket" onClick={() => handleClick('update-support-ticket')} className={clicked['update-support-ticket'] ? `clicked` : ``}><div className="method-side patch">PATCH</div><div className='api-div'><p>Update support ticket</p></div></Link></div></li>

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
                            <li style={{ padding: "10px 0" }} className={dropdowns['transaction-monitoring'] ? `withDropdown open` : `withDropdown`}>

                                <span onClick={() => toggleDropdown('transaction-monitoring')}>
                                    {dropdowns['transaction-monitoring'] ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />} Transaction monitoring </span>

                                <ul className="dropdownMenu">
                                    <li><Link href="/globalBanking/transaction-monitoring/docs" onClick={() => handleClick('transaction-monitoring')} className={clicked['transaction-monitoring'] ? `clicked` : ``}>Transaction monitoring</Link></li>
                                    <li><div><Link href="/globalBanking/transaction-monitoring/docs#populate-db" onClick={() => handleClick('populate-db')} className={clicked['populate-db'] ? `clicked` : ``}><div className="method-side get">GET</div><div className='api-div'><p>Populate tm db</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/transaction-monitoring/docs#monitoring-search" onClick={() => handleClick('monitoring-search')} className={clicked['monitoring-search'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Monitoring search</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/transaction-monitoring/docs#monitoring-search-bulk" onClick={() => handleClick('monitoring-search-bulk')} className={clicked['monitoring-search-bulk'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Monitoring search in bulk</p></div></Link></div></li>
                                    <li><div><Link href="/globalBanking/transaction-monitoring/docs#upload-monitoring-data" onClick={() => handleClick('upload-monitoring-data')} className={clicked['upload-monitoring-data'] ? `clicked` : ``}><div className="method-side post">POST</div><div className='api-div'><p>Upload monitoring data</p></div></Link></div></li>

                                </ul>
                            </li>
                            
                            
                        </ul>
                    </li>

                    <li><Link href="/apiTool" target="_blank" onClick={() => handleClick('apiTester')} className={clicked['apiTester'] ? `clicked` : ``}>API testing</Link></li>

                </ul>
                <FontAwesomeIcon icon={faXmark} className="toggleButton toggleButtonXmark" onClick={() => toggleSidebarLeft()} />
            </div>
        </div>
    );
}
