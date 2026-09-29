let count = 0;

let counter = document.getElementById('count')

let button = document.getElementById('increment')
let button2 = document.getElementById('decrement')
let Cart = document.getElementById('cart-count')

let ElemtTotal = document.getElementById('total')
2

let quantity = 0;
const price = 500;

let priceItem = 0

button.addEventListener("click", () => {
  if(count < 10 )  {
    count++
     quantity++
     priceItem = quantity * 500
    counter.textContent = count ;
    Cart.textContent = quantity;
    ElemtTotal.textContent = priceItem
}})

button2.addEventListener("click", () => {
    if( count > 0){
         count--
         quantity--
          priceItem = quantity * 500
    counter.textContent = count ;
     Cart.textContent = quantity;
      ElemtTotal.textContent = priceItem
}
})


  




