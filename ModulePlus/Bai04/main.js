"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var order_1 = require("./order");
var main = /** @class */ (function () {
    function main() {
    }
    return main;
}());
var product1 = new product_1.default("1", "Product 1", 100);
var product2 = new product_1.default("2", "Product 2", 200);
var product3 = new product_1.default("3", "Product 3", 300);
var product4 = new product_1.default("4", "Product 4", 400);
var product5 = new product_1.default("5", "Product 5", 500);
var order = new order_1.default(1, new Date());
order.addLineItem(product1, 1);
order.addLineItem(product2, 2);
order.addLineItem(product3, 3);
order.addLineItem(product4, 4);
order.addLineItem(product5, 5);
console.log(order.toString());
