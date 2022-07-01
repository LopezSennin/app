import React, {useEffect, useState } from 'react';

//Components

import VetItemAdm from './VetItem';
import * as VetServer from './VetServer';

const VetListAdm=()=>{

    const [vets, setVets]=useState([])
    const listVets = async() => {
        try {
            const res = await VetServer.listVets();
            const data = await res.json();
            setVets(data);            
        }
        catch (error) {
            console.log(error);
            }
        }
    useEffect(() =>{
        listVets();
        },[]);
    return (
        <div> 
            <a href='/adm/vets/form' className='btn btn-primary mb-4 shadow-lg'>
                Crear Veterinario
            </a>
            <div className='row'>
            {
                vets.map((vet)=> (
                    
                    <VetItemAdm key={vet.id_number} vet={vet}/>
                ))
                
            }
        </div>
        </div>
        
    )
};

export default VetListAdm;


