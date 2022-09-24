const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);



const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
console.log(myString2);


function checkAge(age) {
    return!(age < 14 || age > 90);
}

let age = 50;


console.log(checkAge(age));

let idhere = prompt("input id:")

if (idhere === "Admin") {
    let pass = prompt("input password");
    if (pass==="TheMaster"){
        console.log("Welcome!");
    }
    else
        console.log("Wrong Password")
}
else console.log("I don't know you")
