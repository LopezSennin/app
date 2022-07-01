import React from 'react';
import { useNavigate } from 'react-router-dom';


const VetItemAdm = ({vet}) => {
    const navigate = useNavigate();
        
    return (   
        <div className='col-md-4 mb-4'>
            <div className='card card-body shadow'>
                <h3 className='card-title'>
                    {vet.id_number}
                </h3>
                <p className='card-text'>
                    Nombre: <strong>{vet.first_name}</strong>
                    <br/> 
                    Apellido: <strong>{vet.last_name}</strong>
                    <br/> 
                    Dirección: <strong>{vet.address}</strong>
                    <br/>
                    Numero Telefonico: <strong>{vet.phone_number}</strong>
                    <br/>
                    Email: <strong>{vet.email}</strong>
                    <br/>
                    Contraseña: <strong>{vet.password}</strong>
                </p>
                <button onClick={() => navigate(`update/${vet.id_number}`)} className= 'btn btn-primary shadow-lg'>
                    Editar
                </button>
                
            </div>
        </div>
    )   
};

export default VetItemAdm; 
