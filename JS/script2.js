var a = +prompt("Введите колличество строк!")
var b = prompt("Введите то что должно находиться на строке!")
var c = prompt("Введите то что должно быть в конце строки!")

for (let i = 0; i < a; i++) {
     newStr = ''
     
    for(let j = 0; j <= i; j++) {
     newStr += b   
        
    }
    newStr += c
    console.log(newStr);
 }