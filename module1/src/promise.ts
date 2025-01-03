{
// 

type Todo = {
    id:number;
    userId:number;
    title:string;
    completed:boolean;
}

const getTodo = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json()
    // console.log(data);

}
getTodo()



















const createPromise =(): Promise<string>=>{
    return new Promise<string>((resolve,reject)=>{
        const data:string = "something"
        if(data){
            resolve(data)
        }else{
            reject("flied to load data")
        }
    })
}


// calling create promise function

const showData = async(): Promise<string>=>{
    const data:string = await createPromise()
    return data
    // console.log(data);
}


showData()



}