{
    // 

    // function with generic

    const creteArray = (param:string) : string[]  =>{
      return [param]
    }

    const arry1 = creteArray("bangladesh")


    const createArrayWithGeneric =<T,Q>(param1:T,param2:Q):[T,Q] =>{
        return [param1,param2]
    }

    interface user3  {
        id:number;
        name:string
    }


    const arry1WithGeneric = createArrayWithGeneric<string,number>("bangladesh",123)
    const arry1WithGeneric2 = createArrayWithGeneric<number,boolean>(123,true)
    const arry1WithGeneric3 = createArrayWithGeneric<user3,{brand:string}>({id:123,name:'ronty'},{brand:'apple'})
    console.log(arry1WithGeneric3);

























    // 
}