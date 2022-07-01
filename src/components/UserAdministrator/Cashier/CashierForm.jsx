import { useState } from "react";
import * as CashierServer from "./CashierServer";
import { useNavigate } from "react-router-dom";

const CashierFormAdm = () => {
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
    const [cashier, setCashier] = useState(initialState);
    
    const handleInputChange = (e) => {
        setCashier({ ...cashier, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            res = await CashierServer.postCashier(cashier);
            const data = await res.json();
            if (data.message === "Success"){
                setCashier(initialState);
            }
            navigate("/adm/cashiers")
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='col-md-3 mx-auto' >
            
            <h2 className='mb-3 text-center'> 
                Cajero
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">
                        Numero de identificación
                    </label>

                    <input type="number" name="id_number" value={cashier.id_number} onChange={handleInputChange} className="form-control shadow" min='1' required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Nombres
                    </label>

                    <input type="text" name="first_name" value={cashier.first_name} onChange={handleInputChange} className="form-control shadow" minLength="2" maxLength="200" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Apellidos
                    </label>

                    <input type="text" name="last_name" value={cashier.last_name} onChange={handleInputChange} className="form-control shadow" minLength="2" maxLength="200" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Dirección de residencia
                    </label>

                    <input type="text" name="address" value={cashier.address} onChange={handleInputChange} className="form-control shadow" minLength="2" maxLength="200" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Numero de telefono
                    </label>

                    <input type="number" name="phone_number" value={cashier.phone_number} onChange={handleInputChange} className="form-control shadow" minLength="10" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>

                    <input type="email" name="email" value={cashier.email} onChange={handleInputChange} className="form-control shadow" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Contraseña
                    </label>

                    <input type="text" name="password" value={cashier.password} onChange={handleInputChange} className="form-control shadow" minLength="6" maxLength="50" autoFocus required />
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

export default CashierFormAdm;