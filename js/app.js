let demoArr = [];

function calculate() {
    let count = 0;
    let display = [];
    addNumber();
   for (let i = 0; i < 10; i++) {
        if (demoArr[i] >= 10) {
            display.push(demoArr[i]);
            count++;
        }
   }
   alert("Có " + count + " số nguyên lớn hơn 10: " + demoArr.join(','));
}

function addNumber() {
    let num;
    for (let i = 1; i <= 10; i++) {
        num = prompt("Nhập phần tử thứ: " + i);
        demoArr.push(num);
    }
}