// Programación orientada a objetos es un modelo de programación

// 1. Clases
// 2. Objetos

// 3. Herencia
// 4. Encapsulamiento
// 5. Abstracción
// 6. Poliformismo


class Persona {
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    // Metodos
    comer(){
        console.log('EStoy comiendo')
    }
}

const amiga = new Persona('maria','gomez',2)

const objetoEjemplo = {
    nombre: 'pepe',
    apellido: 'ostras',
    edad: 18,
    comer: function(){
        console.log('EStoy comiendo')
    }
}














class NombreClase{ // declaracion de la clase
    constructor(parametros){
        // inicializo
    }
    // Metodos
}





class Perro {
    constructor(nombre,raza,color){
        this.nombre = nombre
        this.raza = raza
        this.color = color
    }
    llorar (){
        console.log('estoy llorando')
    }
    ladrar (){
        console.log('wow')
    }
}

const perritoIrene = new Perro('Bruno','Teckel','blanco , marron , gris')
const gory = new Perro('Gory','Chihuahua','gris, blanco')

















// Humano, etapa, genero, role
// sobrevivir, vivir, comer,trabajar, respirar
