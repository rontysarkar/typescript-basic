{
    // 
 type a1 = undefined;
 type b1 = undefined;

 type x1 = a1 extends undefined ? true : false //conditional type

 type y1 = a1 extends null ? true : a1 extends b1 ? true : any

 type Sheikh = {
    bike: string;
    plane:string;
    car:string;
 }

 type CheckVehicle<T> = T extends keyof Sheikh ? true : false

 type HasPlane = CheckVehicle<"car">





















    // 
}