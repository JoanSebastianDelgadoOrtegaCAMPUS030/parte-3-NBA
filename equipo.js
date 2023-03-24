class Equipo extends Nba{
    static idEquipo = 0;
    constructor(nombre,fecha,email,ciudad,year,presidente,logo){
        super(nombre,fecha,email,ciudad,year);
        this._idEqui = ++Equipo.idEquipo;
        this._presidente = presidente;
        this._logo = logo;
        this._titulos = titulos;
        this._zona = zona;
        this._imgpet = imgpet;
    }
    get idEqui(){
        return this._idEqui;
    }
    get presidente(){
        return this._presidente;
    }
    set presidente(v_presidente){
        this._presidente = v_presidente; 
    }
    get logo(){
        return this._logo;
    }
    set logo(v_logo){
        this._logo = v_logo;
    }
    get titulos(){
        return this._titulos;
    }
    set titulos(v_titulos){
        this._titulos = v_titulos;
    }
    get zona(){
        return this._zona;
    }
    set zona(v_zona){
        this._zona = v_zona;
    }
    get imgpet(){
        return this._imgpet;
    }
    set imgpet(v_imgpet){
        this._imgpet = v_imgpet;
    }
}