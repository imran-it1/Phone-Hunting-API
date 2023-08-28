// Data load

const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  showPhone(phones);
};

const showPhone = (phones) => {
  // 1. Find the container phone card div
  const phoneContainer = document.getElementById("phone-container");
  const phone = phones.forEach((phone) => {
    console.log(phone);
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
  });
};

loadPhone();
