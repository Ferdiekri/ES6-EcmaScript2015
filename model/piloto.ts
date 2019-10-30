class Piloto{

    //atributos con guion bajo
    private _nombre: string;

    //constructor solo se puede 1, no exite sobrecarga

    constructor(){
        this._nombre = "";
    }

   /**
     * Getter nombre
     * @return {string}
     */
	public get nombre(): string {
		return this._nombre;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public set nombre(value: string) {
		this._nombre = value;
	}
    // otras funciones 



}