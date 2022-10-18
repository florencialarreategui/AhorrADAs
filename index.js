//------------------------- Nav-------------------------
const botonCategorias = document.getElementById("boton-categorias");
const botonBalance = document.getElementById("boton-balance");
const botonReporte = document.getElementById("boton-reportes");

// -------------------------Tarjetas categorias-balance-reporte-------------------------
const seccionCategorias = document.getElementById("seccion-categorias");
const seccionCentral = document.getElementById("seccion-central");
const seccionReportes = document.getElementById("seccion-reportes");

//------------------------- Operaciones-------------------------
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const seccionNuevaOperacion = document.getElementById(
  "accion-boton-nueva-operacion"
);
const tarjetaOperacionesAgregadas = document.getElementById(
  "tarjeta-operaciones-agregadas"
);
const botonCancelarOperacion = document.querySelector(
  "#boton-cancelar-operacion"
);
const botonAgregarOperacion = document.querySelector(
  "#boton-agregar-operacion"
);
const tarjetaSinOperaciones = document.getElementById(
  "tarjeta-sin-operaciones"
);
const inputDescripcionNuevaOperacion = document.getElementById(
  "descripcion-nueva-operacion"
);
const inputMontoNuevaOperacion = document.getElementById(
  "monto-nueva-operacion"
);
const contenedorOperacionesAgregadas = document.getElementById(
  "contenedor-operaciones-agregadas"
);
const selectCategoriaNuevaOperacion = document.getElementById(
  "select-categoria-nueva-operacion"
);
const inputDateNuevaOperacion = document.getElementById("dateNuevaOperacion");
const selectTipoNuevaOperacion = document.getElementById(
  "select-tipo-nueva-operacion"
);

//------------------------- Boton Agregar categorias-------------------------

const botonAgregarCategoria = document.getElementById(
  "agregar-categoria-boton"
);
const inputCategoriaNuevoNombre = document.getElementById(
  "input-categorias-nuevo-nombre"
);

//-------------------------Totales balances-------------------------
const balancesSumaGanancias = document.querySelector(".sumaGanancias");
const balancesSumaGastos = document.querySelector(".sumaGastos");
const balancesTotalFinal = document.querySelector(".totalBalances");
const datosPorCategorias = document.getElementById("totales-por-categorias");

// -------------funciones formulario FILTROS-------------------
const botonOcultarFiltros = document.getElementById("boton-ocultar-filtros");
const formularioFiltros = document.getElementById("form");
const formulario = document.getElementById("form");
const filtroTipo = document.getElementById("select-tipo");
const filtroCategorias = document.getElementById("select-categoria");
const filtroFecha = document.getElementById("date");
const selectOrdenarPor = document.getElementById("select-ordenar");
const divOperaciones = document.getElementById("div-operaciones");

//-------------------------Elementos de Reportes---------------------------
const panelEstadisticasReportes = document.getElementById(
  "panel-estadisticas-reportes"
);
const seccionResumenReportes = document.getElementById(
  "seccion-resumen-reportes"
);
const reportesSinOperaciones = document.getElementById(
  "reportes-sin-operaciones"
);
const reportesDatosTotalesCategorias = document.getElementById(
  "datos-reportes-por-categorias"
);
const reportesDatosTotalesMes = document.getElementById(
  "datos-totales-por-mes"
);

//----------------------------Navbar-Burger/Navbar-Menu-----------------------------------
const navbarBurger = document.getElementById("navbar-burger");
const navbarMenu = document.getElementById("navbarBasicExample");

//----------------------------Editar-----------------------------------
const formTarjetaEditarOperacion = document.querySelector(
  ".form-tarjeta-editar-operacion"
);
const tarjetaEditarCategoria = document.querySelector(
  ".tarjeta-editar-categoria"
);

// Navbar-Menu//Navbar-burger
navbarBurger.onclick = () => {
  navbarBurger.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
};

// Funciones Botones Nav Superior
botonBalance.onclick = () => {
  seccionCategorias.classList.add("is-hidden");
  seccionCentral.classList.remove("is-hidden");
  seccionReportes.classList.add("is-hidden");
};

