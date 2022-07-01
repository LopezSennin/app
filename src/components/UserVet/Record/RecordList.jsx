import React, {useEffect, useState } from 'react';

//Components

import RecordItemVet from './RecordItem';
import * as RecordServer from './RecordServer';


const RecordListVet=()=>{

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
                    
                    <RecordItemVet key={record.id_record} record={record}/>
                ))
                
            }
            </div>
        </div>
        
    )
};

export default RecordListVet;
