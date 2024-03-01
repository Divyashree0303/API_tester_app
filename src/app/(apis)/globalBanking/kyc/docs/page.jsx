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


            <div className="kyc-container">

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

                {/* Tokenize API section */}
                <div id="registerUser" className="section">
                    <h3>1. User Registration</h3>
                    <p>This endpoint registers a new user.</p>

                    <h4>Endpoint</h4>
                    <div className="endpoint">
                        <div className="method post">POST</div>
                        <p className="details"> /userRegistration/</p>
                        <div>
                            <FontAwesomeIcon icon={faCopy} className="copyButtonURI" onClick={() => handleCopy("/userRegistration/")} />
                        </div>


                    </div>

                    <h4>Request</h4>

                    <div className="codeSnippet">


                        <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`curl -X POST -H "Content-Type: application/json" -d '{
    "contactNo": "1234567890",
    "firstName": "John",
    "middleName": "D",
    "lastName": "Doe",
    "dob": "1990-01-01",
    "gender": "Male",
    "cityName": "New York",
    "countryName": "USA",
    "pinCode": "100010"
}' https://api.kyc.fintractglobal.com/userRegistration/
`)} />

                        <pre className="code">
                            {`curl -X POST -H "Content-Type: application/json" -d '{
    "contactNo": "1234567890",
    "firstName": "John",
    "middleName": "D",
    "lastName": "Doe",
    "dob": "1990-01-01",
    "gender": "Male",
    "cityName": "New York",
    "countryName": "USA",
    "pinCode": "100010"
}' https://api.kyc.fintractglobal.com/userRegistration/
`}
                        </pre>
                    </div>


                    <h4>Response</h4>
                    <div className="codeSnippet">

                        <p>Success:</p>

                        <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`{
     "user_registered": true
}` )} />

                        <pre className="code">
                            {`{
    "user_registered": true
}`}
                        </pre>
                    </div>

                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>
                </div>

                <div id="userVerification" className="section">
                    <h3>2. User verification</h3>
                    <p>This endpoint verifies a user's identity using the KYC process with ID image.</p>

                    <h4>Endpoint</h4>
                    <div className="endpoint">
                        <div className="method post">POST</div>
                        <p className="details">  /userVerification/&#123;id&#125;</p>
                        <FontAwesomeIcon icon={faCopy} className="copyButtonURI" onClick={() => handleCopy(" /userVerification/{id}")} />
                    </div>

                    <h4>Request</h4>

                    <div className="codeSnippet">

                        <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`curl -X POST 
                        -H "Content-Type: multipart/form-data" 
                        -F "idImageFront=@/path/to/idImageFront.jpg" 
                        https://api.kyc.fintractglobal.com/userVerification/1234567890
`)} />

                        <pre className="code">
                            {`curl -X POST 
-H "Content-Type: multipart/form-data" 
-F "idImageFront=@/path/to/idImageFront.jpg" 
https://api.kyc.fintractglobal.com/userVerification/1234567890`}
                        </pre>
                    </div>

                    <h4>Parameters</h4>
                    <div>
                        <ul>
                            <li>idImageFront: Front image of the user's ID card (required)</li>
                        </ul>
                    </div>

                    <h4>Response</h4>
                    <div className="codeSnippet">

                        <p>Success:</p>

                        <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "kycVerified": true,
        "nameVerified": true,
        "placeVerified": true,
        "dobVerified": true
    }
}
`)} />

                        <pre className="code">
                            {`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "kycVerified": true,
        "nameVerified": true,
        "placeVerified": true,
        "dobVerified": true
    }
}
`}
                        </pre>
                    </div>

                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                <div id="userVerificationWithPass" className="section">
                    <h3>3. User verification with passport</h3>
                    <p>This endpoint verifies a user's identity using the KYC process with a passport image.</p>

                    <h4>Endpoint</h4>
                    <div className="endpoint">
                        <div className="method post">POST</div>
                        <p className="details">  /userVerificationPass/&#123;id&#125</p>
                        <FontAwesomeIcon icon={faCopy} className="copyButtonURI" onClick={() => handleCopy(" /userVerificationPass/{id}")} />
                    </div>

                    <h4>Request</h4>

                    <div className="codeSnippet">

                        <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`curl -X POST 
-H "Content-Type: multipart/form-data"
-F "idImageFront=@/path/to/passport.jpg"
https://api.kyc.fintractglobal.com/userVerificationPass/1234567890
`)} />

                        <pre className="code">
                            {`curl -X POST 
-H "Content-Type: multipart/form-data"
-F "idImageFront=@/path/to/passport.jpg"
https://api.kyc.fintractglobal.com/userVerificationPass/1234567890`}
                        </pre>
                    </div>

                    <h4>Parameters</h4>
                    <div>
                        <ul>
                            <li>idImageFront: Front image of the user's passport (required)</li>
                        </ul>
                    </div>

                    <h4>Response</h4>
                    <div className="codeSnippet">

                        <p>Success:</p>

                        <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "kycVerified": true,
        "nameVerified": true,
        "placeVerified": true,
        "dobVerified": true
    }
}
`)} />

                        <pre className="code">
                            {`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "kycVerified": true,
        "nameVerified": true,
        "placeVerified": true,
        "dobVerified": true
    }
}
`}
                        </pre>
                    </div>

                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                <div id="faceVerification" className="section">
                    <h3>4. Face verification</h3>
                    <p>This endpoint verifies a user's face using face recognition.</p>

                    <h4>Endpoint</h4>
                    <div className="endpoint">
                        <div className="method post">POST</div>
                        <p className="details">  /faceVerification/&#123;id&#125;</p>
                        <FontAwesomeIcon icon={faCopy} className="copyButtonURI" onClick={() => handleCopy(" /faceVerification/{id}")} />
                    </div>

                    <h4>Request</h4>

                    <div className="codeSnippet">

                        <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`curl -X POST 
-H "Content-Type: multipart/form-data" 
-F "idImageFront=@/path/to/idImageFront.jpg" 
-F "userPhoto=@/path/to/userPhoto.jpg"
https://api.kyc.fintractglobal.com/faceVerification/1234567890
`)} />

                        <pre className="code">
                            {`curl -X POST 
-H "Content-Type: multipart/form-data" 
-F "idImageFront=@/path/to/idImageFront.jpg" 
-F "userPhoto=@/path/to/userPhoto.jpg"
https://api.kyc.fintractglobal.com/faceVerification/1234567890`}
                        </pre>
                    </div>

                    <h4>Parameters</h4>
                    <div>
                        <ul>
                            <li>idImageFront: Front image of the user's ID card (required)</li>
                            <li>userPhoto: User's selfie photo (required)</li>
                        </ul>
                    </div>

                    <h4>Response</h4>
                    <div className="codeSnippet">

                        <p>Success:</p>

                        <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "faceVerified": true
    }
}
`)} />

                        <pre className="code">
                            {`{
    "msg": "Success!",
    "data": {
        "contactNo": "1234567890",
        "faceVerified": true
    }
}
`}
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
