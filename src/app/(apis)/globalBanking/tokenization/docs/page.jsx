"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import ReqResBody from "../../../../_components/req-res/page"
import Endpoint from "../../../../_components/endpoint/page"
import SampleRequest from "../../../../_components/sample/request"
import SampleResponse from "../../../../_components/sample/response"


export default function ApiDocsPage() {


  const tokenizeRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["data", "object", "object containing info to be tokenized in key value pair"]]
    }
  }

  const tokenizeResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["token", "object", "object containing token value & expiry date", ["value", "string"], ["expiry_date", "string"]]]
    }
  }

  const detokenizeRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["token", "string", "Tokenization Token"]]
    }
  }

  const detokenizeResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["message", "string", "Detokenization successful"],
      ["DetokenizedData", "object", "Object containing detokenized data", ["id", "string"], ["token_id", "string"], ["data", "object"]]]
    }
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => console.log('Copied to clipboard'))
        .catch((error) => console.error('Error copying to clipboard: ', error));
};


  return (


    <div >


      <div className="api-container">

        <h2>Tokenization</h2>

        <p>Welcome to the Fintract Global Tokenization API documentation. This API allows you to tokenize and detokenize sensitive information securely.</p>

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
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as DEVELOPER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

          <h4>Endpoint</h4>
          <Endpoint details="/tokenization/tokenize" method="POST" />

          <div className="sample">

            <ReqResBody Request={tokenizeRequest} Response={tokenizeResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "data": {
    "card_number":"3463-3454-5656-9857"
  }
}`} />

              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "token": {
    "value": "cb95abdf-6a4f-48c9-841e-7c761ea534ed",
    "expiry_date": "2024-02-13"
  }
}`} />
            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* Detokenize API section */}
        <div id="detokenize" className="section">
          <h3>2. Detokenize</h3>
          <p>Detokenize a token to retrieve the original sensitive information.</p>
          <p>Tokenize sensitive information to enhance security during data storage and transmission.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as DEVELOPER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/tokenization/detokenize" method="POST" />

          <div className="sample">

            <ReqResBody Request={detokenizeRequest} Response={detokenizeResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "token": "cb95abdf-6a4f-48c9-841e-7c761ea534ed"
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "message": "Detokenization successful",
  "DetokenizedData": {
    "id": "087f427d-1995-4a8f-8861-6fffe35845de",
    "token_id": "b9a486c2-bb0c-4257-a73d-195126447e42",
    "data": {
      "card_number": "3463-3454-5656-9857"
    }
  }
}`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
