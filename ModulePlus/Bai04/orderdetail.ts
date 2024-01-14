import Product from "./product";
class  OrderDetail{
    quantity: number;
    product: Product;

    getQuantity(){
        return this.quantity;
    }
    setQuantity(quantity: number){
        this.quantity = quantity;
    }

    constructor(quantity: number, product: Product){
        this.quantity = quantity || 0;
        this.product = product || new Product("", "", 0);
    }

    toString(){
        return `${this.product} - ${this.quantity}`;
    }

    calcTotalPrice(){
        return this.quantity * this.product.getPrice();
    }

    calcTotalCharge(){
        return this.calcTotalPrice() * 1.1;
    }


}   

export default OrderDetail;