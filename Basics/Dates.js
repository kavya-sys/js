// Dates
let myDate =new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
// let myCreatedDate=new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); //1/23/2123, 5:03:00AM
let myCreatedDate= new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());//1/14/2023,12:00:00AM
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//milliseconds 

// console.log(Math.floor(Date.now()/1000));//to convert the seconds

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
// '${newDate.getDay()} and the time '
newDate.toLocaleString('default')