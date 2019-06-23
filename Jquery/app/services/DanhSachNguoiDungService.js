//Lop doi tuong
function DanhSachNguoiDungService() {
    //Lay danh sach nguoi dung tu server API
    this.layDanhSachNguoiDung = function () {
        return $.ajax({
            url: "http://svcy.myclass.vn//api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET",
        })
    }


    //Them nguoi dung
    this.themNguoiDung = function (dataNguoiDung) {
        return $.ajax({
            url: "http://svcy.myclass.vn//api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: dataNguoiDung,
            // dataType: "json",
        })
    }
    this.XoaNguoiDung = function(id){
        return $.ajax({
            url: `http://svcy.myclass.vn//api/QuanLyTrungTam/XoaNguoiDung/${id}`,
            type: "DELETE",
            
        })
    }

}