{
  //


type GenericArray<T> = Array<T>
    
//   const rollNumber: number[] = [1,2,3,4,5,6];
  const rollNumber: GenericArray<number> = [1,2,3,4,5,6,];

//   const nameList: string[] = ['ronty', 'suton', 'rabby'];
  const nameList: Array<string> = ['ronty', 'suton', 'rabby'];

//   const booleanValue: boolean[] = [true, false,true];
  const booleanValue: Array<boolean> = [true, false,true];

  // generic object

  const user: GenericArray<{name:string,age:number}> = [
    {
        name:"ronty",
        age:100,
    },
    {
        name:"rabby",
        age:100,
    },
    
  ]


//   generic tuple 

type GenericTuple<X,Y> = [X,Y];


const manush : GenericTuple<string,string> = ['mr.x', "mr.Y"]

const userWithId : GenericTuple<number,{name:string,email:string,roll:number}> = [123,{name:"ronty",email:"ronty@gmail.com",roll:122}]



  










  //





}