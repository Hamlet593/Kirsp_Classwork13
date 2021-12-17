import { getBooks } from "./getBooks.js";
import { createNewURL } from "./createNewUrl.helpers.js";
import { createNewRow } from "./createTableRow.helper.js";
import { tbody, tfoot, bookName } from "../index.js";

export function createPaginationButtons(pageCount) {
  const row = tfoot.insertRow();

  for (let i = 1; i <= pageCount; i++) {
    let btn = document.createElement("button");
    btn.classList.add("pagination-btn");
    btn.innerText = `${i}`;
    row.append(btn);

    btn.addEventListener("click", async () => {
      tbody.innerText = "Loading.....";

      const url = createNewURL(bookName, i);
      const books = await getBooks(url);
      books.docs.forEach(({ title, author_name, publish_year, subject }) => {
        createNewRow(title, author_name, publish_year, subject, tbody);
      });
    });
  }
}
