export class Student{
    class: String;
    firstName: String;
    lastName: String;

    // constructor(classNo: String, firstname: String, lastname: String){
    //     this.class = classNo;
    //     this.firstName = firstname;
    //     this.lastName = lastname;
    // }
    constructor(){


    }
    setStudentData(cl: String, fn: String, ln: String){
        this.class = cl;
        this.firstName = fn;
        this.lastName = ln;
    }
}