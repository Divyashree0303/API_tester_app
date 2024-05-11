// ApiTool.jsx
"use client"
import { useState } from "react";
import Navigator from "./navigator";
import ApiTester from "../apiTester/apiTester.jsx";
import { Collapse } from "@chakra-ui/react";

export default function ApiTool() {
  const [selectedFormApi, setSelectedFormApi] = useState(null);
  const [serviceIdForm, setServiceIdForm] = useState(''); 
  const [apiToDelete,setApiToDelete]=useState(null);
  const [apiDeleteModalOpen,setApiDeleteModalOpen]=useState(false);
  const [apis, setApis] = useState({});// State to track if an API is added
  const [collapsed, setCollapsed] = useState(true);

  const URL = process.env.NEXT_PUBLIC_URL;


const onDeleteApi = async (api)=>{
    try {
      setApiDeleteModalOpen(false);
      // Perform deletion logic here, such as calling the backend API to delete the service
      const response = await fetch(`${URL}/api/apis?apiId=${api._id}`, {
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
      console.error('Error in deleting api:', error);
    }
  };



  return (
    <div style={{ position: "relative", top: "65px", display: "flex" }}>
      <Navigator collapsed={collapsed} setCollapsed={setCollapsed} setSelectedFormApi={setSelectedFormApi} setServiceIdForm={setServiceIdForm} apis={apis}
      setApis={setApis}  />
      
      <ApiTester api={selectedFormApi} serviceId={serviceIdForm}  onDeleteApi={onDeleteApi} apiToDelete={apiToDelete}  apiDeleteModalOpen={apiDeleteModalOpen} setApi={setSelectedFormApi} setApiToDelete={setApiToDelete} setApiDeleteModalOpen={setApiDeleteModalOpen} />
  
      
    </div>
  );
}
