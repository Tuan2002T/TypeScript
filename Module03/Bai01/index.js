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
var ChuyenXe = /** @class */ (function () {
    function ChuyenXe(maSoChuyen, hoTenTaiXe, soXe, doanhThu) {
        this._maSoChuyen = maSoChuyen;
        this._hoTenTaiXe = hoTenTaiXe;
        this._soXe = soXe;
        this._doanhThu = doanhThu;
    }
    Object.defineProperty(ChuyenXe.prototype, "maSoChuyen", {
        get: function () {
            return this._maSoChuyen;
        },
        set: function (value) {
            this._maSoChuyen = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChuyenXe.prototype, "hoTenTaiXe", {
        get: function () {
            return this._hoTenTaiXe;
        },
        set: function (value) {
            this._hoTenTaiXe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChuyenXe.prototype, "soXe", {
        get: function () {
            return this._soXe;
        },
        set: function (value) {
            this._soXe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChuyenXe.prototype, "doanhThu", {
        get: function () {
            return this._doanhThu;
        },
        set: function (value) {
            this._doanhThu = value;
        },
        enumerable: false,
        configurable: true
    });
    ChuyenXe.prototype.xuatThongTinChuyenXe = function () {
        console.log("M\u00E3 s\u1ED1 chuy\u1EBFn: ".concat(this._maSoChuyen));
        console.log("H\u1ECD t\u00EAn t\u00E0i x\u1EBF: ".concat(this._hoTenTaiXe));
        console.log("S\u1ED1 xe: ".concat(this._soXe));
        console.log("Doanh thu: ".concat(this._doanhThu));
    };
    return ChuyenXe;
}());
var NoiThanh = /** @class */ (function (_super) {
    __extends(NoiThanh, _super);
    function NoiThanh(chuyen, soKmDiDuoc, soTuyen) {
        var _this = _super.call(this, chuyen.maSoChuyen, chuyen.hoTenTaiXe, chuyen.soXe, chuyen.doanhThu) || this;
        _this._soKmDiDuoc = soKmDiDuoc;
        _this._soTuyen = soTuyen;
        return _this;
    }
    NoiThanh.prototype.getSokmDiDuoc = function () {
        return this._soKmDiDuoc;
    };
    NoiThanh.prototype.setSokmDiDuoc = function (value) {
        this._soKmDiDuoc = value;
    };
    NoiThanh.prototype.getSoTuyen = function () {
        return this._soTuyen;
    };
    NoiThanh.prototype.setSoTuyen = function (value) {
        this._soTuyen = value;
    };
    NoiThanh.prototype.toString = function () {
        return "".concat(this.chuyen, " S\u1ED1 km \u0111i \u0111\u01B0\u1EE3c: ").concat(this._soKmDiDuoc, " - S\u1ED1 tuy\u1EBFn: ").concat(this._soTuyen);
    };
    return NoiThanh;
}(ChuyenXe));
var NgoaiThanh = /** @class */ (function (_super) {
    __extends(NgoaiThanh, _super);
    function NgoaiThanh(chuyen, noiDen, soNgayDiDuoc) {
        var _this = _super.call(this, chuyen.maSoChuyen, chuyen.hoTenTaiXe, chuyen.soXe, chuyen.doanhThu) || this;
        _this._noiDen = noiDen;
        _this._soNgayDiDuoc = soNgayDiDuoc;
        return _this;
    }
    NgoaiThanh.prototype.getNoiDen = function () {
        return this._noiDen;
    };
    NgoaiThanh.prototype.setNoiDen = function (value) {
        this._noiDen = value;
    };
    NgoaiThanh.prototype.getSoNgayDiDuoc = function () {
        return this._soNgayDiDuoc;
    };
    NgoaiThanh.prototype.setSoNgayDiDuoc = function (value) {
        this._soNgayDiDuoc = value;
    };
    NgoaiThanh.prototype.toString = function () {
        return "".concat(this.chuyen, " N\u01A1i \u0111\u1EBFn: ").concat(this._noiDen, " - S\u1ED1 ng\u00E0y \u0111i \u0111\u01B0\u1EE3c: ").concat(this._soNgayDiDuoc);
    };
    return NgoaiThanh;
}(ChuyenXe));
var QuanLyChuyenXe = /** @class */ (function () {
    function QuanLyChuyenXe() {
        this._dsChuyenXe = [];
    }
    QuanLyChuyenXe.prototype.getDsChuyenXe = function () {
        return this._dsChuyenXe;
    };
    QuanLyChuyenXe.prototype.setDsChuyenXe = function (value) {
        this._dsChuyenXe = value;
    };
    QuanLyChuyenXe.prototype.themChuyenXe = function (chuyenXe) {
        this._dsChuyenXe.push(chuyenXe);
    };
    QuanLyChuyenXe.prototype.xuatDsChuyenXe = function () {
        this._dsChuyenXe.forEach(function (chuyenXe) {
            chuyenXe.xuatThongTinChuyenXe();
        });
    };
    QuanLyChuyenXe.prototype.tinhTongDoanhThuNoiThanh = function () {
        var tongDoanhThu = 0;
        this._dsChuyenXe.forEach(function (chuyenXe) {
            if (chuyenXe instanceof NoiThanh) {
                tongDoanhThu += chuyenXe.doanhThu;
            }
        });
        return tongDoanhThu;
    };
    QuanLyChuyenXe.prototype.tinhTongDoanhThuNgoaiThanh = function () {
        var tongDoanhThu = 0;
        this._dsChuyenXe.forEach(function (chuyenXe) {
            if (chuyenXe instanceof NgoaiThanh) {
                tongDoanhThu += chuyenXe.doanhThu;
            }
        });
        return tongDoanhThu;
    };
    QuanLyChuyenXe.prototype.tinhTongDoanhThu = function () {
        var tongDoanhThu = 0;
        this._dsChuyenXe.forEach(function (chuyenXe) {
            tongDoanhThu += chuyenXe.doanhThu;
        });
        return tongDoanhThu;
    };
    return QuanLyChuyenXe;
}());
var quanLyChuyenXe = new QuanLyChuyenXe();
var noiThanh1 = new NoiThanh(new ChuyenXe('123', 'Nguyễn Văn A', '123', 100), 100, '123');
var noiThanh2 = new NoiThanh(new ChuyenXe('123', 'Nguyễn Văn A', '123', 200), 200, '123');
var ngoaiThanh1 = new NgoaiThanh(new ChuyenXe('123', 'Nguyễn Văn A', '123', 300), 'Hà Nội', 1);
var ngoaiThanh2 = new NgoaiThanh(new ChuyenXe('123', 'Nguyễn Văn A', '123', 400), 'Hà Nội', 2);
quanLyChuyenXe.themChuyenXe(noiThanh1);
quanLyChuyenXe.themChuyenXe(noiThanh2);
quanLyChuyenXe.themChuyenXe(ngoaiThanh1);
quanLyChuyenXe.themChuyenXe(ngoaiThanh2);
console.log('Danh sách chuyến xe: ');
quanLyChuyenXe.xuatDsChuyenXe();
console.log('Tổng doanh thu nội thành: ' + quanLyChuyenXe.tinhTongDoanhThuNoiThanh());
console.log('Tổng doanh thu ngoại thành: ' + quanLyChuyenXe.tinhTongDoanhThuNgoaiThanh());
console.log('Tổng doanh thu: ' + quanLyChuyenXe.tinhTongDoanhThu());
