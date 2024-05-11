import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faChevronDown, faChevronUp, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import "./productDropdown.css"
import "./serviceDropdown.css"
import ServiceDeleteModal from "./serviceDeleteModal"
import EditServiceModal from "./editServiceModal"
import AddServiceModal from "./addService"
import ApiTester from "../apiTester/apiTester"

export default function ServiceDropdown ({setCollapsed, services, setServices, productId, setSelectedFormApi,setServiceIdForm,apis,setApis}){

  const [selectedServices, setSelectedServices] = useState([]);
  const [editServiceModalOpen, setEditServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [serviceDeleteModalOpen, setServiceDeleteModalOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  const [displayAddServiceModal, setDisplayAddServiceModal] = useState(false);
  const [selectedApi, setSelectedApi] = useState(null);
  // const [apis, setApis] = useState({});

  const URL = process.env.NEXT_PUBLIC_URL;


  const handleAddService = () => {
    setDisplayAddServiceModal(true);

  }

  const toggleServiceDropdown = (serviceId) => {
    setSelectedServices(prevState => 
      prevState.includes(serviceId)
       ? prevState.filter(id => id!== serviceId)
        : [...prevState, serviceId]
    );
    setSelectedService(prevState => prevState === serviceId ? null : serviceId);
  };

  const isDropdownOpen = (serviceId) => {
    return selectedServices.includes(serviceId);
  };


  const openServiceEditModal = (service) => {
    setSelectedService(service);
    setEditServiceModalOpen(true);
    console.log(editServiceModalOpen, selectedService);
  };

  const closeEditModal = () => {
    setEditServiceModalOpen(false);
    setSelectedService(null);
  };

  const openServiceDeleteModal = (service) => {
    setServiceToDelete(service);
    setServiceDeleteModalOpen(true);
  };

  const closeServiceDeleteModal = () => {
    setServiceDeleteModalOpen(false);
    setServiceToDelete(null);
  };

  const onUpdateServiceName = (updatedService) => {
    const index = services.findIndex(service => service._id === updatedService._id);
   
    if (index !== -1) {
      const updatedServices = [...services];
      updatedServices[index] = updatedService;
      setServices(updatedServices);
    }else{
      const updatedServices = [...services,updatedService];
      setServices(updatedServices);
    }
  };

  const onDeleteService = async () => {
    try {
      setServiceDeleteModalOpen(false);
      // Perform deletion logic here, such as calling the backend API to delete the service
      const response = await fetch(`${URL}/api/services?serviceId=${serviceToDelete._id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Update the state optimistically
        const updatedServices = services.filter(product => product._id !== serviceToDelete._id);
        setServices(updatedServices);
      } else {
        console.error('Failed to delete service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  useEffect(() => {
    const fetchApis= async () => {
      for (const serviceId of selectedServices) {
        try {
          const response = await fetch(`${URL}/api/apis?serviceId=${serviceId}`);
          const apisData = await response.json();
          setApis((prevApis) => ({
            ...prevApis,
            [serviceId]: apisData,
          }));

          
        } catch (error) {
          console.error('Error fetching apis:', error);
        }
      }
    };
  
    fetchApis();
  }, [selectedServices,apis]);
  



  return (
    <div className="dropdown-menu service">
      <ul>
        {services.map(service => (
          <li key={service._id}>
            <div className="product-details" >
              <span className="dropdown-button" onClick={() => toggleServiceDropdown(service._id)}>
                <FontAwesomeIcon icon={isDropdownOpen(service._id) ? faChevronDown : faChevronUp} />
              </span>
              <h5 className='service-name'>{service.name}</h5>
              <div className="product-actions">
                <span className="action-button edit">
                  <FontAwesomeIcon icon={faEdit} onClick={() => openServiceEditModal(service)} />
                </span>
                <span className="action-button delete">
                  <FontAwesomeIcon icon={faTrashAlt} onClick={() => openServiceDeleteModal(service)} />
                </span>
              </div>
            </div>
            {isDropdownOpen(service._id) && (
              <ul className='apis'>
                {apis[service._id] &&  apis[service._id].map(api => (
                  <li key={api._id}  className={selectedApi === api._id ? 'selected' : ''}  onClick={() => {setSelectedFormApi(api); setServiceIdForm(service._id);setSelectedApi(api._id);setCollapsed(true)}}><div style={{display:"flex",width:"fit-content"}}><div className={`method-side ${api.method}`}>{api.method}</div><p className='api-name'>{api.name}</p></div></li>
                ))}

                
                  <div  style={{ display: "flex", color: "#0070ba", cursor: "pointer", marginLeft:"10px",fontSize:"12px"}} onClick={() => {console.log("add api") ;setSelectedFormApi(null); setServiceIdForm(service._id);setSelectedApi(null)}}>
                    <div><FontAwesomeIcon icon={faPlus} /></div>
                    <div style={{ marginLeft: "5px" }}>Add API</div>
                  </div>

                  {/* <AddServiceModal isOpen={displayAddServiceModal} setIsOpen={setDisplayAddServiceModal} onUpdate={onUpdateServiceName} productId={productId} /> */}

                

              </ul>
            )}
          </li>
        ))}
        <li>
          <div style={{ display: "flex", color: "#0070ba", cursor: "pointer" }} onClick={handleAddService}>
            <div><FontAwesomeIcon icon={faPlus} /></div>
            <div style={{ marginLeft: "5px" ,fontSize:"14px"}}>Add service</div>
          </div>

          <AddServiceModal isOpen={displayAddServiceModal} setIsOpen={setDisplayAddServiceModal} onUpdate={onUpdateServiceName} productId={productId} />

        </li>
      </ul>

      {selectedService && (
        <EditServiceModal
          isOpen={editServiceModalOpen}
          onClose={closeEditModal}
          service={selectedService}
          onUpdate={onUpdateServiceName}
        />
      )}
      {serviceToDelete && (
        <ServiceDeleteModal
          isOpen={serviceDeleteModalOpen}
          onClose={closeServiceDeleteModal}
          onDelete={onDeleteService}
        />
      )}

    </div>
  );
};

