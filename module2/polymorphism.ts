{
// 

class Person{
    getSleep(){
        console.log("iam a sleep a 8 hour for everyday");
    }
}

class Student extends Person{
    getSleep() {
        console.log("iam a sleep a 7 hour for every day");
    }
}

class Developer extends Person{
    getSleep() {
        console.log("iam a sleep a 6 hour for every day");
    }
}

const getSleepHour =(param:Person)=>{
    param.getSleep()
}

const person1= new Person()
const person2 = new Student()
const person3 = new Developer()

getSleepHour(person1)
getSleepHour(person2)
getSleepHour(person3)




// 
}