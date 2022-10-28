// let min;
// let minim = 0;
// let max = 59;
// min = Math.floor(Math.random() * (max - minim + 1)) + minim;
// for (let i = 0; i < 59; i++) {
//     if(min <= 15){
//         alert("1")
//     }
//     if(min <= 30){
//         alert("2")
//     }
//     if(min <= 45){
//         alert("3")
//     }
//     if(min <= 60){
//         alert("4")
//     } 
// }

// let minim = 0;
// let max = 10;
// let a = Math.floor(Math.random() * (max - minim + 1)) + minim;
// if (a == 10) {
//     alert("true")
// } else {
//     alert("folse")
// }



                            //Решение 1
// let lang;
// let arr = [];

// lang = prompt("выберите язык")
// if (lang == 'ru') {
//     arr[0] = "Пн"
//     arr[1] = "Вт"
//     arr[2] = "Ср"
//     arr[3] = "Чт"
//     arr[4] = "Пт"
//     arr[5] = "Сб"
//     arr[6] = "Ср"
//     for(let i = 0; i < 7; i++){
//         alert(arr[i])
//     }
// }else if (lang == 'en') {
//     arr[0] = "Mn"
//     arr[1] = "Ts"
//     arr[2] = "Fd"
//     arr[3] = "For"
//     arr[4] = "Fr"
//     arr[5] = "St"
//     arr[6] = "Sn"
//     for(let i = 0; i < 7; i++){
//         alert(arr[i])
//     }
// }else {
//     alert("Выбран неверный язык")
// }

                            //Решение 2

// let lang = prompt("выберите язык")
// let arr = ""
// switch(lang){
//     case 'ru':
//         arr = "Пн Вт Ср Чт Пт Сб Вс"
//         alert(arr)
//         break
//     case 'en':
//         arr = "Mn Ts Fir For Fr St Sn"
//         alert(arr)
//         break
// }


                            //Решение 3
// let lang=prompt("lang", "");
// let arr={'ru':['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.'],'en':['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.']} 
// alert(arr[lang])


// let a = prompt('1 или 0')
// if (a == 0){
//     alert("Верно")
// }else{
//     alert("Неверно")
// }

// let a = prompt('1 или 0')
// if (a > 0){
//     alert("Верно")
// }else{
//     alert("Неверно")
// }

// let a = prompt('1 или 0')
// if (a < 0){
//     alert("Верно")
// }else{
//     alert("Неверно")
// }

// let a = prompt('1 или 0')
// if (a >= 0){
//     alert("Верно")
// }else{
//     alert("Неверно")
// }

// let a = prompt('1 или 0')
// if (a <= 0){
//     alert("Верно")
// }else{
//     alert("Неверно")
// }

// let a = prompt('1 или 0')
// if (a != 0){
//     alert("Верно")
// }else{
//     alert("Неверно")
// }

// let a = prompt('text')
// if (a == 'text'){
//     alert("Верно")
// }else{
//     alert("Неверно")
// }

// let a = prompt("num")
// if (a > 0 || a < 5){
//     alert("Верно")
// }

// let a = prompt("num")
// if (a > 0 && a < 5){
//     alert("Верно")
// }

// let a = prompt("num")
// if (a > 0 && a < 5){
//     alert("Верно")
// }else{
//     alert("Неверно")
// }

// let a = prompt("num")
// a = Number(a)
// if(a == 2 || a == 0) {
//     a += 7
//     alert(a)
// }else {
//     a /= 10
//     alert(a)
// }

// let a = prompt("num")
// let b = prompt("num")
// a = Number(a)
// b = Number(b)
// if(a <= 1 && b >= 3){
//     console.log(a + b);
// }else{
//     console.log(a - b);
// }

// let a = prompt("num")
// let b = prompt("num")
// a = Number(a)
// b = Number(b)
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)){
//     console.log("Верно")
// }

// let num = prompt("num")
// let result
// num = Number(num)
// switch(num){
//     case 1:
//         result = "Зима"
//         console.log(result);
//         break
//     case 2:
//         result = "Весна"
//         console.log(result);
//         break
//     case 3:
//         result = "Лето"
//         console.log(result);
//         break
//     case 4:
//         result = "Осень"
//         console.log(result);
//         break
// }


// let day = prompt("num")
// day = Number(day)
// if(day > 0 && day < 32){
//     if(day <= 10){
//         console.log("Первая");
//     }
//     if(day >=11 && day < 20){
//         console.log("Вторая");
//     }
//     if(day >=21){
//         console.log("Третья");
//     }
// }else{
//     console.log("Неверная дата");
// }


// let month = prompt("num")
// month = Number(month)
// if(month > 0 && month <= 2 || month == 12){
//     console.log("Зима");
// }
// if(month > 3 && month <=5 ){
//     console.log("Весна");
// }
// if(month > 5 && month <= 8){
//     console.log("Лето");
// }
// if(month > 8 && month <= 11){
//     console.log("Осень");
// }

// let str = prompt("str")
// if (str[0] == "a"){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// let str = prompt("str")
// if (str[0] == "1" || str[0] == "2" || str[0] == "3"){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// let str = prompt("str")
// console.log(Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2)));

// let str = prompt("str")
// a = Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2))
// b = Number(str.charAt(3)) + Number(str.charAt(4)) + Number(str.charAt(5))
// if(a == b){
//     console.log("Верно");
// }else{
//     console.log("Неверно");
// }














// let num = 3;
// alert(num)


// let a = 10
// let b = 2
// alert(a - b)
// alert(a + b)
// alert(a * b)
// alert(a / b)


// let a = 10
// let b = 2
// result = a + b
// alert(result)


// let a = 10
// let b = 2
// let c = 5
// alert(a + b + c)


// let a = 17
// let b = 10
// let d = 7

// let c = a - b
// let result = c + d
// alert(result)


// let str = "Hello World!"
// alert(str)


// let str1 = "Hello "
// let str2 = "World"

// alert(str1 + str2)


// let name = prompt("Ypur name")
// alert(`Hello, ${name}`)


// let age = prompt("Age")
// console.log(`Привет, мне ${age}`);


// let name = prompt("Ypur name")
// alert(`Your name, ${name}`)


// let a = prompt("num")
// a = Number(a)
// console.log(a * a);


// let a = "abcde"
// console.log(a[0], a[2], a[4]);


// let num = '12345'
// console.log(Number(num.charAt(0)) + Number(num.charAt(1)) + Number(num.charAt(2)) + Number(num.charAt(3)) + Number(num.charAt(4)));


// let minut = 60
// let hour
// let day
// let month

// hour = minut * 60
// day = hour * 24
// month = day * 30
// console.log(`hour ${hour}`);
// console.log(`day ${day}`);
// console.log(`month ${month}`);


// let sec = new Date().getSeconds()
// let minut = new Date().getMinutes()
// let hour = new Date().getHours()

// console.log(`${hour} : ${minut} : ${sec}`);


// let a = prompt("num")
// console.log(a * a);


// let num = 47
// num += 7
// num -= 7
// num *= 7
// num /= 7
// console.log(num);


// let num = 10
// num ++
// num ++
// num --
// console.log(num);