const a=parseFloat(prompt("Your first number"))
const b=parseFloat(prompt("Second number"))
const operator=prompt("Enter an operand(+, -, *, /)")
let result;

if(operator == "+"){
    result=a+b
}
else if(operator == "-"){
    result=a-b
}
else if (operator == "*"){
    result=a*b
}
else if(operator == "/"){
    result=a/b
}
else{
    prompt("Insert a valid operator please.")
}

alert("The result is "+ result)