const API_URL = 'http://localhost:8000/customer/';
export const listOwner = async()=>{
    return await fetch(API_URL);
};

export const getOwner = async(ownerId)=>{
    return await fetch(`${API_URL}${ownerId}/`);
};

export const putOwner = async(ownerId, updatedOwner)=>{
    return await fetch(`${API_URL}${ownerId}/`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "first_name":String(updatedOwner.first_name).trim(),
            "last_name":String(updatedOwner.last_name).trim(),
            "address":String(updatedOwner.address).trim(),
            "phone_number": parseInt(updatedOwner.phone_number),
            "email":String(updatedOwner.email).trim(),
        })
        });
    };
    

export const postOwner = async(newOwner)=>{
    return await fetch(API_URL, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id_number": parseInt(newOwner.id_number),
            "first_name":String(newOwner.first_name).trim(),
            "last_name":String(newOwner.last_name).trim(),
            "address":String(newOwner.address).trim(),
            "phone_number": parseInt(newOwner.phone_number),
            "email":String(newOwner.email).trim(),
    })
});
};
