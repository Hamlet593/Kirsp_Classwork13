import { BASE_URL } from "../constants/url.constant.js";

export async function getDogRandomImage(breed){
  const normalaizeBreed  = breed.toLowerCase();
  let url = `${BASE_URL}${normalaizeBreed}/images/random`;
  let data = await fetch(url)
  .then(result => result.json())
  .then(result => {
    if(result.status === 'success'){
      return result.message
    }
    throw new Error('Սխալ Data է եկել')
  }).catch(error => error.message);
  return data;
}