botonCategorias.onclick = () => {
  seccionCategorias.classList.remove("is-hidden");
  seccionCentral.classList.add("is-hidden");
  seccionReportes.classList.add("is-hidden");
  seccionNuevaOperacion.classList.add("is-hidden");
};

botonReporte.onclick = () => {
  seccionReportes.classList.remove("is-hidden");
  seccionCentral.classList.add("is-hidden");
  seccionCategorias.classList.add("is-hidden");
};

//-------------------------Operaciones-------------------------

// Boton nueva operacion
botonNuevaOperacion.onclick = () => {
  seccionNuevaOperacion.classList.remove("is-hidden");
  seccionCentral.classList.add("is-hidden");
};

//Boton Agregar Operacion
botonAgregarOperacion.onclick = () => {
  seccionNuevaOperacion.classList.add("is-hidden");
};

//Boton Cancelar nueva operacion

botonCancelarOperacion.onclick = () => {
  seccionNuevaOperacion.classList.add("is-hidden");
  seccionCategorias.classList.add("is-hidden");
  seccionCentral.classList.remove("is-hidden");
  seccionReportes.classList.add("is-hidden");
};

//Array de prueba

let operaciones = [];

// LocalStorage operaciones///////////////

const operacionesObtenidas = () => {
  const operacionesLS = localStorage.getItem("operaciones");
  if (operacionesLS === null) {
    return operaciones;
  } else {
    tarjetaSinOperaciones.classList.add("is-hidden");
    contenedorOperacionesAgregadas.classList.remove("is-hidden");
    return JSON.parse(operacionesLS);
  }
};

let funcionOperacionesLS = (elemento) => {
  const operacionesAJSON = JSON.stringify(elemento);
  localStorage.setItem("operaciones", operacionesAJSON);
};

////////////////////////////////////////////////////////////

//--------Balances-----------
//---------- Funcion mostrar suma total de ganancias en la seccion balances-----

const mostrarGananciasEnBalances = (array) => {
  const gananciasFiltradas = array.filter((elemento) => {
    return elemento.tipo === "ganancias";
  });

  const sumarGanancias = gananciasFiltradas.reduce((acc, elemento) => {
    let numeroMontoGanacia = Number(elemento.monto);
    return acc + numeroMontoGanacia;
  }, 0);

  return (balancesSumaGanancias.textContent = sumarGanancias);
};
mostrarGananciasEnBalances(operaciones);

// //---------- Funcion mostrar suma total de gastos en la seccion balances-----
const mostrarGastosEnBalances = (array) => {
  const gastosFiltrados = array.filter((elemento) => {
    return elemento.tipo === "gastos";
  });

  const sumarGastos = gastosFiltrados.reduce((acc, elemento) => {
    let numeroMontoGastos = Number(elemento.monto);
    return acc + numeroMontoGastos;
  }, 0);

  return (balancesSumaGastos.textContent = sumarGastos);
};
mostrarGastosEnBalances(operaciones);

//---------- Funcion mostrar suma del  total  en la seccion balances-----
const mostrarTotalEnBalances = (array) => {
  const resultadoFinalGanancias = mostrarGananciasEnBalances(array);
  const resultadoFinalGastos = mostrarGastosEnBalances(array);
  const resultadoFinal = resultadoFinalGanancias - resultadoFinalGastos;

  return (balancesTotalFinal.textContent = `$${resultadoFinal}`);
};
mostrarTotalEnBalances(operaciones);

//////////////////////////////
// Operaciones///////////////

const sinOperaciones = (array) => {
  if (array.length === 0) {
    tarjetaSinOperaciones.classList.remove("is-hidden");
    tarjetaOperacionesAgregadas.classList.add("is-hidden");
    contenedorOperacionesAgregadas.classList.add("is-hidden");
  } else {
    tarjetaSinOperaciones.classList.add("is-hidden");
    tarjetaOperacionesAgregadas.classList.remove("is-hidden");
    contenedorOperacionesAgregadas.classList.remove("is-hidden");
  }
};
sinOperaciones(operaciones);

