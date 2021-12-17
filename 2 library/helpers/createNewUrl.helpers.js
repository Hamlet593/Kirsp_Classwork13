import { BASE_URL } from "../constants/url.constants.js";

export function createNewURL(bookName, page = 1) {
  const searchParam = bookName.replaceAll(" ", "+");
  const newURL = `${BASE_URL}?q=${searchParam}&&page=${page}`;

  return newURL;
}
