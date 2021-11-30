//array
const array = [1, 2, 3];
const [a, b] = array;
console.log(a); 
console.log(b);
console.log(array); 

//object
const myObj = {
    name: 'Neha',
    age: 26
}
const {name} = myObj;
const {age} = myObj;
console.log(name); 
console.log(age);  
console.log(myObj);  

//Destructuring
const printName = (personObj) => {
    console.log(personObj.name);
    
}
printName({name: 'Neha', age: 26});


const printName1 = ({name1}) => {
    console.log(name1);
}
printName1({name1: 'Neha', age1: 26});