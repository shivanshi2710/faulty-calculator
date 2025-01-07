/* this is a faulty calculator 
it takes two numbers as a input 
1. + = -
2. - = +
3. * = /
4. / = **
 it performs wrong operation 10% of the time 
 */

let n1 = prompt("enter num1");
let n2 = prompt("enter num2");
let operator = prompt("enter operator");

const random = Math.random();


console.log(random);

let obj ={
    '+': '-',
    '-': '+',
    '*': '/',
    '/': '**'


}


if(random >0.1){

    // perform wrong operation
    alert(`the result is ${eval(`${n1} ${operator} ${n2}`)}`)
}
else {
    // perform correct operation
    operator = obj[operator];
    alert(`the result is ${eval(`${n1} ${operator} ${n2}`)}`)
}
