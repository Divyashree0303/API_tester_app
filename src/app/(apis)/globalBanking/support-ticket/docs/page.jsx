"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import ReqResBody from "../../../../_components/req-res/page"
import Endpoint from "../../../../_components/endpoint/page"
import SampleRequest from "../../../../_components/sample/request"
import SampleResponse from "../../../../_components/sample/response"


export default function ApiDocsPage() {


  const supportTicketsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const supportTicketsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]", "array", "Array containing details of support tickets",
       ["ticket_id", "string"], ["subject", "string"], ["description", "string"],
       ["status","string"],["transaction_id","string"],["bank","string"]]]
    }
  }

  const createSupportTicketRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["subject", "string", "Subject of the support ticket"],
      ["description", "string", "Description of the issue"],
      ["transaction_id","string","ID of the transaction associated with the issue"],
      ["bank","string","Name of the bank"]]
    }
  }

  const createSupportTicketResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["msg", "string", "Ticket added successfully"]]
    }
  }

  const updateSupportTicketRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["ticketId","string","ID of suppotr ticket"],
      ["status","string Enum: [APPROVED,PENDING APPROVAL, UNDER INVESTIGATION, UNDER REVEIW, CLOSED, REOPEN]","Status of support ticket"]]
    }
  }

  const updateSupportTicketResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["msg", "string", "Ticket added successfully"]]
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

        <h2>Support Ticket </h2>

        <p>The Support Ticket APIs provide functionalities for managing customer support interactions within the application. These APIs allow users to create, retrieve, and update support tickets for addressing various issues or inquiries.</p>
        <p>These APIs facilitate effective communication and resolution of customer inquiries, enhancing overall user experience and satisfaction.</p>

        {/* Base URL section */}
        <h3>Base URL</h3>
        <div className="baseUrl">
          <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.globalbanking.fintractglobal.com/")} />
          <div className="url">
            <p>https://api.globalbanking.fintractglobal.com/</p>
          </div>

        </div>

        {/* Get support tickets*/}
        <div id="support-tickets" className="section">
          <h3>1. Get support tickets</h3>
          <p>This API endpoint takes authenticated user and returns support tickets created by authenticated user. This requires authentication using a bank-admin's or customer's access token. </p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN or CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

          <h4>Endpoint</h4>
          <Endpoint details="/support/ticket" method="GET" />

          <div className="sample">

            <ReqResBody Request={supportTicketsRequest} Response={supportTicketsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />

              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
    {
        "ticket_id": "0091271ba8cd431381a900a49f2200c3",
        "subject": "Transaction Dispute",
        "description": "I did not receive the funds for transaction ID b8c91796c3154a0b123455e00ee6ac.",
        "status": "UNDER REVIEW",
        "transaction_id": "b8c91796c3154a0b123455e00ee6ac",
        "bank": "HSBC"
    }
]`} />
            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* create support ticket*/}
        <div id="create-support-ticket" className="section">
          <h3>2. Create support ticket</h3>
          <p>This endpoit creates a new support ticket with the provided data. This requires authentication using a customer's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/support/ticket" method="POST" />

          <div className="sample">

            <ReqResBody Request={createSupportTicketRequest} Response={createSupportTicketResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
    "subject": "Transaction Dispute",
    "description": "I did not receive the funds for transaction ID b8c91796c3154a0b123455e00ee6ac.",
    "transaction_id": "b8c91796c3154a0b123455e00ee6ac",
    "bank": "HSBC"
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "msg": "Ticket added successfully"
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/*update support ticket */}
        <div id="update-support-ticket" className="section">
          <h3>3. Update support ticket</h3>
          <p>This endpoit takes support ticket id and updates it's status. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/support/ticket" method="PATCH" />

          <div className="sample">

            <ReqResBody Request={updateSupportTicketRequest} Response={updateSupportTicketResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "ticketId": "e264010f249mbmfdbvd8fb9b871d1adf",
  "status": "APPROVED"
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "msg": "Ticket Updated"
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
