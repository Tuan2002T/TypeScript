var HocVien = /** @class */ (function () {
    function HocVien(maHocVien, hoTen, diaChi, sdt) {
        this.maHocVien = maHocVien;
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.sdt = sdt;
    }
    HocVien.prototype.getMaHocVien = function () {
        return this.maHocVien;
    };
    HocVien.prototype.setMaHocVien = function (maHocVien) {
        this.maHocVien = maHocVien;
    };
    HocVien.prototype.getHoTen = function () {
        return this.hoTen;
    };
    HocVien.prototype.setHoTen = function (hoTen) {
        this.hoTen = hoTen;
    };
    HocVien.prototype.getDiaChi = function () {
        return this.diaChi;
    };
    HocVien.prototype.setDiaChi = function (diaChi) {
        this.diaChi = diaChi;
    };
    HocVien.prototype.getSdt = function () {
        return this.sdt;
    };
    HocVien.prototype.setSdt = function (sdt) {
        this.sdt = sdt;
    };
    HocVien.prototype.toString = function () {
        return "M\u00E3 h\u1ECDc vi\u00EAn: ".concat(this.maHocVien, ", H\u1ECD t\u00EAn: ").concat(this.hoTen, ", \u0110\u1ECBa ch\u1EC9: ").concat(this.diaChi, ", S\u1ED1 \u0111i\u1EC7n tho\u1EA1i: ").concat(this.sdt);
    };
    return HocVien;
}());
var QuanLyHocVien = /** @class */ (function () {
    function QuanLyHocVien(dsHocVien) {
        this.dsHocVien = [];
        this.dsHocVien = dsHocVien;
    }
    QuanLyHocVien.prototype.themHocVien = function (hocVien) {
        this.dsHocVien.push(hocVien);
    };
    QuanLyHocVien.prototype.timKiemHocVien = function (maHocVien) {
        var hocvien = '';
        this.dsHocVien.forEach(function (hv) {
            if (hv.getMaHocVien() === maHocVien) {
                hocvien = hv.toString();
            }
        });
        return hocvien;
    };
    QuanLyHocVien.prototype.xoaHocVien = function (maHocVien) {
        var index = this.dsHocVien.findIndex(function (hv) { return hv.getMaHocVien() === maHocVien; });
        if (index !== -1) {
            this.dsHocVien.splice(index, 1);
        }
        return this.dsHocVien;
    };
    QuanLyHocVien.prototype.capNhatHocVien = function (hocVien) {
        var index = this.dsHocVien.map(function (hv) { return hv.getMaHocVien() === hocVien.getMaHocVien(); });
        console.log(index);
    };
    QuanLyHocVien.prototype.inDanhSachHocVien = function () {
        this.dsHocVien.forEach(function (hv) { return console.log(hv.toString()); });
    };
    return QuanLyHocVien;
}());
var hocVien1 = new HocVien('HV001', 'Nguyễn Văn A', 'Quận 1', '0123456789');
var hocVien2 = new HocVien('HV002', 'Nguyễn Văn B', 'Quận 2', '0123456789');
var hocVien3 = new HocVien('HV003', 'Nguyễn Văn C', 'Quận 3', '0123456789');
var hocVien4 = new HocVien('HV004', 'Nguyễn Văn D', 'Quận 4', '0123456789');
var hocVien5 = new HocVien('HV005', 'Nguyễn Văn E', 'Quận 5', '0123456789');
var quanLyHocVien = new QuanLyHocVien([hocVien1, hocVien2, hocVien3, hocVien4, hocVien5]);
// quanLyHocVien.inDanhSachHocVien();
// console.log(quanLyHocVien.timKiemHocVien('HV002'));
// console.log(quanLyHocVien.xoaHocVien('HV002'));
console.log(quanLyHocVien.capNhatHocVien(hocVien1));
