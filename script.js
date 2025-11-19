const mapaDiv = document.getElementById("cuadro-mapa");

const mapasPorNave = {
    "Nave 6": `
        <table class="mapaEstilos6" border="1" cellspacing="0" cellpadding="8">
            <tr>
                <td style="border-right: none;border-top: none;border-left: none;">5</td>
                <td rowspan="2" style="border-right: none;border-left:none;border-top: none;"></td>
                <td rowspan="7" style="border-left: none;border-right: none;border-top: none;"></td>
                <td rowspan="8" style="border-left: none;border-right: none;border-top: none;"></td>
                <td rowspan="8" style="border-left: none;border-top: none;border-right: none;"></td>
            </tr>
            <tr>
                <td style="border-left: none;" class="tipoAlmacen seccionA" id="posicion1"></td>
            </tr>
            <tr>
                <td style="border-left: none;">6</td>
                <td class="tipoAlmacen seccionB" id="posicion1"></td>
            </tr>
            <tr>
                <td style="border-left: none;" class="tipoAlmacen seccionA" id="posicion2"></td>
                <td class="tipoAlmacen seccionB" id="posicion2"></td>
            </tr>
            <tr>
                <td style="border:none;">7</td>
                <td class="tipoAlmacen seccionB" id="posicion3"></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td class="tipoAlmacen seccionB" id="posicion4"></td>
            </tr>
            <tr>
                <td style="border:none;">8</td>
                <td class="tipoAlmacen seccionB" id="posicion5"></td>
            </tr>
            <tr>
                <td style="border:none;"></td>
                <td style="border-right:none;border-bottom:none;" class="fueraZona"></td>
                <td style="border-left:none;border-bottom:none;" class="fueraZona"></td>
            </tr>
            <tr>
                <td style="border:none;">9</td>
                <td style="border-right:none;border-top:none;border-bottom: none;" class="fueraZona"></td>
                <td style="border-left:none;border-top:none;border-bottom: none;" class="fueraZona"></td>
                <td style="border-bottom: none;" class="tipoAlmacen seccionC" id="posicion1"></td>
                <td style="border-bottom: none;border-right: none;" class="tipoAlmacen seccionC" id="posicion2"></td>
            </tr>
        </table>
    `,
    "Nave 5 ABC": `
        <table class="mapaEstilos5ABC" border="1" cellspacing="0" cellpadding="8">
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion1" style="border-top: none;border-left: none;">15</td>
                <td rowspan="10" style="border-top: none;border-bottom: none;"></td>
                <td class="seccionB tipoAlmacen" id="posicion1" style="border-top: none;"></td>
                <td class="seccionC tipoAlmacen" id="posicion1" style="border-top: none;border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion2" style="border-left: none;"></td>
                <td class="seccionB tipoAlmacen" id="posicion2"></td>
                <td rowspan="4" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion3" style="border-left: none;">16</td>
                <td class="seccionB tipoAlmacen" id="posicion3"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion4" style="border-left: none;"></td>
                <td class="seccionB tipoAlmacen" id="posicion4"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion5" style="border-left: none;">17</td>
                <td class="seccionB tipoAlmacen" id="posicion5"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion6" style="border-left: none;"></td>
                <td class="seccionB tipoAlmacen" id="posicion6"></td>
                <td class="seccionC tipoAlmacen" id="posicion2" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion7" style="border-left: none;">18</td>
                <td class="seccionB tipoAlmacen" id="posicion7"></td>
                <td class="seccionC tipoAlmacen" id="posicion3" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion8" style="border-left: none;"></td>
                <td class="seccionB tipoAlmacen" id="posicion8"></td>
                <td class="seccionC tipoAlmacen" id="posicion4" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion9" style="border-left: none;">19</td>
                <td class="seccionB tipoAlmacen" id="posicion9"></td>
                <td class="seccionC tipoAlmacen" id="posicion5" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA tipoAlmacen" id="posicion10" style="border-left: none;border-bottom: none;"></td>
                <td class="seccionB tipoAlmacen" id="posicion10" style="border-bottom: none;"></td>
                <td class="fueraZona" style="border-right: none;border-bottom: none;"></td>
            </tr>
        </table>
    `,
    "Nave 5 DEF": `
        <table class="mapaEstilos5DEF" border="1" cellspacing="0" cellpadding="8">
            <tr>
                <td style="border: none;"></td>
                <td rowspan="10" style="border: none;"></td>
                <td class="seccionE tipoAlmacen" id="posicion10" style="border-top: none;"></td>
                <td style="border-top: none;border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionD tipoAlmacen" id="posicion8" style="border-left: none;">11</td>
                <td class="seccionE tipoAlmacen" id="posicion9"></td>
                <td class="seccionF tipoAlmacen" id="posicion5" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionD tipoAlmacen" id="posicion7" style="border-left: none;"></td>
                <td class="seccionE tipoAlmacen" id="posicion8"></td>
                <td class="seccionF tipoAlmacen" id="posicion4" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionD tipoAlmacen" id="posicion6" style="border-left: none;">12</td>
                <td class="seccionE tipoAlmacen" id="posicion7"></td>
                <td class="seccionF tipoAlmacen" id="posicion3" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionD tipoAlmacen" id="posicion5" style="border-left: none;"></td>
                <td class="seccionE tipoAlmacen" id="posicion6"></td>
                <td class="seccionF tipoAlmacen" id="posicion2" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionD tipoAlmacen" id="posicion4" style="border-left: none;">13</td>
                <td class="seccionE tipoAlmacen" id="posicion5"></td>
                <td class="seccionF tipoAlmacen" id="posicion1" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionD tipoAlmacen" id="posicion3" style="border-left: none;"></td>
                <td class="seccionE tipoAlmacen" id="posicion4"></td>
                <td rowspan="4" class="fueraZona" style="border-right: none;border-bottom: none;"></td>
            </tr>
            <tr>
                <td class="seccionD tipoAlmacen" id="posicion2" style="border-left: none;">14</td>
                <td class="seccionE tipoAlmacen" id="posicion3"></td>
            </tr>
            <tr>
                <td class="seccionD tipoAlmacen" id="posicion1" style="border-left: none;"></td>
                <td class="seccionE tipoAlmacen" id="posicion2"></td>
            </tr>
            <tr>
                <td style="border: none;"></td>
                <td class="seccionE tipoAlmacen" id="posicion1" style="border-bottom: none;"></td>
            </tr>
        </table>
    `,
    "Nave 1": `
        <table class="mapaEstilos1" border="1" cellspacing="0" cellpadding="8">
            <tr>
                <td rowspan="9" style="border: none;"></td>
                <td id="posicion1" class="tipoAlmacen" style="border-top: none;border-right:none;">81</td>
            </tr>
            <tr>
                <td id="posicion2" class="tipoAlmacen" style="border-right:none;"></td>
            </tr>
            <tr>
                <td id="posicion3" class="tipoAlmacen" style="border-right:none;">80</td>
            </tr>
            <tr>
                <td id="posicion4" class="tipoAlmacen" style="border-right:none;"></td>
            </tr>
            <tr>
                <td id="posicion5" class="tipoAlmacen" style="border-right:none;">79</td>
            </tr>
            <tr>
                <td id="posicion6" class="tipoAlmacen" style="border-right:none;"></td>
            </tr>
            <tr>
                <td id="posicion7" class="tipoAlmacen" style="border-right:none;">78</td>
            </tr>
            <tr>
                <td id="posicion8" class="tipoAlmacen" style="border-right:none;"></td>
            </tr>
            <tr>
                <td id="posicion9" class="tipoAlmacen" style="border-bottom: none;border-right:none;">77</td>
            </tr>
            </table>
    `,
    "Nave 3": `
        <table class="mapaEstilos3" border="1" cellspacing="0" cellpadding="8">
            <tr>
                <td rowspan="13" style="border: none;" class="fueraZona"></td>
                <td class="tipoAlmacen seccionA" id="posicion1" style="border-top: none;"></td>
                <td style="border: none;">58</td>
            </tr>
            <tr>
                <td style="border: none;"></td>
                <td style="border: none;"></td>
            </tr>
            <tr>
                <td class="tipoAlmacen seccionA" id="posicion2"></td>
                <td style="border: none;">57</td>
            </tr>
            <tr>
                <td class="tipoAlmacen seccionA" id="posicion3"></td>
                <td style="border: none;"></td>
            </tr>
            <tr>
                <td class="tipoAlmacen seccionA" id="posicion4"></td>
                <td style="border: none;">56</td>
            </tr>
            <tr>
                <td style="border: none;"></td>
                <td style="border: none;"></td>
            </tr>
            <tr>
                <td class="tipoAlmacen seccionA" id="posicion5"></td>
                <td style="border: none;">55</td>
            </tr>
            <tr>
                <td class="tipoAlmacen seccionA" id="posicion6"></td>
                <td style="border: none;"></td>
            </tr>
            <tr>
                <td class="tipoAlmacen seccionA" id="posicion7"></td>
                <td style="border: none;">54</td>
            </tr>
            <tr>
                <td style="border: none;"></td>
                <td class="tipoAlmacen seccionB" id="posicion1" style="border-right:none;"></td>
            </tr>
            <tr>
                <td class="tipoAlmacen seccionA" id="posicion8"></td>
                <td class="tipoAlmacen seccionB" id="posicion2" style="border-right:none;">53</td>
            </tr>
            <tr>
                <td class="tipoAlmacen seccionA" id="posicion9"></td>
                <td class="tipoAlmacen seccionB" id="posicion3" style="border-right:none;"></td>
            </tr>
            <tr>
                <td style="border: none;"></td>
                <td class="tipoAlmacen seccionB" id="posicion4" style="border-right:none;border-bottom:none;">52</td>
            </tr>
        </table>
    `,
    "default": ``
};

