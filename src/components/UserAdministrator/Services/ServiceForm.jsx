import { useState } from "react";
import * as ServicesServer from "./ServicesServer";
import { useNavigate } from "react-router-dom";

const ServiceFormAdm = () => {
    const navigate = useNavigate();
    const initialState = {
        description: '',
        cost: 1,
        state: 'activo'
    };
    const [service, setService] = useState(initialState);
    
    const handleInputChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            res = await ServicesServer.postService(service);
            const data = await res.json();
            if (data.message === "Success"){
                setService(initialState);
            }
            navigate("/adm/services")
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='col-md-3 mx-auto'>
            
            <h2 className='mb-3 text-center'> 
                Servicio 
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">
                        Nombre del servicio
                    </label>

                    <input type="text" name="description" value={service.description} onChange={handleInputChange} className="form-control shadow" minLength="2" maxLength="50" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Costo del servicio
                    </label>

                    <input type="number" name="cost" value={service.cost} onChange={handleInputChange} className="form-control shadow"  required />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-block btn-primary shadow">
                        Registrar
                    </button>
                </div>
            </form>
        </div>

    );
};

export default ServiceFormAdm;