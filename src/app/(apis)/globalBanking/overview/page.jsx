// pages/api-overview.js

import Link from "next/link";
import "./styles.css";

import React from 'react';

const apiCollections = [
  { name: 'Tokenization', purpose: 'Tokenize and detokenize sensitive information securely', url:"/globalBanking/tokenization/docs" },
  { name: 'KYC', purpose: 'Register user and verify identity using ID, passport and face', url:"/globalBanking/kyc/docs" }
 
];

const ApiOverviewPage = () => {
  return (
    <div className='overview-container'>
      <h1 className='title'>Overview</h1>
      <p className='description'>In this documentation, you'll discover a range of API collections tailored to meet your specific needs</p> 
      <p> From authentication and account management to payment processing and transaction monitoring, our APIs provide the foundation for building secure, efficient, and scalable financial applications.</p>
      
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