const borrarOperacion = (array) => {
  const botonesBorrarOperaciones = document.querySelectorAll(
    ".boton-borrar-operacion"
  );
  for (let i = 0; i < botonesBorrarOperaciones.length; i++) {
    botonesBorrarOperaciones[i].onclick = () => {
      const idOperaciones = botonesBorrarOperaciones[i].id;
      const indiceOperaciones = idOperaciones.slice(7);
      const filtrarOperaciones = array.filter((elemento, index) => {
        return index != indiceOperaciones;
      });

      funcionOperacionesLS(filtrarOperaciones);
      mostrarOperacionesEnHTML(filtrarOperaciones);
    };
  }
  mostrarGananciasEnBalances(operaciones);
  mostrarGastosEnBalances(operaciones);
  mostrarTotalEnBalances(operaciones);
};

const mostrarOperacionesEnHTML = (array) => {
  operaciones = operacionesObtenidas();

  const html = array.reduce((acc, operacion, index) => {
    return (
      acc +
      `

      <div class="fila columns is-mobile is-multiline">
      <div class="column  has-text-weight-semibold ">
        <p>${operacion.descripcion}</p>
        </div>
        <div class="column is-2-tablet is-6-mobile has-text-right-mobile">
        <p class="tag is-primary is-light">${operacion.categoria}</p>
        </div>
        <div class="column  has-text-left is-hidden-mobile">
        <p>${operacion.fecha}</p>
        </div>
        <div class="column  is-6-mobile is-size-4-mobile">
        <p class=" ${
          operacion.tipo === "ganancias"
            ? "has-text-success"
            : "has-text-danger"
        }">$${operacion.monto}</p>
        </div>
        <div class="column is-6-mobile has-text-right">
        <button id="editar-operaciones-${index}" class="button is-info is-inverted editar-operaciones">Editar</button>
        <button id="borrar-${index}"  class="boton-borrar-operacion button is-info is-inverted ">Eliminar</button>
        </div>
      </div>
      `
    );
  }, "");

  tarjetaOperacionesAgregadas.innerHTML = html;

  borrarOperacion(operaciones);

  sinOperaciones(operaciones);
};

botonAgregarOperacion.onclick = () => {
  seccionCategorias.classList.add("is-hidden");
  seccionNuevaOperacion.classList.add("is-hidden");
  seccionCentral.classList.remove("is-hidden");
  tarjetaSinOperaciones.classList.add("is-hidden");
  tarjetaOperacionesAgregadas.classList.remove("is-hidden");
  contenedorOperacionesAgregadas.classList.remove("is-hidden");

  const valorInputDescripcionNuevaOperacion =
    inputDescripcionNuevaOperacion.value;
  const valorInputMontoNuevaOperacion = inputMontoNuevaOperacion.value;
  const valorOpcionCategoriaNuevaOperacion =
    selectCategoriaNuevaOperacion.value;
  const valorInputDateNuevaOperacion = inputDateNuevaOperacion.value;
  const valorOpcionTipoNuevaOperacion = selectTipoNuevaOperacion.value;

  const operacion = {
    descripcion: valorInputDescripcionNuevaOperacion,
    categoria: valorOpcionCategoriaNuevaOperacion,
    fecha: valorInputDateNuevaOperacion,
    monto: valorInputMontoNuevaOperacion,
    tipo: valorOpcionTipoNuevaOperacion,
  };

  operaciones.push(operacion);
  funcionOperacionesLS(operaciones);
  mostrarOperacionesEnHTML(operaciones);
  mostrarGananciasEnBalances(operaciones);
  mostrarGastosEnBalances(operaciones);
  mostrarTotalEnBalances(operaciones);
  valorInputDescripcionNuevaOperacion.value = "";
  valorInputMontoNuevaOperacion.value = "";
  valorOpcionCategoriaNuevaOperacion.value = "";
  valorInputDateNuevaOperacion.value = "";
  valorOpcionTipoNuevaOperacion.value = "";
};

