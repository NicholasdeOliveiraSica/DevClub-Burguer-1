const list = document.querySelector(".burguer-grid")
const values = [
    menuOptions[0].price,
    menuOptions[1].price,
    menuOptions[2].price,
    menuOptions[3].price,
    menuOptions[4].price,
    menuOptions[5].price
]

let myLi = ''
let sum = 0

function apllyDiscount() {

    menuOptions.map((item, index) => {
        if(values[index] == item.price) {
            item.price = calculateDiscount(item.price)
        }
    })

    myLi = ''
    showAll()

}

function showAll() {
    myLi = ''
    menuOptions.forEach( item => {
        myLi += `
        <li class="burguer">
            <img src=${item.src} class="burguer-image">
            <p class="burguer-name">${item.name}</p>
            <p class="burguer-price">${Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                item.price,
            )}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}

function showTotal(total) {

    const totalValue = menuOptions.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    myLi = `
    <li class="burguer">
    <h1>Total</h1>
    <p>${Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalValue)}</p>
    </li>
    `
    list.innerHTML = myLi
}

function showVegan() {
    myLi = ''
    menuOptions.forEach( item => {
        if(item.vegan){
            myLi += `
            <li class="burguer">
                <img src=${item.src} class="burguer-image">
                <p class="burguer-name">${item.name}</p>
                <p class="burguer-price">${Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                    item.price,
                )}</p>
            </li>
            `
        } else {
            console.log('')
        }
    })
    list.innerHTML = myLi
}

function calculateDiscount(value) {
    let newValue = value - (value / 10)
    return newValue
}



