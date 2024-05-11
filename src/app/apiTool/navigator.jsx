import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import OrganisationList from './organisationList';
import "./navigator.css"
// import { faCirclePlus } from '@fortawesome/free-regular-svg-icons';

export default function Navigator({collapsed, setCollapsed, setSelectedFormApi, setServiceIdForm, apis, setApis }) {

    

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };



    return (
        <>
            <div className="navigator main-nav" >

                <OrganisationList setCollapsed={setCollapsed} setSelectedFormApi={setSelectedFormApi} setServiceIdForm={setServiceIdForm} apis={apis} setApis={setApis} />


            </div>

            <div style={{
                justifyContent: "space-between", position: "fixed", top: "70px", margin: "10px 20px", opacity: "1", zIndex: "2", backgroundColor: "white", width: "calc(100% - 40px)", boxShadow: "0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15)",
                background: "#fff",
                borderRadius: "28px",
    minHeight: "56px",
    overflowY: "auto",maxHeight: "399px",overflowX: "hidden"
            }} className="collapse-bar">
                <div style={{ display: "flex" }} onClick={toggleCollapsed}>
                    <div style={{ padding: "20px" }} >Projects </div>
                    <div style={{ margin: "auto 0", padding: "10px 30px", display: "flex",marginLeft: "auto" }}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </div>
                </div>

            
                <div className={`navigator ${collapsed ? '' : 'not-collapsed'}`} style={{ width: "100%"}} >

                    <OrganisationList setCollapsed={setCollapsed} setSelectedFormApi={setSelectedFormApi} setServiceIdForm={setServiceIdForm} apis={apis} setApis={setApis} />


                </div>
            </div>

        </>
    )
}