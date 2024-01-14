class Product{
    description: string;
    productID: string;
    price: number;

    toString(){
        return `${this.productID} - ${this.description} - ${this.price}`;
    }

    constructor(productID: string, description: string, price: number){
        this.productID = productID || "";
        this.description = description || "";
        this.price = price || 0;
    }

    getDescription(){
        return this.description;
    }
    setDescription(description: string){
        this.description = description;
    }
    getProductID(){
        return this.productID;
    }
    setProductID(productID: string){
        this.productID = productID;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price: number){
        this.price = price;
    }
}

export default Product;