class HinhTamGiac{
    private ma: number;
    private mb: number; 
    private mc: number;

    constructor(a?:number, b?:number, c?:number){
        this.ma = a || 0;
        this.mb = b || 0;
        this.mc = c || 0;

        if (this.ma <= 0 || this.mb <= 0 || this.mc <= 0) {
            this.ma = this.mb = this.mc = 0;
          } else if (this.ma + this.mb <= this.mc || 
                     this.ma + this.mb <= this.mc ||
                     this.mb + this.mc <= this.ma) {
            this.ma = this.mc = this.mc = 0;
          }
    }

    getMa(){
        return this.ma
    }
    setMa(a:number){
        if (a > 0 && a + this.mb > this.mc && a + this.mb > this.mc) {
            this.ma = a;
          }
    }

    getMb(){
        return this.mb
    }
    setMb(b:number){
        if (b > 0 && b + this.ma > this.mc && b + this.ma > this.mc) {
            this.mb = b;
          }
    }

    getMc(){
        return this.mc
    }
    setMc(c:number){
        if (c > 0 && c + this.ma > this.mb && c + this.ma > this.mb) {
            this.mc = c;
          }
    }

    getChuVi() {
        return this.ma + this.mb + this.mc;
      }
    
      getDienTich() {
        const p = this.getChuVi() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
      }
      getLoaiTamGiac() {
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
      }
      toString() {
        return `
                Ma = ${this.ma} 
                Mb = ${this.mb}  
                Mc = ${this.mc}
                Loại tam giác = ${this.getLoaiTamGiac()}
                Chu vi = ${this.getChuVi()}
                Diện tích = ${this.getDienTich()}`;
      }
}
    let t1 = new HinhTamGiac();
    let t2 = new HinhTamGiac(-3, 4, 5);
    let t3 = new HinhTamGiac(3, 4, 8);
    let t4 = new HinhTamGiac(5, 5, 5);
    let t5 = new HinhTamGiac(3, 4, 5);
    
    
    console.log(t1.toString());
    console.log(t2.toString());
    console.log(t3.toString());
    console.log(t4.toString()); 
    console.log(t5.toString());
