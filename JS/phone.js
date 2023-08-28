// Data load

const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  showPhone(phones);
};

const showPhone = (phones) => {
  // 1. Find the container phone card div
  const phoneContainer = document.getElementById("phone-container");
  // Clear old search data of phone after click the search button
  phoneContainer.textContent = "";
  console.log(phones);

  // Button remove korte abar lada function else dite hobe jeta jhamela besi
  // if (phones.length > 12) {
  //   handleShowAll();
  // }
  // else{
  // }

  const showAllButton = document.getElementById("show-all-button");
  if (phones.length > 12) {
    showAllButton.classList.remove("hidden");
  } else {
    showAllButton.classList.add("hidden");
  }

  // Show few phones if there is find big phone list
  phones = phones.slice(0, 12);

  phones.forEach((phone) => {
    // 2. Creta the child element
    const phoneCard = document.createElement("div");
    // Set class of child element if needed
    phoneCard.classList = "card bg-base-100 shadow-xl";
    // 3.Set innerText or innerHTML
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
    <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
    <h2 class="card-title"> ${phone.phone_name} </h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <p><span class="font-semibold">Price:$999</span></p>
      <div class="card-actions">
        <button class="btn btn-primary">Show Details</button>
      </div>
    </div>
    `;
    // 4. append child
    phoneContainer.appendChild(phoneCard);
    // Clear phone container if user clear the search input
  });
  handleSpinner(false);
};

// Evabe korle button show korbe na tar jonno alada function creat kora lagbe

// Handle Show all Button
// const showAllButton = document.getElementById("show-all-button");
// const handleShowAll = () => {
//   showAllButton.classList.remove("hidden");
// };

// Handle Search Button
const handleSearch = () => {
  handleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // if (searchText !== "iphone") {
  //   alert("Product not found");
  //   searchField.value = "";
  //   return;
  // }
  loadPhone(searchText);
};

// Handle Spinner
const spinnerDiv = document.getElementById("spinner-div");
const handleSpinner = (isSpine) => {
  if (isSpine) {
    spinnerDiv.classList.remove("hidden");
  } else {
    spinnerDiv.classList.add("hidden");
  }
};

// loadPhone();
