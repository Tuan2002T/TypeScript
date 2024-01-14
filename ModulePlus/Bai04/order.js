"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderdetail_1 = require("./orderdetail");
var Order = /** @class */ (function () {
    function Order(orderId, orderDate, lineItems) {
        this.orderId = orderId || 0;
        this.orderDate = orderDate || new Date();
        this.lineItems = lineItems || [];
    }
    Order.prototype.toString = function () {
        return "".concat(this.orderId, " - ").concat(this.orderDate, " - ").concat(this.lineItems);
    };
    Order.prototype.getOrderID = function () {
        return this.orderId;
    };
    Order.prototype.setOrderID = function (orderId) {
        this.orderId = orderId;
    };
    Order.prototype.getOrderDate = function () {
        return this.orderDate;
    };
    Order.prototype.setOrderDate = function (orderDate) {
        this.orderDate = orderDate;
    };
    Order.prototype.getLineItems = function () {
        return this.lineItems;
    };
    Order.prototype.setLineItems = function (lineItems) {
        this.lineItems = lineItems;
    };
    Order.prototype.addLineItem = function (product, quantity) {
        this.lineItems.push(new orderdetail_1.default(quantity, product));
    };
    return Order;
}());
exports.default = Order;
