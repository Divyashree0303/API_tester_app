import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faCopy } from '@fortawesome/free-solid-svg-icons'
import "./styles.css";

export default function SampleRequest({ requestType, sampleRequest }) {

   

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => console.log('Copied to clipboard'))
            .catch((error) => console.error('Error copying to clipboard: ', error));
    };

    return (
        <div className="codeSnippet">

            <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(sampleRequest)} />

            <div className="code-title">
                <p>Payload</p>
                {requestType!==''?<pre>{requestType}</pre>:<></>}
                
            </div>

            {sampleRequest!==''?
            <pre className="code">
                {sampleRequest}
            </pre>
            :<></>}

            
        </div>
    )
}