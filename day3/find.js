let items = [
    {   name: 'Apple',
        qty: 1.2,
        category: 'Fruit',
        price : 100
    },
    {
        name: 'Banana',
        qty: 0.5,
        category: 'Fruit',
        price : 90
    },
    {
        name: 'Carrot',
        qty: 0.8,
        category: 'Vegetable',
        price : 20
    },
    {
        name: 'Broccoli',
        qty: 1.5,
        category: 'Vegetable',
        price : 25
    }
]

let findItem = items.find((item) => {return item.name ==="Apple"})
console.log(findItem)

let findItem2 = items.find((item) => {return item.price > 50})
console.log(findItem2)



let printNames = items.forEach((item) => {
    console.log(`The food item is : ${item.name}`)
})


let hasQtyMoreThan1 = items.some((item) => {
    return item.qty < 1;
})
console.log(hasQtyMoreThan1)

let everyItemIsVegetable = items.every((item) => {
    item.category === 'Vegetable';
})
console.log(everyItemIsVegetable)


let totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.price}, 0);
console.log(`Total price of all items is : ${totalPrice}`)  