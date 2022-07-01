import { useState, useEffect } from "react";
import * as CashierServer from "./CashierServer";
import { useNavigate, useParams } from "react-router-dom";

const CashierUpdateAdm = () => {
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
    const [cashier, setCashier] = useState(initialState);
    
    const handleInputChange = (e) => {
        setCashier({ ...cashier, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            console.log('id del cashiererinario')
            console.log(params.id_number);
            console.log('datos :');
            console.log(cashier);
            await CashierServer.putCashier(params.id_number, cashier);
            navigate('/adm/cashiers');
        } catch (error) {
            console.log(error);
        }
    };
    
    const getCashier = async(cashierId) => {
        try {
            const res = await CashierServer.getCashier(cashierId);
            const data = await res.json();
            console.log('getCashier data');// test values by console
            console.log(data);
            const {first_name, last_name, address, phone_number, email, password} = data;
            setCashier({first_name, last_name, address, phone_number, email, password});
        } catch (error) {
            console.log(error);
        }
    };

    useEffect (() => {
        if (params.id_number){
            getCashier(params.id_number);
        }
    },[]);
//react-hooks/exhaustive-deps
    return (
        <div className='col-md-3 mx-auto' >
            
            <h2 className='mb-3 text-center'> 
                Cashiererinario
            </h2>
            <form onSubmit={handleUpdate}>
                
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

                    <input type="number" name="phone_number" value={cashier.phone_number} onChange={handleInputChange} className="form-control shadow" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>

                    <input type="text" name="email" value={cashier.email} onChange={handleInputChange} className="form-control shadow" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Contraseña
                    </label>

                    <input type="text" name="password" value={cashier.password} onChange={handleInputChange} className="form-control shadow" minLength="6" maxLength="50" autoFocus required />
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

export default CashierUpdateAdm;