operaciones = operacionesObtenidas();
mostrarOperacionesEnHTML(operaciones);

borrarOperacion(operaciones);

// //-----------funciones para ordenar los filtros-----

//funciones auxiliares
const ordenarPorFechaMasReciente = (array) => {
  return array.sort((a, b) => {
    return new Date(a.fecha) - new Date(b.fecha);
  });
};

const ordenarPorFechaMenosReciente = (array) => {
  return array.sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha);
  });
};
const ordenarAZ = (array) => {
  return array.sort();
};

const ordenarZA = (array) => {
  return array.sort().reverse();
};
const ordenarPorMayorMonto = (array) => {
  return array.sort((a, b) => {
    return a.monto - b.monto;
  });
};
const ordenarPorMenorMonto = (array) => {
  return array.sort((a, b) => {
    return b.monto - a.monto;
  });
};

//Funcion ordenar por filtros que reune a todas las funciones auxiliares ---
const filtroOrdenarPor = (array) => {
  if (selectOrdenarPor.value === "Más reciente") {
    return ordenarPorFechaMasReciente(array);
  } else if (selectOrdenarPor.value === "Menos reciente") {
    return ordenarPorFechaMenosReciente(array);
  } else if (selectOrdenarPor.value === "Mayor monto") {
    return ordenarPorMayorMonto(array);
  } else if (selectOrdenarPor.value === "Menor monto") {
    return ordenarPorMenorMonto(array);
  } else if (selectOrdenarPor.value === "A/Z") {
    return ordenarAZ(array);
  } else {
    return ordenarZA(array);
  }
};

// // -------------------Función aplicar filtros---------------
const aplicarFiltros = () => {
  const tipo = filtroTipo.value; //filtro por tipo
  const filtradoPorTipo = operaciones.filter((operacion) => {
    if (tipo === "Todos") {
      return operacion;
    }
    return operacion.tipo === tipo;
  });

  const categoriaSelect = filtroCategorias.value; //filtro por categoria aplicando el filtro de tipo
  const filtradoPorCategoria = filtradoPorTipo.filter((operacion) => {
    if (categoriaSelect === "Todas") {
      return operacion;
    }
    return operacion.categoria === categoriaSelect;
  });

  const arrayFiltradoPorFechas = filtradoPorCategoria.map((operacion) => {
    //filtro por fechas
    const nuevoElemento = { ...operacion };
    nuevoElemento.fecha = new Date(operacion.fecha).toLocaleDateString();
    return nuevoElemento;
  });

  return filtroOrdenarPor(arrayFiltradoPorFechas);
};

// //----Agrega filtro cuando modifico los select-----

// // evento cuando modifico categoria

filtroTipo.onchange = () => {
  const arrayFiltrado = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltrado);
};
// evento cuando modifico tipo
filtroCategorias.onchange = () => {
  const arrayFiltrado = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltrado);
};

// evento elijo a partir de la fecha
filtroFecha.oninput = () => {
  const arrayFiltrado = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltrado);
};

// evento ordeno por

selectOrdenarPor.onchange = () => {
  const arrayFiltrado = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltrado);
};

// evento ocultar filtros
//funcion auxiliar
const cerrarFormularioFiltros = (box, boton) => {
  box.classList.add("is-hidden");
  boton.textContent = "Mostrar filtros";
};
const mostrarFormularioFiltros = (box, boton) => {
  box.classList.remove("is-hidden");
  boton.textContent = "Ocultar filtros";
};

//mostrarFormularioFiltros(formularioFiltros,botonOcultarFiltros)
botonOcultarFiltros.onclick = () => {
  if (botonOcultarFiltros.textContent === "Ocultar filtros") {
    return cerrarFormularioFiltros(formularioFiltros, botonOcultarFiltros);
  } else {
    return mostrarFormularioFiltros(formularioFiltros, botonOcultarFiltros);
  }
};

