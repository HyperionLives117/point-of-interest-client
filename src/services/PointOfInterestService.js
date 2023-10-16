import axios from 'axios';

const POI_BASE_API_URL = 'http://localhost:8080/api/v1/poi';

export function getAllPointsOfInterest(){
    return axios.get(POI_BASE_API_URL);
}

export function createPointOfInterest(poi){
    return axios.post(POI_BASE_API_URL,poi);
}

export function getById(id){
    return axios.get(`${POI_BASE_API_URL}/${id}`);
}

export function updatePointOfInterest(id, poi){
    return axios.put(`${POI_BASE_API_URL}/${id}`, poi);
}

export function deletePointOfInterest(id){
    return axios.delete(`${POI_BASE_API_URL}/${id}`);
}