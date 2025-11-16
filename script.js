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
                <td class="seccionA" id="posicion1" style="border-top: none;border-left: none;">15</td>
                <td rowspan="10" class="fueraZona" style="border-top: none;border-bottom: none;"></td>
                <td class="seccionB" id="posicion1" style="border-top: none;"></td>
                <td class="seccionC" id="posicion1" style="border-top: none;border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion2" style="border-left: none;"></td>
                <td class="seccionB" id="posicion2"></td>
                <td rowspan="4" class="fueraZona" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion3" style="border-left: none;">16</td>
                <td class="seccionB" id="posicion3"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion4" style="border-left: none;"></td>
                <td class="seccionB" id="posicion4"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion5" style="border-left: none;">17</td>
                <td class="seccionB" id="posicion5"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion6" style="border-left: none;"></td>
                <td class="seccionB" id="posicion6"></td>
                <td class="seccionC" id="posicion2" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion7" style="border-left: none;">18</td>
                <td class="seccionB" id="posicion7"></td>
                <td class="seccionC" id="posicion3" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion8" style="border-left: none;"></td>
                <td class="seccionB" id="posicion8"></td>
                <td class="seccionC" id="posicion4" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion9" style="border-left: none;">19</td>
                <td class="seccionB" id="posicion9"></td>
                <td class="seccionC" id="posicion5" style="border-right: none;"></td>
            </tr>
            <tr>
                <td class="seccionA" id="posicion10" style="border-left: none;border-bottom: none;"></td>
                <td class="seccionB" id="posicion10" style="border-bottom: none;"></td>
                <td class="fueraZona" style="border-right: none;border-bottom: none;"></td>
            </tr>
        </table>
    `,
    "default": `<p style="text-align:center;">Selecciona un pueblo</p>`
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

function getMapaForNave(nave) {
    if (!nave) return mapasPorNave["default"];

    const s = String(nave).trim();
    const candidates = new Set();

    candidates.add(s);
    candidates.add("Nave " + s);
    candidates.add(s.replace(/^nave\s*/i, ""));

    const num = s.match(/\d+/)?.[0];
    if (num) {
        candidates.add(num);
        candidates.add("Nave " + num);
    }

    const keys = Object.keys(mapasPorNave);

    for (const c of candidates)
        for (const key of keys)
            if (key.toLowerCase() === c.toLowerCase())
                return mapasPorNave[key];

    for (const c of candidates)
        for (const key of keys)
            if (key.toLowerCase().includes(String(c).toLowerCase()))
                return mapasPorNave[key];

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

    mapaDiv.innerHTML = getMapaForNave(pueblo.nave);

    // Quitar resaltado previo
    mapaDiv.querySelectorAll("td").forEach(td => td.classList.remove("td-activo"));

    // Resaltar la celda correcta
    const selector = `td.seccion${pueblo.sección}#posicion${pueblo.posición}`;
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
