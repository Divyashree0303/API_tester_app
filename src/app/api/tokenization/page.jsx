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

            <div className="navbar">
                <div className="navbar-left">
                    <img src="/FG_logo.png" alt="Icon" />
                </div>
                <div className="navbar-right">
                    <button className="login-button"><Link href="https://globalbanking.fintractglobal.com/signin" style={{color:"white"}}>Login</Link></button>
                </div>
            </div>



            <div className="container">

                <h1>Global Banking API Documentation</h1>

                <h2>Tokenization API</h2>

                <p>Welcome to the Fintract Global Tokenization API documentation. This API allows you to tokenize and detokenize sensitive information securely.</p>

                {/* Authentication section */}
                <h3>Authentication</h3>
                <p>Before using the Tokenization API, ensure you have the necessary credentials. Refer to the <Link href="#authGuide">Authentication Guide</Link> for details on obtaining and using API keys.</p>

                {/* Base URL section */}
                <h3>Base URL</h3>
                <div className="baseUrl">
                    <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.fintractglobal.com/tokenization")} />
                    <p>https://api.globalbanking.fintractglobal.com/</p>
                </div>

                {/* Tokenize API section */}
                <h3>1. Tokenize</h3>
                <p>Tokenize sensitive information to enhance security during data storage and transmission.</p>

                <h4>Endpoint</h4>
                <div className="endpoint">
                    <div className="method">POST</div>
                    <p className="details"> /tokenization/tokenize</p>
                    <FontAwesomeIcon icon={faCopy} className="copyButtonURI" onClick={() => handleCopy("/tokenization/tokenize")} />
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

                {/* Detokenize API section */}
                <h3>2. Detokenize</h3>
                <p>Detokenize a token to retrieve the original sensitive information.</p>

                <h4>Endpoint</h4>
                <div className="endpoint">
                    <div className="method">POST</div>
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

                {/* Authentication Guide section */}
                <div id="authGuide" className="authGuide">
                    <h2>Authentication Guide</h2>
                    <p>To access the Tokenization API, you need to authenticate using an API key. Follow these steps to obtain your API key:</p>
                    <ol>
                        <li>Sign Up/Log In: <Link href="https://globalbanking.fintractglobal.com/">Create an account or log in</Link> to your Fintract Global account.</li>
                        <li>Navigate to API Keys tab</li>
                        <li>Generate API Key: Generate a new API key and keep it secure.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
