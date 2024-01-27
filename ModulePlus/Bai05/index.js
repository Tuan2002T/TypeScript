var HocVien = /** @class */ (function () {
    function HocVien(hoTen, namSinh, diem) {
        this.dsHocVien = [];
        this.hoTen = hoTen;
        this.namSinh = namSinh;
        this.diem = diem;
    }
    HocVien.prototype.diemTrungBinh = function () {
        var sum = 0;
        for (var i = 0; i < this.diem.length; i++) {
            sum += this.diem[i];
        }
        return sum / this.diem.length;
    };
    HocVien.prototype.diemTren5 = function () {
        var check = true;
        this.diem.map(function (value) {
            if (value < 5) {
                check = false;
            }
        });
        return check;
    };
    HocVien.prototype.addHocVien = function (hocVien) {
        this.dsHocVien.push(hocVien);
    };
    HocVien.prototype.getListHocVien = function () {
        return this.dsHocVien;
    };
    return HocVien;
}());
var ListHocVien = /** @class */ (function () {
    function ListHocVien() {
        this.dsHocVien = [];
    }
    ListHocVien.prototype.addHocVien = function (hocVien) {
        this.dsHocVien.push(hocVien);
    };
    ListHocVien.prototype.getListHocVien = function () {
        return this.dsHocVien;
    };
    ListHocVien.prototype.totNghiep = function () {
        var result = [];
        for (var i = 0; i < this.dsHocVien.length; i++) {
            if (this.dsHocVien[i].diemTrungBinh() >= 5) {
                result.push(this.dsHocVien[i]);
            }
        }
        return result;
    };
    ListHocVien.prototype.thiLai = function () {
        var result = [];
        for (var i = 0; i < this.dsHocVien.length; i++) {
            if (this.dsHocVien[i].diemTren5() == false) {
                result.push(this.dsHocVien[i]);
            }
        }
        return result;
    };
    ListHocVien.prototype.lamLuanVan = function () {
        var result = [];
        for (var i = 0; i < this.dsHocVien.length; i++) {
            if (this.dsHocVien[i].diemTrungBinh() > 7 && this.dsHocVien[i].diemTren5() == true) {
                result.push(this.dsHocVien[i]);
            }
        }
        return result;
    };
    return ListHocVien;
}());
var hv1 = new HocVien("Nguyen Van A", 1999, [5, 6, 7, 8, 9]);
var hv2 = new HocVien("Nguyen Van B", 1998, [4, 5, 6, 1, 9]);
var hv3 = new HocVien("Nguyen Van C", 1997, [7, 8, 9, 10, 10]);
var hv4 = new HocVien("Nguyen Van D", 1996, [8, 9, 10, 1, 2]);
var hv5 = new HocVien("Nguyen Van E", 1995, [9, 10, 10, 5, 6]);
var hv6 = new HocVien("Nguyen Van F", 1994, [1, 1, 1, 1, 1]);
var hv7 = new HocVien("Nguyen Van G", 1993, [10, 10, 10, 10, 10]);
// console.log(hv6.diemTren5());
var listHocVien = new ListHocVien();
listHocVien.addHocVien(hv1);
listHocVien.addHocVien(hv2);
listHocVien.addHocVien(hv3);
listHocVien.addHocVien(hv4);
listHocVien.addHocVien(hv5);
console.log("Danh sach hoc vien tot nghiep:" + listHocVien.totNghiep().length);
console.log("Danh sach hoc vien thi lai:" + listHocVien.thiLai().length);
console.log("Danh sach hoc vien lam luan van:" + listHocVien.lamLuanVan().length);
