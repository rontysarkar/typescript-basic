{
// 

abstract class Car {
   abstract startEngine():void;
   abstract stopEngine():void;
   abstract move():void;
}

class ToyotaCar extends Car{
    startEngine(): void {
        console.log("car engine are starting");
    }

    stopEngine(): void {
        console.log('car engine are stop ');
    }

    move(): void {
        console.log('car engine are move');
    }
}

const car1 = new ToyotaCar()
car1.startEngine()
car1.startEngine()
car1.move()


// 
}