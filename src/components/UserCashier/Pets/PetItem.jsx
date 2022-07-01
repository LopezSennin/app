import React from 'react';
import {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as PetServer from './PetServer';


const PetItemCashier = ({pet}) => {
    const navigate = useNavigate();
    const params = useParams();

    const initialState = {
        id_number : 1,
        first_name: " ",
        last_name: " ",
        address: " ",
        phone_number: 1,
        email: "example@example.com",
    };

    const [owner, setOwner] = useState(initialState);

    const getOwner = async ({ownerUrl}) => {
        try {
            const res = await PetServer.getOwner(ownerUrl);
            return(res.json())
            
        } catch (error) {
            console.log(error);
        }
    };
    return (   
        <div className='col-md-4 mb-4 '>
            <div className='card border-info shadow-lg'>
                <div class="card-header text-center bg-transparent ">
                        {pet.full_name}
                </div>
                <div className='card card-body shadow-sm'>
                    
                    <p className='card-text'>
                        Sexo: <strong>{pet.sex}</strong>
                        <br/> 
                        Fecha de nacimiento: <strong>{pet.birth_date}</strong>
                        <br/> 
                        Especie: <strong>{pet.animal_type}</strong>
                        <br/>
                        Nombre del dueño: <strong>{getOwner(pet.owner).first_name}</strong>
                        <br/>
                        Identificacion del dueño: <strong>{getOwner(pet.owner).id_number}</strong>
                    </p>
                    
                </div>
                <div class="card-footer bg-transparent ">
                    ID mascota: <strong>{pet.id_pet}</strong>
                    <div className='text-center'>
                        <button onClick={() => navigate(`/cashier/pets/update/${pet.id_pet}`)} className= 'btn btn-primary shadow-lg'>
                            Editar
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )   
};

export default PetItemCashier; 
