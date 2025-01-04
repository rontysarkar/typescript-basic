{
// 
class Animal{
    name:string;
    species:string;

    constructor(name:string,species:string){
        this.name = name;
        this.species = species
    }

    getSound(){
        console.log("i am sound ");
    }
}

class Dog extends Animal{

    constructor(name:string,species:string){
        super(name,species)
    }

    getBawu(){
        console.log("gawu gawu gawu");
    }
}


class Cat extends Animal{

    constructor(name:string,species:string){
        super(name,species)
    }

    getMewu(){
        console.log("mewu mewu mewu");
    }
}

const dog = new Dog('tommy', 'DOG')
const cat = new Cat("caty", "CAT")


const getAnimal = (animal:Animal)=>{
    if(animal instanceof Dog){
        animal.getBawu()
    }else if(animal instanceof Cat){
        animal.getMewu()
    }else{
        animal.getSound()
    }
}



 




//  
}