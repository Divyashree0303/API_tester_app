// components/EditOrganizationModal.js

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import "./editProductModal.css"

export default function EditServiceModal ({ isOpen, onClose, service,onUpdate}) {
  const [serviceName, setServiceName] = useState(service.name);
  const URL = process.env.NODE_ENV ==="production"? process.env.URL:"";



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL+`/api/services/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          serviceId:service._id,
          newServiceName: serviceName,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update service');
      }

      const updatedService = await response.json();
      onUpdate(updatedService.service); 

      console.log("before");


      onClose();

      console.log("after");

    } catch (error) {
      console.error('Error updating service:', error);
      // Handle error here, such as displaying an error message to the user
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
        <h2>Edit Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Service Name:</label>
            <input 
              type="text" 
              id="serviceName" 
              value={serviceName} 
              onChange={(e) => setServiceName(e.target.value)}
              required 
            />
          </div>
          <div className="edit-prod-buttons">
          <button type="button" className='cancel-button' onClick={onClose}>Cancel</button>
          <button type="submit" className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

