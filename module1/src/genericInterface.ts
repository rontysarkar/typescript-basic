{
    // 


    // interface generics

    interface Developer<T,X = null> {
        name:string;
        computer:{
            brand:string;
            model:string;
            display:string;
        };
        smartWatch:T;
        bike?:X
    }

    type Any = {
        name:string;
        model:string;
        hartTrack:boolean;
    }


    const developer1:Developer<Any> = {
        name:'ronty sarkar',
        computer:{
            brand:"hp",
            model:"m22f",
            display:"old"
        },
        smartWatch:{
            name:"anything",
            model:"2019",
            hartTrack:true,
        }
    }


    interface appleWatch {
        name:string;
        model:string;
        hartTrack:boolean;
        newFuture:string
    }

    interface YamahaBike {
        name:string;
        model:string;
    }


    const developer2:Developer<appleWatch,YamahaBike> = {
        name:'Rabby',
        computer:{
            brand:"apple",
            model:"123",
            display:"old"
        },
        smartWatch:{
            name:"apple",
            model:"2019",
            hartTrack:true,
            newFuture:"anything"
        },

        bike:{
            name:"yamaha",
            model:'1233'

        }
    }




















    // 
}