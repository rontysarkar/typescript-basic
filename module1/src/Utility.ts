{
// 


// Pick

type Person = {
    name:string;
    age:number;
    email?:string;
    contactNo:string
}

// Pick

type PickType = Pick<Person,"name" | "age">

// Omit

type OmitType = Omit<Person, "email">


// Required

type RequiredType = Required<Person>

// partial type

type PartialType = Partial<Person>

// Readonly Type 

type ReadOnlyType = Readonly<Person>


// Record type

type RecordType = Record<string,unknown>

const RecordTypeObjet: RecordType = {
  name:"ronty",
  age:12
}

// 
}