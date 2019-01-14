const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchData(){
    const data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( json => doSomething(json.results[0]) )
  }

  fetchData()

  let addButton = document.querySelector("#add-button")
  addButton.addEventListener("click",function(event){
    fetchData()
  })

  function doSomething(data){
    console.log(data)
    let fullname = document.querySelector("#fullname")
    fullname.innerText = `${data.name.title}. ${data.name.first} ${data.name.last}`

    let email = document.querySelector("#email")
    email.innerText = data.email

    let street = document.querySelector("#street")
    street.innerText = data.location.street

    let city = document.querySelector("#city")
    city.innerText = data.location.city

    let state = document.querySelector("#state")
    state.innerText = data.location.state

    let postcode = document.querySelector("#postcode")
    postcode.innerText = data.location.postcode

    let phone = document.querySelector("#phone")
    phone.innerText = data.phone

    let cell = document.querySelector("#cell")
    cell.innerText = data.cell
    let dob = document.querySelector("#date_of_birth")
    dob.innerText = data.dob.date
    let photo = document.querySelector("#profile_picture")
    photo.src = data.picture.large
  }
});
