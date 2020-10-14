// const usuario = {
//   nombre: "pmarino",
//   password: "12345678",
// };
// localStorage.setItem("logueo", JSON.stringify(usuario));

let botoncito = document.getElementById("botones");

let logueo = false;

const loguear = () => {
  if (logueo) {
    botoncito.innerHTML = botonCerrar;
  } else {
    botoncito.innerHTML = botonInicio;
  }

  //   logueo = !logueo;
  //   if (logueo) {
  //     botoncito.innerText = "Cerrar Sesión";
  //     botoncito.className = "btn btn-secondary";
  //   } else {
  //     botoncito.innerText = "Iniciar Sesión";
  //     botoncito.className = "btn btn-outline-success";
  //   }
};

const logueoChange = () => {
  let usuario = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  let dato = JSON.parse(localStorage.getItem("logueo"));

  if (dato.nombre === usuario) {
    if (dato.password === password) {
      logueo = true;
      loguear();
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
  loguear();
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
