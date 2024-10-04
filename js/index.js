// ! all phones loading function
const loadAllPhones = async (searchText, status) => {
  // console.log(status, searchText);
  document.getElementById("spinner").classList.add("hidden");

  //
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${
      searchText ? searchText : "iphone"
    }`
  );
  const data = await response.json();
  // console.log(status, searchText);

  showAllFunctions(data.data, status);
};

//! load a function after 3 sec [ search button ]
const handleSearch = () => {
  document.getElementById("spinner").classList.remove("hidden");
  const searchText = document.getElementById("search-box").value;

  setTimeout(function () {
    loadAllPhones(searchText, false);

    // displayAllPhones(false);
  }, 3);
};

// all button
// show all button
const handleShowAll = () => {
  const searchText = document.getElementById("search-box").value;
  loadAllPhones(searchText, true);
};

// ? extra portion .
loadAllPhones("iphone", false);
