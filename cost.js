/* Author: Ousmana Tunkara · github.com/Kodelack47 · Ice Cream Order Calculator */
// function getRateData( orderEstimate, Sprinkles, HotFudge,WhippedCream, Cherry,) {
//     //OUPUT VARIABLES
//     let Sprinkles = 0;
//     let HotFudge = 0;
//     let WhippedCream = 0;
//     let Cherry = 0;

//     //LOGIC
//     const pricePerScoop = 2.25 ;
//     if(Sprinkles){
//         Sprinkles += 0.50 ;
//     }
//     if(HotFudge){
//         HotFudge += 1.25 ;
//     }
//     if(WhippedCream){
//         WhippedCream += 0.25 ;
//     }
//     if(Cherry){
//         Cherry += 0.25;
//     }

//     let orderEstimate =  pricePerScoop;
//     // RETURN OBJECT WITH OUTPUTVARIABLE AS PROPERTIES
//     return { orderEstimate
//         // rentalAmount: rentalAmount,
//         // optionsAmount: optionsAmount,
//         // surchargeAmount: surchargeAmount,
//         // totalDue: totalDue
//     }
// }

function calculate(scoops, cup, Sprinkles, HotFudge, WhippedCream, Cherry) {
  let sprinkleTopping = 0;
  let costHotFudge = 0;
  let WhippedCreamcost = 0;
  let costCherry = 0;
  let tax = 0.0875;

  //LOGIC
  const costScoops = 2.25;
  if (cup) {
    if (Sprinkles) {
      sprinkleTopping += 0.5;
    }
    if (HotFudge) {
      costHotFudge += 1.25;
    }
    if (WhippedCream) {
      WhippedCreamcost += 0.25;
    }
    if (Cherry) {
      costCherry += 0.25;
    }
  }

  let price =
    1.25 * Number(scoops) +
    1 +
    sprinkleTopping +
    WhippedCreamcost +
    costHotFudge +
    costCherry;
  let taxprice = price * tax;
  let total = taxprice + price;

  return {
    total: total,
    taxprice: taxprice,
    costScoops: costScoops,
    price: price,
  };
}

// let textResults = calculate();

function textResults(value) {
  let text = value.toFixed(2);
  const prefix = "$";
  return prefix + text;
}

//   RATE = 0.08;
//   let price = 1 + 1.25 * scoops;
//   if (cup) {
//     price += Sprinkles ? 0.5 : 0;
//     price += HotFudge ? 1.25 : 0;
//     price += WhippedCream ? 0.25 : 0;
//     price += Cherry ? 0.25 : 0;
//   }
//   const tax = price * RATE;
//   const total = price + tax;
//   return {
//new object
//     price: price,
//     tax: tax,
//     total: total,
//   };
// }

// function dollars(amount) {
//   return `$${amount.toFixed(2)}`;
// }

// //TEST
// console.log(calculate(2, true, true, true, true, true));
// console.log(calculate(2, false, false, false, false, false));

// //TEST
// function getTextResults(results){
//     return `
//     Car Rental:         $${results.rentalAmount.toFixed(2)}
//     Options:            $${results.optionsAmount.toFixed(2)}
//     Under 25 Surcharge: $${results.surchargeAmount.toFixed(2)}

//     Car Rental:         $${results.totalDue.toFixed(2)}
//     `;
// }
// console.log(getTextResults(getRateData( 10, true, true, true, true)));
// console.log(getTextResults(getRateData( 10, false, false, false, false)));
