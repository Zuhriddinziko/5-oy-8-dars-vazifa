let wrapper = document.querySelector('#wrapper')
let loader = document.querySelector('#loader')
function crateCard(user) {
  return `   <div id="car">
<img src="${user.flag}" alt="flag">
<b style="color: red;">${user.country}</b>
<p>${user.code}</p>
<p>${user.id}</p>
</div>
`;
}
document.addEventListener('DOMContentLoaded', function () {
  fetch('https://cars-pagination.onrender.com/all-countries/',
    {
      method: 'GET'
    })
    .then(response => {
      if (response.status == 200) {
        return response.json()
      }

    })
    .then(data => {
      data.length && data.forEach(function (user) {
        let car = crateCard(user);
        console.log(data);
        wrapper.innerHTML += car;

      })
    })
    .catch(er => {
      console.log(er);
    })
    .finally(function () {
      loader.remove();
    })
})