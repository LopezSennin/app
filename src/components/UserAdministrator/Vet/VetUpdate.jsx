import { useState, useEffect } from "react";
import * as VetServer from "../Vet/VetServer";
import { useNavigate, useParams } from "react-router-dom";

const VetUpdateAdm = () => {
    const navigate = useNavigate();
    const params = useParams();
    

    const initialState = {
        id_number: 0,
        first_name: '',
        last_name: '',
        address: 'x',
        phone_number: 0,
        email: '',
        password: '',
    };
    const [vet, setVet] = useState(initialState);
    
    const handleInputChange = (e) => {
        setVet({ ...vet, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            console.log('id del veterinario')
            console.log(params.id_number);
            console.log('datos :');
            console.log(vet);
            await VetServer.putVet(params.id_number, vet);
            navigate('/adm/vets');
        } catch (error) {
            console.log(error);
        }
    };
    
    const getVet = async(vetId) => {
        try {
            const res = await VetServer.getVet(vetId);
            const data = await res.json();
            console.log('getVet data');// test values by console
            console.log(data);
            const {first_name, last_name, address, phone_number, email, password} = data;
            setVet({first_name, last_name, address, phone_number, email, password});
        } catch (error) {
            console.log(error);
        }
    };

    useEffect (() => {
        if (params.id_number){
            getVet(params.id_number);
        }
    },[]);

    return (
        <div className='col-md-3 mx-auto' >
            
            <h2 className='mb-3 text-center'> 
                Veterinario
            </h2>
            <form onSubmit={handleUpdate}>
                
                <div className="mb-3">
                    <label className="form-label">
                        Nombres
                    </label>

                    <input type="text" name="first_name" value={vet.first_name} onChange={handleInputChange} className="form-control shadow" minLength="2" maxLength="200" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Apellidos
                    </label>

                    <input type="text" name="last_name" value={vet.last_name} onChange={handleInputChange} className="form-control shadow" minLength="2" maxLength="200" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Dirección de residencia
                    </label>

                    <input type="text" name="address" value={vet.address} onChange={handleInputChange} className="form-control shadow" minLength="2" maxLength="200" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Numero de telefono
                    </label>

                    <input type="number" name="phone_number" value={vet.phone_number} onChange={handleInputChange} className="form-control shadow" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>

                    <input type="text" name="email" value={vet.email} onChange={handleInputChange} className="form-control shadow" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Contraseña
                    </label>

                    <input type="text" name="password" value={vet.password} onChange={handleInputChange} className="form-control shadow" minLength="6" maxLength="50" autoFocus required />
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

export default VetUpdateAdm;