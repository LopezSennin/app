const API_URL = 'http://localhost:8000/service/';
export const listServices = async()=>{
    return await fetch(API_URL);
};

export const getService = async(serviceId)=>{
    return await fetch(`${API_URL}${serviceId}/`);
};

export const putService = async(serviceId, updatedService)=>{
    return await fetch(`${API_URL}${serviceId}/`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "description":String(updatedService.description).trim(),
            "cost": parseInt(updatedService.cost),
            "state":String(updatedService.state).trim(),
        })
        });
    };
    

export const postService = async(newService)=>{
    return await fetch(API_URL, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "description":String(newService.description).trim(),
            "cost": parseInt(newService.cost),
            "state":String(newService.state).trim(),
    })
});
};
