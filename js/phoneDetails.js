const phoneDetails = async (slug) => {
  console.log(slug);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phone/${slug}`
  );
  const data = await response.json();
  console.log(data.data);

  // modal portion
  //   edit model details here
  my_modal_1.showModal();
};
