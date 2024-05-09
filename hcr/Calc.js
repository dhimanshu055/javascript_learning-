document.getElementById("Calc").addEventListener('submit',(event)=>{
    event.preventDefault()
})

const a = document.getElementById("di")
const b = document.getElementById("dig")
const c = document.getElementById("digit")

// const add=()=>{
//  const result =    document.getElementById('di').value
//  const result2 =    document.getElementById('dig').value
//  const finalResult = parseInt(result)+parseInt(result2)
//  console.log(finalResult);
// }

function add () {
            var sum = parseInt(a.value )+ parseInt(b.value) ;
            c.value =sum
}
function substract () {
            var substract = parseInt(a.value )- parseInt(b.value) ;
            c.value =substract
}
function multiply () {
            var multiply = parseInt(a.value )* parseInt(b.value) ;
            c.value = multiply
}
function divide () {
            var divide = parseInt(a.value )/ parseInt(b.value) ;
            c.value = divide
}
// function substract (a, b,) {
//     var c = a - b ;
//     return c ;
// }
// function multiply (a, b,) {
//     var c = a * b ;
//     return c ;
// }
// function divide (a, b,) {
//     var c = a / b ;
//     return c ;
// }

