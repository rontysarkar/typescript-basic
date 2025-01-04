{
// 
class Animal {
    // name:string;
    // color:string;
    // sound:string;

constructor(public name:string,public color:string,public sound:string){
    // this.name = name;
    // this.color = color;
    // this.sound = sound;
}

GetSound(){
    console.log(`this is ${this.name} and is sound like ${this.sound}`);
}



}


// instead

const dog = new Animal("tom",'white','gauw gauw')







// 
}