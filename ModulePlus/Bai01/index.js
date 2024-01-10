var HinhTamGiac = /** @class */ (function () {
    function HinhTamGiac(a, b, c) {
        this.ma = a || 0;
        this.mb = b || 0;
        this.mc = c || 0;
        if (this.ma <= 0 || this.mb <= 0 || this.mc <= 0) {
            this.ma = this.mb = this.mc = 0;
        }
        else if (this.ma + this.mb <= this.mc ||
            this.ma + this.mb <= this.mc ||
            this.mb + this.mc <= this.ma) {
            this.ma = this.mc = this.mc = 0;
        }
    }
    HinhTamGiac.prototype.getMa = function () {
        return this.ma;
    };
    HinhTamGiac.prototype.setMa = function (a) {
        if (a > 0 && a + this.mb > this.mc && a + this.mb > this.mc) {
            this.ma = a;
        }
    };
    HinhTamGiac.prototype.getMb = function () {
        return this.mb;
    };
    HinhTamGiac.prototype.setMb = function (b) {
        if (b > 0 && b + this.ma > this.mc && b + this.ma > this.mc) {
            this.mb = b;
        }
    };
    HinhTamGiac.prototype.getMc = function () {
        return this.mc;
    };
    HinhTamGiac.prototype.setMc = function (c) {
        if (c > 0 && c + this.ma > this.mb && c + this.ma > this.mb) {
            this.mc = c;
        }
    };
    HinhTamGiac.prototype.getChuVi = function () {
        return this.ma + this.mb + this.mc;
    };
    HinhTamGiac.prototype.getDienTich = function () {
        var p = this.getChuVi() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    };
    HinhTamGiac.prototype.getLoaiTamGiac = function () {
        if (this.ma == 0 || this.mb == 0 || this.mc == 0) {
            return "Không phải là hình tam giác";
        }
        if (this.ma == this.mb && this.mb == this.mc) {
            return "Tam giác đều";
        }
        if (this.ma == this.mb ||
            this.ma == this.mc ||
            this.mb == this.mc) {
            return "Tam giác cân";
        }
        return "Tam giác thường";
    };
    HinhTamGiac.prototype.toString = function () {
        return "\n                Ma = ".concat(this.ma, " \n                Mb = ").concat(this.mb, "  \n                Mc = ").concat(this.mc, "\n                Lo\u1EA1i tam gi\u00E1c = ").concat(this.getLoaiTamGiac(), "\n                Chu vi = ").concat(this.getChuVi(), "\n                Di\u1EC7n t\u00EDch = ").concat(this.getDienTich());
    };
    return HinhTamGiac;
}());
var t1 = new HinhTamGiac();
var t2 = new HinhTamGiac(-3, 4, 5);
var t3 = new HinhTamGiac(3, 4, 8);
var t4 = new HinhTamGiac(5, 5, 5);
var t5 = new HinhTamGiac(3, 4, 5);
console.log(t1.toString());
console.log(t2.toString());
console.log(t3.toString());
console.log(t4.toString());
console.log(t5.toString());
