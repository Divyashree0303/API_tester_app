import { useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faChevronDown, faChevronUp,faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import "./productDropdown.css"
import ProdDeleteModal from "./prodDeleteModal"
import EditProductModal from "./editProductModal"
import AddProductModal from "./addProduct"
import ServiceDropdown from './servicesDropdown';

export default function ProductDropdown({ setCollapsed,products, setProducts, orgId,setSelectedFormApi,setServiceIdForm,apis,setApis }){

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [editProdModalOpen, setEditProdModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prodDeleteModalOpen, setProdDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [displayAddProductModal,setDisplayAddProductModal]=useState(false)
  const [services, setServices] = useState({});

  const URL = process.env.NEXT_PUBLIC_URL;


  const handleAddProduct= () => {
    setDisplayAddProductModal(true);

}
useEffect(() => {
  const fetchServices = async () => {
    for (const productId of selectedProducts) {
      try {
        const response = await fetch(`${URL}/api/services?productId=${productId}`);
        const servicesData = await response.json();
        setServices((prevServices) => ({
          ...prevServices,
          [productId]: servicesData,
        }));
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }
  };

  fetchServices();
}, [selectedProducts,services]);

const toggleProductDropdown = (productId) => {
  setSelectedProducts((prevSelected) =>
    prevSelected.includes(productId)
      ? prevSelected.filter((id) => id !== productId)
      : [...prevSelected, productId]
  );
};
  const isDropdownOpen = (productId) => {
    return selectedProducts.includes(productId);
  };



  const openProdEditModal = (product) => {
    setSelectedProduct(product);
    setEditProdModalOpen(true);
    console.log(editProdModalOpen, selectedProduct);
  };

  const closeEditModal = () => {
    setEditProdModalOpen(false);
    setSelectedProduct(null);
  };

  const openProdDeleteModal = (product) => {
    setProductToDelete(product);
    setProdDeleteModalOpen(true);
  };

  const closeProdDeleteModal = () => {
    setProdDeleteModalOpen(false);
    setProductToDelete(null);
  };

  const onUpdateProductName = (updatedProduct) => {
    const index = products.findIndex(product => product._id === updatedProduct._id);
   
    if (index !== -1) {
      const updatedProducts = [...products];
      updatedProducts[index] = updatedProduct;
      setProducts(updatedProducts);
    }else{
      const updatedProducts = [...products,updatedProduct];
      setProducts(updatedProducts);
    }

  };

  const onDeleteProduct = async () => {
    try {
      setProdDeleteModalOpen(false);
      // Perform deletion logic here, such as calling the backend API to delete the organization
      const response = await fetch(`${URL}/api/products?productId=${productToDelete._id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Remove the deleted organization from the list
        const updatedProducts = products.filter(org => org._id !== productToDelete._id);
        setProducts(updatedProducts);
      } else {
        console.error('Failed to delete product');
      }

    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  return (
    <div className="dropdown-menu">
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <div className="product-details" >
            <span className="dropdown-button" onClick={() => toggleProductDropdown(product._id)}>
                <FontAwesomeIcon icon={isDropdownOpen(product._id) ? faChevronDown : faChevronUp} />
              </span>
              <h5 className='prod-name'>{product.name}</h5>
              <div className="product-actions">
                <span className="action-button edit">
                  <FontAwesomeIcon icon={faEdit} onClick={() => openProdEditModal(product)} />
                </span>
                <span className="action-button delete">
                  <FontAwesomeIcon icon={faTrashAlt} onClick={() => openProdDeleteModal(product)} />
                </span>
              </div>
            </div>
            {isDropdownOpen(product._id) && (
              <ServiceDropdown setCollapsed={setCollapsed} productId={product._id} services={services[product._id] || []} setServices={setServices} setSelectedFormApi={setSelectedFormApi} setServiceIdForm={setServiceIdForm} apis={apis} setApis={setApis} />
            )}
          </li>
        ))}
        <li>
          <div style={{ display: "flex", color: "#0070ba", cursor: "pointer" }} onClick={handleAddProduct}>
            <div><FontAwesomeIcon icon={faPlus} /></div>
            <div style={{ marginLeft: "5px",fontSize:"14px" }}>Add product</div>
          </div>

          <AddProductModal isOpen={displayAddProductModal} setIsOpen={setDisplayAddProductModal} onUpdate={onUpdateProductName} orgId={orgId}/>

        </li>
      </ul>

      {selectedProduct && (
        <EditProductModal
          isOpen={editProdModalOpen}
          onClose={closeEditModal}
          product={selectedProduct}
          onUpdate={onUpdateProductName}
        />
      )}
      {productToDelete && (
        <ProdDeleteModal
          isOpen={prodDeleteModalOpen}
          onClose={closeProdDeleteModal}
          onDelete={onDeleteProduct}
        />
      )}
    </div>
  );
};


