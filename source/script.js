/*
let ambientes = parseFloat(prompt("indique cantidad de ambientes"))

class propiedad {
      constructor (nombrePropietario, direccionPropiedad, localidadPropiedad, ambientesPropiedad){
      this.nombre = nombrePropietario
      this.direccion = direccionPropiedad
      this.localidad = localidadPropiedad
      this.ambientes = ambientesPropiedad
}
}

function elegirAmbientes () {
    console.log (ambientesPropiedad)
}


const propiedad1 = new propiedad ("Gonzalez", "Independencia 280", "Merlo", 3 )
const propiedad2 = new propiedad ("Benitez", "Formosa 1108", "San antonio de Padua", 2 )
const propiedad3 = new propiedad ("Cuenca", "Riobamba 639", "Merlo", 5 )
const propiedad4 = new propiedad ("Perez", "Mitre 280", "Moron", 2 )

*/
class propiedad {
    constructor (nombre, direccion, localidad, ambientes){
    this.nombre = nombre
    this.direccion = direccion
    this.localidad = localidad
    this.ambientes = ambientes
}
}

let preferencia = prompt ("Ingrese su preferencia (Depto, Casa, Lote)")
let localidad = prompt ("ingrese localidad (Merlo, Padua, Ituzaingo)")
let ambientes = parseFloat (prompt("ingrese cantidad de ambientes (Hasta 6)"))

const propiedad1 = new propiedad ("Gonzalez", "Independencia 280", "Merlo", 3 )
const propiedad2 = new propiedad ("Benitez", "Formosa 1108", "San antonio de Padua", 2 )
const propiedad3 = new propiedad ("Cuenca", "Riobamba 639", "Merlo", 5 )
const propiedad4 = new propiedad ("Perez", "Mitre 280", "Ituzaingo", 2 )



function recomendacion(paramAmbientes) {
    if (paramAmbientes == 1 || paramAmbientes == 2) {
      console.log(`Propiedad disponible ubicada en ${propiedad4.direccion}, ${propiedad4.localidad}, con ${propiedad4.ambientes} ambientes`);
    } else if (paramAmbientes == 3 || paramAmbientes == 4) {
      console.log(`Propiedad disponible ubicada en ${propiedad1.direccion}, ${propiedad1.localidad}, con ${propiedad1.ambientes} ambientes`);
    } else if (paramAmbientes == 5 || paramAmbientes == 6) {
      console.log(`Propiedad disponible ubicada en ${propiedad3.direccion}, ${propiedad3.localidad}, con ${propiedad3.ambientes} ambientes`);
    } else {
      console.log("Ingrese cantidad de ambientes validos");
    }
  }
  
  recomendacion(ambientes)
/*

Juan Manuel, no logré saber que me salió mal acá, tuve que 
declarar el IF por fuera de la funcion porque no me reconocía la recomendación
deseada en base a la elección del visitante

*/
