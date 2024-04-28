import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import OrganisationList from './organisationList';
import "./navigator.css"
// import { faCirclePlus } from '@fortawesome/free-regular-svg-icons';

export default function Navigator({ setSelectedFormApi, setServiceIdForm, apis, setApis }) {

    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };



    return (
        <>
            <div className={`navigator ${collapsed ? '' : 'not-collapsed'}`} >

                <OrganisationList setSelectedFormApi={setSelectedFormApi} setServiceIdForm={setServiceIdForm} apis={apis} setApis={setApis} />




            </div>
            <div className="collapse-bar" onClick={toggleCollapsed}>
            <FontAwesomeIcon  icon={faRectangleList}  />
            </div>

        </>
    )
}