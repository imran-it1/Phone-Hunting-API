// Data load

const loadPhone = async (searchText = "13", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  showPhone(phones, isShowAll);
};

const showPhone = (phones, isShowAll) => {
  // 1. Find the container phone card div
  const phoneContainer = document.getElementById("phone-container");
  // Clear old search data of phone after click the search button
  phoneContainer.textContent = "";
  // console.log(phones);

  // Button remove korte abar lada function else dite hobe jeta jhamela besi
  // if (phones.length > 12) {
  //   handleShowAll();
  // }
  // else{
  // }

  const showAllButton = document.getElementById("show-all-button");
  if (phones.length > 12 && !isShowAll) {
    showAllButton.classList.remove("hidden");
  } else {
    showAllButton.classList.add("hidden");
  }

  // console.log(isShowAll);
  // Show few phones if there is find big phone list
  /**
   * 1. Normal Search a isShowAll er value hoy undefined. That mean falsy value.
   * !falsy = true , so er moddhe dhuke slice ta korbe.
   *
   * 2. Show all button a click korle tar value set hobe true,
   * !true = false, so slice hobe na. Sob gulo result show korbe
   *
   */

  // True hole er moddhe dhukbe na hole dhukbe na
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    // console.log(phone);
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
        <button onclick="handleShowDetails('${phone.slug}')" id ="show-details-button" class="btn btn-primary">Show Details</button>
      </div>
    </div>
    `;
    // 4. append child
    phoneContainer.appendChild(phoneCard);
    // Clear phone container if user clear the search input
  });
  // Spinner End
  handleSpinner(false);
};

// Evabe korle button show korbe na tar jonno alada function creat kora lagbe

// Handle Show all Button
// const showAllButton = document.getElementById("show-all-button");
// const handleShowAll = () => {
//   showAllButton.classList.remove("hidden");
// };

// Handle Search Button
const handleSearch = (isShowAll) => {
  // Spinner Start
  handleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // if (searchText !== "iphone") {
  //   alert("Product not found");
  //   searchField.value = "";
  //   return;
  // }
  loadPhone(searchText, isShowAll);
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

// Handle Show All Button
const handleShowAll = () => {
  handleSearch(true);
};

// Handle Show details Button
const showBetailsButton = document.getElementById("show-details-button");

const handleShowDetails = async (phoneID) => {
  // console.log(phoneID);
  // load signle phone data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${phoneID}`
  );
  const data = await res.json();
  const phone = data.data;
  // console.log(phone);
  showDetails(phone);
};

const showDetails = (phone) => {
  console.log(phone);
  const phoneName = document.getElementById("phone-name");
  phoneName.innerText = phone.name;
  // Show Modal
  show_details_modal.showModal();
};

loadPhone();
