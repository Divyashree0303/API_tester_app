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


    const deactivateRequest = {
        header: {
            Authorization: ["string", "Bearer access token for authorization"]
        }
    }

    const deactivateResponse = {
        code: "200"
    }

    const registerRequest = {
        body: {
            type: "application/json",
            keyValue: [["email*", "string", "Email address"],
            ["username*", "string", "Username"],
            ["name", "string", "Name of the user"],
            ["user_type", "string enum:[ CUSTOMER, BANK_ADMIN, FINTRACT_ADMIN, DEVELOPER, DEVELOPER_ADMIN ]", "User type"],
            ["password*", "string", "Password"],
            ["password2*", "string", "Password 2"],
            ["phone*", "string", "Phone number"],
            ["customer_id", "string", "Customer ID"],
            ["gender", "string enum:[MALE,FEMALE,]", "Gender"]],

        }
    }

    const registerResponse = {
        code: "201",
        body: {
            type: "application/json",
            keyValue: [["id", "integer", "ID"],
            ["email*", "string", "Email address"],
            ["username*", "string", "Username"],
            ["name", "string", "Name of the user"],
            ["user_type", "string enum:[ CUSTOMER, BANK_ADMIN, FINTRACT_ADMIN, DEVELOPER, DEVELOPER_ADMIN ]", "User type"],
            ["password*", "string", "Password"],
            ["password2*", "string", "Password 2"],
            ["phone*", "string", "Phone number"],
            ["customer_id", "string", "Customer ID"],
            ["gender", "string enum:[MALE,FEMALE,]", "Gender"]],
        }
    }

    const loginRequest = {
        body: {
            type: "application/json",
            keyValue: [["email*", "string", "Email address"],
            ["otpType*", "string enum:[Email, Phone]", "place where OTP will be sent"],
            ["userType", "string enum:[ CUSTOMER, BANK_ADMIN, FINTRACT_ADMIN, DEVELOPER, DEVELOPER_ADMIN ]", "User type"],
            ["password*", "string", "Password"]],

        }
    }

    const loginResponse = {
        code: "200",
        body: {
            type: "application/json",
            keyValue: [["data", "object", "object containing ID value", ["id", "integer"]]],

        }
    }

    const otpRequest = {
        param: {
            id: ["string", "User ID after login"]
        },
        body: {
            type: "application/json",
            keyValue: [["otp*", "string", "Email address"]]
        }
    }

    const otpResponse = {
        code: "200",
        body: {
            type: "application/json",
            keyValue: [["message", "string", "successfully Logged In"],
                ["id", "integer", "ID"],
                ["customer_id", "string", "Customer ID"],
                ["email*", "string", "Email address"],
                ["username*", "string", "Username"],
                ["verification_status", "boolean", "true if verified else false"],
                ["tokens", "object", "refresh and access tokens", ["refresh", "<refresh token>"], ["access", "<access token>"]],
                ["user_type", "string enum:[ CUSTOMER, BANK_ADMIN, FINTRACT_ADMIN, DEVELOPER, DEVELOPER_ADMIN ]", "User type"],
            ],

        }
    }

    const approvalRequest = {
        header: {
            Authorization: ["string", "Bearer access token for authorization"]
        },
        body: {
            type: "application/json",
            keyValue: [["customer_id*", "string", "Customer ID"]]
        }
    }

    const approvalResponse = {
        code: "200",
        body: {
            type: "application/json",
            keyValue: [["msg", "string", "User admin approved"]
            ]

        }
    }

    const avatarRequest = {
        param: {
            id: ["string", "User ID after login"]
        },
        header: {
            Authorization: ["string", "Bearer access token for authorization"]
        },
        body: {
            type: "multipart/form-data",
            keyValue: [["file*", "file", "File containing user profile photo"]]
        }
    }

    const avatarResponse = {
        code: "201",
        body: {
            type: "application/json",
            keyValue: [["user", "object", "Object conatining user account details"]
            ]

        }
    }

    const deleteRequest = {
        header: {
            Authorization: ["string", "Bearer access token for authorization"]
        }
    }

    const deleteResponse = {
        code: "200",
        body: {
            type: "application/json",
            keyValue: [["msg", "string", "Account Successfully deleted"]
            ]

        }
    }

    const reVerificationRequest = {
        body: {
            type: "application/json",
            keyValue: [["email*", "string", "User's email ID"]]
        }
    }

    const reVerificationResponse = {
        code: "201",
        body: {
            type: "application/json",
            keyValue: [["message", "string", "New token sent"]
            ]

        }
    }

    const userInfoRequest = {
        param: {
            id: ["string", "User ID after login"]
        },
        header: {
            Authorization: ["string", "Bearer access token for authorization"]
        }
    }

    const userInfoResponse = {
        code: "200",
        body: {
            type: "application/json",
            keyValue: [["id", "integer", "ID"],
            ["email", "string", "Email address"],
            ["avatar", "string", "Profile photo"],
            ["username", "string", "Username"],
            ["name", "string", "Name of the user"],
            ["net_balance","integer","Net balance of the account"],
            ["verification_status","boolean","true is user is verified else false"],
            ["phone", "string", "Phone number"],
            ["customer-id", "string", "Customer ID"],
            ["country","string","Country"],
            ["citizenship","string","Citizenship"],
            ["national_id","string","National ID"],
            ["address","string","User address"],
            ["bank_name","string","Bank Name"],
            ["gender", "string enum:[MALE,FEMALE,]", "Gender"]],
        }
    }


    const updateInfoRequest = {
        param: {
            id: ["string", "User ID after login"]
        },
        header: {
            Authorization: ["string", "Bearer access token for authorization"]
        },
        body: {
            type: "application/json",
            keyValue: [
            ["email", "string", "Email address"],
            ["username", "string", "Username"],
            ["name", "string", "Name of the user"],
            ["phone", "string", "Phone number"],
            ["country","string","Country"],
            ["citizenship","string","Citizenship"],
            ["national_id","string","National ID"],
            ["address","string","User address"]],
        }
    }

    const updateInfoResponse = {
        code: "200",
        body: {
            type: "application/json",
            keyValue: [["message", "string", "Updated successfully"]],
        }
    }


    const updateUserRequest = {
        header: {
            Authorization: ["string", "Bearer access token for authorization"]
        },
        body: {
            type: "application/json",
            keyValue: [
            ["username*", "string", "Username"],
            ["name*", "string", "Name of the user"]]
        }
    }

    const updateUserResponse = {
        code: "200",
        body: {
            type: "application/json",
            keyValue: [["message", "string", "Account Successfully Updated"]],
        }
    }

    const uploadFileRequest = {
        header: {
            Authorization: ["string", "Bearer access token for authorization"]
        },
        body: {
            type: "multipart/form-data",
            keyValue: [
            ["file*", "file", "file to be uploaded"]]
        }
    }

    const uploadFileResponse = {
        code: "201",
        body: {
            type: "application/json",
            keyValue: [["url", "string", "URL of the uploaded file"]],
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

                <h2>Auth</h2>

                <p>The Auth API provides a set of endpoints for user authentication, account management, and profile updates. These endpoints allow users to register, log in, manage their accounts, and perform various authentication-related tasks.</p>

                {/* Base URL section */}
                <h3>Base URL</h3>
                <div className="baseUrl">
                    <FontAwesomeIcon icon={faCopy} className="copyButtonUrl" onClick={() => handleCopy("https://api.globalbanking.fintractglobal.com/")} />
                    <div className="url">
                        <p>https://api.globalbanking.fintractglobal.com/</p>
                    </div>

                </div>

                {/* deactivate account API section */}
                <div id="deactivate-account" className="section">
                    <h3>1. Deactivate account</h3>
                    <p>This endpoint deactivates a user account, preventing the user from accessing the system or performing any actions that require authentication.</p>
                    <p>Takes bearer token to get the authenticated user and deactivates it.</p>
                    <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as customer to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>


                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/account-deactivate/" method="PUT" />

                    <div className="sample">

                        <ReqResBody Request={deactivateRequest} Response={deactivateResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="" sampleRequest="No payload" />

                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "msg": "Account deactivate request submitted!"
}`} />
                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/* register API section */}
                <div id="register" className="section">
                    <h3>2. Register</h3>
                    <p>This endpoint registers a new user account in the system. This typically involves providing basic information such as username, email, and password.</p>
                    <p>Takes user data specified in request body and registers user.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/register/" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={registerRequest} Response={registerResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="application/json" sampleRequest={`{
    "username": "JohnDoe0303",
    "email": "johndoe@gmail.com",
    "name": "John",
    "user_type": "DEVELOPER",
    "phone": "1234567890",
    "gender": "MALE",
    "password": "johnDoe@#",
    "password2": "johnDoe@#"
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "id": 78,
    "username": "JohnDoe0303",
    "email": "johndoe@gmail.com",
    "name": "John",
    "user_type": "DEVELOPER",
    "phone": "1234567890",
    "customer_id": "7001808879932062",
    "gender": "MALE"
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*login API */}
                <div id="login" className="section">
                    <h3>3. Login</h3>
                    <p>This endpoint allows a user to log in to the system using their credentials (e.g., username and password).</p>
                    <p>Takes email & password and sends otp to email/phone number.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/login/" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={loginRequest} Response={loginResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="application/json" sampleRequest={`{
    "email": "johndoe@gmail.com",
    "otpType":"Email",
    "userType":"Developer",
    "password": "johnDoe@#"
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "data": {
        "id": 93
    }
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*Verify otp api */}
                <div id="verify-otp" className="section">
                    <h3>4. Verify OTP</h3>
                    <p>This endpoint facilitates user authentication by verifying the OTP provided after login for a specific user identified by the id parameter.</p>
                    <p>Upon receiving the OTP the admin approves the OTP to determine its authenticity and validity. </p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/login/{id}/" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={otpRequest} Response={otpResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="application/json" sampleRequest={`{
    "otp": "123456"
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "message": "Successfully Logged In",
    "id": 93,
    "customer_id": "7001808879932062",
    "email": "johndoe@gmail.com",
    "username": "JohnDoe0303",
    "verification_status": true,
    "tokens": {
        "refresh": "kjdbgkjsbgkgyftfghfkyfkukguyg",
        "access": "jhkgjgkjvhgfuftfjhguytguygkjgh"
    },
    "user_type": "DEVELOPER"
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*ADMIN APPRoval API */}
                <div id="admin-approval" className="section">
                    <h3>5. Admin Approval</h3>
                    <p>This endpoint facilitates the approval process for granting access to customer accounts by administrators.</p>
                    <p>This endpoint can only be accessed by users with administrative privileges (e.g., FINTRACT_ADMIN). Users without sufficient permissions will receive this error response.</p>
                    <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as FINTRACT_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/admin_approval/" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={approvalRequest} Response={approvalResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="application/json" sampleRequest={`{
    "customer_id": "34712234559419273"
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "msg": "User admin approved"
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*upload user avatar api */}
                <div id="upload-user-avatar" className="section">
                    <h3>6. Upload User Avatar</h3>
                    <p>Allows a user to upload or update their avatar image. The id parameter specifies the user whose avatar is being updated.</p>
                    <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to specifically login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="​/auth​/avatar​/{id}​/" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={avatarRequest} Response={avatarResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="multipart/form-data" sampleRequest={`{
    file: "profile.png"
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "user": {
        "id": 93,
        "password": "hdbkjhhgfhtgmhkjgukyfm",
        "last_login": null,
        "is_superuser": false,
        "user_type": "CUSTOMER",
        "gender": "FEMALE",
        "username": "Johndoe34",
        "email": "",
        "phone": "",
        "avatar": "https://openbankingapp.s3.amazonaws.com/b906a186.jpg",
        "customer_id": "865565869898",
        "name": "John Doe",
        "country": "USA",
        "citizenship": "",
        "national_id": "",
        "address": "",
        "is_staff": false,
        "is_active": true,
        "is_deactivate": false,
        "is_verified": true,
        "admin_approved": true,
        "bank": "",
        "otp": "0",
        "groups": [],
        "user_permissions": []
    }
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*delete user api */}
                <div id="delete-user" className="section">
                    <h3>7. Delete User</h3>
                    <p>Deletes a user account from the system permanently. This action is irreversible and removes all associated user data.</p>
                    <p>Takes bearer access token and deletes the account.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/delete/" method="DELETE" />

                    <div className="sample">

                        <ReqResBody Request={deleteRequest} Response={deleteResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="" sampleRequest="No payload" />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "msg": "Account Successfully deleted"
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*resend verification mail */}
                <div id="resend-verification-mail" className="section">
                    <h3>8. Resend Verification Mail</h3>
                    <p>Initiates the process to re-verify a user's email address. This is typically used when an email address needs to be re-confirmed for security reasons.</p>
                    <p>Takes email and resends verification mail with token.</p>
                    <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to login as CUSTOMER or BANK_ADMIN to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/re-verify-email/" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={reVerificationRequest} Response={reVerificationResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="application/json" sampleRequest={`{
    "email": "johndoe@gmail.com"
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "message": "New token sent"
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*get user info api */}
                <div id="user-info" className="section">
                    <h3>9. Get User Info</h3>
                    <p>Retrieves detailed information about a specific user account identified by the id parameter.</p>
                    <p>Takes user id and returns user email, phone & other details.</p>
                    <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/info/{id}/" method="GET" />

                    <div className="sample">

                        <ReqResBody Request={userInfoRequest} Response={userInfoResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="" sampleRequest="No payload" />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "id": 93,
    "email": "email": "johndoe@gmail.com",
    "avatar": "",
    "gender": "MALE",
    "username": "JohnDoe0303",
    "name": "John",
    "net balance": 0,
    "customer-id": "2160658639884",
    "verification_status": true,
    "phone": "1234567890",
    "country": "",
    "citizenship": "",
    "national_id": "",
    "address": "",
    "bank_name": ""
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*update user info api */}
                <div id="update-info" className="section">
                    <h3>10. Update User Info</h3>
                    <p>Updates user information for the user identified by the id parameter. This allows for updating specific fields without requiring all user information to be provided.</p>
                    <p>Takes user data and updates citizenship, national_id, name and others.</p>
                    <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/update/usr/{id}/" method="PATCH" />

                    <div className="sample">

                        <ReqResBody Request={updateInfoRequest} Response={updateInfoResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="application/json" sampleRequest={`{
    "username": "JohnDoe123",
    "email": "",
    "name": "",
    "phone": "",
    "country": "USA",
    "citizenship": "",
    "national_id": "",
    "address": ""
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "message": "Updated Successfully"
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*update user api */}
                <div id="update-user" className="section">
                    <h3>11. Update Username & name</h3>
                    <p>Updates user name and name only for the user identified by the access token</p>
                    <p>Takes only username & name and updates them.</p>
                    <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/user-update/" method="PUT" />

                    <div className="sample">

                        <ReqResBody Request={updateUserRequest} Response={updateUserResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="application/json" sampleRequest={`{
    "username": "Johndoe109",
    "name": "John B Doe"
}`} />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="200" responseType="application/json" sampleResponse={`{
    "msg": "Account Successfully Updated"
}`} />

                        </div>

                    </div>



                    <div className="note">
                        <p>To test the API,<Link target="_blank" href="/apiTester">click here</Link> to access our testing interface.</p>
                    </div>

                </div>

                {/*upload file */}
                <div id="upload-file" className="section">
                    <h3>12. Upload file</h3>
                    <p>This endpoint takes file and uploads it & returns file url</p>
                    <p> Refer to the <Link href='/authentication'>Authentication Guide</Link> for details on obtaining and using API keys. You need to login as CUSTOMER to access this API. When you make calls to the tokenization API, include the API key as bearer access token in the authorization header.</p>

                    <h4>Endpoint</h4>
                    <Endpoint details="/auth/upload/" method="POST" />

                    <div className="sample">

                        <ReqResBody Request={uploadFileRequest} Response={uploadFileResponse} />

                        <div>
                            <h4>Sample Request</h4>
                            <SampleRequest requestType="multipart/form-data" sampleRequest="passport.pdf" />


                            <h4>Sample Response</h4>
                            <SampleResponse responseCode="201" responseType="application/json" sampleResponse={`{
    "url": "https://openbankingapp.s3.amazonaws.com/c3510aee.csv"
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
