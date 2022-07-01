import {  useEffect, useState } from "react";
import * as RecordServer from "./RecordServer";
import { useNavigate, useParams } from "react-router-dom";

const RecordFormVet = () => {
    const navigate = useNavigate();
    const params = useParams();
    //console.log(params);
    const fecha = new Date();
    

    const initialState = {
        description : ' ',
        date : fecha.toLocaleDateString(),
        vet : ['http://localhost:8000/pet/' + params.id_pet],
        service : [' '],
        pet : [params.id_pet],
        state : 'activa'
    };
    
    const [record, setRecord] = useState(initialState);

    const handleInputChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value });
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            //console.log(params.id_record);
            //console.log(record);
            //await RecordsServer.putRecord(params.id_record, record);
            navigate('/vet/record');
        } catch (error) {
            console.log(error)
        }
    };
    
    const getRecord = async(recordId) =>{
        try {
            const res = await RecordServer.getRecord(recordId);
            const data = await res.json();
            //console.log(res)
            //console.log('getRecord');
            //console.log(data);
            const {description, date, vet, service, pet, state} = data;
            setRecord({description, date, vet, service, pet, state});
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id_record){
            getRecord(params.id_record);
            //console.log('useEffect');
            //console.log(params);
            //console.log(params.id_record);
        }
        
    },[]);
// eslint-disable-next-line
    return (
        <div className='col-md-3 mx-auto'>

            <h2 className='mb-3 text-center'> 
                Registro 
            </h2>

            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">
                        Descripción
                    </label>

                    <input type="text" name="description" value={record.description} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Fecha
                    </label>

                    <input type="text" name="date" value={record.date} onChange={handleInputChange} className="form-control"  required disabled="" readonly=""/>
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        ID Mascota
                    </label>

                    <input type="text" name="pet" value={record.pet} onChange={handleInputChange} className="form-control"  required disabled="" readonly=""/>
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        ID Servicio
                    </label>
                
                    <input type="text" name="service" value={record.service} onChange={handleInputChange} className="form-control"  required disabled="" readonly=""/>
                    
                    <div className='text-center'>
                        <br/>
                        <button type="submit" className="btn btn-block btn-primary ">
                            Selecionar servicio
                        </button>
                    </div>
                
                </div>


                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-block btn-primary">
                        Actualizar 
                    </button>
                </div>
            </form>
        </div>

    );
};

export default RecordFormVet;