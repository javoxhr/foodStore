const TOKEN = "7547473380:AAHY6d_QFWqD1vMiiwoEz4ta_9GQkT1WmUc"
const CHANNELID = "-1002253875776"
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const sendFormTg = document.querySelector('#send-message-tg')

const wrp = document.querySelector('.products')

const snaksCategory = document.querySelector('#Snaks')

const cart = document.querySelector('.cart')
const cartOpen = document.querySelector('#cart-open')
const cartClose = document.querySelector('#close-cart')

cartOpen.addEventListener('click', () => cart.classList.add('active-cart'))

cartClose.addEventListener('click', () => cart.classList.remove('active-cart'))

const products = [
    {
        title: 'GamBurger',
        price: 7.99,
        category: 'food',
        image: './images/burger.png',
        quantity: 1,
        id: 1
    },
    {
        title: 'Checken',
        price: 8.39,
        category: 'food',
        image: './images/checken.png',
        quantity: 1,
        id: 2
    },
    {
        title: 'Fri',
        price: 2.19,
        category: 'snek',
        quantity: 1,
        image: './images/frii.png',
        id: 3
    },
    {
        title: 'Combo',
        category: 'food',
        price: 11.28,
        image: './images/combo.png',
        quantity: 1,
        id: 4
    },
    {
        title: 'Pizza',
        category: 'food',
        price: 10.5,
        image: './images/pizza.png',
        quantity: 1,
        id: 5
    },
    {
        title: 'Cola',
        category: 'drings',
        price: 1.2,
        image: './images/cola.png',
        quantity: 1,
        id: 6
    },
    {
        title: 'Milk choco',
        category: 'drings',
        price: 4.6,
        image: './images/milk-choc.png',
        quantity: 1,
        id: 7
    },
    {
        title: 'Koktel',
        category: 'drings',
        price: 2.1,
        image: './images/koktel.png',
        quantity: 1,
        id: 8
    },
    {
        title: 'Chocolate',
        category: 'candy',
        price: 2.8,
        image: './images/chocolate.png',
        quantity: 1,
        id: 9
    },
    {
        title: 'GridChoco',
        category: 'candy',
        price: 3.1,
        image: './images/chocolate2.png',
        quantity: 1,
        id: 10
    }
]

products.forEach((el) => {
    console.log(el)
    wrp.innerHTML += `
     <div class="product">
       <div class="image-wrap">
        <img class="item-img" src="${el.image}" alt="">
       </div>
       <div class="text-wrapper">
         <h3 class="product-title">${el.title}</h3>
         <span class="product-price">$ ${el.price}</span>
       </div>
       <button class="buy-now">buy Now</button>
       <button class="add-to-cart">
        <svg height="15px" version="1.1" viewBox="0 0 20 20" width="15px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#fff" id="Core" transform="translate(-212.000000, -422.000000)"><g id="shopping-cart" transform="translate(212.000000, 422.000000)"><path d="M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z" id="Shape"/></g></g></g></svg>
       </button>
     </div>
    `
})

const buyNow = document.querySelectorAll('.buy-now')
const modalBuyNow = document.querySelector('.order-buy-now')
const closeOrder = document.querySelector('.close-order')
const orderWrp = document.querySelector('.order-wrapper')
const telInp = document.querySelector('tel')
const nmInp = document.querySelector('name')
const adlInp = document.querySelector('adress')

let order = ""

buyNow.forEach((el, i) => {
    el.addEventListener('click', () => {
        modalBuyNow.style.display = 'block'
        products.forEach((p, pi) => {
            if (pi == i) {
                order = p
                orderWrp.innerHTML = `
                <div class="order-product">
                 <img class="order-product-img" src="${p.image}" alt="">
                 <span>${p.title}</span>
                 <span>$${p.price}</span>
                </div>
                `
                sendFormTg.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const productTitle = p.title
                    const productPrice = p.price
                    
                    const form = e.target;
                
                    const name = form.querySelector('[name="name"]').value;
                    const tel = form.querySelector('[name="tel"]').value;
                    const address = form.querySelector('[name="address"]').value;

                    if (!name || !tel || !address) {
                        alert('Пожалуйста, заполните все поля.');
                        return;
                    }
                
                    let message = `<b>Новый заказ 🚚</b>\n`;
                    message += `<b>Имя покупателя: </b> ${name}\n`;
                    message += `<b>Телефон: </b> ${tel}\n`;
                    message += `<b>Адрес: </b> ${address}\n`;
                    message += `<b>${productTitle}</b>\n`
                    message += `<b>Итого оплата: ${''} ${productPrice + '$'}</b>`
                
                    fetch(URL_API, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            chat_id: CHANNELID,
                            text: message,
                            parse_mode: "HTML"
                        })
                    });
                });
                
            }
        })
    })
})

closeOrder.addEventListener('click', () => {
    modalBuyNow.style.display = 'none'
})

const orderInp = document.querySelector('.order-inputs')
const orderPlacBtn = document.querySelector('.place-order-btn')
const orderPlacCloseBtn = document.querySelector('.close-order-inpts')

orderPlacBtn.addEventListener('click', ()=> {
    orderInp.classList.add('order-inp-active')
})

orderPlacCloseBtn.addEventListener('click', ()=> {
    orderInp.classList.remove('order-inp-active')
})