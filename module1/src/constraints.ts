{
// 


const addToCourse =<T extends {id:number; name:string}> (student:T) =>{
    const course = "next level web development"

    return {
        ...student,
        course,
    };
}


const student1 = addToCourse<{id:number;name:string}>({id:123,name:"ronty"})
const student2 = addToCourse<{id:number;name:string}>({id:21,name:"rabby"})
console.log(student2);
























//
}