
class Trajectoire{

    constructor(){
        this.vx= 0;
        this.vy = 0;
    }

    avancement(){
        console.log("dx "+this.vx+" dy "+this.vy);
        return {dx: this.vx, dy: this.vy};
    }
}
export {Trajectoire};