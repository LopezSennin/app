import {  useEffect, useState } from "react";
import * as OwnerServer from "./OwnerServer";
import { useNavigate, useParams } from "react-router-dom";

const OwnerUpdateCashier = () => {
    const navigate = useNavigate();
    const params = useParams();
    //console.log(params);


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

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            //console.log(params.id_owner);
            //console.log(owner);
            await OwnerServer.putOwner(params.id_owner, owner);
            navigate('/cashier/owners');
        } catch (error) {
            console.log(error)
        }
    };
    
    const getOwner = async(ownerId) =>{
        try {
            const res = await OwnerServer.getOwner(ownerId);
            const data = await res.json();
            //console.log(res)
            //console.log('getOwner');
            //console.log(data);
            const {first_name, last_name, address, phone_number, email} = data;
            setOwner({first_name, last_name, address, phone_number, email});
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id_number){
            getOwner(params.id_number);
            console.log('useEffect');
            console.log(params);
            console.log(params.id_owner);
        }
        
    },[]);
// eslint-disable-next-line
    return (
        <div className='col-md-3 mx-auto'>

            <h2 className='mb-3 text-center'> 
                Dueño
            </h2>

            <form onSubmit={handleUpdate}>
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
                    <button type="submit" className="btn btn-block btn-primary">
                        Actualizar 
                    </button>
                </div>
            </form>
        </div>

    );
};

export default OwnerUpdateCashier;