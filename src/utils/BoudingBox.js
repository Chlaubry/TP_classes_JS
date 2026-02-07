import {Coordinates} from "./Coordinates.js";

class BoudingBox
{
    constructor(coinHG, coinBD)
    {
        this.coinHG = coinHG;
        this.coinBD = coinBd;
    }

    Centre()
    {
        return{
            x : (this.coinBD.getX() + this.coinHG.getX())/2,
            y : (this.coinHGx.getY() + this.coinBD.getY())/2
        };
    }
}

export {BoudingBox};