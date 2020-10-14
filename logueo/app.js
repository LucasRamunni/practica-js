//  const usuario = {
//      nombre: "pmarino",
//      password: "12345678",
//  };
//  localStorage.setItem("logueo", JSON.stringify(usuario));
//  localStorage.setItem('autenticado', 'false')

let botoncito = document.getElementById("botones");

//let logueo = false;
let logueo = localStorage.getItem("autenticado");

const validacion = (logueo) => {
  let pagina = location.pathname;
  if (pagina === "/admin.html") {
    if (logueo === "false") {
      // $('#exampleModalCenter').modal('show')
      location = "index.html";
    }
  }
};

const loguear = () => {
  if (logueo === "true") {
    botoncito.innerHTML = botonCerrar;
  } else {
    botoncito.innerHTML = botonInicio;
  }
};

const logueoChange = () => {
  let usuario = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  let dato = JSON.parse(localStorage.getItem("logueo"));
  if (usuario === "" || password === "") {
    return alert("Debe ingresar valores en los campos");
  }
  if (dato.nombre === usuario) {
    if (dato.password === password) {
      logueo = true;
      loguear();
      localStorage.setItem("autenticado", "true");
      window.location = "admin.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } else {
    alert("Usuario o contraseña incorrectos");
  }

  document.getElementById("user").value = "";
  document.getElementById("password").value = "";
  //   logueo = !logueo;
  //   if (!logueo) {
  //     alert("Se ha deslogueado con éxito");
  //   }
  //   loguear();
};
const desloguear = () => {
  logueo = false;
  alert("Has sido deslogueado");
  localStorage.setItem("autenticado", "false");
  loguear();
  window.location = "index.html";
};
let botonInicio = `<button
              id="botonLogueo"
              class="btn btn-outline-success my-2 my-sm-0"
              type="button"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              Iniciar sesión
            </button>`;
let botonCerrar = `<button
              id="botonSingout"
              class="btn btn-outline-secondary my-2 my-sm-0"
              type="button"
              onclick="desloguear()"
            >
              Cerrar sesión
            </button>`;
loguear();
validacion(logueo);
