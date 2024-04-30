"use client"
import { useState,useEffect } from 'react';
import "./apiTester.css";
import Body from "../_components/reqBodyTester/body"
import ApiDeleteModal from "../apiTool/apiDeleteModal"


export default function ApiTester({api,serviceId,onDeleteApi,apiToDelete,apiDeleteModalOpen,setApi,setApiToDelete,setApiDeleteModalOpen}) {


  const [name,setName]=useState("");
  const [requestType, setRequestType] = useState('GET');
  const [url, setUrl] = useState('');
  const [params, setParams] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [response, setResponse] = useState({ status: "", data: "" });
  const [authType, setAuthType] = useState('None');
  const [authCredentials, setAuthCredentials] = useState({ username: '', password: '',accessToken:"" });
  const [requestBody, setRequestBody] = useState('{}');
  const [requestBodyType, setRequestBodyType] = useState('raw'); // Added state for request body type
  const [formDataParams, setFormDataParams] = useState([]);
  const [newName, setNewName] = useState('');
  const [methodError,setMethodError] = useState("")
  const [nameError, setNameError] = useState('');
  const [urlError, setUrlError] = useState('');

  const URL = process.env.URL;



  
  
  // Initialize state based on the api object received
  useEffect(() => {
    console.log(serviceId);
      setNameError("");
      setMethodError("");
      setUrlError("");
      setNewName("");
      setName(api!==null?api.name:"");
      setRequestType(api!==null?api.method: 'GET');
      setUrl(api!==null?api.url: '');
      setParams(api!==null?api.params: []);
      setHeaders(api!==null?api.headers:[]);
      setAuthType(api!==null?api.authType:'None');
      setAuthCredentials({
        username: api!==null?api.authCredentials.username:'',
        password: api!==null?api.authCredentials.password :'',
        accessToken:api!==null?api.authCredentials.accessToken :'',
      });
      setRequestBody(api!==null?api.requestBody.rawBody: '{}');
      setRequestBodyType(api!==null?api.requestBody.type: 'raw');
      setFormDataParams(api!==null?api.requestBody.formDataParams: []);
      setResponse({
        status: api!==null?(api.response?api.response.status:""):"",
        data: api!==null?(api.response?api.response.data:"") :"",
      });
    
    
  }, [api,serviceId]);

  const handleSendRequest = async () => {
    try {
      let urlWithParams = new URL(url);

      params.forEach(([key, value]) => {
        if (!urlWithParams.searchParams.has(key)) {
          urlWithParams.searchParams.append(key, value);
        }
      });



      let requestOptions = {
        method: requestType,
        headers: {
          ...Object.fromEntries(headers),
        },
        // body: new FormData()
      };



      if (requestType !== "GET" && requestType !== "DELETE") {
        if (requestBodyType === 'raw') {
          requestOptions.headers['Content-Type'] = 'application/json';
          requestOptions.body = JSON.stringify(JSON.parse(requestBody));
          console.log(requestOptions);
        } else if (requestBodyType === 'formdata') {

          requestOptions.body = new FormData();

          formDataParams.forEach(([key, value, type]) => {
            requestOptions.body.append(key, value);

            console.log(key, value);
          });

        }

      }


      if (authType === 'Basic') {
        const base64Credentials = btoa(`${authCredentials.username}:${authCredentials.password}`);
        requestOptions.headers['Authorization'] = `Basic ${base64Credentials}`;
      } else if (authType === 'OAuth2.0') {
        requestOptions.headers['Authorization'] = `Bearer ${authCredentials.accessToken}`;
      }



      const res = await fetch(urlWithParams.toString(), requestOptions);


      const data = await res.json();
      setResponse({ status: res.status, data });


    } catch (error) {
      console.error('Error sending request:', error);
      setResponse({ status: null, data: error.message });
    }
  };

  

  const handleAuthTypeChange = (e) => {
    setAuthType(e.target.value);
  };

  const handleAddHeader = () => {
    setHeaders([...headers, ['', '']]);
  };

  const handleRemoveHeader = (index) => {
    const updatedHeaders = [...headers];
    updatedHeaders.splice(index, 1);
    setHeaders(updatedHeaders);
  };

  const handleRemoveParam = (index) => {
    const updatedParams = [...params];
    updatedParams.splice(index, 1);
    setParams(updatedParams);
  };

  const handleAddParam = () => {
    setParams([...params, ['', '']]);
  };

  const handleParamKeyChange = (index, key) => {
    const updatedParams = [...params];
    updatedParams[index][0] = key;
    setParams(updatedParams);
  };

  const handleParamValueChange = (index, value) => {
    const updatedParams = [...params];
    updatedParams[index][1] = value;
    setParams(updatedParams);
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

  

  const onSave = async () => {

    if (!newName) {
      setNameError('Name cannot be empty');
      return;
    } if (!url) {
      setUrlError('URL cannot be empty');
      return;
    } if(!method) {
      setMethodError('Method cannot be empty');
      return;
    }
    
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:newName,
          service: serviceId,
          method: requestType,
          url,
          params,
          headers,
          response,
          authType,
          authCredentials,
          requestBody: {
            type: requestBodyType,
            rawBody: requestBody,
            formDataParams
          }
        })
      };

      console.log(requestOptions);
  
      const res = await fetch(URL+'/api/apis', requestOptions);
      const data = await res.json();
      console.log(data);
      setApi(data.api);
      setNewName("");
  
      // Handle UI update here if needed

    } catch (error) {
      console.error('Error saving API:', error);
      // Handle error in UI if needed
    }
  };
  
  const onSaveUpdate = async () => {
    console.log("save ans update");
    if (!name.trim()) {
      setNameError('Name cannot be empty');
      return;
    } else if (!url.trim()) {
      setUrlError('URL cannot be empty');
      return;
    }else if(!method.trim()) {
      setMethodError('Method cannot be empty');
      return;
    }
    try {
      const requestOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apiId: api._id,
          name,
          method: requestType,
          url,
          response,
          params,
          headers,
          authType,
          authCredentials,
          requestBody: {
            type: requestBodyType,
            rawBody: requestBody,
            formDataParams
          }
        })
      };
  
      const res = await fetch(URL+`/api/apis/`, requestOptions);
      const data = await res.json();
      console.log(data);
  
      // Handle UI update here if needed
    } catch (error) {
      console.error('Error updating API:', error);
      // Handle error in UI if needed
    }
  };

  const openApiDeleteModal = (api) => {
    console.log("delete api");
    setApiToDelete(api);
    setApiDeleteModalOpen(true);
  };

  const closeApiDeleteModal = () => {
    setApiDeleteModalOpen(false);
    setApiToDelete(null);
  };



  return (
    <div className='container-api'>
    {  serviceId?(
       name ? <h4>{name}</h4> : (
      <div>
        <h3>Add API</h3>
        <label className='label-api'>
            Name
        <input type="text" value={newName} onChange={(e) => {setNewName(e.target.value);setNameError('')}} />
        <span className='error-message'>{nameError}</span>
        </label>
      </div>)
    ):<h4>Test API</h4>}
      
      <form className='form-api'>
        <div className='row-api'>
          <label className='label-api overflow-api' style={{ width: "20%" }}>


            <select className='select-api' value={requestType} onChange={(e) => {setRequestType(e.target.value);setMethodError("")}}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PATCH">PATCH</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
            <span className='error-message'>{methodError}</span>
          </label>
          <br />

          <label className='label-api overflow-api' style={{ width: "80%" }}>

            <input
              className='input-api'
              type="text"
              placeholder="Enter API URL"
              value={url}
              onChange={(e) => {setUrl(e.target.value),setUrlError("")}}
            />
            <span className='error-message'>{urlError}</span>
          </label>
        </div>

        <div className='authContainer-api'>
          <label className='label-api'>
            Authentication Type
            <select className='select-api' value={authType} onChange={handleAuthTypeChange}>
              <option value='None'>None</option>
              <option value='Basic'>Basic Auth</option>
              <option value='OAuth2.0'>OAuth 2.0</option>
            </select>
          </label>

         

          {authType === 'Basic' && (
            <div className='basicAuthContainer-api' >
              <label className='label' style={{ width: "50%" }}>
                Username
                <input
                  className='input-api'
                  type='text'
                  value={authCredentials.username}
                  onChange={(e) => setAuthCredentials({ ...authCredentials, username: e.target.value })}
                />
              </label>
              <label className='label-api' style={{ width: "50%" }}>
                Password
                <input
                  className='input-api'
                  type='text'
                  value={authCredentials.password}
                  onChange={(e) => setAuthCredentials({ ...authCredentials, password: e.target.value })}
                />
              </label>
            </div>
          )}

         

          {authType === 'OAuth2.0' && (
            <div className='oauthContainer-api'>
              <label className='label-api'>
                Access Token
                <input
                  className='input-api'
                  type='text'
                  value={authCredentials.accessToken}
                  onChange={(e) => setAuthCredentials({ ...authCredentials, accessToken: e.target.value })}
                />
              </label>
            </div>
          )}
        </div>

        {(requestType !== 'GET' && requestType !== 'DELETE') && (
          <div className='bodyContainer-api'>
            Body
            <Body
              requestBody={requestBody}
              setRequestBody={setRequestBody}
              requestBodyType={requestBodyType}
              setRequestBodyType={setRequestBodyType}
              formDataParams={formDataParams}
              setFormDataParams={setFormDataParams}
            />
            <br />
          </div>)}



        <br />

        {params.length > 0 && (
          <div className='headerContainer-api'>
            <label className='label'>
              Query Parameters
              {params.map((param, index) => (
                <div key={index} className='headerRow-api'>
                  <input
                    className='input-api'
                    type="text"
                    placeholder="Key"
                    value={param[0]}
                    onChange={(e) => handleParamKeyChange(index, e.target.value)}
                  />
                  <input
                    className='input-api'
                    type="text"
                    placeholder="Value"
                    value={param[1]}
                    onChange={(e) => handleParamValueChange(index, e.target.value)}
                  />
                  <button className='removeButton-api' type="button" onClick={() => handleRemoveParam(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </label>
          </div>
        )}

        <button className='addButton-api' type="button" onClick={handleAddParam}>
          Add Query Parameter
        </button>

        <br />

        {headers.length > 0 && (
          <div className='headerContainer-api'>

            <label className='label-api'>
              Headers
              {headers.map((header, index) => (
                <div key={index} className='headerRow-api'>
                  <input
                    className='input-api'
                    type="text"
                    placeholder="Key"
                    value={header[0]}
                    onChange={(e) => handleHeaderKeyChange(index, e.target.value)}
                  />
                  <input
                    className='input-api'
                    type="text"
                    placeholder="Value"
                    value={header[1]}
                    onChange={(e) => handleHeaderValueChange(index, e.target.value)}
                  />
                  <button className='removeButton-api' type="button" onClick={() => handleRemoveHeader(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </label>
          </div>)}

        <button className='addButton-api' type="button" onClick={handleAddHeader}>
          Add Header
        </button>

        <br />
        <button className='sendButton-api' type="button" onClick={handleSendRequest}>
          Send Request
        </button>
      </form>

      <div className='responseContainer-api'>
        <strong>Response</strong>
        <div className='responseData-api'>
          <div><p>Status Code: {response.status}</p></div>
          <pre className='wordWrap-api'>{JSON.stringify(response.data, null, 2)}</pre>
        </div>
      </div>

      <div>

    
      {
        serviceId?(
      (name!=="") ? (
        <div className='end-button-api'>
          <button type="button" className='delete-button' onClick={() => openApiDeleteModal(api)}>Delete</button>
          <button type="button" className='save-button' onClick={onSaveUpdate}>Update & Save</button>
        </div>
      ) : (
        <div className='end-button-api'>
        <button type="button" className='save-button' onClick={onSave}>Save</button>
        </div>
      )):<></>}
      
      
      
      </div>

      {apiDeleteModalOpen && (
        <ApiDeleteModal
          isOpen={apiDeleteModalOpen}
          onClose={closeApiDeleteModal}
          apiToDelete={apiToDelete}
          onDelete={onDeleteApi}
        />
      )}



    </div>
  );
}
