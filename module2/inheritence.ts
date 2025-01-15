{
    // 

    class Person {
        name: string;
        age: number;
        form: string;

        constructor(name: string, age: number, form: string) {
            this.name = name;
            this.age = age;
            this.form = form;
        }

        getSleep(hour: number) {
            console.log(`${this.name} will sleep for ${hour}`);
        }
    }


    class Student extends Person {

        constructor(name: string, age: number, form: string) {
            super(name, age, form)
        }
    }

    const student1 = new Student('ronty', 22, 'bd')


    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, form: string, designation: string) {
            super(name, age, form)
            this.designation = designation
        }

        takeClass(numberOfClass: number) {
            console.log(`${this.name} wile ${numberOfClass} take a day`);
        }
    }


    const teacher1 = new Teacher("saif sir", 40, 'bd', 'professor')


    class Owner extends Teacher {
        isAdmin: boolean;

        constructor(name: string, age: number, form: string, designation: string, isAdmin: boolean) {
            super(name, age, form, designation)
            this.isAdmin = isAdmin;
        }
    }


    const owner1 = new Owner('ronty', 50, 'bd', 'owner', true)





    // 
}