/* ----------------------------- ALTURA MÓVIL ------------------------------ */

function ajustarAltura() {
    const app = document.querySelector('.app-container');
    app.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', ajustarAltura);
window.addEventListener('orientationchange', ajustarAltura);
ajustarAltura();

/* ----------------------------- REFERENCIAS ------------------------------ */

const buscador = document.querySelector(".buscador");
const detallesGrid = document.querySelector(".detalles-grid");
const switchDomingo = document.querySelector(".switch input");
const btnLimpiar = document.querySelector(".limpiar-buscador");

/* ----------------------- SUGERENCIAS DEL BUSCADOR ----------------------- */

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

function normalizar(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function posicionarSugerencias() {
    const rect = buscador.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;
    sugerenciasContenedor.style.top = rect.bottom + scrollTop + "px";
    sugerenciasContenedor.style.left = rect.left + scrollLeft + "px";
    sugerenciasContenedor.style.width = rect.width + "px";
}

function mostrarSugerencias(valor) {
    sugerenciasContenedor.innerHTML = "";
    if (!valor) {
        sugerenciasContenedor.style.display = "none";
        return;
    }

    const coincidencias = pueblos
        .filter(p => normalizar(p.pueblo).includes(normalizar(valor)))
        .slice(0, 3);

    coincidencias.forEach(p => {
        const div = document.createElement("div");
        div.textContent = p.pueblo;
        div.style.padding = "8px";
        div.style.cursor = "pointer";

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
    }
}

/* ------------------------ MAPA: NORMALIZAR NAVE ------------------------ */

function getMapaForNave(nave, seccion) {
    if (!nave) return mapasPorNave["default"];

    const n = String(nave).trim();
    const s = String(seccion).trim().toUpperCase();

    // --- NAVE 1 ---
    if (n === "1" || n === "Nave 1") {
        return mapasPorNave["Nave 1"];
    }

    // --- NAVE 3 ---
    if (n === "3" || n === "Nave 3") {
        return mapasPorNave["Nave 3"];
    }

    // --- NAVE 5 ---
    if (n === "5" || n === "Nave 5") {

        // ABC → mapa ABC
        if (["A", "B", "C"].includes(s)) {
            return mapasPorNave["Nave 5 ABC"];
        }

        // DEF → mapa DEF
        if (["D", "E", "F"].includes(s)) {
            return mapasPorNave["Nave 5 DEF"]; // ← tu nombre de key es este
        }
    }

    // --- NAVE 6 (solo ABC) ---
    if (n === "6" || n === "Nave 6") {
        return mapasPorNave["Nave 6"]; 
    }

    return mapasPorNave["default"];
}

/* --------------------------- ACTUALIZAR DETALLES ------------------------ */

function actualizarDetalles(pueblo) {
    const valores = detallesGrid.querySelectorAll(".detalle-valor");
    const firma = detallesGrid.querySelector(".firma-box");

    valores[0].textContent = pueblo.nave || "";
    valores[1].textContent = pueblo.sección || "";
    valores[2].textContent = pueblo.posición || "";
    valores[3].textContent = pueblo.provincia || "";

    if (switchDomingo.checked) {
        firma.className =
            pueblo["firma-domingo"] === "TRUE"
                ? "firma-box firma-box-checked"
                : "firma-box firma-box-unchecked";
    } else {
        firma.className =
            pueblo.firma === "TRUE"
                ? "firma-box firma-box-checked"
                : "firma-box firma-box-unchecked";
    }

    mapaDiv.innerHTML = getMapaForNave(pueblo.nave, pueblo.sección);

    // Quitar resaltado previo
    mapaDiv.querySelectorAll("td").forEach(td => td.classList.remove("td-activo"));

    // Resaltar celda correcta según si hay sección o no
    let selector;

    if (!pueblo.sección || pueblo.sección.trim() === "") {
        // NAVE SIN SECCIONES (NAVE 1)
        selector = `#posicion${pueblo.posición}`;
    } else {
        // NAVES CON SECCIONES (5 y 6)
        selector = `td.seccion${pueblo.sección}#posicion${pueblo.posición}`;
    }

    const celda = mapaDiv.querySelector(selector);
    if (celda) celda.classList.add("td-activo");

}

/* ----------------------------- EVENTOS ------------------------------ */

buscador.addEventListener("input", e => mostrarSugerencias(e.target.value));

switchDomingo.addEventListener("change", () => {
    const p = pueblos.find(p => p.pueblo === buscador.value);
    if (p) actualizarDetalles(p);
});

document.addEventListener("click", e => {
    if (!buscador.contains(e.target) && !sugerenciasContenedor.contains(e.target))
        sugerenciasContenedor.style.display = "none";
});

window.addEventListener("resize", () => {
    if (sugerenciasContenedor.style.display === "block") posicionarSugerencias();
});
window.addEventListener("scroll", () => {
    if (sugerenciasContenedor.style.display === "block") posicionarSugerencias();
});

btnLimpiar.addEventListener("click", () => {
    buscador.value = "";
    sugerenciasContenedor.style.display = "none";
    const valores = detallesGrid.querySelectorAll(".detalle-valor");
    const firma = detallesGrid.querySelector(".firma-box");
    valores.forEach(v => v.textContent = "");
    firma.className = "firma-box firma-box-unchecked";
    mapaDiv.innerHTML = mapasPorNave["default"];
});
