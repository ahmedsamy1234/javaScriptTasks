// /**
//  * protoType ==> inhe
//  * Abstract
//  * ajax ===> ...
//  */

// // function Employee(name,age,salary){
// //     var address = "123 st";
// //     this.nm = name||"Emp Name";
// //     this.age = age||20;
// //     this.salary = salary||10000;
// //     // this.getAddress
// // }

// // Employee.prototype.DisplayName = function(){return this.nm}

// // Employee.prototype.toString = function(){
// //     return "Hello ya "+this.nm+", Age: "+this.age+", Salary: "+this.salary
// // }
// // Employee.prototype.valueOf = function(){
// //     return this.salary;
// // }


// // Employee.prototype.valueOf = function(bonus){
// //     return (this.salary+this.salary*(bonus||0)/100);
// // }

// // var emp1 = new Employee("KOKO",20,7000);
// // var emp2 = new Employee("SOSO",22,8000);


// // console.log(emp1.toString());
// // console.log(emp1.valueOf());//7000
// // console.log(emp1 + emp2);//15000

// // console.log(emp1.valueOf(2));//7140



// function Person(name,age){
//     this.nm = name;
//     this.age = age;
// }

// Person.prototype.toString = function(){
//     return this.nm +", Age: "+ this.age;
// }

// //Inh ===> 3 steps
// function Employee(name, age, salary){
//     // this.nm = name;
//     // this.age = age;
//     //1st Steps
//     Person.bind(this,name,age)();//bind
//     this.salary = salary;

// }


// //2nd Step

// // Employee.prototype = new Person();///XXXXXXXXXX


// // Employee.prototype = Person.prototype;//XXXXXX

// Employee.prototype = Object.create(Person.prototype);//

// Employee.prototype.toString = function(){
//     // return this.nm +", Age: "+ this.age+", Salary: "+this.salary;
//     return Person.prototype.toString.bind(this)()+", Salary: "+this.salary;
// }


// Employee.prototype.DisplaySalary = function(){
//     return this.salary;
// }
// //3rd Step
// Employee.prototype.constructor = Employee;

// var p1 = new Person("Ahmed",20);
// var e1 = new Employee("Aly",22,10000);


// console.log(p1.constructor)
// console.log(e1.constructor)


//Abstract

function Shape(width,height){
    console.log(this.constructor);
    if(this.constructor == Shape){
        throw "you Cant create object of this type"
    }
    this.width = width||0;
    this.height = height||0;
}

function Square(wid){
    Shape.bind(this,wid,wid)();
    // this.width = wid;
    // this.height = wid;
}

Square.prototype = Object.create(Shape.prototype);


Square.prototype.constructor = Square;

// var s1 = new Shape(10,50);
var squ1 = new Square();




