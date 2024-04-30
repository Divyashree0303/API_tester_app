import { useState } from 'react';
import "./addOrg.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'

export default function AddServiceModal({ isOpen, setIsOpen,onUpdate,productId}){
  const [serviceName, setServiceName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const URL = process.env.URL;

  const handleSubmit = async (e,onClose) => {
    e.preventDefault();
  
    if (serviceName === "") {
      setErrorMessage('service name cannot be empty');
      return;
    }
  
    try {

      const response = await fetch(URL+'/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: serviceName,
          product:productId
        })
      });

      const updatedService = await response.json();
      console.log(updatedService);
      onUpdate(updatedService);
      
  
      if (!response.ok) {
        throw new Error(`Failed to create organization:  ${response.status} - ${response.statusText}`);
      }

      console.log("after");
      
  
      // Reset form state
      setServiceName('');
  
      // Close the modal
      
      onClose();
      
    } catch (error) {
      console.error('Error creating service:', error);
      // Handle error here, such as displaying an error message to the user
    }
  };
  

  const onClose=(e) => {
    setErrorMessage('');
    setServiceName('');
    setIsOpen(false);
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
        <h2>Add service</h2>
        <form >
          <div className="form-group">
            <label htmlFor="productName">Service Name:</label>
            <input 
              type="text" 
              id="serviceName" 
              value={serviceName} 
              onChange={(e) => {
                setServiceName(e.target.value);
                setErrorMessage('');
              } } 
              required 
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          
        
          <div className="button-div">
          <button type="button" className='cancel-button' onClick={onClose}>Cancel</button>
          <button type="submit" className='save-button' onClick={e => handleSubmit(e,onClose)}>Save</button>
          
          </div>
        </form>
      </div>
    </div>
  );
};


