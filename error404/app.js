function url() {
    const url = window.location.href
    const pag = ["admin.html", "index.html", " "]
    let existe;
    console.log("aqui", url)
    existe = pag.find((item) => {
        return `http://127.0.0.1:5500/${item}` === url
    })

    console.log(existe)

    if (existe != undefined) {
        console.log("si")
    } else {
        window.location.replace("http://127.0.0.1:5500/error404.html");
    }
}
url()

// window.onload = function() {

//     const url = window.location.href
//     const pag = ["admin.html", "index.html", " "]
//     let existe;
//     console.log("aqui", url)
//     existe = pag.find((item) => {
//         return `http://127.0.0.1:5500/${item}` === url
//     })

//     if (existe != undefined) {
//         console.log("si")
//     } else {
//         window.location.replace("http://127.0.0.1:5500/error404.html");
//     }
// }