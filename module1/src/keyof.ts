{
    // 


    type Vehicle = {
        car:string;
        bike:string;
        ship:string;
    }

    type Owner = "bike" | "car"  // manually

    type Owner1= keyof Vehicle

     const getPropertyValue = <T,K extends keyof T>(obj:T,key:K) =>{
        return obj[key]
     }


     const user = {
        name:"ronty",
        bike:"honda",
        roll:1234,
     }
     const user2 = {
        para:"ronty",
        car:"honda",
        id:1234,
     }

     const result = getPropertyValue (user2,"id")

     console.log(result);




    

























    // 
}