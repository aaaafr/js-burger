// Il programma dovrà consentire di calcolare il prezzo del panino
//  selezionando o deselezionando gli ingredienti proposti.

// nome panino 
document.getElementById("name_burger").value



// ad ogni ingrediente corrisponde un valore

function renderInputs (list, el){
    var i = 0;
    
    while(i < list.length){
        console.log("ciao");
        el.insertAdjacentHTML("beforeend",
        ` 
        <div class="form-group">
        <img width="30" src="./assets/img/${list[i][0] + '.svg'}">
                <label for="${list[i][0]}">${list[i][0]}</label>
                <input type="checkbox" name="${list[i][0]}" id="${list[i][0]}" data-price="${list[i][1]}">
        </div>

        ` 
        )
        i++;

    }
}




var ingredients = [
    ["cheese", "0.50"],
    ["fried-egg", "2"],
    ["mustard", "1.50"],
    ["tomato", "2"],
    ["lettuce", "1"],
    ["ketchup", "1.50"]
]



var ingElement = document.querySelector(".ingredients");
renderInputs(ingredients,ingElement);



document.querySelector('button').addEventListener('click', function () { 
    var buger_price = 10.99;
    console.log(buger_price);
    // Incremento prezzo panino quando un ingrediente viene selezionato 
    var checks = document.querySelectorAll("input[type='checkbox']");
    console.log(checks);


    var sumIngredients = null;
    for(var i = 0; i < checks.length; i++) {
        var element = checks[i];
        if(element.checked) {
            sumIngredients += Number(element.getAttribute('data-price'))
        }
}
console.log(sumIngredients);
var totalPrice = buger_price  + sumIngredients;
console.log(totalPrice);
// Definire codici scnto e calcolo prezzo finale scontatato
var couponsList = ["1","2","3","4"];
var codiceSconto = document.getElementById("12345").value;

if(couponsList.includes(codiceSconto)){
    totalPrice = totalPrice - (totalPrice * 0.2);
}

document.getElementById("price").innerHTML = totalPrice;

});

