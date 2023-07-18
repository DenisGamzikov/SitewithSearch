function filter(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filterPopulation = formData.get("filterPopulation");
  const citySize = formData.get("citySize");
}
const loaderEl = document.getElementById("loader");
const spanEl = document.getElementById("counter");
function loadingData() {
  loaderEl.classList.add("d-block");
  fetch("./cities+.json")
    .then(getResponse)
    .then((cities) => {
      console.log({ cities });
      const tableEl = document.getElementById("table-data");
      let citiesHtml = "";

      cities.forEach((city) => {
        citiesHtml += `
    <tr>
    <td> ${city.address}</td>
    <td class="population">${city.population}</td>
    <td class="age">${2023 - city.foundation_year}</td>
    </tr>`;
      });
      loaderEl.classList.add("d-none");
      tableEl.innerHTML = citiesHtml;
      let quantity = document.getElementsByTagName("tr").length;
      spanEl.innerText = quantity;
    });
  function getResponse(response) {
    return response.json();
  }
}
loadingData();
