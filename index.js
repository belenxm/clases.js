class Estudiante {
    constructor(nombre){
    this.nombre = nombre;
    this.asignaturas = ['Javascript', 'HTML', 'CSS'];
    
}

obtenDatos(){
    return{
        nombre : this.nombre,
        asignaturas:this.asignaturas
    };
}
}


const estudiante = new Estudiante('Nombre del estudiante');
const datosEstudiante = estudiante.obtenDatos();
console.log(datosEstudiante);





