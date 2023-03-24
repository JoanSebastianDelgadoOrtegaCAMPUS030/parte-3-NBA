class CuerpoApoyo extends Nba{
    static idCApoyo = 0;
    constructor(nombre,fecha,email,ciudad,year,especialidad,cargo,
    idEquipo){
        super(nombre,fecha,email,ciudad,year);
        this.idCApoyo = ++CuerpoApoyo.idCApoyo; 
        this_especialidad = especialidad;
        this._cargo = cargo;
        this.idEquipo = idEquipo;

    }
    get idCApoyo(){
        return this._idCApoyo;
    }
    get especialidad(){
        return this._especialidad;
    }
    set especialidad(v_especialidad){
        this._especialidad = v_especialidad;
    }

}