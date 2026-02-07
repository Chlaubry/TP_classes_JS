import { BoudingBox } from "../utils/BoudingBox";

class Forme {
    constructor(boundingbox,couleur){
        this.boundingbox = boundingbox;
        this.couleur = couleur;
        this.element = null;
    }

    mouvement(dx,dy){
        this.boundingbox.coinBD.x =dx;
        this.boundingbox.coinHG.x =dx;
        this.boundingbox.coinBD.y =dy;
        this.boundingbox.coinHG.y =dy;
        this.update();
    }
}

export{Forme};