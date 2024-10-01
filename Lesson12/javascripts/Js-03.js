var num1, num2;

num1 = 12;
num2 = 25;
res = num1*num2;
console.log(num1, "*", num2,"=",res);
res = num1>num2;
console.log(res);
console.log(num1===num2); //so sánh cả kiểu dữ liệu và giá trị
console.log(num1==num2); // so sánh mỗi giá trị
console.log(num1!=num2);
console.log(num1!==num2);
console.log((num1>10)&&(num2<10));
console.log((num1>10)||(num2<10));
console.log(!((num1>10)||(num2<10)));
console.log(!(num1>10)||(num2<10));
console.log((num1>10)||!(num2<10));
console.log((num1>10)?"Lớn hơn":"Nhỏ hơn");
console.log((num2%2==0)?"Chẵn":"Lẻ");
console.log((typeof(num2))?"Int":"String");



