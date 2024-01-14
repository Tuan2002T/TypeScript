"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var OrderDetail = /** @class */ (function () {
    function OrderDetail(quantity, product) {
        this.quantity = quantity || 0;
        this.product = product || new product_1.default("", "", 0);
    }
    OrderDetail.prototype.getQuantity = function () {
        return this.quantity;
    };
    OrderDetail.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    OrderDetail.prototype.toString = function () {
        return "".concat(this.product, " - ").concat(this.quantity);
    };
    OrderDetail.prototype.calcTotalPrice = function () {
        return this.quantity * this.product.getPrice();
    };
    OrderDetail.prototype.calcTotalCharge = function () {
        return this.calcTotalPrice() * 1.1;
    };
    return OrderDetail;
}());
exports.default = OrderDetail;
