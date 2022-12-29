let where = document.getElementById("secc-cards")
let dataEvents = data
let upcomingEvents1 = filtrarUpcoming(dataEvents)

function filtrarUpcoming (dataEvents){
    let upcoming = []
    for (let elements of dataEvents.events){
        if(elements.date > dataEvents.currentDate){
            upcoming.push(elements)
          }
        }
      return upcoming  
}
function crearTemplete(upcomingEvents1, location){
    let upcomingEvents = ""
    for (let elements of upcomingEvents1){
    let template = `
    <div class="secc-cards">
      <div class="card border border-2 border-white  bg-dark bg-success p-2 text-white bg-opacity-50 m-3 d-flex flex-column" style="width: 19rem;">
        <div class="card.top " > 
          <img src="${elements.image}" class="card-img-top" alt="Collectivities Party">
          <div class="card-body" style="height: 24vh;">
            <h5 class="card-title"><stong>${elements.name}</stong></h5>
            <p class="card-text">${elements.description} </p>
          </div>
          <div class="card.botton d-flex justify-content-around">
            <p class="card-text "> Price : $ ${elements.price}</p>
            <a href="./details.html" class="btn btn-dark ">See More</a>
          </div>
        </div>
      </div>
    </div>
    `
    upcomingEvents += template
    } 
    location.innerHTML = ` ${upcomingEvents}`
}

crearTemplete(upcomingEvents1, where)










  
