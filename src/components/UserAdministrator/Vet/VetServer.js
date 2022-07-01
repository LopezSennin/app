const API_URL = 'http://localhost:8000/vet/';
export const listVets = async()=>{
    return await fetch(API_URL);
};

export const getVet = async(vetId)=>{
    return await fetch(`${API_URL}${vetId}/`);
};

export const putVet = async(vetId, updatedVet)=>{
    return await fetch(`${API_URL}${vetId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "first_name": String(updatedVet.first_name).trim(),
            "last_name": String(updatedVet.last_name).trim(),
            "address": String(updatedVet.address).trim(),
            "phone_number": parseInt(updatedVet.phone_number),
            "email": String(updatedVet.email).trim(),
            "password": String(updatedVet.password).trim(),
            
        })
        });
    };
    

export const postVet = async(newVet)=>{
    return await fetch(API_URL, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id_number": parseInt(newVet.id_number),
            "first_name": String(newVet.first_name).trim(),
            "last_name": String(newVet.last_name).trim(),
            "address": String(newVet.address).trim(),
            "phone_number": parseInt(newVet.phone_number),
            "email": String(newVet.email).trim(),
            "password": String(newVet.password).trim(),
    })
});
};
