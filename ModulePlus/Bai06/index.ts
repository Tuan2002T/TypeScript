class HocVien{
    private maHocVien: string;
    private hoTen: string;
    private diaChi: string;
    private sdt: string;

    constructor(maHocVien: string, hoTen: string, diaChi: string, sdt: string){
        this.maHocVien = maHocVien;
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.sdt = sdt;
    }

    getMaHocVien(){
        return this.maHocVien;
    }
    setMaHocVien(maHocVien: string){
        this.maHocVien = maHocVien;
    }
    getHoTen(){
        return this.hoTen;
    }
    setHoTen(hoTen: string){
        this.hoTen = hoTen;
    }
    getDiaChi(){
        return this.diaChi;
    }
    setDiaChi(diaChi: string){
        this.diaChi = diaChi;
    }
    getSdt(){
        return this.sdt;
    }
    setSdt(sdt: string){
        this.sdt = sdt;
    }

    toString(){
        return `Mã học viên: ${this.maHocVien}, Họ tên: ${this.hoTen}, Địa chỉ: ${this.diaChi}, Số điện thoại: ${this.sdt}`;
    }
}

class QuanLyHocVien{
    private dsHocVien: HocVien[] = [];

    constructor(dsHocVien: HocVien[]){
        this.dsHocVien = dsHocVien;
    }

    themHocVien(hocVien: HocVien){
        this.dsHocVien.push(hocVien);
    }

    timKiemHocVien(maHocVien: string){
        let hocvien = '';
       this.dsHocVien.forEach(hv => {
              if(hv.getMaHocVien() === maHocVien){
                hocvien = hv.toString();
                
              }
         })
        return hocvien;
    }

    xoaHocVien(maHocVien: string){
        let index: number = this.dsHocVien.findIndex(hv => hv.getMaHocVien() === maHocVien);
        if(index !== -1){
            this.dsHocVien.splice(index, 1);
        }
        return this.dsHocVien;
    }

    capNhatHocVien(hocVien: HocVien){
        let index = this.dsHocVien.map(hv => hv.getMaHocVien() === hocVien.getMaHocVien());
        console.log(index);
        
    }

    inDanhSachHocVien(){
        this.dsHocVien.forEach(hv => console.log(hv.toString()));
    }
}

let hocVien1: HocVien = new HocVien('HV001', 'Nguyễn Văn A', 'Quận 1', '0123456789');
let hocVien2: HocVien = new HocVien('HV002', 'Nguyễn Văn B', 'Quận 2', '0123456789');
let hocVien3: HocVien = new HocVien('HV003', 'Nguyễn Văn C', 'Quận 3', '0123456789');
let hocVien4: HocVien = new HocVien('HV004', 'Nguyễn Văn D', 'Quận 4', '0123456789');
let hocVien5: HocVien = new HocVien('HV005', 'Nguyễn Văn E', 'Quận 5', '0123456789');

let quanLyHocVien: QuanLyHocVien = new QuanLyHocVien([hocVien1, hocVien2, hocVien3, hocVien4, hocVien5]);

// quanLyHocVien.inDanhSachHocVien();
// console.log(quanLyHocVien.timKiemHocVien('HV002'));
// console.log(quanLyHocVien.xoaHocVien('HV002'));
console.log(quanLyHocVien.capNhatHocVien(hocVien1));
