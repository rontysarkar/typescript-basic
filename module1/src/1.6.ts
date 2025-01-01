// learn use type in functions


//normal function

function add(num1:number,num2:number):number{
    return num1+num2;
}

// arrow function 

const arrAdd =(num1:number,num2:number)=> num1+num2;


//object function method


const user1 ={
    name:'ronty',
    balance:0,
    addBalance(balance:number):string {
        return `my new balance is : ${this.balance+balance}`
    }

}

const arr: number[] = [1,2,3,4]

const newArr: number[] = arr.map((elem: number): number=> elem*elem)
