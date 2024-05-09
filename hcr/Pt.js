// // // for (let i = 0; i <= 3; i++) {
// // //     var str = " ";
// // //     for (let j=0; j<=0; j++){
// // //         str= str+" *";
// // //     }

// // //     console.log(str);
// // // }



// // function square (n) {
// //     for (let i = 0; i < 3; i++) {
      
// //       for (let j = 0; j < 3; j++) {
        
// //         // if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
// //         if (i =j-1) {
// //           console.log("* ");
// //         } else {
// //         0
// //           console.log("  ");
// //         }
// //       }
      
// //       console.log();
// //     }
// //   }
  
  
// //   const size = parseInt(prompt("Enter the size of the square: "));
  
  
// //   printSquareHollowStarPattern(size);


// let arr =[52,56,96,66,52,69]
// let sum= 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum+arr[i]
    
// }
// let avg=sum/arr.length
// console.log(avg);

// let arr = [52, 56, 96, 66, 52, 69];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// let avg = sum / arr.length;
// console.log(avg);


// let coffee = [ "latte" , "Cappuccino","Mocha"];


// let res = document.getElementById("res")

let coffee = [
    {
        id:"1",
        name:"latte",
        PRICE:"120",
        
    },
    {
        id:"2",
        name:"Cappuccino",
        PRICE:"150",
        
    },
    {
        id:"3",
        name:"Mocha",
        PRICE:"160",
    
    },
]

// for (let i = 0; i < coffee.length; i++) {
//    res.innerHTML+=coffee[i].id+". "+coffee[i].name+"<br/>";
// //    res.innerHTML+="\n"

    
//     console.log(coffee[i].id,coffee[i].name);
// }

// Populate coffee menu
let coffeeMenu = document.getElementById("coffeeMenu");
coffee.forEach(coffeeItem => {
    let listItem = document.createElement("li");
    listItem.textContent = `${coffeeItem.id}. ${coffeeItem.name}`;
    coffeeMenu.appendChild(listItem);
});

function Show(){
    let inp =document.getElementById("input")
    let value=parseInt(inp.value)
    let showcoffee=coffee[value-1].PRICE;
    let gst = (showcoffee*18)/100;
    let ShowPrice = parseInt(showcoffee)+gst;
    console.log(ShowPrice);

    let coffeename;
    let price ;
    for(let i of coffee){
        // console.log(i)
        // console.log(i['id'])
        // console.log(inp)
        if(i['id']==value){
            console.log(i)
            coffeename = i['name'];
            price = i[`PRICE`]
        }
    }

    let tableBody = document.querySelector("#coffeeTable tbody");
    console.log(tableBody)
    let newRow = tableBody.insertRow();
    console.log(newRow);
    newRow.innerHTML = `
        <td>${value}</td>
        <td>${coffeename}</td>
        <td>${price}</td>
        <td>${gst.toFixed(2)}</td>
        <td>${price}</td>
    `;

    console.log(newRow)
}
