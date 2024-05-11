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
        ["Account_Holder_Fname", "string"], ["Account_Holder_Mname", "string"], ["Account_Holder_Lname", "string"],
        ["Account_no", "string"], ["Bank", "string"], ["Bank_Branch", "string"], ["account_type", "Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
        ["id", "integer"], ["category", "Enum:['UK','INDIA']"], ["balance", "integer"]]]
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
      keyValue: [["[]", "Array", "Array containing details of all registered banks",
        ["bank_id", "string"], ["name", "string"], ["main_address", "string"],
        ["currency", "string"], ["iban", "string"], ["swift_code", "string"], ["country", "string"],
        ["director_name", "string"], ["secretory_name", "string"], ["phone", "string"], ["email", "string"]]]
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
      keyValue: [["[]", "Array", "Array containing details of all bank accounts",
        ["Account_Holder_Fname", "string"], ["Account_Holder_Mname", "string"], ["Account_Holder_Lname", "string"],
        ["Account_no", "string"], ["Bank", "string"], ["Bank_Branch", "string"], ["Account_type", "string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
        ["id", "integer"], ["category", "string Enum:[ UK, India ]"], ["balance", "integer"], ["active", "boolean"]]]
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
      keyValue: [["[]", "Array", "Array containing details of all bank-admin bank accounts",
        ["first_name", "string"], ["middle_name", "string"], ["last_name", "string"],
        ["account_number", "string"], ["bank_name", "string"], ["account_type", "string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
        ["id", "integer"], ["currency", "string"], ["balance", "integer"], ["active", "boolean"]]]
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
      keyValue: [["[]", "Array", "Array containing details of all bank accounts of bank-admin",
        ["Account_Holder_Fname", "string"], ["Account_Holder_Mname", "string"], ["Account_Holder_Lname", "string"],
        ["Account_no", "string"], ["account_type", "string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
        ["id", "integer"], ["category", "string Enum:[ UK, India ]"], ["balance", "integer"]]]
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
      keyValue: [["[]", "Array", "Array containing details of all bank-admins",
        ["id", "integer"], ["customer_id", "string"],
        ["user_type", "string enum:[ CUSTOMER, BANK_ADMIN, FINTRACT_ADMIN, DEVELOPER, DEVELOPER_ADMIN ]", "User type"],
        ["user_name", "string"], ["email", "string"], ["name", "string"], ["admin_approved", "boolean"]]]
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
      keyValue: [["[]", "Array", "Array containing details of all bank-admins",
        ["id", "integer"], ["customer_id", "string"],
        ["user_type", "string enum:[ CUSTOMER, BANK_ADMIN, FINTRACT_ADMIN, DEVELOPER, DEVELOPER_ADMIN ]", "User type"],
        ["user_name", "string"], ["email", "string"], ["name", "string"]]]
    }
  }

  const createBankRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["name*", "string", "Bank name"],
      ["main_address*", "string", "Main address of the bank"],
      ["currency", "string", "Currency"],
      ["iban", "string", "IBAN"],
      ["swift_code", "string", "Swift code"],
      ["country", "string", "Country name"],
      ["director_name", "string", "Bank's director name"],
      ["phone", "string", "Phone number"],
      ["email", "string", "Email ID"],
      ["secretary_name", "string", "Secretary name"]],

    }
  }

  const createBankResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["bank_id", "string", "Bank ID"],
      ["name", "string", "Bank name"],
      ["main_address*", "string", "Main address of the bank"],
      ["currency", "string", "Currency"],
      ["iban", "string", "IBAN"],
      ["swift_code", "string", "Swift code"],
      ["country", "string", "Country name"],
      ["director_name", "string", "Bank's director name"],
      ["phone", "string", "Phone number"],
      ["email", "string", "Email ID"],
      ["secretary_name", "string", "Secretary name"],
      ["is_verified", "boolean", "true if bank is verified else false"]],
    }
  }

  const updateBankRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["bank_id*","string","Bank ID"],
      ["name*", "string", "Bank name"],
      ["main_address*", "string", "Main address of the bank"],
      ["currency", "string", "Currency"],
      ["iban", "string", "IBAN"],
      ["swift_code", "string", "Swift code"],
      ["country", "string", "Country name"],
      ["director_name", "string", "Bank's director name"],
      ["phone", "string", "Phone number"],
      ["email", "string", "Email ID"],
      ["secretary_name", "string", "Secretary name"],
      ["is_verified","boolean","True if bank is verified"]],

    }
  }

  const updateBankResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["bank_id", "string", "Bank ID"],
      ["name", "string", "Bank name"],
      ["main_address*", "string", "Main address of the bank"],
      ["currency", "string", "Currency"],
      ["iban", "string", "IBAN"],
      ["swift_code", "string", "Swift code"],
      ["country", "string", "Country name"],
      ["director_name", "string", "Bank's director name"],
      ["phone", "string", "Phone number"],
      ["email", "string", "Email ID"],
      ["secretary_name", "string", "Secretary name"],
      ["is_verified", "boolean", "true if bank is verified else false"]],
    }
  }

  const verifyBankRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["name*", "string", "Bank name"]]

    }
  }

  const verifyBankResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [
        ["msg", "string", "Bank verified"]],
    }
  }

  const createBankAdminAccountRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["first_name*", "string", "First name"],
      ["last_name*", "string", "Last name"],
      ["account_number*", "string", "bank account number"],
      ["bank_id*", "string", "Bank ID from create bank"],
      ["account_type", "string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
      ["country", "string", "country name"]],

    }
  }

  const createBankAdminAccountResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["msg", "string", "Bank account added successfully"]],
    }
  }

  const getBankBranchesRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getBankBranchesResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]", "array", "Array of branches of the bank",
                ["Bank Name","string"],["Branch Name","string"],["Branch ID","integer"],
                ["IFSC","string"],["Branch Address","string"],["email","string"],
                ["Sort Code","string"],["BIC","string"],["Swift Code","string"],
                ["Country Code","string"],["Contact Number","string"]]],
    }
  }

  const getinterestsRequest = {
    param: {
      bank_id: ["string", "Bank ID"]
  },
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getinterestsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]", "array", "Array of all ineterest rates of the bank",
                ["id","string"],["name","string"],["rate","integer"],
                ["bank_id","string"],["bank_name","string"],["country","string"],
                ["created_at","string"]]],
    }
  }

  const addInterestRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
      keyValue: [["name*", "string", "Name"],
      ["rate*", "string", "Interest rate"],
      ["country*", "string", "Country"]],

    }
  }

  const addInterestResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["msg","string","Interest rate saved"]],
    }
  }

  const createBankAccountRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body: {
      type: "application/json",
        keyValue: [["customer_id*", "string", "Customer ID"],
          ["Account_Holder_Fname*","string","First name of account holder"],
          ["Account_Holder_Mname","string","Middle name of account holder"],
          ["Account_Holder_Lname","string","Last name of account holder"],
          ["Account_no*","string","Account number"],
          ["account_type*", "string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
          ["category*", "string Enum:[ UK, India ]"],
          ["parent_bank_branch_id*","string","Bank ID of parent bank"],
          ["interest_rate_id*","string","Interest rate ID"]]
    }
  }

  const createBankAccountResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["msg","string","Bank account added successfully"]],
    }
  }

  const applyCardRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body:{
      type:"application/json",
      keyValue:[["card_type*","string Enum: [Debit, Credit]","Type of card"],
    ["card_provider*","string Enum:[Visa, Master Card, Discover, American Express]","Provider of the card"],
    ["account*","string","Account number of the customer"]]
    }
  }

  const applyCardResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["card_type","string Enum: [Debit, Credit]","Type of card"],
      ["card_provider","string Enum:[Visa, Master Card, Discover, American Express]","Provider of the card"]],
    }
  }

  const getCardApplicationsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getCardApplicationsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]","array","Array of details of all the card applications.",
    ["id","string"],["card_type","string Enum: ['Debit','Credit']"],["owner_name","string"],
    ["owner_id","string"],["owner_email","string"],["created_at","string"],["id_approved","boolean"],
    ["card_provider","string Enum:[Visa, Master Card, Discover, American Express]"]]],
    }
  }

  const getUserCardApplicationsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]","array","Array of details of all the card applications.",
    ["id","string"],["card_type","string Enum: ['Debit','Credit']"],["owner_name","string"],
    ["owner_id","string"],["owner_email","string"],["created_at","string"],["id_approved","boolean"],
    ["card_provider","string Enum:[Visa, Master Card, Discover, American Express]"],["expiry_date","string"],
    ["card_number","string"],["token","string"]]],
    }
  }

   const getExchangeRatesRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    }
  }

  const getExchangeRatesResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["id","string","Exchange Rates ID"],["bank_id","string","Bank ID"],["primary_currency","string","Primary currency of the bank"],
      ["rates","object","Object containing exchange rates",["INR","30.0"],["USD","85"],["JPY","100"]]],
    }
  }

  const addExchangeRatesRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body:{
      type:"multipart/form-data",
      keyValue:[["csvFile*",".csv file","A csv file containing currency and rate columns"]]
    }
  }

  const addExchangeRatesResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["{}","object","Object containing the exchange rates added"]],
    }
  }

  const patchExchangeRatesRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body:{
      type:"application/json",
      keyValue:[["rate*","string","Exchange rate value"],["currency*","string","Currency type"]]
    }
  }

  const patchExchangeRatesResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["id","string","Exchange Rates ID"],["bank_id","string","Bank ID"],["primary_currency","string","Primary currency of the bank"],
      ["rates","object","Object containing exchange rates",["INR","30.0"],["USD","85"],["JPY","100"],["CAD","60"]]],
    }
  }

  const addPayeeRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization."]
    },
    body:{
      type:"application/json",
      keyValue:[["label*","string","label for payee"],["account_number*","string","Account number of the payee"]]
    }
  }

  const addpayeeResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["id","string","ID"],["customer_id","string","Customer ID"],
      ["payees","array","Array of all the payees with their account number"]
  ],
    }
  }

  const getPayeeRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const getpayeeResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["id","string","ID"],["customer_id","string","Customer ID"],
      ["payees","array","Array of all the payees with their account number"]
  ],
    }
  }

  const getAccountRequestsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const getAccountRequestsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]", "Array", "Array containing details of all bank account creation requests",
        ["Account_Holder_Fname", "string"], ["Account_Holder_Mname", "string"], ["Account_Holder_Lname", "string"],
        ["Account_no", "string"], ["account_type", "string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
        ["iban","string"],["id", "integer"], ["category", "string Enum:[ UK, India, GB ]"], ["country", "string"],["active","boolean"]]]
    }
  }

  const requestAccountRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    },
    body: {
      type: "application/json",
      keyValue: [["customer_id*", "string", "Customer ID"],
          ["Account_Holder_Fname*","string","First name of account holder"],
          ["Account_Holder_Mname","string","Middle name of account holder"],
          ["Account_Holder_Lname*","string","Last name of account holder"],
          ["Account_no*","string","Account number"],
          ["account_type*", "string Enum:[ CURRENT, SAVINGS, PENSION, LOAN, MORTGAGE ]"],
          ["category*", "string Enum:[ UK, India ]"],
          ["parent_bank_branch_id*","string","Bank ID of parent bank"]]
    }
  }

  const requestAccountResponse = {
    code: "201",
    body: {
      type: "application/json",
      keyValue: [["msg","string","Bank account added successfully"]]
    }
  }

  const activateAccountRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    },
    body: {
      type: "application/json",
      keyValue: [["Account_no*", "string", "Account number of the bank account to be activated"]]
    }
  }

  const activateAccountResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["msg","string","Account activated"]]
    }
  }

  const suspendAccountRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    },
    body: {
      type: "application/json",
      keyValue: [["Account_no*", "string", "Account number of the bank account to be suspended"]]
    }
  }

  const suspendAccountResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["msg","string","Account suspended and removed from profile"]]
    }
  }

  const deleteAccountRequest = {
    param:{
      bank_aacount_id : ["string","Bank account ID"]
    },
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const deleteAccountResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["msg","string","Bank account deleted successfully"]]
    }
  }

  const getStatementRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const getStatementResponse = {
    code: "200",
    body: {
      type: "text/csv",
      keyValue: []
    }
  }

  const getReportRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const getReportResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["Food_expense","integer",""],
    ["Electricity_Expense","integer",""],
    ["P2P_transfer","integer",""],
    ["Self_transfer","integer",""],
    ["Net_Transfer (Total excluding self transfers)","integer",""],
    ["Net_Received (Total received excluding self transfers)","integer",""]]
    }
  }

  const getBankReportRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const getBankReportResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]","array","Array conatining details of transactions of a bank",
    ["id","string"],["sender_acc","string"],["receiver_acc","string"],["country","string"],
    ["prediction","string"],["amount","integer"],["red_flag","boolean"],["green_flag","boolean"],
    ["yellow_flag","string"],["bank_name","string"],["bank_id","string"]]]
    }
  }

  const getTransactionsRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const getTransactionsResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]","array","Array containing details of all the transaction",
    ["account","string"],["to_account_no","string"],["amount_send","integer"],["transfer_type","string Enum: [P2P, Food, Electricity, self, Bank_Fund, Custom]"],
    ["created_at","string"],["status","string Enum: [Sent, Received, Pending, Failed]"],["transaction_id","string"]]]
    }
  }

  const getTransactionsYearRequest = {
    param:{
      year:["string","Year"]
    },
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const getTransactionsYearResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]","array","Array containing details of all the transaction",
    ["account","string"],["to_account_no","string"],["amount_send","integer"],["transfer_type","string Enum: [P2P, Food, Electricity, self, Bank_Fund, Custom]"],
    ["created_at","string"],["status","string Enum: [Sent, Received, Pending, Failed]"],["transaction_id","string"]]]
    }
  }

  const transferMoneyRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    },
    body:{
      type:"application/json",
      keyValue:[["account*","string","Account number from which the money will be sent"],
      ["to_account_no*","string","Recipient's account number"],
      ["amount_send*","integer","Amount of money to be sent"],
      ["transfer_type*","string Enum: [P2P, Food, Electricity, self, Custom]","Type of transfer"]]
    }
  }

  const transferMoneyResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [['data',"object","",["message","Amount Transfered Successfully"]]]
    }
  }

  const fundAccountRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    },
    body:{
      type:"application/json",
      keyValue:[["account*","string","Account number from which the money will be sent"],
      ["to_account_no*","string","Recipient's account number"],
      ["amount_send*","integer","Amount of money to be sent"],
      ["type*","string Enum: [Add]","Type of transfer"]]
    }
  }

  const fundAccountResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [['data',"object","",["message","Amount Transfered Successfully"]]]
    }
  }

  const fundLedgerRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    },
    body:{
      type:"application/json",
      keyValue:[["to_account_no*","string","Recipient's account number"],
      ["amount_send*","integer","Amount of money to be sent"],
      ["type*","string Enum: [Add]","Type of transfer"],
      ["currency","string","Currency"]]
    }
  }

  const fundLedgerResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [['data',"object","",["message","Amount Transfered Successfully"]]]
    }
  }

  const ledgerTransRequest = {
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const ledgerTransResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["[]","array","Array containing details of all the transaction",
    ["account","string"],["to_account_no","string"],["amount_send","integer"],["transfer_type","string Enum: [P2P, Add]"],
    ["created_at","string"],["status","string Enum: [Sent, Received, Pending, Failed]"],["transaction_id","string"]]]
    }
  }

  const approveCardRequest = {
    params:{
      id:["integer","Bank-admin ID"]
    },
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    },
    body:{
      type:"application/json",
      keyValue:[["id*","string","Card ID"]]
    }
  }

  const approveCardResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["message","string","Updated Succesfully"]]
    }
  }

  const adminApproveBankAdminRequest = {
    params:{
      id:["integer","Bank-admin ID"]
    },
    header: {
      Authorization: ["string", "Bearer access token for authorization"]
    }
  }

  const adminApproveBankAdminResponse = {
    code: "200",
    body: {
      type: "application/json",
      keyValue: [["message","string","Updated Succesfully"]]
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

         {/* all banks */}
         <div id="banks" className="section">
          <h3>1. Get all banks</h3>
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
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* user's all bank accounts*/}
        <div id="user-bank-accounts" className="section">
          <h3>2. Get user's all bank accounts</h3>
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
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* create bank*/}
        <div id="create-bank" className="section">
          <h3>3. Create bank</h3>
          <p>This endpoint is used to create a new bank account with the provided bank data. This endpoint requires authentication using a fintact admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank" method="POST" />

          <div className="sample">

            <ReqResBody Request={createBankRequest} Response={createBankResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "name": "Standard Chatered",
  "main_address": "1 Basinghall Ave, London EC2V 5DD, United Kingdom",
  "currency": "GBP",
  "iban": "GB72 SCBL 6091 0412 6952 78",
  "swift_code": "SCBLGB2L",
  "country": "UK",
  "director_name": "William Thomas Winters",
  "phone": "1234567890",
  "email": "willianthomas@gmail.com",
  "secretary_name": ""
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "bank_id": "15ec4ab896a7413587571bcada5261d4",
    "name": "Standard Chatered",
    "currency": "GBP",
    "main_address": "1 Basinghall Ave, London EC2V 5DD, United Kingdom",
    "country": "UK",
    "iban": "GB72 SCBL 6091 0412 6952 78",
    "swift_code": "SCBLGB2L",
    "director_name": "William Thomas Winters",
    "secretary_name": "",
    "phone": "1234567890",
    "email": "willianthomas@gmail.com",
    "is_verified": false
}`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/*update bank */}
        <div id="update-bank" className="section">
          <h3>4. Update bank</h3>
          <p>This endpoint takes bank data & updates it. This endpoint requires authentication using a fintact admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank" method="PATCH" />

          <div className="sample">

            <ReqResBody Request={updateBankRequest} Response={updateBankResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "bank_id": "15ec4ab896a7413587571bcada5261d4",
  "name": "Standard Chatered",
  "main_address": "1 Basinghall Ave, London EC2V 5DD, United Kingdom",
  "currency": "GBP",
  "iban": "GB72 SCBL 6091 0412 6952 78",
  "swift_code": "SCBLGB2L",
  "country": "GB",
  "director_name": "William Thomas Winters",
  "secretary_name": "John Smith",
  "phone": "1234567890",
  "email": "willianthomas@gmail.com",
  "is_verified": true
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
  "bank_id": "15ec4ab896a7413587571bcada5261d4",
  "name": "Standard Chatered",
  "currency": "GBP",
  "main_address": "1 Basinghall Ave, London EC2V 5DD, United Kingdom",
  "country": "GB",
  "iban": "GB72 SCBL 6091 0412 6952 78",
  "swift_code": "SCBLGB2L",
  "director_name": "William Thomas Winters",
  "secretary_name": "John Smith",
  "phone": "1234567890",
  "email": "willianthomas@gmail.com",
  "is_verified": true
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>


        {/* verify bank*/}
        <div id="verify-bank" className="section">
          <h3>5. Verify bank</h3>
          <p>This endpoint is used to mark bank information as verified. This endpoint requires authentication using a fintract-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/verify_bank" method="POST" />

          <div className="sample">

            <ReqResBody Request={verifyBankRequest} Response={verifyBankResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "name": "Standard Chatered"
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
  "msg": "Bank verified"
}`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>




        {/* all registered bankaccounts */}
        <div id="bank-accounts" className="section">
          <h3>6. Get all bank accounts</h3>
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
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* all registered bank admins' bankaccounts */}
        <div id="bank-admins-accounts" className="section">
          <h3>7. Get all bank-admins' bank accounts</h3>
          <p>This endpoint retrieves a list of all bank admins' bank accounts.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank_admin/create" method="GET" />

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
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* createbank admins' bankaccounts */}
        <div id="create-bank-admin-account" className="section">
          <h3>8. Create bank account for bank-admin</h3>
          <p>This endpoint allows the creation of a bank admin account. Only users with the role FINTRACT_ADMIN can call this endpoint</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank_admin/create" method="POST" />

          <div className="sample">

            <ReqResBody Request={createBankAdminAccountRequest} Response={createBankAdminAccountResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "first_name":"Admin",
  "last_name":"Standard_Chartered",
  "account_number":"12346767897766",
  "bank_id":"15ec4ab896a7413587571bcada5261d4",
  "account_type":"CURRENT",
  "country":"GB"
}`} />

              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "msg": "Bank account added successfully"
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* bank admin all bankaccounts */}
        <div id="bank-admin-accounts" className="section">
          <h3>9. Get bank-admin's bank accounts</h3>
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
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* all bank admins */}
        <div id="bank-admins" className="section">
          <h3>10. Get all bank-admins</h3>
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
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/*admin approve bank admin */}
        <div id="admin-approve-bank-admin" className="section">
          <h3>11. Admin approve bank admin</h3>
          <p>This endpoint marks a bank admin user as approved by FINTRACT_ADMIN. Only users with the role FINTRACT_ADMIN can call this endpoint.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts​/bank-admin​/update​/{id}" method="PATCH" />

          <div className="sample">

            <ReqResBody Request={adminApproveBankAdminRequest} Response={adminApproveBankAdminResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "meesage":"Updated Successfully"
  }`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* all customers of bank*/}
        <div id="bank-customers" className="section">
          <h3>12. Get all customers</h3>
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
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/* get bank branches of authenticated bank admin*/}
        <div id="bank-branches" className="section">
          <h3>13. Get bank branches of authenticated bank-admin</h3>
          <p>This endpoint returns all the branches of a bank associated with the provided bank-admin. This endpoint requires authentication using a bank admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/bank_branch" method="GET" />

          <div className="sample">

            <ReqResBody Request={getBankBranchesRequest} Response={getBankBranchesResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "Bank Name": "HSBC",
      "Branch Name": "HSBC London",
      "Branch ID": 23001998367153040,
      "IFSC": "HSBC000005",
      "Branch Address": "28 Borough High St, London SE1 1YB, United Kingdom",
      "email": "badamin.hsbc@fintractglobal.com",
      "Sort Code": "40-47-82",
      "BIC": "MIDLGB22",
      "Swift Code": "MIDLGB22XXX",
      "Country Code": "GB",
      "Contact Number": "+917700900077"
  }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/*create bank branches */}

        {/*get interest rates of a particular bank */}
        <div id="interest-rates" className="section">
          <h3>14. Get interest rates of a particular bank </h3>
          <p>This endpoint returns all interest rates associated with the provided Bank ID.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as FINTRACT_ADMIN, BANK_ADMIN or CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/interest_rate/all/{bank_id}" method="GET" />

          <div className="sample">

            <ReqResBody Request={getinterestsRequest} Response={getinterestsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "id": "81ce70ea501234554519296a4b64728",
      "name": "Simple",
      "rate": "2.50",
      "bank_id": "99c72ec12343da8e76115ef5457ed",
      "bank_name": "HSBC",
      "country": "GB",
      "created_at": "2023-01-19T03:21:17.636000Z"
  }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>

        {/*add interest rate*/}     
        <div id="add-interest-rate" className="section">
          <h3>15. Add interest rate </h3>
          <p>This endpoint is used to add interest rate information for a bank. This endpoint requires authentication using a bank admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/interest_rate" method="POST" />

          <div className="sample">

            <ReqResBody Request={addInterestRequest} Response={addInterestResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "name": "Compound",
  "rate": "6.5",
  "country": "GB"
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`[
  {
      "id": "81ce70ea501234554519296a4b64728",
      "name": "Simple",
      "rate": "2.50",
      "bank_id": "99c72ec12343da8e76115ef5457ed",
      "bank_name": "HSBC",
      "country": "GB",
      "created_at": "2023-01-19T03:21:17.636000Z"
  }
]`} />

            </div>

          </div>



          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>    

        {/*create bank account*/}
        <div id="create-bank-account" className="section">
          <h3>16. Create bank account</h3>
          <p>This endpoint is used to create a new bank account with the provided bank account data. This endpoint requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/" method="POST" />

          <div className="sample">

            <ReqResBody Request={createBankAccountRequest} Response={createBankAccountResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "customer_id": "2160123483484",
  "Account_Holder_Fname": "John",
  "Account_Holder_Mname": "B",
  "Account_Holder_Lname": "Doe",
  "Account_no": "68787798231234",
  "account_type": "CURRENT",
  "category": "UK",
  "parent_bank_branch_id": "23011234153040",
  "interest_rate_id":"81ce70ea50fb4jdvkj519296a4b64728"

}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
  "msg": "Bank account added successfully"
}`} />

            </div>

          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>   

        {/*apply for card */}
        <div id="card-apply" className="section">
          <h3>17. Apply for card</h3>
          <p>This endpoint is used to apply for a new card by providing the account number and card details. Only customer users can call this endpoint.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/apply-card" method="POST" />

          <div className="sample">

            <ReqResBody Request={applyCardRequest} Response={applyCardResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "card_type": "Debit",
  "card_provider": "Master Card",
  "account":"9876543211234"
}`}/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
  "card_type": "Debit",
  "card_provider": "Master Card"
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>  


         {/*get all card applications*/}
        <div id="card-applications" className="section">
          <h3>18. Get all card applications</h3>
          <p>This endpoint returns all card applications for a particular bank. Only bank-admin users can call this endpoint.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/card-applications" method="GET" />

          <div className="sample">

            <ReqResBody Request={getCardApplicationsRequest} Response={getCardApplicationsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No Payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "id": "5505d74gf5447468vmhfm40953abf",
      "card_type": "Debit",
      "owner_name": "John Doe",
      "owner_id": "123456678899",
      "owner_email": "john@gmail.com",
      "created_at": "2023-06-08T03:42:08.799000Z",
      "is_approved": true,
      "card_provider": "Visa"
  },
  {
      "id": "2f2c8d012345678gfhj869d899b9cc",
      "card_type": "Debit",
      "owner_name": "John Doe",
      "owner_id": "12345678993460",
      "owner_email": "john@gmail.com",
      "created_at": "2023-07-02T08:21:29.034000Z",
      "is_approved": false,
      "card_provider": "Visa"
  }
]`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>  

        {/*approve card */}
        <div id="approve-card" className="section">
          <h3>19. Approve card</h3>
          <p>This endpoint approves a card request in the system. Only bank-admin users can call this endpoint.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/approve-card/{id}" method="PATCH" />

          <div className="sample">

            <ReqResBody Request={approveCardRequest} Response={approveCardResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "id":"875cc3e3c900485bbb3d5cbae03d3904"
}`} />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "message":"Updated Successfully"
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>  

        {/*get user's card applications */} 
        <div id="user-card-applications" className="section">
          <h3>20. Get user's card applications</h3>
          <p>This endpoint returns all card applications for a particular user.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/cards" method="GET" />

          <div className="sample">

            <ReqResBody Request={getCardApplicationsRequest} Response={getUserCardApplicationsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No Payload" />


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "id": "875cc3e3c900485bbb3d5cbae03d3904",
      "card_type": "Debit",
      "owner_name": "Divyashree",
      "owner_id": "206196230508474",
      "owner_email": "johndoe@gmail.com",
      "created_at": "2024-03-21T19:48:06.762000Z",
      "is_approved": false,
      "card_provider": "Master Card",
      "expiry_date": null,
      "card_number": "",
      "token": ""
  }
]`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>  


        {/*get excahnge rate*/}
        <div id="exchange-rates" className="section">
          <h3>21. Get exchange rates</h3>
          <p>This endpoint retrieves the exchange rate of a bank. Only bank-admin users can access this endpoint. This endpoint requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/exchange" method="GET" />

          <div className="sample">

            <ReqResBody Request={getExchangeRatesRequest} Response={getExchangeRatesResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "id": "4b5a11234567yhfgbf7fb4ac3fd7e",
  "bank": "99c72ecdjdhvj628r769jk5ef5457ed",
  "primary_currency": "GBP",
  "rates": {
      "INR": 30.0,
      "USD": 85.0,
      "JPY": "100"
  }
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div>   

        {/*add exchange rate */}
        <div id="add-exchange-rates" className="section">

          <h3>22. Add exchange rates</h3>
          <p>This endpoint allows the addition of exchange rates for a bank by uploading a CSV file containing currency and exchange rate columns. This endpoint requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/exchange" method="POST" />

          <div className="sample">

            <ReqResBody Request={addExchangeRatesRequest} Response={addExchangeRatesResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="multipart/form-data" sampleRequest="exchangeRate.csv"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "INR": 10.0
}`} />

            </div>
          </div>

          <div className="note">
            <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
          </div>

        </div> 

        {/*update excahnge rate*/}
        <div id="update-exchange-rates" className="section">
        <h3>23. Update exchange rates</h3>
        <p>This endpoint is used to update the exchange rate of a bank. Only bank-admin users can access this endpoint. This endpoint requires authentication using a bank-admin's access token.</p>
        <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


        <h4>Endpoint</h4>
        <Endpoint details="/bankaccounts/exchange" method="PATCH" />

        <div className="sample">

          <ReqResBody Request={patchExchangeRatesRequest} Response={patchExchangeRatesResponse} />

          <div>
            <h4>Sample Request</h4>
            <SampleRequest requestType="application/json" sampleRequest={`{
  "rate": "60",
  "currency": "CAD"
}`}/>


            <h4>Sample Response</h4>
            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "id": "4b5a11234567yhfgbf7fb4ac3fd7e",
  "bank": "99c72ecdjdhvj628r769jk5ef5457ed",
  "primary_currency": "GBP",
  "rates": {
      "INR": 30.0,
      "USD": 85.0,
      "JPY": "100",
      "CAD":"60"
  }
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*add payee*/}
        <div id="add-payee" className="section">
        <h3>24. Add payee</h3>
        <p>This endpoint allows authenticated customers to add a payee. This endpoint requires authentication using a customer's access token.</p>
        <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


        <h4>Endpoint</h4>
        <Endpoint details="/bankaccounts/payee" method="POST" />

        <div className="sample">

          <ReqResBody Request={addPayeeRequest} Response={addpayeeResponse} />

          <div>
            <h4>Sample Request</h4>
            <SampleRequest requestType="application/json" sampleRequest={`{
  "label": "Payee1",
  "account_number": "763765647876787"
}`}/>


            <h4>Sample Response</h4>
            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "id": "4118685tf635ytuyb3d2404b21fda3",
  "customer_id": "2012466348474",
  "payees": [
      {
          "label": "Payee1",
          "account_number": "763765647876787"
      }
  ]
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*get all payees */}
        <div id="payees" className="section">
        <h3>25. Get all payees</h3>
        <p>This endpoint gets a list of payees of a customer. This requires authentication using a customer's access token.</p>
        <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


        <h4>Endpoint</h4>
        <Endpoint details="/bankaccounts/payee" method="GET" />

        <div className="sample">

          <ReqResBody Request={getPayeeRequest} Response={getpayeeResponse} />

          <div>
            <h4>Sample Request</h4>
            <SampleRequest requestType="" sampleRequest="No payload"/>


            <h4>Sample Response</h4>
            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "id": "4118685tf635ytuyb3d2404b21fda3",
  "customer_id": "2012466348474",
  "payees": [
      {
          "label": "Payee1",
          "account_number": "763765647876787"
      }
  ]
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*get all account creation requests */}
        <div id="account-creation-requests" className="section">
        <h3>26. Get all account creation requests</h3>
        <p>This endpoint retrieves all account creation requests of a particular bank. This requires authentication using a bank-admin's access token.</p>
        <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


        <h4>Endpoint</h4>
        <Endpoint details="/bankaccounts/request/account" method="GET" />

        <div className="sample">

          <ReqResBody Request={getAccountRequestsRequest} Response={getAccountRequestsResponse} />

          <div>
            <h4>Sample Request</h4>
            <SampleRequest requestType="" sampleRequest="No payload"/>


            <h4>Sample Response</h4>
            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "Account_Holder_Fname": "Barry",
      "Account_Holder_Mname": "",
      "Account_Holder_Lname": "Lowe",
      "Account_no": "123457853643312165",
      "account_type": "CURRENT",
      "iban": "GB96254436545634612165",
      "id": 73,
      "category": "GB",
      "country": "",
      "active": false
  },
  {
      "Account_Holder_Fname": "James",
      "Account_Holder_Mname": "",
      "Account_Holder_Lname": "Smith",
      "Account_no": "8141346465454367394",
      "account_type": "SAVINGS",
      "iban": "",
      "id": 74,
      "category": "GB",
      "country": "",
      "active": false
  }
]`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*request for bank account */}
        <div id="request-bank-account" className="section">
          <h3>27. Request for bank account</h3>
          <p>This endpoint allows users to request account creation to a bank-admin. This requires authentication using a customer's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/request/account" method="POST" />

          <div className="sample">

            <ReqResBody Request={requestAccountRequest} Response={requestAccountResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "customer_id": "20611234508474",
  "Account_Holder_Fname": "James",
  "Account_Holder_Mname": "",
  "Account_Holder_Lname": "Harlow",
  "Account_no": "123456789098755",
  "account_type": "CURRENT",
  "category": "UK",
  "parent_bank_branch_id": "23133346543040"
}`}/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
  "msg": "Bank account added successfully"
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*activate bank account */}
        <div id="activate-bank-account" className="section">
          <h3>28. Activate bank account</h3>
          <p>This endpoint allows bank-admin to activate an account for usage by providing the account number.. This requires authentication using a bank_admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/account_activate" method="POST" />

          <div className="sample">

            <ReqResBody Request={activateAccountRequest} Response={activateAccountResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
    "Account_no": "123456789098755"
}`}/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "msg": "Account activated"
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*suspend bank account */}
        <div id="suspend-bank-account" className="section">
          <h3>29. Suspend bank account</h3>
          <p>This endpoint allows bank-admin to suspend an account for usage by providing the account number. This requires authentication using a bank_admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/account_suspend" method="POST" />

          <div className="sample">

            <ReqResBody Request={suspendAccountRequest} Response={suspendAccountResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
    "Account_no": "123456789098755"
}`}/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "msg": "Account suspended and removed from profile"
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*delete bank account */}
        <div id="delete-bank-account" className="section">
          <h3>30. Delete bank account</h3>
          <p>This endpoint allows authenticated users to delete a bank account by providing the bank account ID. This requires authentication using a customer's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/{bank_account_id}" method="DELETE" />

          <div className="sample">

            <ReqResBody Request={deleteAccountRequest} Response={deleteAccountResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "msg": "Bank account deleted successfully"
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*get credit debit statement */}
        <div id="statements" className="section">
          <h3>31. Get credit/debit statements</h3>
          <p>This endpoint retrieves the credit/debit statement of a bank account. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/statement" method="GET" />

          <div className="sample">

            <ReqResBody Request={getStatementRequest} Response={getStatementResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="text/csv" sampleResponse={`First Name,Last Name,Account Number,Account Type,Country,Credit,Debit
Barry,Lowe,249631233444552127,SAVINGS,GB,100.0,100.0
James,Smith,526431174544239725,CURRENT,GB,4161.0,4161.0
Richard,Scott,469246351234567890,CURRENT,GB,18155.0,18155.0`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*get transaction report */}
        <div id="transaction-report" className="section">
          <h3>32. Get transaction report</h3>
          <p>This endpoint retrieves a transaction report, which includes various categories of transactions. This requires authentication using a customer's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/transaction_report" method="GET" />

          <div className="sample">

            <ReqResBody Request={getReportRequest} Response={getReportResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "Food_Expense": 600,
  "Electricity_Expense": 1000,
  "P2P_Transfer": 670,
  "Self_Transfer": 0,
  "Net_Transfer (Total excluding self transfers)": 2270,
  "Net_Received (Total received excluding self transfers)": 0
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*get all transaction report of a bank */}
        <div id="bank-transaction-report" className="section">
          <h3>33. Get transaction report of a bank</h3>
          <p>Retrieves the transaction report of a bank. Only bank-admin users can access this endpoint. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/tx-report" method="GET" />

          <div className="sample">

            <ReqResBody Request={getBankReportRequest} Response={getBankReportResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "id": "8587277b-b909-46e7-bf0f-a2b1b9786bbd",
      "sender_acc": "526431174544239725",
      "receiver_acc": "469246357415852371",
      "country": "Libya",
      "prediction": "Accept",
      "amount": 10,
      "red_flag": false,
      "green_flag": true,
      "yellow_flag": false,
      "bank_name": "HSBC",
      "bank_id": "99c72ecdbff44c3da8e76115ef5457ed"
  },
  {
      "id": "6f59b664-6f2d-40c3-a2c2-703795461467",
      "sender_acc": "526431174544239725",
      "receiver_acc": "249636347181828657",
      "country": "Libya",
      "prediction": "Accept",
      "amount": 100,
      "red_flag": false,
      "green_flag": true,
      "yellow_flag": false,
      "bank_name": "HSBC",
      "bank_id": "99c72ecdbff44c3da8e76115ef5457ed"
  },
  {
      "id": "db17ea0f-af37-401a-a23d-55d197e02175",
      "sender_acc": "526431174544239725",
      "receiver_acc": "469246357415852371",
      "country": "Libya",
      "prediction": "Accept",
      "amount": 10,
      "red_flag": false,
      "green_flag": true,
      "yellow_flag": false,
      "bank_name": "HSBC",
      "bank_id": "99c72ecdbff44c3da8e76115ef5457ed"
  }
]`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*get all transactions of user */}
        <div id="user-transactions" className="section">
          <h3>34. Get all transactions of user</h3>
          <p>This endpoint retrieves all transactions of the authenticated customer. This requires authentication using a customer's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/transactions" method="GET" />

          <div className="sample">

            <ReqResBody Request={getTransactionsRequest} Response={getTransactionsResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
    "account": "952446877137664744",
    "to_account_no": "123456789098",
    "amount_send": 1000,
    "transfer_type": "Bank_Fund",
    "created_at": "2024-03-18T09:53:21.552000Z",
    "status": "Received",
    "transaction_id": "b8c91796c3154a0ba1941715e00ee6ac"
  },
  {
    "account": "123456789098",
    "to_account_no": "35525668789879",
    "amount_send": 500,
    "transfer_type": "P2P",
    "created_at": "2024-03-18T09:54:42.590000Z",
    "status": "Failed",
    "transaction_id": "b8c91796c3154a0ba1941715e00ee6ac"
  },
  {
    "account": "123456789098",
    "to_account_no": "35525668789879",
    "amount_send": 500,
    "transfer_type": "P2P",
    "created_at": "2024-03-18T10:04:04.698000Z",
    "status": "Sent",
    "transaction_id": "b8c91796c3154a0ba1941715e00ee6ac"
  }
]`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*get all transactions of user in a year */}
        <div id="user-yearwise-transactions" className="section">
          <h3>35. Get all transactions of user yearwise</h3>
          <p>This endpoint retrieves all transactions of the authenticated customer yearwise. This requires authentication using a customer's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/transactions/{year}" method="GET" />

          <div className="sample">

            <ReqResBody Request={getTransactionsYearRequest} Response={getTransactionsYearResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
    "account": "952446877137664744",
    "to_account_no": "123456789098",
    "amount_send": 1000,
    "transfer_type": "Bank_Fund",
    "created_at": "2024-03-18T09:53:21.552000Z",
    "status": "Received",
    "transaction_id": "b8c91796c3154a0ba1941715e00ee6ac"
  },
  {
    "account": "123456789098",
    "to_account_no": "35525668789879",
    "amount_send": 500,
    "transfer_type": "P2P",
    "created_at": "2024-03-18T09:54:42.590000Z",
    "status": "Failed",
    "transaction_id": "b8c91796c3154a0ba1941715e00ee6ac"
  },
  {
    "account": "123456789098",
    "to_account_no": "35525668789879",
    "amount_send": 500,
    "transfer_type": "P2P",
    "created_at": "2024-03-18T10:04:04.698000Z",
    "status": "Sent",
    "transaction_id": "b8c91796c3154a0ba1941715e00ee6ac"
  }
]`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*transfer money*/}
        <div id="transfer-money" className="section">
          <h3>36. Transfer money</h3>
          <p>This endpoint is used to send money from one customer account to another. This requires authentication using a customer's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/transfer" method="POST" />

          <div className="sample">

            <ReqResBody Request={transferMoneyRequest} Response={transferMoneyResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "account": "123456789098",
  "to_account_no": "35525668789879",
  "amount_send": 500,
  "transfer_type": "P2P"
}`}/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "data": {
      "message": "Amount Transferd Successfully"
  }
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*fund account */}
        <div id="fund_account" className="section">
          <h3>37. Fund account</h3>
          <p>This endpoint is used to fund a particular customer account. Only Bank_Admin users can call this API. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/fund_account" method="POST" />

          <div className="sample">

            <ReqResBody Request={fundAccountRequest} Response={fundAccountResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
  "account": "952446877137664744",
  "to_account_no": "123456789098",
  "amount_send": 1000,
  "type": "Add"
}`}/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "data": {
      "message": "Amount Transferd Successfully"
  }
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*fund ledger */}
        <div id="fund_ledger" className="section">
          <h3>38. Fund ledger</h3>
          <p>This endpoint facilitates the funding of a bank's ledger account. Only Fintract-admin users can call this API. This requires authentication using a fintract-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/fund/ledger" method="POST" />

          <div className="sample">

            <ReqResBody Request={fundLedgerRequest} Response={fundLedgerResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="application/json" sampleRequest={`{
    "to_account_no": "123456877137664744",
    "amount_send": 100,
    "type": "Add",
    "currency": "GBP"
}`}/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
  "data": {
      "message": "Amount Transferd Successfully"
  }
}`} />

          </div>
        </div>

        <div className="note">
          <p>To test the API,<Link target="_blank" href="/apiTool">click here</Link> to access our testing interface.</p>
        </div>

        </div>

        {/*get ledger account transactions */}
        <div id="ledger-transactions" className="section">
          <h3>39. Get ledger account transactions</h3>
          <p>This endpoint retrieves the transaction list of a bank's ledger account. This requires authentication using a bank-admin's access token.</p>
          <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You can login as BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


          <h4>Endpoint</h4>
          <Endpoint details="/bankaccounts/ledger/tx" method="GET" />

          <div className="sample">

            <ReqResBody Request={ledgerTransRequest} Response={ledgerTransResponse} />

            <div>
              <h4>Sample Request</h4>
              <SampleRequest requestType="" sampleRequest="No payload"/>


              <h4>Sample Response</h4>
              <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`[
  {
      "account": "0",
      "to_account_no": "123456787137664744",
      "amount_send": 100,
      "transfer_type": "P2P",
      "created_at": "2024-03-20T18:45:36.586000Z",
      "status": "Sent",
      "transaction_id": "b8c91796c3154a0ba1941715e00ee6ac"
  },
  {
      "account": "0",
      "to_account_no": "123456787137664744",
      "amount_send": 100,
      "transfer_type": "Add",
      "created_at": "2024-03-20T18:46:49.037000Z",
      "status": "Sent",
      "transaction_id": "b8c91796c3154a0ba1941715e00ee6ac"
  }
]`} />

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
