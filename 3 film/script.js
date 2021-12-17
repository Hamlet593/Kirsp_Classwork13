import { getData } from './helpers/getFilmData.js'

const titleHTML = document.querySelector('.title');
const descriptionHTML = document.querySelector('.description')

const data = await getData('2baf70d1-42bb-4437-b551-e5fed5a87abe');
const {title, description, director, producer, release_date} = data;


const makeTitile = document.createElement('span');
makeTitile.innerText = title;
titleHTML.appendChild(makeTitile);

const makeDescription = document.createElement('span');
makeDescription.innerText = description;
descriptionHTML.appendChild(makeDescription);;