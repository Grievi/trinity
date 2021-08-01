let total = 0
function Order(pizza, number, size, topping, crust){
    this.pizza = pizza;
    this.number = number;
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.cost = 0
}
Order.prototype.total = function(){

    switch (this.pizza){
        case 'large':
            this.cost = 800;
            break;
        case 'medium':
            this.cost = 600;
            break;
        case 'small':
            this.cost = 400;
            break;
        default:
            break;
    }

    switch(this.topping){
        case 'pepparoni':
            this.cost += 150;
            break;
        case 'mushroom':
            this.cost += 150;
            break;
        case 'cheese':
            this.cost += 150;
            break;
        default:
            break;

    }
    
}

let pizzaOrder = [];
let total = 0;

$('btnSubmit').click( function(event){
    event.preventDefault();
    
})