//----este e.preventDefault evita que el formulario se envie --flor---
formulario.onsubmit = (e) => {
  e.preventDefault();
};

// //--------------- Seccion categorias----------------------------

// // Seccion categorias

const categorias = [
  "Todos",
  "Comida",
  "Servicios",
  "Salidas",
  "Educación",
  "Transporte",
  "Trabajo",
];

// // LocalStorage///////////////
const categoriasObtenidas = () => {
  const categoriasLS = localStorage.getItem("categorias");
  if (categoriasLS === null) {
    return categorias;
  } else {
    return JSON.parse(categoriasLS);
  }
};
let funcionLS = (elemento) => {
  const categoriasAJSON = JSON.stringify(elemento);
  localStorage.setItem("categorias", categoriasAJSON);
};

////////////////////////////////////////

const adicionDeNuevasCategoriasSelect = () => {
  const categorias = categoriasObtenidas();
  const selectCategoria = document.getElementById("select-categoria");

  const stringCategoriasIniciadoras = categorias.reduce(
    (acc, elemento, index) => {
      return (
        acc +
        `<option id="opcion-categoria-${index}" value="${elemento}">${elemento}</option>`
      );
    },
    ""
  );

  selectCategoria.innerHTML = stringCategoriasIniciadoras;
  selectCategoriaNuevaOperacion.innerHTML = stringCategoriasIniciadoras;
};

const agregarCategoriasAHTML = () => {
  const categorias = categoriasObtenidas();
  const lista = document.getElementById("lista-categoria");

  const stringCategoriasIniciadoras = categorias.reduce(
    (acc, elemento, index) => {
      return (
        acc +
        ` <div class=" columns is-mobile">
             <div class="column">
                  <span  id="nombre-categoria-${index}" class="nombre-categoria tag is-primary is-light">${elemento}</span>
             </div>
          <div class="column has-text-right">
                  <button id="editar-categoria-${index}" class="button is-info is-inverted boton-editar-categoria">Editar</button>

              <button id="borrar-${index}"  class="boton-borrar button is-info is-inverted ">Eliminar</button>
          </div>
      </div>`
      );
    },
    ""
  );

  lista.innerHTML = stringCategoriasIniciadoras;

  const botonesBorrar = document.querySelectorAll(".boton-borrar");

  for (let i = 0; i < botonesBorrar.length; i++) {
    botonesBorrar[i].onclick = () => {
      const id = botonesBorrar[i].id;
      const indice = id.charAt(7);
      const nuevasCategoriasFiltradas = categorias.filter((elemento, index) => {
        return index != indice;
      });

      funcionLS(nuevasCategoriasFiltradas);

      agregarCategoriasAHTML();
      adicionDeNuevasCategoriasSelect();
    };
  }
  // botonEditarSeccionCategoria()
  // botonEditarSeccionOperaciones()
};

agregarCategoriasAHTML(categorias);

botonAgregarCategoria.onclick = () => {
  const valorInputCategoriaNuevo = inputCategoriaNuevoNombre.value;
  const categorias = categoriasObtenidas();
  categorias.push(valorInputCategoriaNuevo);
  inputCategoriaNuevoNombre.value = "";

  funcionLS(categorias);

  adicionDeNuevasCategoriasSelect();
  agregarCategoriasAHTML();
};

// aca empiezan las funciones de botones
// BOTON EDITAR CATEGORIA
const botonEditarSeccionOperaciones = () => {
  formTarjetaEditarOperacion.classList.remove("is-hidden");
  // form-tarjeta-editar-operacion
  const botonEditarOperaciones = document.querySelectorAll(
    ".editar-operaciones"
  );

  for (let i = 0; i < botonEditarOperaciones.length; i++) {
    botonEditarOperaciones[i].onclick = () => {
      const idEditar = botonEditarOperaciones[i].id;
      const idRecortado = idEditar.charAt(19);
      console.log(idRecortado);

      const idDelBoton = Number(idRecortado);
      console.log(idDelBoton);

      tarjetaEditarOperacionEditar(idDelBoton);
      ocultarSecciones();
    };
  }
};
botonEditarSeccionOperaciones();

