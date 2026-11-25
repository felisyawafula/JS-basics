export function area_triangle(a,b,c){
    let s = (a+b+c)/2
    let res =s*(s-a)*(s-b)*(s-c)
    console.log(res)
    return Math.sqrt(Math.abs(res))
}

/*
console.log(area_triangle(4,7,9))*/

export function divide(a,b){
    return a/b
}
export const multiply = (a, b) => a * b

export default function subtract(a, b){
    return a - b

}

export {multiply,divide }
