let a=prompt("Enter the 1st Number");
let b=prompt("Enter the 2nd Number");
document.write(`value1 = ${a} value2 = ${b} <br>`)
let operation=(a,b,divide)=>{
    divide(a,b);
}
let divide=(a,b)=>{
    console.log(a/b);
    let result=a/b;
    document.write(`Division of ${a} and ${b} is ${result}` )
}
operation(a,b,divide)