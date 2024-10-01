num = 10;
if(num >0){
    console.log(num,"dương");
}
if(num >0){
    num =-100;
    console.log(num);
}

if(num>0){
    console.log(num,"dương");
}
else if(num<0){
    console.log(num,"âm");
}else{
    console.log(num, "0");
}

num1 =12;
num2 =25;
if(num%2==0){
    if(num2%2==1){
        res = num1 + num2;
        console.log(res);
    }
}else{
    if(num2%2==1){
        res = num1 - num2;
        console.log(res);
    }
}
