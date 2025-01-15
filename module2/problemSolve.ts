{
    //
    // //1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

    const sumArr = (num: number[]): number => {

        let sum = 0;


        for (let i = 0; i < num.length; i++) {
            sum = sum + num[i]
        }


        // num.forEach((num1)=> sum = sum + num1)
        return sum
    }

    let numberArr: number[] = [1, 2, 3]

    const sum = sumArr(numberArr)
    // console.log(sum)


    // 2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

    interface IPerson {
        name : string;
        age : number;
        email:string;
    }

    const obj:IPerson = {
        name:"ronty",
        age:22,
        email:"ronty@gmail.com"

    }

    // console.log(obj.name);
    // console.log(obj.age);
    // console.log(obj.email);

  //3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

  const calculateArea = (length:number,width:number):number =>{
    return length * width
  }

//   console.log(calculateArea(10,5));

  // 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.



//5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.



//6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.





















    //
}
