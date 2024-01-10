var Vehicle = /** @class */ (function () {
    function Vehicle(chuXe, loaiXe, triGia, dungTich) {
        this.chuXe = chuXe || "";
        this.loaiXe = loaiXe || "";
        this.triGia = triGia || 0;
        this.dungTich = dungTich || 0;
        if (this.triGia < 0) {
            this.triGia = 0;
        }
        if (this.dungTich < 0) {
            this.dungTich = 0;
        }
    }
    Vehicle.prototype.getChuXe = function () {
        return this.chuXe;
    };
    Vehicle.prototype.setChuXe = function (chuXe) {
        this.chuXe = chuXe;
    };
    Vehicle.prototype.getLoaiXe = function () {
        return this.loaiXe;
    };
    Vehicle.prototype.setLoaiXe = function (loaiXe) {
        this.loaiXe = loaiXe;
    };
    Vehicle.prototype.getTriGia = function () {
        return this.triGia;
    };
    Vehicle.prototype.setTriGia = function (triGia) {
        if (triGia > 0) {
            this.triGia = triGia;
        }
    };
    Vehicle.prototype.getDungTich = function () {
        return this.dungTich;
    };
    Vehicle.prototype.setDungTich = function (dungTich) {
        if (dungTich > 0) {
            this.dungTich = dungTich;
        }
    };
    Vehicle.prototype.tinhThue = function () {
        if (this.dungTich < 100) {
            return this.triGia * 0.01;
        }
        else if (this.dungTich >= 100 && this.dungTich <= 200) {
            return this.triGia * 0.03;
        }
        else {
            return this.triGia * 0.05;
        }
    };
    Vehicle.prototype.toString = function () {
        return "".concat(this.chuXe, "    ").concat(this.loaiXe, "      ").concat(this.triGia, "            ").concat(this.dungTich, "          ").concat(this.tinhThue());
    };
    return Vehicle;
}());
var xe1 = new Vehicle("Nguyen Van A", "Xe du lich", 100000000, 100);
var xe2 = new Vehicle("Nguyen Van B", "Xe khach", 200000000, 200);
var xe3 = new Vehicle("Nguyen Van C", "Xe tai", 300000000, 300);
console.log("Tên chủ xe      Loại xe        Trị giá        Dung tích        Thuế phải nộp");
console.log(xe1.toString());
console.log(xe2.toString());
console.log(xe3.toString());
