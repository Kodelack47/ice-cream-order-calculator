
//window.onload = 

document.addEventListener("DOMContentLoaded", () => {

    const scoops = document.getElementById("scoops");
    const cone = document.getElementById("cone");
    const cup = document.getElementById("cup");

    const topping = document.getElementById("topping");
    const Sprinkles = document.getElementById("Sprinkles"); //YES
    const HotFudge = document.getElementById("HotFudge");
    const WhippedCream = document.getElementById("WhippedCream");
    const Cherry = document.getElementById("Cherry");

    // const output = document.getElementById("output");
    const orderEstimate = document.getElementById("orderEstimate");
    
    
    // const output = document.getElementById("output");

    const price = document.getElementById("price");
    const tax = document.getElementById("tax");
    const total = document.getElementById("total");
    

    cup.addEventListener("change", onChanged);
    cone.addEventListener("change", onChanged);

    function onChanged() {
        topping.style.display = cup.checked ? "block" : "none";
        recalculate();
      }
    
    
      function recalculate(){
        const results = calculate(
          Number(scoops.value),
          cup.checked,
          Sprinkles.checked,
          WhippedCream.checked,
          HotFudge.checked,
          Cherry.checked
        );
        // output.innerHTML = textResults(results);
        price.innerHTML = textResults(results.price);
        // topping.innerHTML = textResults(results.topping);
        // orderEstimate.innerHTML = textResults(results.orderEs);
        tax.innerHTML = textResults(results.taxprice);
        total.innerHTML = textResults(results.total);
    
      }
      orderEstimate.addEventListener("click", recalculate);
      HotFudge.addEventListener("input", recalculate);
      WhippedCream.addEventListener("input", recalculate);
      Cherry.addEventListener("input", recalculate);
      Sprinkles.addEventListener("input",recalculate);
      scoops.addEventListener("input",recalculate);
    
    });




















    // function updateToppings(){
    //     toppings.style.display = cup.checked ? 'block' : 'none';
    // }
    // cone.addEventListener("change", updateToppings);
    // cup.addEventListener("change", updateToppings);

    // orderEstimate.addEventListener("click", ()=>
    
    // function recaluate(){
    //     const results = calculate(
    //         Number(scoops.value),
    //         cone.checked, 
    //         cup.checked, 
    //         Sprinkles.checked,
    //         HotFudge.checked,
    //         WhippedCream.checked,   
    //         Cherry.checked,
    //         orderEstimate.checked, 
          
    //     )

        // output.innerHTML = getTextResults(results);
        
//         price.innerHTML =  dollars(results.price);
//         tax.innerHTML = dollars(results.tax);
//         total.innerHTML = dollars(results.total);
//     });

// });