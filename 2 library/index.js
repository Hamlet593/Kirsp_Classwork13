import { createNewURL } from "./helpers/createNewUrl.helpers.js";
import { createNewRow } from "./helpers/createTableRow.helper.js";
import { createPaginationButtons } from "./helpers/createPaginationButtons.helpers.js";
import { rowsPerPage } from "./constants/pagination.constants.js";
import { getBooks } from "./helpers/getBooks.js";

const input = document.querySelector("#searchInput");
const searchBtn = document.querySelector(".searchBtn");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const tfoot = document.querySelector("tfoot");
const numFound = document.querySelector("#numFound");

let bookName = "";
let pageCount;

searchBtn.addEventListener("click", async () => {
  bookName = input.value;
  tfoot.innerText = "";
  tbody.innerText = "Loading......";

  const url = createNewURL(input.value);

  const books = await getBooks(url);
  console.log(books)
  numFound.innerText = books.numFound;

  pageCount = Math.ceil(books.numFound / rowsPerPage);

  createPaginationButtons(pageCount);

  tbody.innerHTML = "";

  books.docs.forEach(({ title, author_name, publish_year, subject }) => {
    createNewRow(title, author_name, publish_year, subject, tbody);
  });
});

export { tbody, tfoot, bookName };
