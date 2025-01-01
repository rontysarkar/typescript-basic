{// type alias 

type Friends ={
    name:string;
    age:number;
    gender:string;
    contact:string;
    address?:string;
}

const friends1 :Friends  = {
    name:"ronty",
    age:22,
    gender:"male",
    contact:"01400000",
    
}


// function

type Add = (num1:number,num2:number)=>number

const add:Add = (num1,num2)=> num1+num2


}