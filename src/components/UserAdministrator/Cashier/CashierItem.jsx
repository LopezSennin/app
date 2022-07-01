import React from 'react';
import { useNavigate } from 'react-router-dom';


const CashierItemAdm = ({cashier}) => {
    const navigate = useNavigate();
        
    return (   
        <div className='col-md-4 mb-4'>
            <div className='card card-body shadow'>
                <h3 className='card-title'>
                    {cashier.id_number}
                </h3>
                <p className='card-text'>
                    Nombre: <strong>{cashier.first_name}</strong>
                    <br/> 
                    Apellido: <strong>{cashier.last_name}</strong>
                    <br/> 
                    Dirección: <strong>{cashier.address}</strong>
                    <br/>
                    Numero Telefonico: <strong>{cashier.phone_number}</strong>
                    <br/>
                    Email: <strong>{cashier.email}</strong>
                    <br/>
                    Contraseña: <strong>{cashier.password}</strong>
                </p>
                <button onClick={() => navigate(`update/${cashier.id_number}`)} className= 'btn btn-primary shadow-lg'>
                    Editar
                </button>
                
            </div>
        </div>
    )   
};

export default CashierItemAdm; 
