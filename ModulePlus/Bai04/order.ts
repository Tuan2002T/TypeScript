import  OrderDetail  from './orderdetail';
import  Product  from './product';
class Order{
    orderId: number;
    orderDate: Date;
    lineItems: OrderDetail[];
    count: number;

    constructor(orderId?: number, orderDate?: Date, lineItems?: OrderDetail[]){
        this.orderId = orderId || 0;
        this.orderDate = orderDate || new Date();
        this.lineItems = lineItems || [];
    }

    toString(){
        return `${this.orderId} - ${this.orderDate} - ${this.lineItems}`;
    }

    getOrderID(){
        return this.orderId;
    }
    setOrderID(orderId: number){
        this.orderId = orderId;
    }
    getOrderDate(){
        return this.orderDate;
    }
    setOrderDate(orderDate: Date){
        this.orderDate = orderDate;
    }
    getLineItems(){
        return this.lineItems;
    }
    setLineItems(lineItems: OrderDetail[]){
        this.lineItems = lineItems;
    }
    addLineItem(product: Product, quantity: number){
        this.lineItems.push(new OrderDetail(quantity, product));
    }
}

export default Order;
