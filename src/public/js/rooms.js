function crearPlantilla(data) {
  return `<div class="card">
            <div class="card-header">
                <div class="card-title">
                    ${data.titulo}
                </div>
            </div>
            <div class="card-body">
                <div class="p">${data.descripcion}</div>
            </div>
        </div>`;
}

function renderizarPlantilla(plantilla) {
  const roomsDiv = document.getElementById("rooms");
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = plantilla;
  roomsDiv.appendChild(html.body.children[0]);
}

async function renderRooms() {
  const response = await fetch("/rooms/list");
  const {rooms} = await response.json();
  const plantilla = rooms.map((room) => {
        return crearPlantilla(room)
  })
  console.log(plantilla);
  renderizarPlantilla('<div class="container d-flex justify-content-arrond">' + plantilla + "</div>")
}

renderRooms();
