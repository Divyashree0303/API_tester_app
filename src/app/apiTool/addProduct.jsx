import { useState } from 'react';
import "./addOrg.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'

const AddProductModal = ({ isOpen, setIsOpen,onUpdate,orgId}) => {
  const [productName, setProductName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e,onClose) => {
    e.preventDefault();
  
    if (productName === "") {
      setErrorMessage('product name cannot be empty');
      return;
    }
  
    try {

      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: productName,
          organisation:orgId
        })
      });

      const updatedProduct = await response.json();
      console.log(updatedProduct);
      onUpdate(updatedProduct);
      
  
      if (!response.ok) {
        throw new Error(`Failed to create organization:  ${response.status} - ${response.statusText}`);
      }

      console.log("after");
      
  
      // Reset form state
      setProductName('');
  
      // Close the modal
      
      onClose();
      
    } catch (error) {
      console.error('Error creating product:', error);
      // Handle error here, such as displaying an error message to the user
    }
  };
  

  const onClose=(e) => {
    setErrorMessage('');
    setProductName('');
    setIsOpen(false);
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
        <h2>Add Product</h2>
        <form >
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input 
              type="text" 
              id="productnName" 
              value={productName} 
              onChange={(e) => {
                setProductName(e.target.value);
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

export default AddProductModal;
