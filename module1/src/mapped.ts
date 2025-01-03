{
//


const arrayOfNumber: number[] = [1,5,6,8,7];

// const arrayOfString: string[] = ['1','5','6','8','7']

const arrayOfString:string[] = arrayOfNumber.map((num)=>num.toString())
// console.log(arrayOfString);

type AreaNumber = {
    height:number;
    width:number;
}

// {height:number;width:number;


type AreaString<T> = {
    [key in keyof T ]:T[key]
}

const area1 : AreaString<{height:number;width:number;
}> ={
    height:12,
    width:123,
}




//
}