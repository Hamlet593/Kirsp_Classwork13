import { getDogRandomImage } from "./helpers/getDogRandomImage.helper.js";

const breedsSelect = document.getElementById("breeds");
const dogImg = document.querySelector("#dogImage");

const selected = breedsSelect.value;

const data = await getDogRandomImage(selected);

dogImg.src = data;