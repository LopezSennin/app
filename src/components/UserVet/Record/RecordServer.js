const API_URL = 'http://localhost:8000/record/';
export const listRecords = async()=>{
    return await fetch(API_URL);
};

export const getRecord = async(recordId)=>{
    return await fetch(`${API_URL}${recordId}/`);
};

export const getVet = async(Url)=>{
    return await fetch(Url);
};

export const getService = async(Url)=>{
    return await fetch(Url);
};

export const getPet = async(Url)=>{ 
    return await fetch(Url);
};



