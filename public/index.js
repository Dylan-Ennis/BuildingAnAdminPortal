async function main() {
  let response = await fetch("http://localhost:3001/listBooks", {
    method: "GET",
    headers: {
    "Conent-Type":"application/json",
    },
    body: null,
  });
  let books = await response.json();
  console.log(books);
  books.forEach(renderBook);

  let response1 = await fetch("http://localhost:3001/updateBook", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 3,
      title: "Legends of Arathrae",
    }),
  });
  let updatedBook = await response1.json();
  console.log(updatedBook);
}

function renderBook(book) {
  let bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                ${
                  book.imageURL
                    ? `
                    <img class="card-img-top" src="${book.imageURL}" />
                `
                    : ``
                }
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Available: ${
                      book.quantity
                    }</h6>
                    <p class="card-text">${book.description}</p>
                </div>
            </div>
        </div>
    `;
}
main();