import {  useEffect, useState } from "react";
import * as PetServer from "./PetServer";
import { useNavigate, useParams } from "react-router-dom";

const PetFormCashier = () => {
    const navigate = useNavigate();
    const params = useParams();
    //console.log(params);
    const fecha = new Date();
    

    const initialState = {
        full_name : ' ',
        sex : ' ',
        birth_date :' ',
        animal_type : ' ',
        owner : [' ']
    };
    
    const [pet, setPet] = useState(initialState);

    const handleInputChange = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value });
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            //console.log(params.id_pet);
            //console.log(pet);
            //await PetsServer.putPet(params.id_pet, pet);
            navigate('/cashier/pets');
        } catch (error) {
            console.log(error)
        }
    };
    
    const getPet = async(petId) =>{
        try {
            const res = await PetServer.getPet(petId);
            const data = await res.json();
            //console.log(res)
            //console.log('getPet');
            //console.log(data);
            const {full_name, sex, birth_date, animal_type, owner} = data;
            setPet({full_name, sex, birth_date, animal_type, owner});
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id_pet){
            getPet(params.id_pet);
            //console.log('useEffect');
            //console.log(params);
            //console.log(params.id_pet);
        }
        
    },[]);
// eslint-disable-next-line
    return (
        <div className='col-md-3 mx-auto'>

            <h2 className='mb-3 text-center'> 
                Registro de mascota
            </h2>

            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">
                        Nombre completo de la mascota
                    </label>

                    <input type="text" name="full_name" value={pet.full_name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Sexo
                    </label>

                    <input type="text" name="sex" value={pet.sex} onChange={handleInputChange} className="form-control"  required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Fecha de nacimiento <br/> DD/MM/AA
                    </label>

                    <input type="text" name="birth_date" value={pet.birth_date} onChange={handleInputChange} className="form-control"  required />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Especie
                    </label>

                    <input type="text" name="animal_type" value={pet.animal_type} onChange={handleInputChange} className="form-control"  required  />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Propietario
                    </label>
                
                    <input type="text" name="animal_type" value={pet.animal_type} onChange={handleInputChange} className="form-control"  required disabled="" readonly=""/>
                    
                    <div className='text-center'>
                        <br/>
                        <button type="submit" className="btn btn-block btn-primary ">
                            Selecionar Propietario
                        </button>
                    </div>
                
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

export default PetFormCashier;