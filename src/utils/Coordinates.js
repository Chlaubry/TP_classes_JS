class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

// Renvoyer les coordonnées cartésiennes 
toCartesien(svgHauteur, svgLargeur) {

    return {
        x : this.x - svgLargeur/2,
         y : svgHauteur/2 -this.y};
    
}}

export {Coordinates};