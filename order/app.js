const addButton = document.getElementById('add-btn');
const list = document.getElementById('list');
const order = document.getElementById('order');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const totalPrice = document.getElementById('total-price');
const cart = document.getElementById('cart');
const totalDiv = document.getElementById('total-div');

const cartList = [];
let total = 0;

const state = {};

addButton.addEventListener('click', (e)=> {
    e.preventDefault();
    const meal = capitalize(order.value);
    const mealPrice = priceInput.value;
    const mealQuantity = quantityInput.value;
    if(meal !== '' && !cartList.includes(meal)) {

        state[`${meal}`] = { 
            price: `${mealPrice}`,
            quantity: `${mealQuantity}`
        };

        cartList.push(meal);
        
        renderList();

        total += parseFloat(mealPrice) * parseInt(mealQuantity);
        order.value = '';
        quantityInput.value = '1';
        priceInput.value = '';
        renderTotal();
    }
});

list.addEventListener('click', (e)=>{
    const element = e.target;
    if(element.classList[0] === 'button') {
        const elementNode = element.parentElement;
        const elementDataName = element.dataset.name;
        let elementDataPrice = parseFloat(element.dataset.price);
        let elementDataQuantity = parseInt(element.dataset.quantity);
        total = total - (parseFloat(elementDataPrice) * parseInt(elementDataQuantity));
        elementNode.remove();
        if(cartList.includes(elementDataName))
        {
            const index = cartList.indexOf(elementDataName);
            cartList.splice(index,1);
            delete state[`${elementDataName}`];
        }

        renderList();
        renderTotal();
    }
});

totalPrice.addEventListener('click', () => {

    totalDiv.classList.toggle('hidden');
    renderTotal();
    
})

// addButton.addEventListener('click', crustType);

cart.addEventListener('click', () => {
    list.classList.toggle('hidden');
})

const renderList = () => {
    list.innerHTML = '';
    
    //console.log(quantityInput.value);
    // Setting the items in alphabetical order
    cartList.sort();
    cartList.forEach((orderedMeal) => {        

        itemHtml = `
            <div class="mt-sm-3 bg-light alert flexview">
                <p class="large">${orderedMeal}</p>
                <button type="button" class="btn btn-danger col-sm-2 remove-btn" data-name="${orderedMeal}" data-price="${state[`${orderedMeal}`].price}" data-quantity="${state[`${orderedMeal}`].quantity}">Remove</button>
            </div>`;    
        list.insertAdjacentHTML('beforeend', itemHtml);
    })
}


const crustOptions = document.querySelector('#crust-type');
const Toppings = document.querySelector('#toppings');

const renderTotal = () => {
  
    // CRUST TYPE

    let crustCost;
    let Toppings = 200;

    if (crustOptions.value === 'crispy')
    {
        crustCost = 200;
        alert('Your order will be delivered after processing...');
    } else if (crustOptions.value === 'stuffed')
    {
        crustCost = 270;
        alert('Your order will be delivered after processing...');
    } else if (crustOptions.value === 'gluten-free')
    {
        crustCost = 300;
        alert('Your order will be delivered after processing...');
    }

  

    // TOTAL

    totalDiv.innerHTML = '';
    //const html = `Total : <span>${total}</span>`;
    const html = `<p class="display-4">Your total is: <span>KES${total + crustCost + Toppings}</span></p>`;
    totalDiv.insertAdjacentHTML('afterbegin', html);
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}





































// function check(toppings) {
//     var sel = document.getElementById(toppings);
//     var dropDown_sel = sel.options[sel.selectedIndex].text;
//     if (dropDown_sel != "none") {
  
//              state=1;
  
//        //state is a Global variable initially it is set to 0
//     } 
//   }
  
// function checkstatevalue() {
//     if (state==1) {
//         return 1;
//     } 
//         return false;
// }