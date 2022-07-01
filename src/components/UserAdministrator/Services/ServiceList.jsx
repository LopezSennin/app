import React, {useEffect, useState } from 'react';

//Components

import ServiceItemAdm from './ServiceItem';
import * as ServicesServer from './ServicesServer';

const ServiceListAdm=()=>{

    const [services, setServices]=useState([])
    const listServices = async() => {
        try {
            const res = await ServicesServer.listServices();
            const data = await res.json();
            setServices(data);            
        }
        catch (error) {
            console.log(error);
            }
        }
    useEffect(() =>{
        listServices();
        },[]);
    return (
        <div> 
            <a href='/adm/services/form' className='btn btn-primary mb-4 shadow-lg'>
                    Crear Servicio
            </a>
            <div className='row'>
            {
                services.map((service)=> (
                    //<h2>{service.description}</h2>
                    <ServiceItemAdm key={service.id_service} service={service}/>
                ))
                
            }
        </div>
        </div>
        
    )
};

export default ServiceListAdm;


