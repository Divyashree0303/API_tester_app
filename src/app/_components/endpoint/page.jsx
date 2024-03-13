"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faCopy } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"


export default function Endpoint({details,method}){

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => console.log('Copied to clipboard'))
          .catch((error) => console.error('Error copying to clipboard: ', error));
      };

    return (
        <div className={"endpoint "+method}>
            <div className={"method "+method}>{method}</div>
            <p className="details">{details}</p>
            <div>
              <FontAwesomeIcon icon={faCopy} className={"copyButtonURI "+method} onClick={() => handleCopy(details)} />
            </div>
          </div>
    )
}