import {  useEffect, useState } from "react";
import * as ServicesServer from "./ServicesServer";
import { useNavigate, useParams } from "react-router-dom";

const ServiceUpdateAdm = () => {
    const navigate = useNavigate();
    const params = useParams();
    //console.log(params);


    const initialState = {
        description: '',
        cost: 1,
        state: 'activo'
    };
    
    const [service, setService] = useState(initialState);

    const handleInputChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            //console.log(params.id_service);
            //console.log(service);
            await ServicesServer.putService(params.id_service, service);
            navigate('/adm/services');
        } catch (error) {
            console.log(error)
        }
    };
    
    const getService = async(serviceId) =>{
        try {
            const res = await ServicesServer.getService(serviceId);
            const data = await res.json();
            //console.log(res)
            //console.log('getService');
            //console.log(data);
            const {cost, description, state} = data;
            setService({description, cost, state});
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id_service){
            getService(params.id_service);
            console.log('useEffect');
            console.log(params);
            console.log(params.id_service);
        }
        
    },[]);
// eslint-disable-next-line
    return (
        <div className='col-md-3 mx-auto'>

            <h2 className='mb-3 text-center'> 
                Servicio 
            </h2>

            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">
                        Nombre del servicio
                    </label>

                    <input type="text" name="description" value={service.description} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Costo del servicio
                    </label>

                    <input type="number" name="cost" value={service.cost} onChange={handleInputChange} className="form-control"  required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Estado del servicio
                    </label>

                    <select className="form-select" name="state" value={service.state} onChange={handleInputChange} aria-label="Default select example">
                        <option value="activa">Activo</option>
                        <option value="desactiva">Desactivo</option>
                    </select>
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

export default ServiceUpdateAdm;