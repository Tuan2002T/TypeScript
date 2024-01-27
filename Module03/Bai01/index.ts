class ChuyenXe{
    private _maSoChuyen: string;
    private _hoTenTaiXe: string;
    private _soXe: string;
    private _doanhThu: number;

    constructor(maSoChuyen: string, hoTenTaiXe: string, soXe: string, doanhThu: number){
        this._maSoChuyen = maSoChuyen;
        this._hoTenTaiXe = hoTenTaiXe;
        this._soXe = soXe;
        this._doanhThu = doanhThu;
    }

    public get maSoChuyen(): string {
        return this._maSoChuyen;
    }

    public set maSoChuyen(value: string) {
        this._maSoChuyen = value;
    }

    public get hoTenTaiXe(): string {
        return this._hoTenTaiXe;
    }

    public set hoTenTaiXe(value: string) {
        this._hoTenTaiXe = value;
    }

    public get soXe(): string {
        return this._soXe;
    }

    public set soXe(value: string) {
        this._soXe = value;
    }

    public get doanhThu(): number {
        return this._doanhThu;
    }

    public set doanhThu(value: number) {
        this._doanhThu = value;
    }

    public xuatThongTinChuyenXe(): void{
        console.log(`Mã số chuyến: ${this._maSoChuyen}`);
        console.log(`Họ tên tài xế: ${this._hoTenTaiXe}`);
        console.log(`Số xe: ${this._soXe}`);
        console.log(`Doanh thu: ${this._doanhThu}`);
    }
}

class NoiThanh extends ChuyenXe{
    private chuyen: ChuyenXe;
    private _soKmDiDuoc: number;
    private _soTuyen: string;

    constructor(chuyen: ChuyenXe, soKmDiDuoc: number, soTuyen: string){
        super(chuyen.maSoChuyen, chuyen.hoTenTaiXe, chuyen.soXe, chuyen.doanhThu);
        this._soKmDiDuoc = soKmDiDuoc;
        this._soTuyen = soTuyen;
    }

    getSokmDiDuoc(): number{
        return this._soKmDiDuoc;
    }
    setSokmDiDuoc(value: number): void{
        this._soKmDiDuoc = value;
    }

    getSoTuyen(): string{
        return this._soTuyen;
    }
    setSoTuyen(value: string): void{
        this._soTuyen = value;
    }

    toString(): string{
        return `${this.chuyen} Số km đi được: ${this._soKmDiDuoc} - Số tuyến: ${this._soTuyen}`;
    }
}

class NgoaiThanh extends ChuyenXe{
    private chuyen: ChuyenXe;
    private _noiDen: string;
    private _soNgayDiDuoc: number;

    constructor(chuyen: ChuyenXe, noiDen: string, soNgayDiDuoc: number){
        super(chuyen.maSoChuyen, chuyen.hoTenTaiXe, chuyen.soXe, chuyen.doanhThu);
        this._noiDen = noiDen;
        this._soNgayDiDuoc = soNgayDiDuoc;
    }

    getNoiDen(): string{
        return this._noiDen;
    }

    setNoiDen(value: string): void{
        this._noiDen = value;
    }

    getSoNgayDiDuoc(): number{
        return this._soNgayDiDuoc;
    }

    setSoNgayDiDuoc(value: number): void{
        this._soNgayDiDuoc = value;
    }

    toString(): string{
        return `${this.chuyen} Nơi đến: ${this._noiDen} - Số ngày đi được: ${this._soNgayDiDuoc}`;
    }

}


class QuanLyChuyenXe{
    private _dsChuyenXe: ChuyenXe[];

    constructor(){
        this._dsChuyenXe = [];
    }

    getDsChuyenXe(): ChuyenXe[]{
        return this._dsChuyenXe;
    }

    setDsChuyenXe(value: ChuyenXe[]): void{
        this._dsChuyenXe = value;
    }

    themChuyenXe(chuyenXe: ChuyenXe): void{
        this._dsChuyenXe.push(chuyenXe);
    }

    xuatDsChuyenXe(): void{
        this._dsChuyenXe.forEach(chuyenXe => {
            chuyenXe.xuatThongTinChuyenXe();
        });
    }

    tinhTongDoanhThuNoiThanh(): number{
        let tongDoanhThu: number = 0;
        this._dsChuyenXe.forEach(chuyenXe => {
            if(chuyenXe instanceof NoiThanh){
                tongDoanhThu += chuyenXe.doanhThu;
            }
        });
        return tongDoanhThu;
    }

    tinhTongDoanhThuNgoaiThanh(): number{
        let tongDoanhThu: number = 0;
        this._dsChuyenXe.forEach(chuyenXe => {
            if(chuyenXe instanceof NgoaiThanh){
                tongDoanhThu += chuyenXe.doanhThu;
            }
        });
        return tongDoanhThu;
    }

    tinhTongDoanhThu(): number{
        let tongDoanhThu: number = 0;
        this._dsChuyenXe.forEach(chuyenXe => {
            tongDoanhThu += chuyenXe.doanhThu;
        });
        return tongDoanhThu;
    }
}

let quanLyChuyenXe = new QuanLyChuyenXe();
let noiThanh1 = new NoiThanh(new ChuyenXe('123', 'Nguyễn Văn A', '123', 100), 100, '123');
let noiThanh2 = new NoiThanh(new ChuyenXe('123', 'Nguyễn Văn A', '123', 200), 200, '123');
let ngoaiThanh1 = new NgoaiThanh(new ChuyenXe('123', 'Nguyễn Văn A', '123', 300), 'Hà Nội', 1);
let ngoaiThanh2 = new NgoaiThanh(new ChuyenXe('123', 'Nguyễn Văn A', '123', 400), 'Hà Nội', 2);
quanLyChuyenXe.themChuyenXe(noiThanh1);
quanLyChuyenXe.themChuyenXe(noiThanh2);
quanLyChuyenXe.themChuyenXe(ngoaiThanh1);
quanLyChuyenXe.themChuyenXe(ngoaiThanh2);
console.log('Danh sách chuyến xe: ');
quanLyChuyenXe.xuatDsChuyenXe();
console.log('Tổng doanh thu nội thành: ' + quanLyChuyenXe.tinhTongDoanhThuNoiThanh());
console.log('Tổng doanh thu ngoại thành: ' + quanLyChuyenXe.tinhTongDoanhThuNgoaiThanh());
console.log('Tổng doanh thu: ' + quanLyChuyenXe.tinhTongDoanhThu());

