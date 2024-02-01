// Use This
const product = {
    id: "1",
    name: "Ball",
    Quantity: 100
}
console.log(product['id']);
console.log(product.name);
// Dont Use this
const tennisBall = new Object()
tennisBall.id = "2"
tennisBall.name = "Tennis Ball"
tennisBall.Quantity = 100
console.log(tennisBall.Quantity);

// function
function football(id, name, Quantity) {
    this.id = id;
    this.name = name;
    this.Quantity = Quantity
}
fb1 = new football("3", "football", 100)
console.log(fb1.name);
let dummy = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": ["https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
}