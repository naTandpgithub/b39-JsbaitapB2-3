/////////////////////bài tập về nhà
// bài 1
// đầu vào
document.getElementById("btnSubmit").onclick = function () {
  // Xử lý
  // lấy số ngày công
  var numberDay = document.getElementById("numberday").value;
  // tính tiền
  var luong = 100000 * numberDay;
  //   console.log("lương : " + luong);
  // format vnd
  var currentFormat = Intl.NumberFormat("VN-vn");

  var result = "";
  result += "<p> Lương : " + currentFormat.format(luong) + "VND</p>";

  //xuất ra

  document.getElementById("Luong").innerHTML = result;
};

// bài 2
// đầu vào
document.getElementById("btnChon").onclick = function () {
  // Xử lý
  // Lấy số nhập vào
  var nbai2 = document.getElementById("numberbai2").value;
  // lấy số hàng trăm
  var hundredb2 = Math.floor(nbai2 / 100);
  console.log("số hàng trăm : " + hundredb2);

  var tenb2 = Math.floor((nbai2 % 100) / 10);
  console.log("số hàng chục :" + tenb2);

  var unitb2 = nbai2 % 10;
  console.log("số hàng đơn vị : " + unitb2);
  var tongkysob2 = "Tổng ký số  là : ";
  tongkysob2 += hundredb2 + tenb2 + unitb2;

  // xuất ra
  var kysob2 = document.getElementById("kysob2");
  kysob2.innerHTML = tongkysob2;
};

// bài 3
// đầu vào VND =>>USD
document.getElementById("submitVnd").onclick = function () {
  // xử lý
  var vnd = document.getElementById("vnd_usd").value * 1;

  var tinhvnd = vnd / 23000;
  var result = "";
  result += "<p>Đổi được :  " + tinhvnd + "$</p>";

  // xuất ra
  document.getElementById("infob4").innerHTML = result;
};

// đầu vào USD =>>VND
document.getElementById("submit$").onclick = function () {
  // xử lý
  var usd = document.getElementById("info$").value * 1;
  var usd_vnd = usd * 23000;
  var currentFormat = Intl.NumberFormat("VN-vn");

  var result = "";
  result += "<p>Đổi được : " + currentFormat.format(usd_vnd) + "VND</p>";

  // xuất ra
  document.getElementById("usd_vnd").innerHTML = result;
};

// bài 4
//tính diện tích và chu vi
// đâu vào
document.getElementById("submitb4").onclick = function () {
  //xử lý
  // lấy chiều dài và chiều rộng
  var cdb4 = document.getElementById("cdb4").value * 1;
  var crb4 = document.getElementById("crb4").value * 1;

  // diện tích
  var dientich = cdb4 * crb4;
  // chu vi
  var chuvi = (cdb4 + crb4) * 2;

  var result = "";
  result += "<p>Diện tích : " + dientich + " m2</p>";
  result += "<br />";
  result += "<p>Chu vi : " + chuvi + "m</p>";
  //xuất ra
  document.getElementById("infob4").innerHTML = result;
};

////
// bài 5 tính tổng 2 ký sô
// đầu vào
document.getElementById("nhapkyso").onclick = function () {
  // Lấy ký số
  var kyso = document.getElementById("kyso").value * 1;

  //tách ký số
  var ten = Math.floor(kyso / 10);
  var unit = kyso % 10;

  tongkysob5 = ten + unit;
  var result = "";
  result += "<p>Tổng 2 ký số là : " + tongkysob5 + "</p>";

  //xuất ra
  document.getElementById("infokyso").innerHTML = result;
};
