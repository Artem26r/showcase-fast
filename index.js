const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    if(order.find(el => el.id === productId)) return alert('ТОвар уже добавлен')

    const product = products.find(item => item.id === productId);
    order = [...order, product]

    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {

    order = order.filter(el => el.id !== productId);

    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {

    const totalPrice = order.reduce((acc, item) => {
        return acc + item.price
    }, 0)



    document.getElementById('total').innerText = totalPrice;
}


let renderCart = () => {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}