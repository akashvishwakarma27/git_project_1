Q2. Check givin string is palindrome or Notification;

str = "naman";
new_str = "";

for (let i = str.length-1; i>=0; i--){
new_str+=str[i];
}
if (str == new_str){
    console.log("palindrome";)
}else {
    console.log("not a palindrome");
}