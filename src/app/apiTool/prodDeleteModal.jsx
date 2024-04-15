// components/DeleteConfirmationModal.js

import { useState } from 'react';
import "./deleteConfModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProdDeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}><FontAwesomeIcon icon={faTimes} /></span>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this product?</p>
        <div className="button-div">
          <button className='cancel-button' onClick={onClose}>Cancel</button>
          <button className='delete-button' onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProdDeleteModal;
