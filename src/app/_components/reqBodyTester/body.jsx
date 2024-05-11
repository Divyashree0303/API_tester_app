"use client"

import { useState } from "react"
import "./bodyStyles.css"

export default function Body({requestBody,setRequestBody,requestBodyType,setRequestBodyType,formDataParams,setFormDataParams}) {

    // const [requestBody, setRequestBody] = useState('');
    // const [requestBodyType, setRequestBodyType] = useState('Raw'); // Added state for request body type
    // const [formDataParams, setFormDataParams] = useState([]);


    const handleRequestBodyTypeChange = (type) => {
        setRequestBodyType(type);
    };

    const handleAddFormDataParam = () => {
        setFormDataParams([...formDataParams, ['', '', 'Text']]);
    };

    const handleRemoveFormDataParam = (index) => {
        const updatedFormDataParams = [...formDataParams];
        updatedFormDataParams.splice(index, 1);
        setFormDataParams(updatedFormDataParams);
    };

    const handleFormDataKeyChange = (index, key) => {
        const updatedFormDataParams = [...formDataParams];
        updatedFormDataParams[index][0] = key;
        setFormDataParams(updatedFormDataParams);
    };

    const handleFormDataValueChange = (index, value) => {
      console.log(value);
        const updatedFormDataParams = [...formDataParams];
        updatedFormDataParams[index][1] = value;
        setFormDataParams(updatedFormDataParams);
    };

    const handleFormDataValueTypeChange = (index, type) => {
        const updatedFormDataParams = [...formDataParams];
        updatedFormDataParams[index][2] = type;
        setFormDataParams(updatedFormDataParams);
    };

    return (
        <>
            <div className='tabs'>
                <div className={`tab ${requestBodyType === 'raw' ? 'active' : ''}`} onClick={() => handleRequestBodyTypeChange('raw')}>Raw</div>
                <div className={`tab ${requestBodyType === 'formdata' ? 'active' : ''}`} onClick={() => handleRequestBodyTypeChange('formdata')}>Form Data</div>
                </div>

                {requestBodyType === 'formdata' && (
            <div className='formDataContainer'>
              {formDataParams.map((param, index) => (
                <div key={index} className='formDataRow'>
                  <input
                    className='input'
                    type="text"
                    placeholder="Key"
                    value={param[0]}
                    onChange={(e) => handleFormDataKeyChange(index, e.target.value)}
                  />
                  {param[2] === 'File' ? (
                      <input
                        className='input'
                        type='file'
                        placeholder="Value"
                        onChange={(e) => handleFormDataValueChange(index, e.target.files[0])}
                      />
                      ): (
                      <input
                        className='input'
                        type={'text'}
                        placeholder="Value"
                        value={param[1]}
                        onChange={(e) => handleFormDataValueChange(index, e.target.value)}
                      />
                  )}
                  <select
                    className='typeSelect'
                    value={param[2]}
                    onChange={(e) => handleFormDataValueTypeChange(index, e.target.value)}
                  >
                    <option value="Text">Text</option>
                    <option value="File">File</option>
                  </select>
                  <button className='removeButton' type="button" onClick={() => handleRemoveFormDataParam(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button className='addButton' type="button" onClick={handleAddFormDataParam}>
                Add Form Data
              </button>
            </div>
          )}

          {/* Conditionally render raw data textarea */}
          {requestBodyType === 'raw' && (
            <div className='rawDataContainer'>
              <textarea
                className='textarea'
                placeholder=""
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                style={{height:"150px",width:"100%"}}
              />
            </div>
          )}

            
        </>
    )
}

