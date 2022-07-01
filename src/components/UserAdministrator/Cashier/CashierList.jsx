import React, {useEffect, useState } from 'react';
//Components

import CashierItemAdm from './CashierItem';
import * as CashierServer from './CashierServer';

const CashierListAdm=()=>{

    const [cashiers, setCashiers]=useState([])
    const listCashiers = async() => {
        try {
            const res = await CashierServer.listCashiers();
            const data = await res.json();
            setCashiers(data);            
        }
        catch (error) {
            console.log(error);
            }
        }
    useEffect(() =>{
        listCashiers();
        },[]);
    return (
        <div> 
            <a href='/adm/cashier/form' className='btn btn-primary mb-4 shadow-lg'>
                Crear Cajero
            </a>
            <div className='row'>
            {
                cashiers.map((cashier)=> (
                    
                    <CashierItemAdm key={cashier.id_number} cashier={cashier}/>
                ))
                
            }
        </div>
        </div>
        
    )
};

export default CashierListAdm;


