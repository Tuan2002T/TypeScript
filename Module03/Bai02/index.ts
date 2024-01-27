class ThuVien{ 
    private _maSach: string;
    private _donGia: number;
    private _soLuong: number;
    private _nhaXuatBan: string;   

    constructor(maSach: string, donGia: number, soLuong: number, nhaXuatBan: string) {
      this._maSach = maSach
      this._donGia = donGia
      this._soLuong = soLuong
      this._nhaXuatBan = nhaXuatBan
    }


    get maSach() {
      return this._maSach
    }
    
    set maSach(val: string) {
      this._maSach = val
    }
    
    get donGia() {
      return this._donGia
    }
    
    set donGia(val: number) {
      this._donGia = val
    }
    
    get soLuong() {
      return this._soLuong
    }
    
    set soLuong(val: number) {
      this._soLuong = val
    }
    
    get nhaXuatBan() {
      return this._nhaXuatBan
    }
    
    set nhaXuatBan(val: string) {
      this._nhaXuatBan = val
    }
    xuatThongTin(): void {
      console.log(`Mã sách: ${this._maSach}`)
      console.log(`Đơn giá: ${this._donGia}`)
      console.log(`Số lượng: ${this._soLuong}`)
      console.log(`Nhà xuất bản: ${this._nhaXuatBan}`)
      console.log(`Thành tiền: ${this.tinhTien()}`)
    }
}

class SachGiaoKhoa extends ThuVien{
    private sach: ThuVien;
    private _tinhTrang: string;
    constructor(sach: ThuVien, tinhTrang: string){
        super(sach.maSach, sach.donGia, sach.soLuong, sach.nhaXuatBan);
        this._tinhTrang = tinhTrang;
    }

    get tinhTrang() {
        return this._tinhTrang
    }
    
    set tinhTrang(val: string) {
        this._tinhTrang = val
    }

    tinhTien(): number{
        if(this._tinhTrang === 'moi'){
            return this.soLuong * this.donGia;
        }else if(this._tinhTrang === 'cu'){
            return this.soLuong * this.donGia * 0.5;
        }
        return 0;
    }

    xuatThongTin(): void{
        super.xuatThongTin();
        console.log(`Tình trạng: ${this._tinhTrang}`);
    }

    
}