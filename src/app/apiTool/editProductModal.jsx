// components/EditOrganizationModal.js

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import "./editProductModal.css"

export default function EditProductModal({ isOpen, onClose, product,onUpdate}){
  const [productName, setProductName] = useState(product.name);
  const URL = process.env.NEXT_PUBLIC_URL;



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/products/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId:product._id,
          newProductName: productName,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const updatedProduct = await response.json();
      onUpdate(updatedProduct.product); 

      console.log("before");


      onClose();

      console.log("after");

    } catch (error) {
      console.error('Error updating product:', error);
      // Handle error here, such as displaying an error message to the user
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input 
              type="text" 
              id="productName" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)}
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

