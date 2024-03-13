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


  const apiRequest = {
    body: {
      type: "application/json",
      keyValue: [["refresh", "string", "a refresh type JSON web token"]]
    }
  }

  const apiResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["refresh", "string", "an access type JSON web token"]]
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

        <h2>Get Access Token</h2>
        <p>This API facilitates the renewal of access tokens by accepting a valid refresh token and returning a new access token. This process is commonly used to maintain user sessions without requiring frequent reauthentication.</p>

        {/* Base URL section */}
        <h3>Base URL</h3>
        <div className="baseUrl">
          <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.globalbanking.fintractglobal.com/")} />
          <div className="url">
            <p>https://api.globalbanking.fintractglobal.com/</p>
          </div>

        </div>

        {/* Tokenize API section */}
        <div className="section">
        <p>This endpoint takes a refresh token in the form of a JSON web token and returns an access token if the refresh token is valid.</p>

          <h3>Endpoint</h3>
          <Endpoint details="/api/token/refresh/" method="POST" />

          <div className="sample">

            <ReqResBody Request={apiRequest} Response={apiResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "refresh": "5f5328b05fhksngfthdhtdhgfcgfjfjghgfghdhdhg"
}`} />

              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
  "refresh": "gdhgvcjgftfgfgfkjhjkgyhgjhggjfdshyuiyyghdrd"
}`} />
            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
