// components/OrganisationList.js

import { useState, useEffect } from 'react';
import Link from 'next/link';
import "./organisationList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faChevronDown, faChevronUp,faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import EditOrganizationModal from './editOrgModal';
import DeleteConfirmationModal from './deleteConfModal';
import AddOrganizationModal from './addOrg';
import ProductDropdown from "./productDropdown"

export default function OrganisationList ({ setSelectedFormApi,setServiceIdForm,apis,setApis }) {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [organizationToDelete, setOrganizationToDelete] = useState(null);
  const [displayAddOrgModal,setDisplayAddOrgModal] = useState(false)
  const [products, setProducts] = useState([]);

  const handleAddOrg = () => {
      setDisplayAddOrgModal(true);

  }

  useEffect(() => {
    fetchOrganizations();
  }, [organizations,products]);

  const fetchOrganizations = async () => {
    try {
      const response = await fetch('/api/organisations');
      const data = await response.json();
      setOrganizations(data);
    } catch (error) {
      console.error('Error fetching organisations:', error);
    }
  };

  const fetchProducts = async (orgId) => {
    try {
      console.log(orgId);
      const response = await fetch(`/api/products?orgId=${orgId}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
  };
}

  const toggleDropdown = (orgId) => {
    setProducts([])
    setSelectedOrg(selectedOrg === orgId ? null : orgId);

    if(selectedOrg!==orgId){
      fetchProducts(orgId);
    } 
      
      console.log(products);
    
  };

  const openEditModal = (org) => {
    setSelectedOrganization(org);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedOrganization(null);
  };

  const openDeleteModal = (org) => {
    setOrganizationToDelete(org);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setOrganizationToDelete(null);
  };

  const onDeleteOrganization = async () => {
    try {
      setDeleteModalOpen(false);
      // Perform deletion logic here, such as calling the backend API to delete the organization
      const response = await fetch(`/api/organisations?orgId=${organizationToDelete._id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Remove the deleted organization from the list
        const updatedOrganizations = organizations.filter(org => org._id !== organizationToDelete._id);
        setOrganizations(updatedOrganizations);
      } else {
        console.error('Failed to delete organization');
      }
      
    } catch (error) {
      console.error('Error deleting organization:', error);
    }
  };

  const onUpdateOrganization = (updatedOrganization) => {
    const index = organizations.findIndex(org => org._id === updatedOrganization._id);
    console.log(index);
    if (index !== -1) {
      const updatedOrganizations = [...organizations];
      updatedOrganizations[index] = updatedOrganization;
      setOrganizations(updatedOrganizations);
    }else{
      const updatedOrganizations = [...organizations,updatedOrganization];
      setOrganizations(updatedOrganizations);
    }

    console.log(organizations);
  };



  return (
    <div className="sidebar" >

      <div style={{ display: "flex", color: "#0070ba", cursor: "pointer" }} onClick={handleAddOrg}>
        <div><FontAwesomeIcon icon={faCirclePlus} /></div>
        <div style={{ marginLeft: "5px" }}>Add organisation</div>
      </div>

      <AddOrganizationModal isOpen={displayAddOrgModal} setIsOpen={setDisplayAddOrgModal} onUpdate={onUpdateOrganization} />

      <ul>
        {organizations.map(org => (
          <li key={org._id}>

            <div className="organization-details">

              <span className="dropdown-button" onClick={() => toggleDropdown(org._id)}>
                <FontAwesomeIcon icon={selectedOrg === org._id ? faChevronDown : faChevronUp} />
              </span>
              <h4>{org.name}</h4>
              <div className="actions">
                <span className="action-button" onClick={() => openEditModal(org)}>
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <span className="action-button" onClick={() => openDeleteModal(org)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>

              </div>
            </div>
            {selectedOrg === org._id && (
              <ProductDropdown orgId={org._id} products={products} setProducts={setProducts} setSelectedFormApi={setSelectedFormApi} setServiceIdForm={setServiceIdForm} apis={apis} setApis={setApis} />
            )}
          </li>
        ))}
      </ul>
      {selectedOrganization && (
        <EditOrganizationModal
          isOpen={editModalOpen}
          onClose={closeEditModal}
          organization={selectedOrganization}
          onUpdate={onUpdateOrganization}
        />
      )}
      {organizationToDelete && (
        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={closeDeleteModal}
          onDelete={onDeleteOrganization}
        />
      )}
    </div>
  );
};




