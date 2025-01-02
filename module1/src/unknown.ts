{
   //unknown type

   const getSpeedInMeterPerSecond = (value: unknown)=>{

    if(typeof value === "number"){
        const convertedSpeed = (value *1000)/3600;
        console.log(`the speed is ${convertedSpeed} ms-1`);
    }
    else if( typeof value === "string"){
        const [result,unit] = value.split(" ")
        const convertedSpeed = (parseFloat(result) *1000)/3600;
        console.log(`the speed is ${convertedSpeed} ms-1`);
        
    }else{
        console.log("unknown type");
    }
   }


   getSpeedInMeterPerSecond(null)





}