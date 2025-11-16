// Referencias a elementos
const buscador = document.querySelector(".buscador");
const detallesGrid = document.querySelector(".detalles-grid");
const switchDomingo = document.querySelector(".switch input");
const btnLimpiar = document.querySelector(".limpiar-buscador");

// Crear contenedor de sugerencias
const sugerenciasContenedor = document.createElement("div");
sugerenciasContenedor.style.position = "absolute";
sugerenciasContenedor.style.backgroundColor = "white";
sugerenciasContenedor.style.border = "1px solid #032f60";
sugerenciasContenedor.style.maxHeight = "150px";
sugerenciasContenedor.style.overflowY = "auto";
sugerenciasContenedor.style.zIndex = "1000";
sugerenciasContenedor.style.display = "none";
sugerenciasContenedor.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
buscador.parentNode.style.position = "relative";
document.body.appendChild(sugerenciasContenedor);

// Función auxiliar para normalizar texto
function normalizar(texto) {
    return texto
        .normalize("NFD")            // separa letras de acentos
        .replace(/[\u0300-\u036f]/g, "") // elimina acentos
        .toLowerCase()
        .trim()                      // elimina espacios al inicio y final
        .replace(/\s+/g, " ");       // reemplaza múltiples espacios por uno
}

// Función para posicionar el contenedor justo debajo del input
function posicionarSugerencias() {
    const rect = buscador.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    sugerenciasContenedor.style.top = rect.bottom + scrollTop + "px";
    sugerenciasContenedor.style.left = rect.left + scrollLeft + "px";
    sugerenciasContenedor.style.width = rect.width + "px";
}

// Función para mostrar sugerencias
function mostrarSugerencias(valor) {
    sugerenciasContenedor.innerHTML = "";
    if (!valor) {
        sugerenciasContenedor.style.display = "none";
        return;
    }

    const coincidencias = pueblos.filter(p =>
        normalizar(p.pueblo).includes(normalizar(valor))
    ).slice(0, 3); // máximo 3 resultados

    coincidencias.forEach(p => {
        const div = document.createElement("div");
        div.textContent = p.pueblo;
        div.style.padding = "8px";
        div.style.cursor = "pointer";
        div.style.transition = "background-color 0.2s";
        
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "#032f60";
            div.style.color = "#fff";
        });
        div.addEventListener("mouseout", () => {
            div.style.backgroundColor = "#fff";
            div.style.color = "#000";
        });

        div.addEventListener("click", () => {
            buscador.value = p.pueblo;
            actualizarDetalles(p);
            sugerenciasContenedor.style.display = "none";
        });

        sugerenciasContenedor.appendChild(div);
    });

    if (coincidencias.length) {
        posicionarSugerencias();
        sugerenciasContenedor.style.display = "block";
    } else {
        sugerenciasContenedor.style.display = "none";
    }
}

// Función para actualizar los detalles
function actualizarDetalles(pueblo) {
    const valores = detallesGrid.querySelectorAll(".detalle-valor");
    const firma = detallesGrid.querySelector(".firma-box");

    valores[0].textContent = pueblo.nave || "";
    valores[1].textContent = pueblo.sección || "";
    valores[2].textContent = pueblo.posición || "";
    valores[3].textContent = pueblo.provincia || "";

    // Gestionar firma según switch de domingo
    if (switchDomingo.checked) {
        firma.className = pueblo["firma-domingo"] === "TRUE" ? 
            "firma-box firma-box-checked" : "firma-box firma-box-unchecked";
    } else {
        firma.className = pueblo.firma === "TRUE" ? 
            "firma-box firma-box-checked" : "firma-box firma-box-unchecked";
    }
}

// Escuchar el input
buscador.addEventListener("input", e => mostrarSugerencias(e.target.value));

// Reaplicar firma si se cambia el switch del domingo
switchDomingo.addEventListener("change", () => {
    const puebloSeleccionado = pueblos.find(p => p.pueblo === buscador.value);
    if (puebloSeleccionado) actualizarDetalles(puebloSeleccionado);
});

// Cerrar sugerencias si se hace click fuera
document.addEventListener("click", e => {
    if (!buscador.contains(e.target) && !sugerenciasContenedor.contains(e.target)) {
        sugerenciasContenedor.style.display = "none";
    }
});

// Reposicionar sugerencias al redimensionar ventana o al hacer scroll
window.addEventListener("resize", () => {
    if (sugerenciasContenedor.style.display === "block") posicionarSugerencias();
});
window.addEventListener("scroll", () => {
    if (sugerenciasContenedor.style.display === "block") posicionarSugerencias();
});

// Botón para limpiar buscador y resetear detalles
btnLimpiar.addEventListener("click", () => {
    buscador.value = "";
    sugerenciasContenedor.style.display = "none";
    const valores = detallesGrid.querySelectorAll(".detalle-valor");
    const firma = detallesGrid.querySelector(".firma-box");
    valores.forEach(v => v.textContent = "");
    firma.className = "firma-box firma-box-unchecked";
});
