import React, {useEffect, useState } from 'react';

//Components

import PetItemVet from './PetItem';
import * as PetServer from './PetServer';


const PetListVet=()=>{

    const [pets, setPets]=useState([])

    const listPets = async() => {
        try {
            const res = await PetServer.listPets()
            const data = await res.json();
            setPets(data);            
        }
        catch (error) {
            console.log(error);
            }
        }
    useEffect(() =>{
        listPets();
        },[]);
    return (
        <div> 
            
            <div className='row'>
            {
                pets.map((pet)=> (
                    
                    <PetItemVet key={pet.id_pet} pet={pet}/>
                ))
                
            }
            </div>
        </div>
        
    )
};

export default PetListVet;
