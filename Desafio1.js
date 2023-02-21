class ProductManager {
    constructor(title,description,price,thumbnail,code,stock,id){
        this.products = []
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = id
    }

    
//Methods

    addProduct (product) {

        product.id = Math.floor(Math.random()*5000) ;

        for(const item of this.products){
            if (product.title === "" || product.description === "" || product.price < 0 || product.thumbnail === "" || product.stock < 0)
            {return {ERROR: "Please complete all fields."}}
            else
            if (item.code === product.code) 
            {return{ERROR: "This product already exists."}}
        }
        
        this.products.push(product);
        return this.products;
    }

    getProducts(){
        return this.products
    }

    getProductById(id) {
        for(const item of this.products) {
            if(item.id === id) {
                return item;
            }
        }
        return {error: "Product doesn't exist"}
    }
}

//Testing

const productManager = new ProductManager();
console.log("+++++++++++++++++++++++  This list is empty  +++++++++++++++++++++++");
console.log(productManager.getProducts());

console.log("+++++++++++++++++++++++  Add a new product  +++++++++++++++++++++++");
console.log(productManager.addProduct({title:"producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code:"abc123", stock: 25,}));

console.log("+++++++++++++++++++++++  List with the product  +++++++++++++++++++++++");
console.log(productManager.getProducts());

console.log("+++++++++++++++++++++++  Add a new product with the same code  +++++++++++++++++++++++");
console.log(productManager.addProduct({title:"otro producto prueba", description: "Este es otro producto prueba", price: 150, thumbnail: "Sin imagen", code:"abc123", stock: 58,}));

console.log("+++++++++++++++++++++++  get product by id  +++++++++++++++++++++++");
console.log(productManager.getProductById(productManager.products[0].id))
console.log(productManager.getProductById("abc"))
