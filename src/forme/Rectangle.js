import {Forme} from "./Forme";

class Rectangle extends Forme{

    constructor(boundingbox, couleur){
        super(boundingbox, couleur)
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.element.setAttribute("fill", color.toRGB());
        this.update();
    }

    update(){
        this.element.setAttribute("x", this.boundingBox.coinHG.x);
        this.element.setAttribute("y", this.boundingBox.coinHG.y);
        this.element.setAttribute("width", this.boundingBox.largeur);
        this.element.setAttribute("height", this.boundingBox.hauteur);
    }
}