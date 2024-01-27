class HocVien{
    private hoTen: string;
    private namSinh: number;
    private diem: number[];

    constructor(hoTen: string, namSinh: number, diem: number[]){
        this.hoTen = hoTen;
        this.namSinh = namSinh;
        this.diem = diem;
    }

    diemTrungBinh(): number{
        let sum = 0;
        for(let i = 0; i < this.diem.length; i++){
            sum += this.diem[i];
        }
        return sum / this.diem.length;
    }

    diemTren5(){
        let check = true
        this.diem.map((value) => {
            if(value < 5){
                check = false;
            }
        })
        return check;
    }
    
    dsHocVien: HocVien[] = []; 

    addHocVien(hocVien: HocVien){
        this.dsHocVien.push(hocVien);
    }
    getListHocVien(){
        return this.dsHocVien;
    }


    

}


class ListHocVien{
    private dsHocVien: HocVien[] = []; 

    addHocVien(hocVien: HocVien){
        this.dsHocVien.push(hocVien);
    }
    getListHocVien(){
        return this.dsHocVien;
    }

    totNghiep(){
        let result: HocVien[] = [];
        for(let i = 0; i < this.dsHocVien.length; i++){
            if(this.dsHocVien[i].diemTrungBinh() >= 5){
                result.push(this.dsHocVien[i]);
            }
        }
        return result;
    }
    thiLai(){
        let result: HocVien[] = [];
        for(let i = 0; i < this.dsHocVien.length; i++){
            if(this.dsHocVien[i].diemTren5() == false){
                result.push(this.dsHocVien[i]);
            }
        }
        return result;
    }

    lamLuanVan(){
        let result: HocVien[] = [];
        for(let i = 0; i < this.dsHocVien.length; i++){
            if(this.dsHocVien[i].diemTrungBinh() > 7 && this.dsHocVien[i].diemTren5() == true){
                result.push(this.dsHocVien[i]);
            }
        }
        return result;
    }
}

let hv1 = new HocVien("Nguyen Van A", 1999, [5, 6, 7, 8, 9]);
let hv2 = new HocVien("Nguyen Van B", 1998, [4, 5, 6, 1,9]);
let hv3 = new HocVien("Nguyen Van C", 1997, [7, 8, 9, 10,10]);
let hv4 = new HocVien("Nguyen Van D", 1996, [8, 9, 10, 1,2]);
let hv5 = new HocVien("Nguyen Van E", 1995, [9, 10, 10, 5,6]);  
let hv6 = new HocVien("Nguyen Van F", 1994, [1, 1, 1, 1, 1]);
let hv7 = new HocVien("Nguyen Van G", 1993, [10, 10, 10, 10, 10]);
// console.log(hv6.diemTren5());

let listHocVien = new ListHocVien();
listHocVien.addHocVien(hv1);
listHocVien.addHocVien(hv2);
listHocVien.addHocVien(hv3);
listHocVien.addHocVien(hv4);
listHocVien.addHocVien(hv5);


console.log(`Danh sach hoc vien tot nghiep:`+ listHocVien.totNghiep().length);
console.log(`Danh sach hoc vien thi lai:`+ listHocVien.thiLai().length);
console.log(`Danh sach hoc vien lam luan van:`+ listHocVien.lamLuanVan().length);

