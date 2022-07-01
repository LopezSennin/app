import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Components

import PetItemCashier from './PetItem';
import * as PetServer from './PetServer';


const PetListCashier=()=>{
    const navigate = useNavigate();
    const [pets, setPets]=useState([]);

    const listPets = async() => {
        try {
            const res = await PetServer.listPets();
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
            <button onClick={() => navigate(`/cashier/pets/form`)} className= 'btn btn-primary mb-4 shadow-lg'>
                Nueva mascota
            </button>
            <br />
            <div className='row'>
            {
                pets.map((pet)=> (
                    <PetItemCashier key={pet.id_pet} pet={pet}/>
                ))
                
            }
            </div>
        </div>
        
    )
};

export default PetListCashier;
