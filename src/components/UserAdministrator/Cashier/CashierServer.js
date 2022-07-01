const API_URL = 'http://localhost:8000/cashier/';
export const listCashiers = async()=>{
    return await fetch(API_URL);
};

export const getCashier = async(carshierId)=>{
    return await fetch(`${API_URL}${carshierId}/`);
};

export const putCashier = async(id_number, updatedCashiers)=>{
    return await fetch(`${API_URL}${id_number}/`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "first_name": String(updatedCashiers.first_name).trim(),
            "last_name": String(updatedCashiers.last_name).trim(),
            "address": String(updatedCashiers.address).trim(),
            "phone_number": parseInt(updatedCashiers.phone_number),
            "email": String(updatedCashiers.email).trim(),
            "password": String(updatedCashiers.password).trim(),
            
        })
        });
    };
    

export const postCashier = async(newCashiers)=>{
    return await fetch(API_URL, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id_number": parseInt(newCashiers.id_number),
            "first_name": String(newCashiers.first_name).trim(),
            "last_name": String(newCashiers.last_name).trim(),
            "address": String(newCashiers.address).trim(),
            "phone_number": parseInt(newCashiers.phone_number),
            "email": String(newCashiers.email).trim(),
            "password": String(newCashiers.password).trim(),
    })
});
};
