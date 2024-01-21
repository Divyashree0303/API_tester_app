"use client"
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import "./styles.css";

export default function Home(){
  const { data: session } = useSession()

  const [requestType, setRequestType] = useState('GET');
  const [url, setUrl] = useState('');
  const [requestBody, setRequestBody] = useState('');
  const [headers, setHeaders] = useState([]);
  const [response, setResponse] = useState({ status: null, data: null });

  const handleSendRequest = async () => {
    try {
      const requestOptions = {
        method: requestType,
        headers: {
          'Content-Type': 'application/json',
          ...Object.fromEntries(headers), // Convert headers array to an object
        },
        body: (requestType !== 'GET' && requestType !== 'DELETE' )? JSON.stringify(JSON.parse(requestBody)) : undefined,
      };

      const res = await fetch(url, requestOptions);

      const data = await res.json();
      setResponse({ status: res.status, data });
    } catch (error) {
      console.error('Error sending request:', error);
      setResponse({ status: null, data: error.message });
    }
  };

  const handleAddHeader = () => {
    setHeaders([...headers, ['', '']]);
  };

  const handleRemoveHeader = (index) => {
    const updatedHeaders = [...headers];
    updatedHeaders.splice(index, 1);
    setHeaders(updatedHeaders);
  };

  

  const handleHeaderKeyChange = (index, key) => {
    const updatedHeaders = [...headers];
    updatedHeaders[index][0] = key;
    setHeaders(updatedHeaders);
  };

  const handleHeaderValueChange = (index, value) => {
    const updatedHeaders = [...headers];
    updatedHeaders[index][1] = value;
    setHeaders(updatedHeaders);
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false, callbackUrl: '/' });
  };



  if(session){

  return (
      <div className='container'>
      <form className='form'>
        <div className='row'>
          <label className='label overflow' style={{width:"20%"}}>

            
            <select className='select' value={requestType} onChange={(e) => setRequestType(e.target.value)}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PATCH">PATCH</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
          <br />
          <label className='label overflow' style={{width:"80%"}}>
            
            <input
              className='input'
              type="text"
              placeholder="Enter API URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </div>
         
          {(requestType !== 'GET' && requestType !== 'DELETE')&& (
            <div className='bodyContainer'>
              <label className='label'>
                Body:
                <textarea
                  className='textarea'
                  placeholder="Enter request body (JSON)"
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                />
              </label>
              <br />
            </div>
          )}
          
          {headers.length > 0 && (
           <div className='headerContainer'> 
          
            <label className='label'>
              Headers:
              {headers.map((header, index) => (
                <div key={index} className='headerRow'>
                  <input
                    className='input'
                    type="text"
                    placeholder="Key"
                    value={header[0]}
                    onChange={(e) => handleHeaderKeyChange(index, e.target.value)}
                  />
                  <input
                    className='input'
                    type="text"
                    placeholder="Value"
                    value={header[1]}
                    onChange={(e) => handleHeaderValueChange(index, e.target.value)}
                  />
                  <button className='removeButton' type="button" onClick={() => handleRemoveHeader(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </label>
          </div>)}

        <button className='addButton' type="button" onClick={handleAddHeader}>
          Add Header
        </button>
          
          <br />
          <button className='sendButton' type="button" onClick={handleSendRequest}>
            Send Request
          </button>
        </form>
          
        <div className='responseContainer'>
          <strong>Response:</strong>
          <div className='responseData'>
            <div>Status Code: {response.status}</div>
            <pre className='wordWrap'>{JSON.stringify(response.data, null, 2)}</pre>
          </div>
        </div>

        <button className='SignOutButton' onClick={handleSignOut}>Sign Out</button>
      </div>
  );}

  return (
    <div className="signin-container">
      <p className="not-signed-in-text">Not Signed In</p>
      <button className="signin-button" onClick={() => signIn('github')}>
        Sign in with GitHub
      </button>
    </div>
)
};

