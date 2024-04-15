import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import OrganisationList from './organisationList';
// import { faCirclePlus } from '@fortawesome/free-regular-svg-icons';

export default function Navigator(){


    return (
        <div className="navigator" style={{width:"250px",borderRight:" 1.5px solid #ddd"}}>
            
            <OrganisationList/>
        

        </div>
    )
}