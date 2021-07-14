/* This code is for leraning purposes on how to use javascript promises
 JavaScript's Await
*/
function toppings_choice() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("Which topping would you love?"));
      }, 300);
    });
  }

  toppings_choice();

  //Create a second class 
   function good_vibes(){
       /* */ 

       return new Promise((resolve, reject) => {
           setTimeout(() => {
resolve(console.log("I am amazing!"));
           },1000)
       })
 

   }

   good_vibes();
  