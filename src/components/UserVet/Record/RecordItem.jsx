import React from 'react';

const RecordItemVet = ({record}) => {
    
        
    return (   
        <div className='col-md-4 mb-4 '>
            <div className='card card-body shadow'>
                <h3 className='card-title'>
                    Id Registro: <strong>{record.id_record} </strong>
                </h3>
                <p className='card-text'>
                    Descripción: 
                    <br/> 
                    <strong>{record.description}</strong>
                    <br/> 
                    Fecha: <strong>{record.date}</strong>
                    <br/> 
                    ID Veterinario: <strong>{}</strong>
                    <br/>
                    Nombre Veterinario: <strong></strong>
                    <br/>
                    ID Servicio : <strong>{}</strong>
                    <br/>
                    Descripción servicio : <strong>{}</strong>
                    <br/>
                    ID Mascota : <strong>{}</strong>
                    <br/>
                    Nombre Mascota : <strong>{}</strong>
                    <br/>
                    Estado : <strong>{record.state}</strong>
                </p>
                
            </div>
        </div>
    )   
};

export default RecordItemVet;