const fs = require("fs")


class ProductManager {
    constructor(){
        this.path = "./products.txt";
        this.products = [];
    };

    static id = 0;

    //Methods 

    addProduct = async (title,description,price,thumbnail,code,stock) => {

        ProductManager.id++

        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id : ProductManager.id
        }; 

        this.products.push(newProduct)

        await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    };

    readProducts = async () => {

        let result = await fs.promises.readFile(this.path, "utf-8")

        return JSON.parse(result)

    };

    getProducts = async () => {
        let allProducts = await this.readProducts()
        return console.log (allProducts)
    };

    getProductsById = async (id) => {
        let productById = await this.readProducts()
        if (!productById.find(product => product.id === id)){
            console.log("Product doesn't exist")
        } else 

        console.log(productById.find(product => product.id === id))
        
    };


    deleteProductById = async (id) => {

        let productById = await this.readProducts()
        let productFilter = productById.filter(products => products.id != id)
        await fs.promises.writeFile(this.path, JSON.stringify(productFilter));
        console.log ("The product was deleted")

    };

    updateProducts = async ({id, ...product}) => {
        await this.deleteProductById(id)
        let oldProducts = await this.readProducts()

        let modifiedProduct = [{...product, id},...oldProducts]

        await fs.promises.writeFile(this.path, JSON.stringify(modifiedProduct));

        console.log("The product was modified")

    };


}

//Testing

const products = new ProductManager;


/* products.addProduct("title1","description1",100,"thumbnail1",123,58);
products.addProduct("title2","description2",200,"thumbnail2",321,85); 
products.addProduct("title3","description3",300,"thumbnail3",231,36); */

/* products.getProducts() */

/* products.getProductsById(2)  */

/* products.deleteProductById(2) */

/* products.updateProducts({
title: 'title1',
description: 'description1',
price: 555,
thumbnail: 'thumbnail1',
code: 123,
stock: 58,
id: 1}
) */





 