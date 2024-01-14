"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(productID, description, price) {
        this.productID = productID || "";
        this.description = description || "";
        this.price = price || 0;
    }
    Product.prototype.toString = function () {
        return "".concat(this.productID, " - ").concat(this.description, " - ").concat(this.price);
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
    };
    Product.prototype.getProductID = function () {
        return this.productID;
    };
    Product.prototype.setProductID = function (productID) {
        this.productID = productID;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
exports.default = Product;
