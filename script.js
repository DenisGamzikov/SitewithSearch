const PopulationLimits = {
  anyCity: {min:0, max:100000000000},
  littleCity: {min:0, max:100000},
  averageCity: {min:100000, max:500000},
  aboveAverageCity: {min:500000, max:1000000},
  bigCity: {min:1000000, max:10000000000000}
}

function filter(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filterPopulation = formData.get("filterPopulation");
  const cityName = formData.get("cityName");
  

  
  const Limits = PopulationLimits[filterPopulation]
  console.log({Limits })
 filterByPopulation(Limits.min, Limits.max)
 const rowElements = document.querySelectorAll("tbody tr");
  rowElements.forEach((rowEl) => {
    rowEl.classList.remove("active-tr");
    rowEl.classList.remove("d-none");
    city = rowEl.querySelector(".city-name").innerText
    population = rowEl.querySelector(".population").innerText;
    if (population >= Limits.min && population <= Limits.max && city.includes(cityName)) {
      rowEl.classList.add("active-tr");
    } else {
      rowEl.classList.add("d-none");
    }
    let quantity = document.querySelectorAll("tr.active-tr").length;
    spanEl.innerText = quantity;
});
}
function filterByPopulation() {
  //
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
    <td class="city-name"> ${city.city}</td>
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

