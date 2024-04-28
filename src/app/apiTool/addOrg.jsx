import { useState } from 'react';
import "./addOrg.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'

export default function AddOrganizationModal({ isOpen, setIsOpen,onUpdate }) {
  const [organizationName, setOrganizationName] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e,onClose) => {
    e.preventDefault();
  
    if (organizationName === "") {
      setErrorMessage('Organization name cannot be empty');
      return;
    }
  
    try {

      console.log("before");
      console.log(organizationName,organizationType);

      
      
      const response = await fetch('/api/organisations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: organizationName,
          orgType: organizationType,
          description: description
        })
      });

      const updatedOrganization = await response.json();
      console.log(updatedOrganization);
  
      if (!response.ok) {
        throw new Error(`Failed to create organization:  ${response.status} - ${response.statusText}`);
      }

     
      onUpdate(updatedOrganization);
      console.log("after");
      
  
      // Reset form state
      setOrganizationName('');
      setOrganizationType('');
      setDescription('');
  
      // Close the modal
      
      onClose();
      
    } catch (error) {
      console.error('Error creating organization:', error);
      // Handle error here, such as displaying an error message to the user
    }
  };
  

  const onClose=(e) => {
    setErrorMessage('');
    setOrganizationName('');
    setOrganizationType("");
    setDescription('');
    setIsOpen(false);
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
        <h2>Add Organization</h2>
        <form >
          <div className="form-group">
            <label htmlFor="organizationName">Organization Name:</label>
            <input 
              type="text" 
              id="organizationName" 
              value={organizationName} 
              onChange={(e) => {
                setOrganizationName(e.target.value);
                setErrorMessage('');
              } } 
              required 
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="organizationType">Organization Type:</label>
            <select 
              id="organizationType" 
              value={organizationType} 
              onChange={(e) => setOrganizationType(e.target.value)} 
              required 
            >
              <option value="">Select Type</option>
              <option value="Corporation">Corporation</option>
              <option value="Non-profit">Non-profit</option>
              <option value="Government">Government</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
          <div className="button-div">
          <button type="button" className='cancel-button org-button' onClick={onClose}>Cancel</button>
          <button type="submit" className='save-button org-button' onClick={e => handleSubmit(e,onClose)}>Save</button>
          
          </div>
        </form>
      </div>
    </div>
  );
};


