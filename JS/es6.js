//node --version

//unpacking

import subtract, {area_triangle, divide as division, multiply} from "./hesabu.js";

let colors = ['red', 'green', 'blue']

//let r = colors[0]

let [r, ,b] = colors
console.log(r, b)
/*

let x =1, y =2

[x, y] = [y,x]

console.log(x,y)*/

//rest operator

function sum(...nums){
    let total =0
    for(let n of nums){
        total += n
    }
    console.log(total)

}
sum(8,9,7)
sum(10,10,10)

let scores1 =[72,56,66]
let score2 = [53,68]

let merged = [...scores1,...score2,90]

console.log(merged)

let patient ={name:"Milkah", age: 23}

let updatePatient = {...patient, gender:"F", outpatient:true}

console.log(updatePatient)

let area =area_triangle(10,20,31)

let div = division(5,6)

let product = multiply(2,6)

console.log(area, div, product)

subtract(10,5)
