"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import ReqResBody from "../../../../_components/req-res/page"
import Endpoint from "../../../../_components/endpoint/page"
import SampleRequest from "../../../../_components/sample/request"
import SampleResponse from "../../../../_components/sample/response"


export default function ApiDocsPage() {

    const registrationRequest = {
        body:{
          type:"application/json",
          keyValue:[["contactNo*", "string","Contact number of user"],
          ["firstName*", "string","First name"],
          ["middleName", "string","Middle name"],
          ["lastName*", "string","Last name"],
          ["dob*", "string","Date of birth yyyy-mm-dd"],
          ["gender", "string","Gender"],
          ["cityName", "string","Name of the city"],
          ["countryName", "string","Name of the country"],
          ["pinCode", "string","Address pincode"]]
        }
      }
    
      const registrationResponse = {
        code: "201",
        body: {
          type: "application/json",
          keyValue: [['user_registered',"string","True if registered"]]
        }
      }

      const verificationRequest = {
        params:{
            id:["string","User ID"]
        },
        body:{
          type:"multipart/form-data",
          keyValue:[["idImageFront*", ".jpeg/png file","Image of front of user ID"]]
        }
      }
    
      const verificationResponse = {
        code: "201",
        body: {
          type: "application/json",
          keyValue: [['msg',"string","Success!"],
            ['data',"object","Object conatining verification data",["contactNo","string"]
            ,["kycVerified","boolean"],["nameVerified","boolean"],["placeVerified","boolean"],["dobVerified","boolean"]]]
        }
      }

      const faceverificationRequest = {
        params:{
            id:["string","User ID"]
        },
        body:{
          type:"multipart/form-data",
          keyValue:[["idImageFront*", ".jpeg/png file","Image of front of user ID"],["userPhoto*", ".jpeg/png file","Image of user's photo"]]
        }
      }
    
      const faceverificationResponse = {
        code: "201",
        body: {
          type: "application/json",
          keyValue: [['msg',"string","Success!"],
            ['data',"object","Object conatining verification data",["contactNo","string"],["faceVerified","boolean"]]]
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

                <h2>KYC API</h2>

                <p>KYC APIs simplify user registration and identity verification processes for businesses, ensuring compliance and enhancing security. By automating verification and registration, they streamline customer onboarding, mitigate fraud risks, and facilitate regulatory adherence.</p>

                {/* Authentication section */}
                {/* <h3>Authentication</h3>
                <p>Before using the Tokenization API, ensure you have the necessary credentials. Refer to the <Link href="/developer/globalBanking/docs/authGuide">Authentication Guide</Link> for details on obtaining and using API keys.</p> */}

                {/* Base URL section */}
                <h3>Base URL</h3>
                <div className="baseUrl">
                    <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.kyc.fintractglobal.com/")} />
                    <div className="url">
                        <p>https://api.kyc.fintractglobal.com/</p>
                    </div>

                </div>

                {/* user registartion*/}
                <div id="registerUser" className="section">
                    <h3>1. User Registration</h3>
                    <p>This endpoint registers a new user.</p>

                    <h4>Endpoint</h4>

                    <Endpoint details="/userRegistration/" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={registrationRequest} Response={registrationResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="application/json" sampleRequest={`{
    "contactNo": "1234567890",
    "firstName": "John",
    "middleName": "D",
    "lastName": "Doe",
    "dob": "1990-01-01",
    "gender": "Male",
    "cityName": "New York",
    "countryName": "USA",
    "pinCode": "100010"
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "user_registered": true
}`} />

                        </div>
                    </div>

                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>
                </div>

                <div id="userVerification" className="section">
                    <h3>2. User verification</h3>
                    <p>This endpoint verifies a user's identity using the KYC process with ID image.</p>

                    <h4>Endpoint</h4>

                    <Endpoint details="/userVerification/{id}" method="POST" />


                    <div className="sample">

                        <ReqResBody Request={verificationRequest} Response={verificationResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="multipart/form-data" sampleRequest="idImageFront=@/path/to/idImageFront.jpg" />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "kycVerified": true,
        "nameVerified": true,
        "placeVerified": true,
        "dobVerified": true
    }
}`} />

                        </div>
                    </div>

                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                <div id="userVerificationWithPass" className="section">
                    <h3>3. User verification with passport</h3>
                    <p>This endpoint verifies a user's identity using the KYC process with a passport image.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/userVerificationPass/{id}" method="POST" />


                    <div className="sample">

                        <ReqResBody Request={verificationRequest} Response={verificationResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="multipart/form-data" sampleRequest="idImageFront=@/path/to/idImageFront.jpg" />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "kycVerified": true,
        "nameVerified": true,
        "placeVerified": true,
        "dobVerified": true
    }
}`} />

                        </div>
                    </div>


                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                <div id="faceVerification" className="section">
                    <h3>4. Face verification</h3>
                    <p>This endpoint verifies a user's face using face recognition.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/faceVerification/{id}" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={faceverificationRequest} Response={faceverificationResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="multipart/form-data" sampleRequest={`idImageFront=@/path/to/idImageFront.jpg,
userPhoto=@/path/to/userPhoto.jpg`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "faceVerified": true
    }
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
