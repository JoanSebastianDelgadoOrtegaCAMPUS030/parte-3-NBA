/*la NBA desea construir un aplicacion web que permita llevar el registro de los equipos que se encuentran 
participando actualmente en la liga. El programa debe permitir realizar el registro de cada equipo , jugadores ., cuerpo tecnico y cuerpo medico . la informcaion que debe suministras cada uno de los equipos es la siguiente :     
1. EQUIPOS: NOMBRE, PRESIDENTE, FECHA CREACION, ZONA , CIUDAD.    
2.JUGADORES: NOMBRE, EMAIL , EDAD, ESTATURA, NIVEL EXP, PESO , POSICION DE JUEGO , NRO DORSAL , VALOR , TOTAL TIEMPO DE JUEGO, ASISTENCIA , TOTAL CANASTAS ANOTADAS , TOTAL FALTAS , EQUIPOS JUGO.     
3. CUERPO MEDICO : NOMBRE, EMAIL , ESPECIALIDAD, AÑOS EXP , CARGO .  
4 CUERPO TECNICO : NOMBRE, EMAIL, PROFESION, CARGO.*/


equipos = {
    
      nombre: "Equipo 1",
      presidente: "Presidente 1",
      fecha_creacion: "18/06/2000",
      zona: "Zona Este",
      ciudad: "Ciudad 1",
    },
console.log(equipos)

jugadores = [ 
    {
         nombre: "nombre",
         email: "dijitar email",
         edad: " estatura",
         estatura: "estatura",
         exp: "experiencia",
         peso: "peso",
         posicionDejuego: "posicion de juego",
         NROdorsal: "NRO DORS",
         VALOR: "valor",
         TotalTiempodejuego: "tiempo de juego",
         asistencia: "asistencias",
         TotalCanastasanotadas: "canastas anotadas",
         TotalFaltas: "total faltas",
         EquiposQuejuego: "equipos donde jugo",


    },]

console.log(jugadores)  

const CuerpoMedico = [
    {
        NOMBRE: "nombre",
        EMAIL:"email", 
        ESPECIALIDAD: "especialidad", 
        AÑOSEXP: "años experiencia" , 
        CARGO: "cargo",   
    }]
    
const Tecnico = [
    {
        NOMBRE: "nombre",
        EMAIL: "email", 
        PROFESION: "profesion",
        CARGO: "cargo",
    }
]    

console.log (CuerpoMedico,Tecnico)

e = {
    medellin : {
        jugador: '1'
    },
    bogota: {
        jugador: '2'
    }
}
    console.log(this.e.medellin.jugador)   