// TARJETA EDITAR CATEGORIA
const tarjetaEditarOperacionEditar = (idDelBoton) => {
  operaciones = operacionesObtenidas();
  const objeto = operaciones[idDelBoton];

  formTarjetaEditarOperacion.innerHTML = `
    <div class="tarjeta-editar-operacion column is-offset-2 is-8 is-hidden is-relative">
        <form class="box form-seccion-operacion">
            <h2 class="title is-1 has-text-weight-bold">Editar operación</h2>
            <div class="field">
                <div class="control">
                    <label for="Descripción" class="label"> Descripción </label>
                    <input class="input" id="input-descripcion" type="text" value="${objeto.descripcion}">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label for="Monto" class="label"> Monto</label>
                        <input class="input" id="input-monto" type="number" value="${objeto.monto}">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label for="Tipo" class="label"> Tipo</label>
                    <div class="select is-fullwidth">
                        <select id="editar-tipo-operacion">
                        <option value="ganancias">Ganancias</option>
                        <option value="gastos">Gastos</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label for="Categoria" class="label"> Categoria</label>
                <div class="control">
                    <div class="select is-fullwidth">
                        <select id="input-categoria">
                        <option>Gasto</option>
                        <option>Ganancia</option>
                        </select>
                    </div>
                </div>         
            </div>
            <div class="field">
                <div class="control">
                    <label for="Fecha" class="label"> Fecha</label>
                    <input class="input" type="date">
                </div>

            </div>
       
        <div class="has-text-right">
                <button type="button" id="boton-cancelar-seccion-operaciones" class="button is-light"> Cancelar </button>
                <input type="submit" value="Editar"  class="button is-success">
            </div>
  

            
        </form>
    </div>`;

  const formSeccionOperacion = document.querySelector(
    ".form-seccion-operacion"
  );
  const inputDescripcion = document.getElementById("input-descripcion");
  const inputMonto = document.getElementById("input-monto");
  const editarTipoOperacion = document.querySelector("#editar-tipo-operacion");

  const botonCancelarSeccionOperaciones = document.querySelector(
    "#boton-cancelar-seccion-operaciones"
  );

  botonCancelarSeccionOperaciones.onclick = (e) => {
    e.preventDefault();
    ocultarSecciones();
    inputDescripcion.value = objeto.descripcion;
  };

  formSeccionOperacion.onsubmit = (e) => {
    e.preventDefault();
    ocultarSecciones();

    const valorMonto = Number(inputMonto.value);
    const valorDescripcion = inputDescripcion.value;
    // const valorTipo =
    objeto.monto = valorMonto;
    objeto.descripcion = valorDescripcion;

    mostrarOperacionesEnHTML(operaciones);
    botonEditarSeccionOperaciones();
  };
};

// funcion auxiliar ocultar secciones - operaciones
const ocultarSecciones = () => {
  const tarjetaEditarOperacion = document.querySelector(
    ".tarjeta-editar-operacion"
  );
  seccionCentral.classList.toggle("is-hidden");
  tarjetaEditarOperacion.classList.toggle("is-hidden");
};

// BOTON EDITAR CATEGORIA
const botonEditarSeccionCategoria = () => {
  const botonEditarCategoria = document.querySelectorAll(
    ".boton-editar-categoria"
  );

  for (let i = 0; i < botonEditarCategoria.length; i++) {
    botonEditarCategoria[i].onclick = () => {
      const botonEditarCategoriaEditada = document.querySelector(
        ".boton-editar-categoria-editada"
      );
      const nombreCategoria = document.querySelectorAll(".nombre-categoria");
      const inputCategoriasNombreEditar = document.querySelector(
        ".input-categorias-nombre-editar"
      );

      inputCategoriasNombreEditar.value = nombreCategoria[i].textContent;

      ocultarSeccionesCategoria();

      botonEditarCategoriaEditada.onclick = () => {
        ocultarSeccionesCategoria();
        nombreCategoria[i].textContent = inputCategoriasNombreEditar.value;
      };
      botonCancelarDentroCategoria();
    };
  }
};
botonEditarSeccionCategoria();
const botonCancelarDentroCategoria = () => {
  const botonCancelarCategoriaEditada = document.querySelector(
    ".boton-cancelar-categoria-editada"
  );
  botonCancelarCategoriaEditada.onclick = () => {
    ocultarSeccionesCategoria();
  };
};
// funcion auxiliar ocultar secciones- categoria
const ocultarSeccionesCategoria = () => {
  seccionCategorias.classList.toggle("is-hidden");
  tarjetaEditarCategoria.classList.toggle("is-hidden");
};

