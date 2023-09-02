let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listcart = document.querySelector('.listcart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'MiX MAX',
        image: '1.PNG',
        price: 12000
    },
    {
        id: 2,
        name: 'AYAM JEGER',
        image: '2.PNG',
        price: 12000
    },
    {
        id: 3,
        name: 'MEAT SALAD',
        image: '3.PNG',
        price: 22000
    },
    {
        id: 4,
        name: 'GULAI EDUN',
        image: '4.PNG',
        price: 12300
    },
    {
        id: 5,
        name: 'SALAD',
        image: '5.PNG',
        price: 32000
    },
    {
        id: 6,
        name: 'PIZZA PEMBERANI',
        image: '6.PNG',
        price: 50000
    }
];
let listcarts =[];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addTocart(${key})">Tambahkan ke Keranjang,</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addTocart(key){
    if(listcarts[key] == null){
        listcarts[key] = JSON.parse(JSON.stringify(products[key]));
        listcarts[key].quantity = 1;
    }
    reloadcart();
}
function reloadcart() {
    listcart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listcarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}" /></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listcart.appendChild(newDiv);
        }
    });

    const taxRate = 0.1;
    const totalPriceWithTax = totalPrice + (totalPrice * taxRate);

    total.innerText = totalPriceWithTax.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listcarts[key];
    }else{
        listcarts[key].quantity = quantity;
        listcarts[key].price = quantity * products[key].price;
    }
    reloadcart();
}