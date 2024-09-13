let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.textColor = "#fff"
tg.MainButton.color = "#2cab37"

let item = ""

const bodyy = document.querySelector('body')


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

const orderInp = document.querySelector('.order-inputs')
const orderPlacBtn = document.querySelector('.place-order-btn')
const orderPlacCloseBtn = document.querySelector('.close-order-inpts')

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


const successNotiOverlay = document.querySelector('.success-noti-overlay')
const notiSuccess = document.querySelector('.success-noti')
const closeNoti = document.querySelector('.close-delivery-btn')
const body = document.querySelector('body')

function notiFunc() {
    successNotiOverlay.style.display = 'block'
    notiSuccess.style.display = 'flex'
    body.style.overflow = 'hidden'
}

function closeNotiFunc() {
    successNotiOverlay.style.display = 'none'
    notiSuccess.style.display = 'none'
    body.style.overflow = 'auto'
}

closeNoti.addEventListener('click', () => {
    closeNotiFunc()
})

let order = ""
let quan = 1
const totalPrice = document.querySelector('#total-price')
const totalProduct = document.querySelector('#name-product')


buyNow.forEach((el, i) => {
    item = el.id
    el.addEventListener('click', () => {
        modalBuyNow.style.display = 'block'
        products.forEach((p, pi) => {
            if (pi == i) {
                order = p
                orderWrp.innerHTML = `
                <div class="order-product">
                 <img class="order-product-img" src="${p.image}" alt="">
                 <div class="order-text-and-btns-wrp">
                  <div class="order-product-text-wrap">
                    <span>${p.title}</span>
                    <span>$${p.price * quan}</span>
                  </div>
                  <div class="order-product-quantity">
                   <button id="rem-quan">-</button>
                   <span id="quan-text-content">${quan}</span>
                   <button id="add-quan">+</button>
                  </div>
                 </div>
                </div>
                `
                const addQuantity = document.querySelectorAll('#add-quan')
                const remQuantity = document.querySelectorAll('#rem-quan')
                const quanText = document.querySelectorAll('#quan-text-content')

                addQuantity.forEach((ad, adI) => {
                    totalPrice.textContent = `Total: ${p.price * quan + '$'}`
                    totalProduct.textContent = `${p.title}: ${quan}  шт`
                    ad.addEventListener('click', () => {
                        if (quan < 10) {
                            quan++
                            totalPrice.textContent = `Total: ${p.price * quan + '$'}`
                            totalProduct.textContent = `${p.title}: ${quan}  шт`

                        }
                        quanText.forEach((tx, txi) => {
                            tx.textContent = quan
                        })

                    })
                })

                remQuantity.forEach((rm, rmI) => {
                    totalPrice.textContent = `Total: ${p.price * quan + '$'}`
                    totalProduct.textContent = `${p.title} ${quan} шт`
                    rm.addEventListener('click', () => {
                        if (quan > 1) {
                            quan--
                            totalPrice.textContent = `Total: ${p.price * quan + '$'}`
                            totalProduct.textContent = `${p.title}: ${quan} шт`

                        }
                        quanText.forEach((qt, qti) => {
                            qt.textContent = quan
                        })
                    })
                })
            }
        })
    })
})

let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : []
const orderItemsWrp = document.querySelector('.orders-items-wrapper')

const ordersNotIcon = document.querySelector('.not-icon')



function ordersContent() {
    orders.forEach((el) => {
        console.log(el)
        orderItemsWrp.innerHTML += `
        <div class="order-item">
         <img src="${el.img}">
         <img class="check-icon" src="./images/check.svg">
         <div class="order-item-txt-wrapper">
             <span>productName: ${el.title}</span>
             <span>price: ${el.price + '$'}</span>
             <span>yourName: ${el.name}</span>
             <span>phoneNumber: ${el.tel}</span>
             <span>address: ${el.address}</span>
             <span class="order-date">date: ${el.date}</span>
         </div>
         <button class="support-btn">Support</button>
        </div>
        `
    })
}

ordersContent()

function notContentFunc() {
    if (orders.length) {
        ordersNotIcon.style.display = 'none'
    } else {
        ordersNotIcon.style.display = 'flex'
    }
}

notContentFunc()

function clearFunc() {
    orderItemsWrp.innerHTML = ""
    localStorage.removeItem('orders')
    window.location.reload(true)
}

const clearOrders = document.querySelector('.clear-orders-btn')

clearOrders.addEventListener('click', () => {
    clearFunc()
})

const orderss = document.querySelector('.orders')
const myOrdersBtn = document.querySelector('.my-orders-btn')
const backInOrders = document.querySelector('#back-in-orders')
const checkOrders = document.querySelector('#check-btn-nt')

myOrdersBtn.addEventListener('click', () => {
    orderss.classList.add('orders-active')
    bodyy.style.overflow = 'hidden'
})

checkOrders.addEventListener('click', () => {
    orderss.classList.add('orders-active')
    bodyy.style.overflow = 'hidden'
    closeNotiFunc()
})

backInOrders.addEventListener('click', () => {
    orderss.classList.remove('orders-active')
    bodyy.style.overflow = 'auto'
})

sendFormTg.addEventListener('submit', (e) => {
    e.preventDefault();

    const productTitle = order.title
    const productPrice = order.price

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
    message += `<b>Штук: ${quan}</b>\n`
    message += `<b>Итого оплата: ${''} ${productPrice * quan + '$'}</b>\n`

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
    })
        .then((res) => {
            if (res.ok) {
                console.log(true)
                orderInp.classList.remove('order-inp-active')
                let date = Date()
                let item = {
                    title: order.title,
                    price: order.price,
                    img: order.image,
                    address: address,
                    tel: tel,
                    name: name,
                    date: date,
                }
                modalBuyNow.style.display = 'none'
                orders.push(item)
                console.log(orders)
                notiFunc()
                ordersContent()
                notContentFunc()
            }
            localStorage.setItem('orders', JSON.stringify(orders))
        })
});

closeOrder.addEventListener('click', () => {
    modalBuyNow.style.display = 'none'
})

orderPlacBtn.addEventListener('click', () => {
    orderInp.classList.add('order-inp-active')
})

orderPlacCloseBtn.addEventListener('click', () => {
    orderInp.classList.remove('order-inp-active')
})


Telegram.WebApp.onEvent("mainButtonCliked", function () {
    tg.sendData(item)
})

let userCard = document.querySelector('.user-box')

let p = document.createElement('p')

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`

userCard.appendChild(p)
