// Bài tập 1
/**
 * Sơ đồ 3 khối
 *
 * INPUT: lương 1 ngày, số ngày làm
 *
 * PROCESS: (pseudo code)
 *      1. DOm các giá trị người dùng nhập
 *      2. tính lương = lương 1 ngày * số ngày làm
 *      3. log lương ra màn hình thông qua button
 *
 * OUTPUT: lương
 *
 */
function BT1() {
    var salaryPerDay = document.getElementById("salaryPerDay").value * 1
    var workingDays = document.getElementById("workingDays").value * 1
    var totalSalary = " "

    totalSalary = (salaryPerDay * workingDays);

    document.getElementById("resultBT1").innerHTML = totalSalary
}

// Bài 2
/**
 * INPUT: Cho 5 số thực nhập và từ bàn phím
 * 
 * PROCESS:
 * 1. DOm các giá trị người dùng nhập
 * 2. Giá trị trung bình = (tổng của 5 số thực từ input)/5
 * 3. In giá trị trung bình ra màn hình thông qua button
 * 
 * OUTPUT: Giá trị trung bình của 5 số thực
 * 
 */
function BT2() {
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;
    var num4 = document.getElementById("num4").value * 1;
    var num5 = document.getElementById("num5").value * 1;

    var averageValue = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById("resultBT2").innerHTML = averageValue;
}

// Bài 3
/**
 * INPUT:1.Cho giá trị 1 USD = 23 500 VNĐ
 *       2.Người dùng nhập vào số USD cần đổi sang tiền việt.
 * 
 * PROCESS:1. Nhận ra giá input
 *         2. Số tiền sau khi quy đổi = Số tiền cần quy đổi * giá trị 1 USD
 *         3. In số tiền sau quy đổi ra màn hình thông qua button
 * 
 * OUTPUT: Số tiền có được sau khi quy đổi 
 * 
 */

function BT3() {
    var oneUSD = 23500;
    var numberOfUsd = document.getElementById("numberOfUsd").value * 1
    var VND = new Intl.NumberFormat('vn-VN').format(numberOfUsd * oneUSD) + " VNĐ";
    document.getElementById("resultBT3").innerHTML = VND;
}

// Bài 4
/**
 * INPUT: cho chiều dài, chiều rộng hình chữ nhật nhập từ bàn phím
 * 
 * PROCESS:1. DOM 2 giá trị a, b là chiều dài, chiều rộng hình chữ nhật do người dùng nhập.
 *         2. Diện tích HCN: dài * rộng
 *            Chu vi HCN = (dài + rộng) * 2
 *         3. In kết quả ra màn hình thông qua button.
 * 
 * 
 * OUPUT: DIện tích, chu vi hình chữ nhật
 */

function BT4_1() {
    var length = document.getElementById("length").value * 1;
    var width = document.getElementById("width").value * 1;
    var area = length * width;
    document.getElementById("resultBT4").innerHTML = area

}

function BT4_2() {
    var length = document.getElementById("length").value * 1;
    var width = document.getElementById("width").value * 1;
    var perimeter = (length + width) * 2;

    document.getElementById("resultBT4").innerHTML = perimeter
}

// Bài 5
/**
 * INPUT: Cho số tự nhiên nhập từ bàn phím
 * 
 * PROCESS:
 *  1. DOM giá trị từ input do người dùng nhập
 *  2. Lấy chữ số hàng đơn vị : số đó % 10.
 *     lấy chữ số hàng chục : (Số đó % 100)/10.
 *     Sau đó tính tổng 2 số
 *  3. In tổng ra màn hình thông qua button
 * 
 * 
 * OUTPUT: Tổng 2 ký số của input
 *  */

function BT5() {
    var number = document.getElementById("number").value * 1
    var ten = Math.floor((number % 100) / 10);
    var unit = number % 10;
    var sum = ten + unit;
    document.getElementById("resultBT5").innerHTML = sum
}