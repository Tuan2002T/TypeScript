var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ThuVien = /** @class */ (function () {
    function ThuVien(maSach, donGia, soLuong, nhaXuatBan) {
        this._maSach = maSach;
        this._donGia = donGia;
        this._soLuong = soLuong;
        this._nhaXuatBan = nhaXuatBan;
    }
    Object.defineProperty(ThuVien.prototype, "maSach", {
        get: function () {
            return this._maSach;
        },
        set: function (val) {
            this._maSach = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ThuVien.prototype, "donGia", {
        get: function () {
            return this._donGia;
        },
        set: function (val) {
            this._donGia = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ThuVien.prototype, "soLuong", {
        get: function () {
            return this._soLuong;
        },
        set: function (val) {
            this._soLuong = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ThuVien.prototype, "nhaXuatBan", {
        get: function () {
            return this._nhaXuatBan;
        },
        set: function (val) {
            this._nhaXuatBan = val;
        },
        enumerable: false,
        configurable: true
    });
    ThuVien.prototype.xuatThongTin = function () {
        console.log("M\u00E3 s\u00E1ch: ".concat(this._maSach));
        console.log("\u0110\u01A1n gi\u00E1: ".concat(this._donGia));
        console.log("S\u1ED1 l\u01B0\u1EE3ng: ".concat(this._soLuong));
        console.log("Nh\u00E0 xu\u1EA5t b\u1EA3n: ".concat(this._nhaXuatBan));
        console.log("Th\u00E0nh ti\u1EC1n: ".concat(this.tinhTien()));
    };
    return ThuVien;
}());
var SachGiaoKhoa = /** @class */ (function (_super) {
    __extends(SachGiaoKhoa, _super);
    function SachGiaoKhoa(sach, tinhTrang) {
        var _this = _super.call(this, sach.maSach, sach.donGia, sach.soLuong, sach.nhaXuatBan) || this;
        _this._tinhTrang = tinhTrang;
        return _this;
    }
    Object.defineProperty(SachGiaoKhoa.prototype, "tinhTrang", {
        get: function () {
            return this._tinhTrang;
        },
        set: function (val) {
            this._tinhTrang = val;
        },
        enumerable: false,
        configurable: true
    });
    SachGiaoKhoa.prototype.tinhTien = function () {
        if (this._tinhTrang === 'moi') {
            return this.soLuong * this.donGia;
        }
        else if (this._tinhTrang === 'cu') {
            return this.soLuong * this.donGia * 0.5;
        }
        return 0;
    };
    SachGiaoKhoa.prototype.xuatThongTin = function () {
        _super.prototype.xuatThongTin.call(this);
        console.log("T\u00ECnh tr\u1EA1ng: ".concat(this._tinhTrang));
    };
    return SachGiaoKhoa;
}(ThuVien));
