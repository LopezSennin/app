import React from 'react';
import { useNavigate } from 'react-router-dom';


const OwnerItemCashier= ({owner}) => {
    const navigate = useNavigate();
        
    return (   
        <div className='col-md-4 mb-4 '>
            <div className='card card-body shadow'>
                <h3 className='card-title'>
                    Numero de identificación: {owner.id_number}
                </h3>
                <p className='card-text'>
                    Nombre: <strong>{owner.first_name}</strong>
                    <br/> 
                    Apellido: <strong>{owner.last_name}</strong>
                    <br/> 
                    Dirección: <strong>{owner.address}</strong>
                    <br/> 
                    Teléfono: <strong>{owner.phone_number}</strong>
                    <br/>
                    Email: <strong>{owner.email}</strong>
                </p>
                <button onClick={() => navigate(`update/${owner.id_number}`)} className= 'btn btn-primary shadow-lg'>
                    Editar
                </button>
                
            </div>
        </div>
    )   
};

export default OwnerItemCashier; 
