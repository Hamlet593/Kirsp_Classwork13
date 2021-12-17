import { BASE_URL } from "../constants/url.constants.js";

async function getBooks(bookName, pageNumber = 1) {
  const url = `${BASE_URL}?q=${bookName}/page=${pageNumber}`;

  try {
    const data = await fetch(url).then((r) => r.json());
    return data;
  } catch (error) {
    return error.message;
  }
}

export { getBooks };
