// ApiTool.jsx
"use client"
import { useEffect, useState } from "react";
import Navigator from "./navigator";
import ApiTester from "../apiTester/page";

export default function ApiTool() {
  const [selectedFormApi, setSelectedFormApi] = useState(null);
  const [serviceIdForm, setServiceIdForm] = useState(''); 
  const [apiToDelete,setApiToDelete]=useState(null);
  const [apiDeleteModalOpen,setApiDeleteModalOpen]=useState(false);
  const [apis, setApis] = useState({});// State to track if an API is added


  const onDeleteApi = async (api) => {
    try {
      setApiDeleteModalOpen(false);
      // Perform deletion logic here, such as calling the backend API to delete the service
      const response = await fetch(`/api/apis?apiId=${api._id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Update the state optimistically
        setApis(prevApis => ({
          ...prevApis,
          [serviceIdForm]: prevApis[serviceIdForm].filter(t => t._id !== api._id)
        }));

        setSelectedFormApi(null);
        setApiToDelete(null);
        setServiceIdForm('');
       
      } else {
        console.error('Failed to delete api');
      }
    } catch (error) {
      console.error('Error deleting api:', error);
    }
  };



  return (
    <div style={{ position: "relative", top: "65px", display: "flex" }}>
      <Navigator  setSelectedFormApi={setSelectedFormApi} setServiceIdForm={setServiceIdForm} apis={apis}
      setApis={setApis}  />
      <ApiTester api={selectedFormApi} serviceId={serviceIdForm} setApi={setSelectedFormApi} onDeleteApi={onDeleteApi} apiToDelete={apiToDelete} setApiToDelete={setApiToDelete} apiDeleteModalOpen={apiDeleteModalOpen} setApiDeleteModalOpen={setApiDeleteModalOpen} />
        
      
    </div>
  );
}
