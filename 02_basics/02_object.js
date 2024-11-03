//Singleton

//object literals
const mySym = Symbol("key1")


const JsUser = {
    name:"Tirth",
    [mySym]:"mykey1",
    age:21,
    location:"Gandhinagar",
    email:"tirth@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
console.log(JsUser.email);
console.log((JsUser["email"]));
console.log(JsUser[mySym]);

JsUser.email = "tirth@google.com"
console.log(JsUser);
//Object.freeze(JsUser)
JsUser.email = "tirth@facebook.com"
console.log(JsUser);

//Function

JsUser.greeting = function()
{
    console.log("Hello JS User");
    
}

console.log(JsUser.greeting());


JsUser.greetingTwo = function()
{
    console.log(`Hello Js User,${this.name}`);
    
}
console.log(JsUser.greetingTwo());



//Part Two

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Tirth"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const obj1 = {1:"a",2:"b"}
const obj2 = { 3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

