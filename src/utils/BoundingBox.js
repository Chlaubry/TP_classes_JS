import {Coordinates} from "./Coordinates.js";

class BoundingBox
{
    constructor(coinHG, coinBD)
    {
        this.coinHG = coinHG;
        this.coinBD = coinBD;
    }

    Centre()
    {
        return{
            x : (this.coinBD.getX() + this.coinHG.getX())/2,
            y : (this.coinHG.getY() + this.coinBD.getY())/2
        };
    }

    dimension(){
        const { x: xBD, y: yBD } = this.coinBD.coordonnee();
        const { x: xHG, y: yHG } = this.coinHG.coordonnee();
        return {largeur: xBD - xHG, hauteur: yBD - yHG};
    }
}


export {BoundingBox};