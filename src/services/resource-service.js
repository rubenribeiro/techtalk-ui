//const RESOURCE_URL = 'https://www.googleapis.com/books/v1/volumes';
const RESOURCE_URL  = 'https://techtalk-api.herokuapp.com/api/resources';
//const RESOURCE_URL  = 'http://localhost:4000/api/resources';

export const findAllResources = () =>
    fetch(RESOURCE_URL)
        .then(response => response.json());

export const findResourceById = (resourceId) =>
    fetch(`${RESOURCE_URL }/${resourceId}`)
        .then(response => response.json());

export const createResource = (resource) =>
    fetch (RESOURCE_URL , {
        method: "POST",
        body: JSON.stringify(resource),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateResource = (resourceId, resource) =>
    fetch (`${RESOURCE_URL }/${resourceId}`, {
        method: "PUT",
        body: JSON.stringify(resource),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

const api =  {
    findAllResources,
    findResourceById,
    createResource,
    updateResource
}

export default api;
