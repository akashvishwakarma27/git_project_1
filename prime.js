Q1. Check the number is prime or Not

num = 13

let count = 0; 
for(let i = 0; i<=num; i++):
if (num%i==0){
    count++;
}

if (count == 2){
    console.log("number is prime ");
}else {
    console.log("number is not prime");
}
