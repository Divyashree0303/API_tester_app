"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import ReqResBody from "../../../../_components/req-res/page"
import Endpoint from "../../../../_components/endpoint/page"
import SampleRequest from "../../../../_components/sample/request"
import SampleResponse from "../../../../_components/sample/response"


export default function ApiDocsPage() {


  const scheduledPaymentsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const scheduledPaymentsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]", "array", "Array containing details of scheduled payments",
       ["id", "string"], ["sender_account", "string"], ["receiver_account", "string"],
       ["amount","integer"],["status","string"],["bank_id","string"],["date","string"]]]
    }
  }

  const scheduleRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["sender_account","string","Sender's account number"],
    ["receiver_account","string","Receiver's account number"],
    ["amount","string","Amount to be transferred"],
    ["transfer_type","string Enum: [P2P, Food, Electricity, self, Custom]","Type of transfer"],
    ["date","string","Date of the scheduled payment yyyy-mm-dd"],
    ["timezone","string","Timezone of the scheduled payment"]]
    }
  }

  const scheduleResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["msg", "string", "Ticket added successfully"],
      ["data", "object", "Object containing deatils of scheduled payment", 
      ["id", "string"], ["sender_account", "string"], ["receiver_account", "string"],
      ["amount","string"],["status","string"],["bank_id","string"],["date","string"]]]
    }
  }

  const updateScheduleRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["id*","string","ID of scheduled payment"],
    ["status*","string Enum:[APPROVED,PENDING]","Status of the payment"]]
    }
  }

  const updateScheduleResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["msg", "string", "Scheduled payment updated"]]
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

        <h2>Payment Schedular</h2>

        <p>The Payment Scheduler APIs provide functionality for managing and scheduling payments within a system.</p>
        <p>These APIs allow users to create, retrieve, and update payment schedules based on specific criteria such as sender account, receiver account, amount, transfer type, date, and timezone.</p>

        {/* Base URL section */}
        <h3>Base URL</h3>
        <div className="baseUrl">
          <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.globalbanking.fintractglobal.com/")} />
          <div className="url">
            <p>https://api.globalbanking.fintractglobal.com/</p>
          </div>

        </div>

        {/* Get all scheduled payments*/}
        <div id="scheduled-payments" className="section">
          <h3>1. Get all scheduled payments</h3>
          <p>This API endpoint allows bank-admins to view all the scheduled payments associated with their bank. It provides essential information such as sender account, receiver account, amount, transfer type, date, and timezone for each scheduled payment.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

          <h4>Endpoint</h4>
          <Endpoint details="/schedular/" method="GET" />

          <div className="sample">

            <ReqResBody Request={scheduledPaymentsRequest} Response={scheduledPaymentsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />

              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "id": "efb9aae52f314f6fb4e8a93e751da0f8",
      "sender_account": "5264312534654543725",
      "receiver_account": "4692443454345852371",
      "amount": 100.0,
      "status": "APPROVED",
      "bank_id": "99c72ecdbff44c3da8e76225ef5457ed",
      "date": "2023-05-25T22:26:00Z"
  },
  {
      "id": "ed3d56aabb1340509ae85545ff7e5dcd",
      "sender_account": "5264312534654543725",
      "receiver_account": "4692443454345852371",
      "amount": 100.0,
      "status": "APPROVED",
      "bank_id": "99c72ecdbff44c3da8e76225ef5457ed",
      "date": "2023-06-30T08:38:00Z"
  },
  {
      "id": "eecb5c3f581b4a4daacd330686794460",
      "sender_account": "5264312534654543725",
      "receiver_account": "4692443454345852371",
      "amount": 155.0,
      "status": "APPROVED",
      "bank_id": "99c72ecdbff44c3da8e76225ef5457ed",
      "date": "2023-07-02T14:03:00Z"
  }
]`} />
            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* schedule payment*/}
        <div id="schedule-payment" className="section">
          <h3>2. Schedule payment</h3>
          <p>This endpoint is used to schedule a payment by providing payment data. This requires authentication using a customer's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/schedular/" method="POST" />

          <div className="sample">

            <ReqResBody Request={scheduleRequest} Response={scheduleResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "sender_account": "123456789091",
  "receiver_account": "987654321117",
  "amount": "100",
  "transfer_type": "P2P",
  "date": "2024-03-22",
  "timezone": "Asia/Kolkata"
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
  "msg": "Ticket added successfully",
  "data": {
      "id": "d8f01a01djh7468843ths91140d614b",
      "sender_account": "123456789091",
      "receiver_account": "987654321117",
      "amount": "100",
      "status": "PENDING",
      "bank_id": "99c72ecdbff44c3da8e76115ef5457ed",
      "date": "2024-03-22"
  }
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/*update scheduled payment */}
        <div id="update-scheduled-payment" className="section">
          <h3>3. Update scheduled payment</h3>
          <p>This endpoint takes payment id & status and updates only status. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/schedular/" method="PATCH" />

          <div className="sample">

            <ReqResBody Request={updateScheduleRequest} Response={updateScheduleResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "id": "d8f01a01168ty4834t7tec91140d614b",
  "status": "CLOSED"
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "msg": "Scheduled payment updated"
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
