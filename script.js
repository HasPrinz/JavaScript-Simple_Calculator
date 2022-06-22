let num1 = parseInt(prompt("Enter first Number: " ))
let operator = prompt("Please slect preffered operationt(add(+),subtract(-), multiply(*), divide(/)): " )
let num2 = parseInt(prompt("Enter second Number: " ))

if(operator === "+" || operator === "add"){
    answer = num1 + num2
    console.log(answer);
}else if(operator === "-" || operator === "subtract"){
    answer = num1 - num2
    console.log(answer);
}else if(operator === "/" || operator === "divide"){
    answer = num1 / num2
    console.log(answer);
}else if(operator === "*" || operator === "multiply"){
    answer = num1 * num2
    console.log(answer);
}

alert('Result is ' + answer)