function muestraoculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == "none") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
}

function mostrarmas(id) {
    let div = document.getElementById(id);
    let paragraph = div.querySelector("p");
    let btn = div.nextElementSibling;
    if (paragraph.classList.contains("expandido")) {
        paragraph.classList.remove("expandido");
        btn.textContent = "Ver más";
    } else {
        paragraph.classList.add("expandido");
        btn.textContent = "Ver menos";
    }
}

