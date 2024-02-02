// async function updateID() {
//     let response = await fetch("http://localhost:3001/listBooks", {
//       method: "GET",
//       headers: {
//       "Conent-Type":"application/json",
//       },
//       body: null,
//     });
//     let books = await response.json();
//     console.log(books);

//     let response1 = await fetch("http://localhost:3001/updateBook", {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id: 1&2&3&4,
//           quantity: "newInput",
//         }),
//       });
//       let updatedBook = await response1.json();
//       console.log(updatedBook);
//     }

async function updateID(inputId) {
    let newInput = document.getElementById(inputId).value;
    let bookId;
  
    // Determine book ID based on the inputId
    switch (inputId) {
      case 'shinobiInput':
        bookId = 1;
        break;
      case 'tessInput':
        bookId = 2;
        break;
      case 'legendsInput':
        bookId = 3;
        break;
      case 'warpInput':
        bookId = 4;
        break;
      default:
        // Handle other cases or set a default book ID
        break;
    }
  
    let response = await fetch(`http://localhost:3001/updateBook`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: bookId,
        quantity: newInput,
      }),
    });
  
    let updatedBook = await response.json();
    console.log(updatedBook);
  }
  