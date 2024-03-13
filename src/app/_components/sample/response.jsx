import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faCopy } from '@fortawesome/free-solid-svg-icons'
import "./styles.css";

export default function SampleResponse({ responseCode, responseType, sampleResponse }) {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => console.log('Copied to clipboard'))
            .catch((error) => console.error('Error copying to clipboard: ', error));
    };

    return (
        <div className="codeSnippet">


            <FontAwesomeIcon icon={faCopy} className="copyButton" onClick={() => handleCopy(sampleResponse)} />
            <div className="code-title">
                <p>{responseCode}</p>
                {responseType!==''?<pre>{responseType}</pre>:<></>}
            </div>

            {sampleResponse!==''?
            <pre className="code">
                {sampleResponse}
            </pre>
            :<></>}

        </div>


    )
}