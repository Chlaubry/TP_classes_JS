import {Coordinates} from "./Coordinates.js";

class BoudingBox
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

    largeur(){
        return (this.coinBD.x -this.coinHG.x)
    }
    hauteur(){
        return (this.coinHG.y -this.coinBD.y)
    }
}


export {BoudingBox};