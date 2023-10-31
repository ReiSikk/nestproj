import { Animal } from './animal';

export class Bird extends Animal{
    wingSpan: number;

    constructor (name:string, wingSpan: number){
        super(name);
        this.wingSpan = wingSpan;
    }

    fly(distance: number){
        console.log("the bird just flew this distance: " + distance)
    }
}