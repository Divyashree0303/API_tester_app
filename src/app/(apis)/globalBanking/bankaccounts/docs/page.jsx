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


  const getBankAccountsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getBankAccountsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]", "Array", "Array conatining details of customer's all bank accounts",
       ["Account_Holder_Fname", "string"], ["Account_Holder_Mname", "string"],["Account_Holder_Lname", "string"],
    ["Account_no","string"],["Bank", "string"],["Bank_Branch","string"],["account_type","Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
["id","integer"],["category","Enum:['UK','INDIA']"],["balance","integer"]]]
    }
  }

  const getAllBanksRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getAllBanksResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue:[["[]", "Array", "Array containing details of all registered banks",
      ["bank_id", "string"], ["name", "string"],["main_address", "string"],
   ["currency","string"],["iban", "string"],["swift_code","string"],["country","string"],
["director_name","string"],["secretory_name","string"],["phone","string"],["email","string"]]]
    }
  }

  const getAllBankAccountsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getAllBankAccountsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue:[["[]", "Array", "Array containing details of all bank accounts",
      ["Account_Holder_Fname", "string"], ["Account_Holder_Mname", "string"],["Account_Holder_Lname", "string"],
   ["Account_no","string"],["Bank", "string"],["Bank_Branch","string"],["Account_type","string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
["id","integer"],["category","string Enum:[ UK, India ]"],["balance","integer"],["active","boolean"]]]
    }
  }

  const getAllBankAdminsAccountsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getAllBankAdminsAccountsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue:[["[]", "Array", "Array containing details of all bank-admin bank accounts",
      ["first_name", "string"], ["middle_name", "string"],["last_name", "string"],
   ["account_number","string"],["bank_name", "string"],["account_type","string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
["id","integer"],["currency","string"],["balance","integer"],["active","boolean"]]]
    }
  }


  const getAllBankAdminAccountsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getAllBankAdminAccountsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue:[["[]", "Array", "Array containing details of all bank accounts of bank-admin",
      ["Account_Holder_Fname", "string"], ["Account_Holder_Mname", "string"],["Account_Holder_Lname", "string"],
   ["Account_no","string"],["account_type","string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
["id","integer"],["category","string Enum:[ UK, India ]"],["balance","integer"]]]
    }
  }

  const getAllBankAdminsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getAllBankAdminsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue:[["[]", "Array", "Array containing details of all bank-admins",
      ["id","integer"],["customer_id","string"],
    ["user_type", "string enum:[ CUSTOMER, BANK_ADMIN, FINTRACT_ADMIN, DEVELOPER, DEVELOPER_ADMIN ]", "User type"],
  ["user_name","string"],["email","string"],["name","string"],["admin_approved","boolean"]]]
    }
  }

  const getAllBankCustomersRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getAllBankCustomersResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue:[["[]", "Array", "Array containing details of all bank-admins",
      ["id","integer"],["customer_id","string"],
    ["user_type", "string enum:[ CUSTOMER, BANK_ADMIN, FINTRACT_ADMIN, DEVELOPER, DEVELOPER_ADMIN ]", "User type"],
  ["user_name","string"],["email","string"],["name","string"]]]
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

        <h2>Bank Accounts</h2>

        <p>The Bank Accounts API offers a comprehensive solution for seamless bank account management. With a versatile array of endpoints covering all aspects of banking operations, developers can easily create robust financial applications.</p>

        {/* Base URL section */}
        <h3>Base URL</h3>
        <div className="baseUrl">
          <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.globalbanking.fintractglobal.com/")} />
          <div className="url">
            <p>https://api.globalbanking.fintractglobal.com/</p>
          </div>

        </div>

        {/* user's all bank accounts*/}
        <div id="all-user-bank-accounts" className="section">
          <h3>1. Get user's all bank accounts</h3>
          <p>This endpoint retrieves the all the bank accounts associated with the authenticated customer.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/" method="GET" />

          <div className="sample">

            <ReqResBody Request={getBankAccountsRequest} Response={getBankAccountsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />

              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
    {
        "Account_Holder_Fname": "John",
        "Account_Holder_Mname": "",
        "Account_Holder_Lname": "Doe",
        "Account_no": "123456789098",
        "Bank": "HSBC",
        "Bank_Branch": "HSBC London",
        "account_type": "SAVINGS",
        "id": 30,
        "category": "GB",
        "balance": 20000,
        "active": true,
        "on_profile": false
    },
    {
        "Account_Holder_Fname": "John",
        "Account_Holder_Mname": "",
        "Account_Holder_Lname": "Doe",
        "Account_no": "885654321577",
        "Bank": "HSBC",
        "Bank_Branch": "HSBC London",
        "account_type": "CURRENT",
        "id": 38,
        "category": "IN",
        "balance": 0,
        "active": true,
        "on_profile": false
    }
]`} />
            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* all banks */}
        <div id="all-banks" className="section">
          <h3>2. Get all banks</h3>
          <p>This endpoint retrieves a list of all registered banks.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/admin/banks" method="GET" />

          <div className="sample">

            <ReqResBody Request={getAllBanksRequest} Response={getAllBanksResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "bank_id": "deeee965e9684ad0a86e",
      "name": "BARCLAYS BANK PLC UK",
      "main_address": "104-108 Tower Bridge Rd, London SE1 3NG, United Kingdom",
      "is_verified": true,
      "currency": "GBP",
      "iban": "GB13BUKB60161331926819",
      "swift_code": "BUKBGB22",
      "country": "GB",
      "director_name": "Matt Hammerstein",
      "secretary_name": "Nigel Higgins",
      "phone": "+443457345345",
      "email": "admin.barclays@fintractglobal.com"
  },
  {
      "bank_id": "99c72ecdbff44c3da8e7",
      "name": "HSBC",
      "main_address": "196 Oxford St, London W1D 1NT, United Kingdom",
      "is_verified": true,
      "currency": "GBP",
      "iban": "GB54HBUK60161331926819",
      "swift_code": "HBUKGB4BXXX",
      "country": "GB",
      "director_name": "Colin Bell",
      "secretary_name": "Gareth Ainsworth",
      "phone": "+443457404404",
      "email": "admin.hsbc@fintractglobal.com"
  }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* all registered bankaccounts */}
        <div id="all-bank-accounts" className="section">
          <h3>3. Get all bank accounts</h3>
          <p>This endpoint retrieves a list of all bank accounts.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/all" method="GET" />

          <div className="sample">

            <ReqResBody Request={getAllBankAccountsRequest} Response={getAllBankAccountsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
    {
        "Account_Holder_Fname": "John",
        "Account_Holder_Mname": "B",
        "Account_Holder_Lname": "Doe",
        "Account_no": "123456789181828657",
        "Bank": "HSBC",
        "Bank_Branch": "HSBC London",
        "account_type": "SAVINGS",
        "id": 19,
        "category": "GB",
        "balance": 1900,
        "active": true,
        "on_profile": false
    },
    {
        "Account_Holder_Fname": "Jordon",
        "Account_Holder_Mname": "",
        "Account_Holder_Lname": "Smith",
        "Account_no": "123212344544239725",
        "Bank": "HSBC",
        "Bank_Branch": "HSBC London",
        "account_type": "CURRENT",
        "id": 103,
        "category": "GB",
        "balance": 342427,
        "active": true,
        "on_profile": false
    },
    {
        "Account_Holder_Fname": "Ricky",
        "Account_Holder_Mname": "",
        "Account_Holder_Lname": "Scott",
        "Account_no": "46924635123456789",
        "Bank": "HSBC",
        "Bank_Branch": "HSBC London",
        "account_type": "CURRENT",
        "id": 204,
        "category": "GB",
        "balance": 1063,
        "active": true,
        "on_profile": false
    }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* all registered bank admins' bankaccounts */}
        <div id="all-bank-admins-accounts" className="section">
          <h3>3. Get all bank-admins' bank accounts</h3>
          <p>This endpoint retrieves a list of all bank admins' bank accounts.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank-admin/create" method="GET" />

          <div className="sample">

            <ReqResBody Request={getAllBankAdminsAccountsRequest} Response={getAllBankAdminsAccountsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "first_name": "Fiona",
      "middle_name": "Rob",
      "last_name": "Rob",
      "account_number": "1234567137664744",
      "bank_name": "HSBC",
      "account_type": "CURRENT",
      "id": 51,
      "balance": 20000,
      "active": true,
      "currency": "GBP"
  },
  {
      "first_name": "Harry",
      "middle_name": "Smith",
      "last_name": "Smith",
      "account_number": "2571234555161485",
      "bank_name": "Lloyds Bank",
      "account_type": "CURRENT",
      "id": 29,
      "balance": 50000000,
      "active": true,
      "currency": "USD"
  }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
          </div>

        </div>

         {/* createbank admins' bankaccounts incomplete*/}
         {/* <div id="create-bank-admin-account" className="section">
          <h3>3. Create bank account for bank-admin</h3>
          <p>This endpoint allows the creation of a bank admin account. Only users with the role FINTRACT_ADMIN can call this endpoint</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank_admin/create" method="POST" />

          <div className="sample">

            <ReqResBody Request={createBankAdminAccountRequest} Response={getAllBankAdminsAccountsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "first_name": "Fiona",
      "middle_name": "Rob",
      "last_name": "Rob",
      "account_number": "1234567137664744",
      "bank_name": "HSBC",
      "account_type": "CURRENT",
      "id": 51,
      "balance": 20000,
      "active": true,
      "currency": "GBP"
  },
  {
      "first_name": "Harry",
      "middle_name": "Smith",
      "last_name": "Smith",
      "account_number": "2571234555161485",
      "bank_name": "Lloyds Bank",
      "account_type": "CURRENT",
      "id": 29,
      "balance": 50000000,
      "active": true,
      "currency": "USD"
  }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
          </div>

        </div> */}

         {/* bank admin all bankaccounts */}
        <div id="bank-admin-all-accounts" className="section">
          <h3>4. Get bank-admin's bank accounts</h3>
          <p>This endpoint retrieves a list of all bank accounts of bank-admin.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank-admin/accounts" method="GET" />

          <div className="sample">

            <ReqResBody Request={getAllBankAdminAccountsRequest} Response={getAllBankAdminAccountsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
    {
        "Account_Holder_Fname": "Fiona",
        "Account_Holder_Mname": "Rob",
        "Account_Holder_Lname": "Rob",
        "Account_no": "1234567137664744",
        "account_type": "CURRENT",
        "id": 21,
        "category": "UK",
        "balance": 200000
    }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
          </div>

        </div>

         {/* all bank admins */}
         <div id="all-bank-admins" className="section">
          <h3>6. Get all bank-admins</h3>
          <p>This endpoint retrieves a list of all bank administrators. Only users with the role FINTRACT_ADMIN can call this endpoint.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank_admins" method="GET" />

          <div className="sample">

            <ReqResBody Request={getAllBankAdminsRequest} Response={getAllBankAdminsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "id": 39,
      "customer_id": "1234563133894860",
      "user_type": "BANK_ADMIN",
      "username": "john09",
      "email": "adminbank@fintractglobal.com",
      "name": "John Doe",
      "admin_approved": true
  },
  {
      "id": 68,
      "customer_id": "12345760544106",
      "user_type": "BANK_ADMIN",
      "username": "hsbcadmin",
      "email": "badamin.hsbc@fintractglobal.com",
      "name": "HSBC Admin",
      "admin_approved": true
  }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* all customers of bank*/}
        <div id="all-bank-customers" className="section">
          <h3>7. Get all customers</h3>
          <p>This endpoint retrieves a list of all customers associated with the bank. This endpoint requires authentication using a bank admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/customers" method="GET" />

          <div className="sample">

            <ReqResBody Request={getAllBankCustomersRequest} Response={getAllBankCustomersResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "id": 50,
      "customer_id": "2211123456773",
      "user_type": "CUSTOMER",
      "username": "barrylowe",
      "email": "barrylowe@fintractglobal.com",
      "name": "Barry Lowe"
  },
  {
      "id": 98,
      "customer_id": "34021234567890",
      "user_type": "CUSTOMER",
      "username": "rickyscott",
      "email": "rickyscott@fintractglobal.com",
      "name": "Ricky Scott"
  },
  {
      "id": 67,
      "customer_id": "299123451683460",
      "user_type": "CUSTOMER",
      "username": "johnsmithuk",
      "email": "johnsmith@fintractglobal.com",
      "name": "John Smith"
  }
]`} />

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
