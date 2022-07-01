const API_URL = 'http://localhost:8000/pet/';
export const listPets = async()=>{
    return await fetch(API_URL);
};

export const getPet = async(petId)=>{
    return await fetch(`${API_URL}${petId}/`);
};

export const getOwner = async(OwnerUrl)=>{
    return await fetch(OwnerUrl);
    };
    


