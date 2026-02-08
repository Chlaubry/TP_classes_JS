import { getSvgDimensions } from "../config.js";

class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

// Renvoyer les coordonnées cartésiennes 
toCartesien() {
  const {svgHauteur, svgLargeur} = getSvgDimensions();
    return {
        x : this.x - svgLargeur/2,
         y : svgHauteur/2 -this.y};
    
}

toSVG() {
    const { svgHauteur, svgLargeur } = getSvgDimensions();
    return {
        x: this.x + svgLargeur / 2,
        y: svgHauteur / 2 - this.y
    };
}


coordonnee(){
  return {x: this.x, y: this.y};
}
}
export {Coordinates};