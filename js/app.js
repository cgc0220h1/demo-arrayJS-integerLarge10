let demoArr = [];

function calculate() {
    demoArr = [];
    let count = 0;
    let display = [];
    addNumber();
   for (let i = 0; i < 10; i++) {
        if (demoArr[i] >= 10) {
            display.push(demoArr[i]);
            count++;
        }
   }
   alert("Có " + count + " số nguyên lớn hơn 10: " + display.join(','));
}

function addNumber() {
    let num;
    for (let i = 1; i <= 10;) {
        num = +prompt("Nhập số thứ: " + i);
        if (Number.isInteger(num)) {
            demoArr.push(num);
            i++;
        } else {
            num = +prompt("Xin nhập lại");
        }
    }
}