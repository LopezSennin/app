import { useState } from "react";
import * as VetServer from "./VetServer";
import { useNavigate } from "react-router-dom";

const VetFormAdm = () => {
    const navigate = useNavigate();
    const initialState = {
        id_number: 0,
        first_name: '',
        last_name: '',
        address: '',
        phone_number: 0,
        email: '',
        password: '',
    };
    const [vet, setVet] = useState(initialState);
    
    const handleInputChange = (e) => {
        setVet({ ...vet, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            res = await VetServer.postVet(vet);
            const data = await res.json();
            if (data.message === "Success"){
                setVet(initialState);
            }
            navigate("/adm/vets")
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='col-md-3 mx-auto' >
            
            <h2 className='mb-3 text-center'> 
                Veterinario
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">
                        Numero de identificación
                    </label>

                    <input type="number" name="id_number" value={vet.id_number} onChange={handleInputChange} className="form-control shadow" min='1' required />
                </div>

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

                    <input type="number" name="phone_number" value={vet.phone_number} onChange={handleInputChange} className="form-control shadow" minLength="10" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>

                    <input type="email" name="email" value={vet.email} onChange={handleInputChange} className="form-control shadow" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Contraseña
                    </label>

                    <input type="text" name="password" value={vet.password} onChange={handleInputChange} className="form-control shadow" minLength="6" maxLength="50" autoFocus required />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-block btn-primary">
                        Registrar
                    </button>
                </div>
            </form>
        </div>

    );
};

export default VetFormAdm;