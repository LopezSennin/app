import React from 'react';
import { useNavigate } from 'react-router-dom';


const ServiceItemAdm = ({service}) => {
    const navigate = useNavigate();
        
    return (   
        <div className='col-md-4 mb-4 '>
            <div className='card card-body shadow'>
                <h3 className='card-title'>
                    {service.description}
                </h3>
                <p className='card-text'>
                    Costo: <strong>{service.cost}</strong>
                    <br/> 
                    Codigo: <strong>{service.id_service}</strong>
                    <br/> 
                    Estado: <strong>{service.state}</strong>
                </p>
                <button onClick={() => navigate(`update/${service.id_service}`)} className= 'btn btn-primary shadow-lg'>
                    Editar
                </button>
                
            </div>
        </div>
    )   
};

export default ServiceItemAdm; 
