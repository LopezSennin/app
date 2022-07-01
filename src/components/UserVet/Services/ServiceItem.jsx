import React from 'react';

const ServiceItemVet = ({service}) => {
    
        
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
                
            </div>
        </div>
    )   
};

export default ServiceItemVet; 
