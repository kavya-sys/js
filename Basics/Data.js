//  Mainly Datatypes are of two types =>primitive and non-primitive
// Call by value and call by refernce 
// Primitive =>call by value =>7 types: String,Number,Boolean,null,undefined,Symbol,BigInt
// Non primitive =>Refernce =>Array,objects,functions
// const score=100;// we do not define the type of data type =>Dynamic language
// const isLoggedIn=false//boolean
// const outsideTemp=null//null
// let userEmail;//undefined
// const id =Symbol('123')
// const anotherId=Symbol('123')
// console.log(id=== anotherId);// false
// const bigNumber=222222222222222222222n //bigInt
// console.log(bigNumber)
/*********** non primitive***********/
/********ARRAYS********/
// const heros=["shaktiman","naagraj","doga"];
// /*******OBJECTS********/
//  let myobj={
//     name:"vanshika",
//     age:22,
//     }
// /******Function as Variable*********/
// const myFunction=function(){
//     console.log("Hello world");
// }
// Type of objects, function and arrays are function .


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/******************************************MEMORY *****************************************/
// Stack(Primitive),Heap(Non-Primitive)
// let real="IAMREAL"
// let copy="IAMCOPY"
// copy="CHANGING"
// console.log(real);
// console.log(copy);
// let userOne ={
//     email:"user@google.com",
//     upi:"user@ybl"
// }
// let userTwo =userOne
// userTwo.email = "hitesh@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);