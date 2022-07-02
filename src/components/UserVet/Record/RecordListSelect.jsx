import React, {useEffect, useState } from 'react';

//Components

import RecordItemSelectVet from './RecordItemSelect';
import * as RecordServer from './RecordServer';


const RecordListSelecVet=()=>{

    const [records, setRecords]=useState([])

    const listRecords = async() => {
        try {
            const res = await RecordServer.listRecords()
            const data = await res.json();
            setRecords(data);            
        }
        catch (error) {
            console.log(error);
            }
        }
    useEffect(() =>{
        listRecords();
        },[]);
    return (
        <div> 
            
            <div className='row'>
            {
                records.map((record)=> (
                    <RecordItemSelectVet key={record.id_record} record={record}/>
                ))
                
            }
            </div>
        </div>
        
    )
};

export default RecordListSelecVet;

