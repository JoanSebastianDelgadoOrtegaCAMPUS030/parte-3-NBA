class Jugador extends Nba{
    static idJug = 0;
    constructor(nombre,fecha,email,ciudad,year,dorsal,
    posicion,estatura,peso,tiempoJugado,faltas,asistencia,
    puntosAnotados,valor,nivelExp,idEquipo){
        super(nombre,fecha,email,ciudad,);
        this._idJug = ++Jugador.idJug;
        this._dorsal = dorsal;
        this._posicion = posicion;
        this._estatura = estatura;
        this._peso = peso;
        this._tiempoJugado = tiempoJugado;
        this._faltas = faltas;
        this._asistencias = asistencia;
        this._puntosAnotados = puntosAnotados;
        this._valor = valor;
        this._nivelExp = nivelExp;
        this._idEquipo = idEquipo;
    }
    get idJug(){
        return this._idJug;
    }
    get dorsal(){
        return this._estatura;
    }
    set dorsal(v_dorsal){
        this._dorsal = v_dorsal;
    }
    get posicion(){
        return this._posicion;
    }
    set posicion(v_posicion){
        this._posicion = v_posicion;
    }
    get estatura(){
        return this._estatura
    }
    set estatura(v_estatura){
        this._estatura = v_estatura;
    }
    get peso(){
        this._peso = peso;
    }
    set peso(v_peso){
        this._peso = v_peso;
    }
    get tiempoJugado(){
        return this._tiempoJugado
    }
    set tiempoJugado(v_tiempoJugado){
        this._tiempoJugado = v_tiempoJugado;
    }
    get faltas(){
        return this._faltas
    }
    set faltas(v_faltas){
        this._faltas = v_faltas;
    }
    get asistencia(){
        return this._asistencia
    }
    set asistencia(v_asistencia){
        this._asistencias = v_asistencia; 
    }
    get puntosAnotados(){
        return this._puntosAnotados;
    }
    set puntosAnotados(v_puntosAnotados){
        this._puntosAnotados = v_puntosAnotados;
    }
    get valor(){
        return this.valor;
    }
    set valor(v_valor){
        this._valor = v_valor;
    }
    get nivelExp(){
        return this._nivelExp;
    }
    set nivelExp(v_nivelExp){
        this._nivelExp = v_nivelExp; 
    }
    get idEquipos(){
        return this._idEquipos;
    }
    set idEquipos(v_idEquipos){
        this._idEquipos = v_idEquipos;
    }
}