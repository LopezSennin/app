import { useState } from "react";
import * as OwnerServer from "./OwnerServer";
import { useNavigate } from "react-router-dom";

const OwnerFormCashier = () => {
    const navigate = useNavigate();

    const initialState = {
        first_name : ' ',
        last_name : ' ',
        address : ' ',
        phone_number : 0,
        email : ' '

    };
    
    const [owner, setOwner] = useState(initialState);

    const handleInputChange = (e) => {
        setOwner({ ...owner, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            let res;
            res = await OwnerServer.postOwner(owner);
            const data = res.json();
            if (data.message === "Success") {
                setOwner(initialState);
            }
            navigate('/cashier/owners');
        } catch (error) {
            console.log(error)
        }
    };
    
// eslint-disable-next-line
    return (
        <div className='col-md-3 mx-auto'>

            <h2 className='mb-3 text-center'> 
                Dueño
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">
                        Nombres 
                    </label>

                    <input type="text" name="first_name" value={owner.first_name} onChange={handleInputChange} className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Apellidos
                    </label>

                    <input type="text" name="last_name" value={owner.last_name} onChange={handleInputChange} className="form-control"  required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Dirección
                    </label>

                    <input type="text" name="address" value={owner.address} onChange={handleInputChange} className="form-control"  required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Telefono
                    </label>

                    <input type="number" name="phone_number" value={owner.phone_number} onChange={handleInputChange} className="form-control"  required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>

                    <input type="text" name="email" value={owner.email} onChange={handleInputChange} className="form-control"  required />
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

export default OwnerFormCashier;