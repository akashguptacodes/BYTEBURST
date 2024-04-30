document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");
  
    async function performSearch(query) {
      const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
  
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data from the API");
        }
        const data = await response.json();
  
        displayResults(data.docs);
      } catch (error) {
        console.error("Error fetching data:", error);
        searchResults.innerHTML =
          "<p>Failed to fetch data. Please try again later.</p>";
      }
    }
  
    function displayResults(books) {
      searchResults.innerHTML = "";
  
      books.forEach((book) => {
        const bookItem = document.createElement("div");
      bookItem.classList.add("book-item");
      const bookImage = document.createElement("img");
      bookImage.classList.add("book-image");
      bookImage.src = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : "https://via.placeholder.com/150";
      bookItem.appendChild(bookImage);
      const bookTitle = document.createElement("h3");
      bookTitle.textContent = book.title;
      bookItem.appendChild(bookTitle);
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      overlay.style.display = "none";
  
        const addToWishlistButton = document.createElement("button");
        addToWishlistButton.textContent = "Add to Wishlist";
        addToWishlistButton.classList.add("wishlist-button");
        addToWishlistButton.style.padding = "8px 16px";
        addToWishlistButton.style.backgroundColor = "#ff9800";
        addToWishlistButton.style.color = "white";
        addToWishlistButton.style.border = "none";
        addToWishlistButton.style.borderRadius = "5px";
        addToWishlistButton.style.cursor = "pointer";
        addToWishlistButton.style.fontWeight = "bold";
  
        overlay.appendChild(addToWishlistButton);
  
        bookItem.appendChild(overlay);
  
        bookItem.addEventListener("mouseenter", () => {
          overlay.style.display = "block";
        });
        bookItem.addEventListener("mouseleave", () => {
          overlay.style.display = "none";
        });
  
        searchResults.appendChild(bookItem);
      });
    }
  
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query) {
        performSearch(query);
      }
    });
  
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
          performSearch(query);
        }
      }
    });
  });
  let footer = document.getElementById("footer");
  let btn = document.getElementById("btn");
  let body = document.querySelector("body");
  let icon1 = document.getElementById("icon1");
  let icon2 = document.getElementById("icon2");
  let icon3 = document.getElementById("icon3");
  let navi = document.querySelectorAll("#navi");
  let head = document.querySelectorAll(".main");
  let innerbody=document.querySelector(".inner-body");
  function onToggle() {
    if (body.style.backgroundColor === "white") {
      body.style.backgroundColor = "black";
      navi.forEach((nav) => (nav.style.backgroundColor = "white"));
      icon1.style.color = "black";
      icon2.style.color = "black";
      icon3.style.color = "black";
      head.forEach((h) => (h.style.color = "white"));
      footer.style.backgroundColor = "white";
      footer.style.color = "black";
      innerbody.style.backgroundColor="rgb(40, 45, 67)";
    } else {
      body.style.backgroundColor = "white";
      navi.forEach((nav) => (nav.style.backgroundColor = "black"));
      icon1.style.color = "white";
      icon2.style.color = "white";
      icon3.style.color = "white";
      head.forEach((h) => (h.style.color = "black"));
      footer.style.backgroundColor = "black";
      footer.style.color = "white";
    }
  }
  btn.addEventListener("click", onToggle);

