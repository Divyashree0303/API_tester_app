"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import ReqResBody from "../../../../_components/req-res/page"
import Endpoint from "../../../../_components/endpoint/page"
import SampleRequest from "../../../../_components/sample/request"
import SampleResponse from "../../../../_components/sample/response"


export default function ApiDocsPage() {


  const tmDbRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const tmDbResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["message","string","success"],
        ["Records Saved","object","Object containing all saved records"]]
    }
  }

  const monitorSearchRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["payment", "object", "Payment details",["Sender Details","object","Details of sender"],["Receiver Details","object","Details of receiver"]]]
    }
  }

  const monitorSearchResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["Sender Verdict", "object", "Verdict including flags indicating potential risk levels"]]
    }
  }

  const monitorSearchBulkRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "multipart/form-data",
      keyValue: [["payment_list", ".csv file", "file containing list of payment details"]]
    }
  }

  const monitorSearchBulkResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["Sender Verdict", "array", "Array of Verdicts including flags indicating potential risk levels"]]
    }
  }

  const uploadDataRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "multipart/form-data",
      keyValue: [["file", ".csv file", "file containing list of payment details"]]
    }
  }

  const uploadDataResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["url", "string", "URL of uploaded data"]]
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

        <h2>Transaction Monitoring </h2>

        <p>The Transaction Monitoring APIs provide functionality for managing and analyzing transaction data to detect and prevent fraudulent activities.</p>
        <p>These APIs include endpoints for populating the database with new transaction data, searching for specific transactions and obtaining verdicts, performing bulk searches with statistical analysis, and uploading files for processing.</p>

        {/* Base URL section */}
        <h3>Base URL</h3>
        <div className="baseUrl">
          <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.globalbanking.fintractglobal.com/")} />
          <div className="url">
            <p>https://api.globalbanking.fintractglobal.com/</p>
          </div>

        </div>

        {/* populate tm db*/}
        <div id="populate-db" className="section">
          <h3>1. Populate tm db</h3>
          <p>This endpoint is used to populate the database with new transaction data. This requires authentication using a bank-admin's access token. </p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

          <h4>Endpoint</h4>
          <Endpoint details="/tm/input_data" method="GET" />

          <div className="sample">

            <ReqResBody Request={tmDbRequest} Response={tmDbResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />

              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "message":"success",
    "Records Saved":{}
}`} />
            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* monitoring search*/}
        <div id="monitoring-search" className="section">
          <h3>2. Monitoring search</h3>
          <p>This endpoint takes payment data as input and returns a verdict based on transaction monitoring analysis. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/tm/search" method="POST" />

          <div className="sample">

            <ReqResBody Request={monitorSearchRequest} Response={monitorSearchResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
    "payment":{
        "Sender Details":{
            "Name":"Mohamed",
            "Address":"",
            "Country":"Libya",
            "Sender Bank Account":"",
            "IBAN Number":"",
            "SWIFT Number":"",
            "Account Balance":"",
            "Transaction Amount":500001
        },
        "Receiver Details":{
            "Name":"Mohamed",
            "Address":"",
            "Country":"Libya",
            "Sender Bank Account":"",
            "IBAN Number":"",
            "SWIFT Number":"",
            "Account Balance":"",
            "Transaction Amount":100000
        }
    }
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "Sender Verdict": {
        "Possible verdict": "Reject",
        "Country": "Libya",
        "Red Flag": false,
        "Yellow Flag": true,
        "Orange Flag": true,
        "Green Flag": false,
        "Name": "Mohamed",
        "Address": "",
        "Sender Bank Account": "",
        "IBAN Number": "",
        "SWIFT Number": "",
        "Account Balance": "",
        "Transaction Amount": 500001
    }
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* monitoring search bulk*/}
        <div id="monitoring-search-bulk" className="section">
          <h3>3. Monitoring search in bulk </h3>
          <p>This endpoint allows you to upload a list of payments in Excel format and returns a verdict list along with country statistics based on transaction monitoring analysis. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/tm/search_bulk" method="POST" />

          <div className="sample">

            <ReqResBody Request={monitorSearchBulkRequest} Response={monitorSearchBulkResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="multipart/form-data" sampleRequest="payment_details.csv"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "Sender Verdict": [
        {
            "Possible verdict": "Reject",
            "Country": "Libya",
            "Red Flag": false,
            "Yellow Flag": true,
            "Orange Flag": true,
            "Green Flag": false,
            "Name": "Mohamed",
            "Address": "",
            "Sender Bank Account": "",
            "IBAN Number": "",
            "SWIFT Number": "",
            "Account Balance": "",
            "Transaction Amount": 500001
        },
        {
            "Possible verdict": "Reject",
            "Country": "Syria",
            "Red Flag": false,
            "Yellow Flag": true,
            "Orange Flag": false,
            "Green Flag": false,
            "Name": "Ahmed",
            "Address": "",
            "Sender Bank Account": "",
            "IBAN Number": "",
            "SWIFT Number": "",
            "Account Balance": "",
            "Transaction Amount": 57801
        }
    ]
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/*upload monitoring data */}
        <div id="upload-monitoring-data" className="section">

          <h3>4. Upload monitoring data</h3>
          <p>This endpoint enables you to upload a file, typically containing transaction data, for processing within the transaction monitoring system. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/tm​/upload​/" method="POST" />

          <div className="sample">

            <ReqResBody Request={uploadDataRequest} Response={uploadDataResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="multipart/form-data" sampleRequest="data.xlsx"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "url": string
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