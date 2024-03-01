"use client"
import "./styles.css";
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'


export default function ApiDocsPage() {

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => console.log('Copied to clipboard'))
            .catch((error) => console.error('Error copying to clipboard: ', error));
    };

    return (


        <div >


            <div className="tokenization-container">

                <h2>Tokenization API</h2>

                <p>Welcome to the Fintract Global Tokenization API documentation. This API allows you to tokenize and detokenize sensitive information securely.</p>

                {/* Authentication section */}
                <h3>Authentication</h3>
                <p>Before using the Tokenization API, ensure you have the necessary credentials. Refer to the <Link href="/developer/globalBanking/docs/authGuide">Authentication Guide</Link> for details on obtaining and using API keys.</p>

                {/* Base URL section */}
                <h3>Base URL</h3>
                <div className="baseUrl">
                    <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.globalbanking.fintractglobal.com/")} />
                    <div className="url">
                      <p>https://api.globalbanking.fintractglobal.com/</p>
                    </div>
                   
                </div>

                {/* Tokenize API section */}
                <div id="tokenize" className="section">
                <h3>1. Tokenize</h3>
                <p>Tokenize sensitive information to enhance security during data storage and transmission.</p>

                <h4>Endpoint</h4>
                <div className="endpoint">
                    <div className="method post">POST</div>
                    <p className="details"> /tokenization/tokenize</p>
                    <div>
                    <FontAwesomeIcon icon={faCopy} className="copyButtonURI" onClick={() => handleCopy("/tokenization/tokenize")} />
                    </div>
                    
                    
                </div>

                <h4>Request</h4>

                <div className="codeSnippet">


                    <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`{
  "key": "d5200b58-9340-48e8-a024-197016fdc492",
  "data": {
    "card_number":"3463-3454-5656-9857"
  }
}`)} />

                    <pre className="code">
                        {`{
  "key": "d5200b58-9340-48e8-a024-197016fdc492",
  "data": {
    "card_number":"3463-3454-5656-9857"
  }
}`}
                    </pre>

                </div>


                <h4>Response</h4>
                <div className="codeSnippet">

                    <p>Success:</p>

                    <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`{
  "token": {
    "value": "cb95abdf-6a4f-48c9-841e-7c761ea534ed",
    "expiry_date": "2024-02-13"
  }
}`)} />

                    <pre className="code">
                        {`{
  "token": {
    "value": "cb95abdf-6a4f-48c9-841e-7c761ea534ed",
    "expiry_date": "2024-02-13"
  }
}`}
                    </pre>
                </div>

                <div className="note">
                <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                </div>
                
                </div>

                {/* Detokenize API section */}
                <div id="detokenize" className="section">
                <h3>2. Detokenize</h3>
                <p>Detokenize a token to retrieve the original sensitive information.</p>

                <h4>Endpoint</h4>
                <div className="endpoint">
                    <div className="method post">POST</div>
                    <p className="details"> /tokenization/detokenize</p>
                    <FontAwesomeIcon icon={faCopy} className="copyButtonURI" onClick={() => handleCopy("/tokenization/detokenize")} />
                </div>

                <h4>Request</h4>

                <div className="codeSnippet">

                    <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`{
  "token": "cb95abdf-6a4f-48c9-841e-7c761ea534ed",
  "key": "d5200b58-9340-48e8-a024-197016fdc492"
}`)} />

                    <pre className="code">
                        {`{
  "token": "cb95abdf-6a4f-48c9-841e-7c761ea534ed",
  "key": "d5200b58-9340-48e8-a024-197016fdc492"
}`}
                    </pre>
                </div>

                <h4>Response</h4>
                <div className="codeSnippet">

                    <p>Success:</p>

                    <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`{
  "message": "Detokenization successful",
  "DetokenizedData": {
    "id": "087f427d-1995-4a8f-8861-6fffe35845de",
    "token_id": "b9a486c2-bb0c-4257-a73d-195126447e42",
    "data": {
      "card_number": "3463-3454-5656-9857"
    }
  }
}`)} />

                    <pre className="code">
                        {`{
  "message": "Detokenization successful",
  "DetokenizedData": {
    "id": "087f427d-1995-4a8f-8861-6fffe35845de",
    "token_id": "b9a486c2-bb0c-4257-a73d-195126447e42",
    "data": {
      "card_number": "3463-3454-5656-9857"
    }
  }
}`}
                    </pre>
                </div>

                <div className="note">
                <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                </div>

                </div>
            </div>
        </div>
    );
}