//----------------------------------------------------------------------------
//                      SECCION REPORTES
//----------------------------------------------------------------------------
//funcion para que aparezca reportes una vez que tenga mas de 2 operaciones en localS

const aparicionReporte = (operaciones) => {
  if (operaciones.length > 2) {
    panelEstadisticasReportes.classList.remove("is-hidden");
  } else {
    reportesSinOperaciones.classList.remove("is-hidden");
  }
};
aparicionReporte(operaciones);

//----------------------------------------------------------------------------
//                       REPORTES RESUMEN
//----------------------------------------------------------------------------

// FUNCION AUXILIAR "categoria con mayor ganancia"
const montoMayorGanancia = (array) => {
  const mayorMonto = array.reduce((acc, elemento) => {
    if (acc < elemento.monto) {
      return elemento.monto;
    }
    return acc;
  }, 0);
  return mayorMonto;
};
const categoriaConMayorGanancia = (array) => {
  const filtrarTipo = array.filter((elemento) => {
    return elemento.tipo === "ganancias";
  });
  const filtrarCategoria = filtrarTipo.reduce((acc, elemento) => {
    if (acc > elemento.monto) {
      return acc;
    }
    return elemento.categoria;
  }, 0);
  return filtrarCategoria;
};

// FUNCION AUXILIAR "categoria con mayor gasto"
const montoMayorGasto = (array) => {
  const filtrarTipo = array.filter((elemento) => {
    return elemento.tipo === "gastos";
  });
  const filtrarmenorGasto = filtrarTipo.reduce((acc, elemento) => {
    if (acc < elemento.monto) {
      acc = elemento.monto;
    }
    return acc;
  }, 0);
  return filtrarmenorGasto;
};

const categoriaConMayorGasto = (array) => {
  const filtrarTipo = array.filter((elemento) => {
    return elemento.tipo === "Gasto";
  });
  const filtrarmenorGasto = filtrarTipo.reduce((acc, elemento) => {
    if (acc < elemento.monto) {
      acc = elemento.categoria;
    }
    return acc;
  }, 0);
  return filtrarmenorGasto;
};

// FUNCION REPORTES RESUMEN

const contenedorReportes = () => {
  const seccionResumenReportes = document.querySelector(".resumen");
  seccionResumenReportes.innerHTML = `<div class="columns  is-mobile">

        <div class="column is-6 has-text-weight-semibold">Categoría con mayor ganancia</div>
        <div class="column mt-3 is-1 has-text-right tag is-primary is-light">${categoriaConMayorGanancia(
          operaciones
        )}</div>
        <div class="column is-4 has-text-right has-text-success has-text-weight-semibold">+$${montoMayorGanancia(
          operaciones
        )}</div>  
    </div>
    <div class="columns  is-mobile">
        <div class="column is-6 has-text-weight-semibold">Categoría con mayor gasto</div>
        <div class="column mt-3 is-1 has-text-right tag is-primary is-light">${categoriaConMayorGasto(
          operaciones
        )}</div>
        <div class="column is-4  has-text-right has-text-danger has-text-weight-semibold">-$${montoMayorGasto(
          operaciones
        )}</div>  
    </div>
    <div class="columns  is-mobile">
        <div class="column is-6 has-text-weight-semibold">Categoría con mayor balance</div>
        <div class="column mt-3 is-1 has-text-right tag is-primary is-light">${categoriaConMayorGanancia(
          operaciones
        )}</div>
        <div class="column  is-4 has-text-right has-text-weight-semibold">$${montoMayorGanancia(
          operaciones
        )}</div>  
    </div>
    <div class="columns  is-mobile">
        <div class="column is-6 has-text-weight-semibold">Mes con mayor ganancia</div>
        <div class="column is-1 has-text-right">Fecha</div>
        <div class="column is-4  has-text-right has-text-success has-text-weight-semibold">$${montoMayorGanancia(
          operaciones
        )}</div>  
    </div>
    <div class="columns  is-mobile">
        <div class="column is-6 has-text-weight-semibold">Mes con mayor gasto</div>
        <div class="column is-1 has-text-right">Fecha</div>
        <div class="column is-4 has-text-right has-text-danger has-text-weight-semibold">-$${montoMayorGasto(
          operaciones
        )}</div>  
    </div>`;
};
contenedorReportes();

