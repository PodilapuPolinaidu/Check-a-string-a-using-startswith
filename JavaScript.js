const str = "hello world";
const newStr = /^he/;
// if(str.startsWith(newStr)){
//   document.write("The string started with another string");
// }
// else{
//   document.write("The string didn't start with another string");
// }
if(newStr.test(str)){
  document.write("The string  start with another string");
}else{
  document.write("The string start with another string");
}

// if(str.lastIndexOf(newStr,0) == 0){
//     document.write("The string started with another string");

// }
// else{
//     document.write("The string didn'nt started with another string");

// }