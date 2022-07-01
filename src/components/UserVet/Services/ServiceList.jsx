import React, {useEffect, useState } from 'react';

//Components

import ServiceItemVet from './ServiceItem';
import * as ServicesServer from './ServicesServer';


const ServiceListVet=()=>{

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
            
            <div className='row'>
            {
                services.map((service)=> (
                    //<h2>{service.description}</h2>
                    <ServiceItemVet key={service.id_service} service={service}/>
                ))
                
            }
            </div>
        </div>
        
    )
};

export default ServiceListVet;