//----------------------------------------------------------------------------
//                     REPORTES POR CATEGORIAS
//----------------------------------------------------------------------------

//aca estoy filtrado el array de objetos, saco las categorias
const separarporCategorias = (array) => {
  const categoriasSepadas = array.map((elemento) => {
    return elemento.categoria;
  });
  return categoriasSepadas;
};

// aca filtro las categorias para que no se repitan
const todasLasCategorias = separarporCategorias(operaciones);

const categoriasSinRepetir = todasLasCategorias.filter((elemento, index) => {
  return todasLasCategorias.indexOf(elemento) === index;
});

//array vacio
let arrayOperacionPorCategoria = [];
// aca creo la matriz de categorias, por cada categoria se crea un array vacio
categoriasSinRepetir.map((categoria) => {
  arrayOperacionPorCategoria.push([]);
});

//aca relleno cada array con los datos de esas categorias

operaciones.map((operacion) => {
  const indiceCategoria = categoriasSinRepetir.indexOf(operacion.categoria);
  arrayOperacionPorCategoria[indiceCategoria].push(operacion);
});

let html = "";
for (let i = 0; i < arrayOperacionPorCategoria.length; i++) {
  let gananciasPorCategoria = [];
  let gastosPorCategoria = [];
  for (let j = 0; j < arrayOperacionPorCategoria[i].length; j++) {
    if (arrayOperacionPorCategoria[i][j].tipo === "gastos") {
      gastosPorCategoria.push(arrayOperacionPorCategoria[i][j]);
    } else {
      gananciasPorCategoria.push(arrayOperacionPorCategoria[i][j]);
    }
  }

  const categoriasSolas = categoriasSinRepetir.reduce((acc, elemento) => {
    return elemento;
  }, "");

  const totalGastosPorCategoria = gastosPorCategoria.reduce((acc, elemento) => {
    let gastosMonto = Number(elemento.monto);
    return acc + gastosMonto;
  }, 0);

  const totalGananciasPorCategoria = gananciasPorCategoria.reduce(
    (acc, elemento) => {
      let gananciasMonto = Number(elemento.monto);
      return acc + gananciasMonto;
    },
    0
  );

  const sumarTotales = totalGananciasPorCategoria - totalGastosPorCategoria;

  html =
    html +
    `<div class="columns  is-mobile">
                                    <div class="column  has-text-weight-semibold">${categoriasSolas}</div>
                                    <div class="column  has-text-success has-text-right">+${totalGananciasPorCategoria}</div>
                                    <div class="column  has-text-danger  has-text-right">-${totalGastosPorCategoria}</div>
                                    <div class="column  has-text-right">${sumarTotales}</div>

                                </div>`;
  reportesDatosTotalesCategorias.innerHTML = html;
}

//     console.log(totalGananciasPorCategoria)
// console.log(gananciasPorCategoria)

//     console.log(gastosPorCategoria)

// const sumarGastos = gastosFiltrados.reduce((acc, elemento) => {
//     let numeroMontoGastos = Number(elemento.monto)
//     return acc + numeroMontoGastos
// }, 0)
