const data = [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        phone: "210.067.6132",
        website: "elvis.io",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        phone: "024-648-3804",
        website: "ambrose.net",
    },
];

//localStorage.setItem("usuarios", JSON.stringify(data));

let datos = [];
let modalito = document.getElementById("modalBody");
const tbody = document.getElementById("cuerpito");

const borrarData = (index) => {
    let persona = datos.find(function(user) {
        return user.id === index;
    });

    let newArray = datos.filter(function(user) {
        return user.id != index;
    });

    let valor = confirm(`esta seguro que quiere eliminar a ${persona.name}?`);

    if (valor) {
        localStorage.setItem("usuarios", JSON.stringify(newArray));
        cargarData();
    }
};

function cargarData() {
    tbody.innerHTML = "";
    datos = JSON.parse(localStorage.getItem("usuarios"));
    datos.map((usuario) => {
        let tablaUser = `
        <tr>
       <th scope="row">${usuario.id}</th>
         <td>${usuario.name}</td>
          <td>${usuario.username}</td>
           <td>${usuario.email}</td>
            <td><button class="btn btn-danger mr-2" onclick="borrarData(${usuario.id})"><i class="fa fa-trash-o" aria-hidden="true"></i></button><button class="btn btn-warning" onclick="mostrarModal(${usuario.id})" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
                   
        </tr>
        `;

        tbody.innerHTML += tablaUser;
    });
}

const mostrarModal = (index) => {
    let persona = datos.find(function(user) {
        return user.id === index;
    });

    let contenido = `
          
          <div class="form-group">
                <label>Id</label>
                <input type="text" class="form-control" readonly id="id" value=${index}/>
              </div>
              <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control" id="nombre" value=${persona.username}/>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" id="email" value=${persona.email} />
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" id="phone" value=${persona.phone} />
              </div>
              <div class="form-group">
                <label>Website</label>
                <input type="text" class="form-control" id="website" value=${persona.website} />
              </div>

              <div class="modal-footer">
                <button  onclick="updateDato()" data-dismiss="modal" class="btn btn-success">
                  Save changes
                </button>
              </div>
            
  `;

    modalito.innerHTML = contenido;
};

const updateDato = () => {
    // e.preventDefault();
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let website = document.getElementById("website").value;
    // debugger;
    datos.map(function(user) {
        if (user.id + "/" === id) {
            user.nombre = nombre;
            user.email = email;
            user.phone = phone;
            user.website = website;
        }
    });
    localStorage.setItem("usuarios", JSON.stringify(datos));
    cargarData();
};

cargarData();