let where = document.getElementById("secc-cards")
let dataEvents = data.events

function crearTemplete(dataEvents, location){
    let homeEvents = ""
    for (let elements of dataEvents){
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
    homeEvents += template
    } 
    location.innerHTML = ` ${homeEvents}`
}
crearTemplete(dataEvents, where)











