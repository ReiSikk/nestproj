import { AnimalInterface } from "./animalInterface";

export class Animal implements AnimalInterface {
    constructor( name: string ){}

    move(distance: number){
        console.log("the animal just moved this distance: " + distance)
    }

    eat(nutritionalValue: number): void {
        console.log("the animal ate sth with the nutritionalValue of " + nutritionalValue)
    }

}