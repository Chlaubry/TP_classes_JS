import {Forme} from "./Forme.js";

class Rectangle extends Forme{

    constructor(boundingbox, couleur){
        super(boundingbox, couleur)
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.element.setAttribute("fill", couleur.toRGB());
        this.update();
    }

    update(){
        const {x,y} =this.boundingbox.coinHG.coordonnee();
        const {largeur, hauteur} = this.boundingbox.dimension();
        this.element.setAttribute("x", x);
        this.element.setAttribute("y", y);
        console.log("x "+x+" y "+y);
        this.element.setAttribute("width", largeur);
        this.element.setAttribute("height",hauteur);    
    }
}
export {Rectangle};