// components/EditOrganizationModal.js

import { useState } from 'react';
import "./editOrgModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'


export default function EditOrganizationModal({ isOpen, onClose, organization,onUpdate }){
  const [organizationName, setOrganizationName] = useState(organization.name);
  const [description, setDescription] = useState(organization.description);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/organisations/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orgId:organization._id,
          newOrgName: organizationName,
          newOrgDesc: description
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update organization');
      }

      const updatedOrganization = await response.json();
      onUpdate(updatedOrganization);

      console.log("before");


      onClose();

      console.log("after");

    } catch (error) {
      console.error('Error updating organization:', error);
      // Handle error here, such as displaying an error message to the user
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
        <h2>Edit Organization</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="organizationName">Organization Name:</label>
            <input 
              type="text" 
              id="organizationName" 
              value={organizationName} 
              onChange={(e) => setOrganizationName(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='org-edit-buttons'>
          <button type="button" className='cancel-button edit-button' onClick={onClose}>Cancel</button>
          <button type="submit" className="save-button  edit-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

