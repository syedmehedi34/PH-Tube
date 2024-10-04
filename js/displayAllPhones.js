const showAllFunctions = (phones, status) => {
  const length = Number(Object.values(phones).length);
  console.log(phones, status, length);

  //

  if (status) {
    displayAllPhones(phones);
  } else if (length < 1) {
    document.getElementById("phone-container").innerHTML =
      "sorry Their is no phones";
  } else {
    displayAllPhones(phones.slice(0, 6));
  }
};

// display cards portion
const displayAllPhones = (phones) => {
  //
  //
  document.getElementById("phone-container").innerHTML = "";
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    // console.log(phone);
    const { brand, phone_name, slug, image } = phone;

    //
    // now create the cards according to the data
    //
    const div = document.createElement("div");
    div.classList = "card bg-base-100  shadow-xl";
    div.innerHTML = `
    

 <figure class="px-10 pt-10">
          <img
            src="${image}"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${brand}</h2>
          <p>
            ${phone_name}
          </p>
          <h3 class="text-xl font-bold">$999</h3>
          <button 
          onclick="phoneDetails('${slug}')"
          class="btn btn-primary">Show Details</button>
        </div>

    `;
    phoneContainer.appendChild(div);
  });
};
