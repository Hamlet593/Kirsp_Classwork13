import { BASE_URL } from "../constants/url.constant.js";

export async function getData(id){
    const normalizedFilm = `${BASE_URL}/${id}`;
    const data = await fetch(normalizedFilm)
    .then(result => result.json())
    .then(result => {
        if(result.id){
            return result;
        }
        throw new Error('Այս ինչ է կատարվում')
    }).catch(error => error.message);
    return data;
}