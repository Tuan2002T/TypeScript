import Product from "./product";
import Order from "./order";
import OrderDetail from "./orderdetail";
class main{
    let product1 = new Product("1", "Product 1", 100);
    let product2 = new Product("2", "Product 2", 200);
    let product3 = new Product("3", "Product 3", 300);
    let product4 = new Product("4", "Product 4", 400);
    let product5 = new Product("5", "Product 5", 500);

    let order = new Order(1, new Date());

    order.addLineItem(product1, 1);
    order.addLineItem(product2, 2);
    order.addLineItem(product3, 3);
    order.addLineItem(product4, 4);
    order.addLineItem(product5, 5);

    console.log(order.toString());
}