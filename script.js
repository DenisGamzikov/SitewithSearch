const loaderEl = document.getElementById("loader");
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
    <td class="population"> ${city.population}</td>
    <td class="age"> ${city.foundation_year}</td>
    </tr>`;
      });
      loaderEl.classList.add("d-none");
      tableEl.innerHTML = citiesHtml;
    });
  function getResponse(response) {
    return response.json();
  }
}
loadingData();
