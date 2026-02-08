class FormeAnimee{
    constructor(forme, trajectoire){
        this.forme = forme;
        this.trajectoire = trajectoire;
    }

    deplacement(){

        // Que faut-il ajouter en abscisse et ordonnée?
        const {dx, dy}=this.trajectoire.avancement();
        
        this.forme.mouvement(dx, dy);
    }
}
export{FormeAnimee};