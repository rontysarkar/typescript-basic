{
// 

// type guard 

type Add1 = string | number

const addNumberOrString = (param1:Add1,param2:Add1):Add1=>{

    if(typeof param1 ==='number' && typeof param2 === 'number'){
        return param1 + param2;
    }else{
        return param1.toString() + param2.toString
    }
}

// console.log(addNumberOrString("1",4));


//Guard in using

type NormalUser = {
    name:string
}

type AdminUser = {
    name:string;
    role:'admin'
}

const getUser = (user : NormalUser | AdminUser)=>{
   if("role" in user){
    console.log(`iam a ${user.name} and my role is  ${user.role}`);
   }else{
    console.log(`my name is ${user.name}`);
   }
}

const normalUser:NormalUser = {
    name:'ronty'
}

const user1 = getUser({
    name:'ronty',
    role:"admin"
})




// 
}