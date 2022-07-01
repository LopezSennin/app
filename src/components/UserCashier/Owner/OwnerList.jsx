import React, {useEffect, useState } from 'react';

//Components

import OwnerItemCashier from './OwnerItem';
import * as OwnerServer from './OwnerServer';

const OwnerListAdm=()=>{

    const [owners, setOwners]=useState([])
    const listOwners = async() => {
        try {
            const res = await OwnerServer.listOwner();
            const data = await res.json();
            setOwners(data);            
        }
        catch (error) {
            console.log(error);
            }
        }
    useEffect(() =>{
        listOwners();
        },[]);
    return (
        <div> 
            <a href='/cashier/owners/form' className='btn btn-primary mb-4 shadow-lg'>
                    Agregar nuevo cliente
            </a>
            <div className='row'>
            {
                owners.map((owner)=> (
                    //<h2>{owner.description}</h2>
                    <OwnerItemCashier key={owner.id_number} owner={owner}/>
                ))
                
            }
        </div>
        </div>
        
    )
};

export default OwnerListAdm;


