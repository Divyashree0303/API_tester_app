// pages/api-overview.js

import Link from "next/link";
import "./styles.css";

import React from 'react';

const apiCollections = [
  { name: 'Auth', purpose: 'Provides functionalities for user authentication within the system', url:"/globalBanking/auth/docs" },
  { name: 'Bank accounts', purpose: 'Manage operations related to bank accounts, including creation, deletion, transactions, and inquiries', url:"/globalBanking/bank-accounts/docs" },
  { name: 'Get access token', purpose: 'Obtain an access token for accessing protected resources', url:"/globalBanking/api/docs" },
  { name: 'KYC', purpose: 'Register user and verify identity using ID, passport and face', url:"/globalBanking/kyc/docs" },
  { name: 'Payment schedular', purpose: 'Manage scheduled payments for bank accounts', url:"/globalBanking/payment-schedular/docs" },
  { name: 'Support ticket', purpose: 'Manage support tickets for customer inquiries and issue resolution', url:"/globalBanking/support-ticket/docs" },
  { name: 'Tokenization', purpose: 'Tokenize and detokenize sensitive information securely', url:"/globalBanking/tokenization/docs" },
  { name: 'Transaction monitoring', purpose: 'Monitor and analyze transactions for suspicious or fraudulent activities', url:"/globalBanking/transaction-monitoring/docs" }
 
];

const ApiOverviewPage = () => {
  return (
    <div className='overview-container'>
      <h1 className='title'>Overview</h1>
      <p className='description'>Delve into our comprehensive documentation tailored specifically for global banking APIs, where you'll encounter a curated selection of powerful tools designed to elevate your financial services.</p> 
      <p>Whether you're seeking to tokenize sensitive information for enhanced security or implement rigorous Know Your Customer (KYC) procedures, our APIs provide the foundation for building resilient, efficient, and scalable banking applications.</p>
      <p>With a focus on compliance, security, and innovation, our global banking APIs empower you to navigate the complexities of the financial landscape with confidence and precision.</p>
      <table className="api-table">
        <thead>
          <tr>
            <th>API</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {apiCollections.map(collection => (
            <tr key={collection.name}>
              <td><Link className="apiLink" href={collection.url}>{collection.name}</Link></td>
              <td>{collection.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiOverviewPage;
