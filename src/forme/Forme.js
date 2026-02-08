import { BoundingBox } from "../utils/BoundingBox.js";

class Forme {
    constructor(boundingbox,couleur){
        this.boundingbox = boundingbox;
        this.couleur = couleur;
        this.element = null;
    }

    mouvement(dx,dy){
        this.boundingbox.coinBD.x +=dx;
        this.boundingbox.coinHG.x +=dx;
        this.boundingbox.coinBD.y +=dy;
        this.boundingbox.coinHG.y +=dy;
        console.log("coord x "+this.boundingbox.coinHG.x); 
        console.log("coord y "+this.boundingbox.coinHG.y);
        this.update();
    }
}

export{Forme};