let num1 = prompt("Operand: ");
let operator = prompt("Operator: ");
let num2 = prompt("Operand: ");

switch(operator){
    case "+":
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case "-":
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case "*":
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    case "/":
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    case "%":
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
        break;
    default:
        console.log("ERROR");
}