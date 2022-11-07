// let button = document.getElementById('button')
// button.onclick = function(){
//     alert("Hello")
// }


// let button = document.getElementById('button')
// button.onmouseenter = function(){
//     alert('Hello')
// }


// let button = document.getElementById('button')
// button.ondblclick = function() {
//     alert("Hello")
// }


// let block = document.getElementById('block')
// block.onmouseout = function() {
//     alert("Hello")
// }


// let button = document.getElementById('button')
// let input = document.getElementById('inp')

// button.onclick = function(){
//     alert(input.value)
// }


// let button = document.getElementById('button')
// let input = document.getElementById('inp')

// button.onclick = function(){
//     input.value = "я поменял текст"
// }


// let button = document.getElementById('button')
// let img = document.getElementById('img')

// button.onclick = function(){
//     img.src = "http://ae01.alicdn.com/kf/HTB1G4Xfb3MPMeJjy1Xbq6AwxVXaW.jpg"
// }


// let input = document.getElementById('inp')
// input.onclick = function(){
//     while (true){
//         alert(input.value)
//     }
// }


// let input = document.getElementById('inp')

// input.onclick = function(){
//     input.value = "я поменял текст"
// }


// function test(input){
//     input.value = "поменял 1"
// }

// function test2(input){
//     input.value = "поменял 2"
// }


// let input = document.getElementById('inp')
// input.onclick = function(){
//     input.value = "ku-ku"
// }
// нужно поменять submit на text обратно


// let input = document.getElementById('inp')

// input.onclick = function(){
//     input.disabled = true
// }


// let img = document.getElementById('img')

// img.onmouseenter = function(){
//     img.src = "http://ae01.alicdn.com/kf/HTB1G4Xfb3MPMeJjy1Xbq6AwxVXaW.jpg"
// }
// img.onmouseout = function(){
//     img.src = "https://st03.kakprosto.ru/images/article/2019/5/9/357356_5cd44215399af5cd44215399ee.jpeg"
// }


// let input = document.getElementById('inp')
// let button = document.getElementById('button')

// button.onclick = function(){
//     input.style.color = 'red'
// }


// let input = document.getElementById('inp')
// let button = document.getElementById('button')
// let button2 = document.getElementById('button2')

// button.onclick = function(){
//     input.style.display = 'none'
// }
// button2.onclick = function(){
//     input.style.display = 'block'
// }


// let input = document.getElementById('inp')
// let button = document.getElementById('button')

// button.onclick = function(){
//     input.value = 'я поменял текст и css'
//     input.style.color = 'red'
//     input.style.border = '3px solid black'
//     input.style.borderRadius = '10px'
//     input.style.padding = '5px 15px 5px 3px'
// }


// let input = document.getElementById('inp')
// let input2 = document.getElementById('inp2')

// input.style.display = 'none'

// input2.onclick = function(){
//     input.style.display = 'block'
//     input2.value = 'на меня тепреь нельзя нажать'
//     input2.disabled = true
// }
// input.onclick = function(){
//     input.style.display = 'none'
//     input2.disabled = false
//     input2.value = "на меня можно сново нажать"
// }



// let button = document.getElementById('button')
// let a = 0
// button.onclick = function(){
//     a++;
//     button.textContent = a
// }


// let text = document.getElementById("text")
// let button = document.getElementById("button")

// button.onclick = function() {
//     text.innerHTML = 'теперь я <b> жирный'
// }


// let h3 = document.getElementById("h3")
// let text = document.getElementById("text")
// let button = document.getElementById("button")

// h3.style.display = 'none'
// button.onclick = function(){
//     text.style.display = 'none'
//     h3.style.display = 'block'
// }


// let h3 = document.getElementById("h3-2")
// let text = document.getElementById("text2")
// let button = document.getElementById("button")

// h3.style.display = 'none'
// button.onclick = function(){
//     text.style.display = 'none'
//     h3.style.display = 'block'
// }


// let button = document.getElementById("button")
// let input1 = document.getElementById("input__cal1")
// let input2 = document.getElementById("input__cal2")
// let text = document.getElementById("text-cal")
// let sum = 0

// button.onclick = function(){
//     sum = Number(input1.value) + Number(input2.value)
//     text.innerText = sum
// }


// let texts = document.getElementsByTagName('p')
// let button = document.getElementById('button')

// button.onclick = function(){
//     for(let i = 0; i < 5; i++){
//         texts[i].innerText = '222'
//     }
// }


// let texts = document.getElementsByClassName('www')
// let button = document.getElementById('button')

// button.onclick = function(){
//     for(let i = 0; i < 5; i++){
//         texts[i].innerText = '222'
//     }
// }


// let button = document.getElementById("button")
// let text = document.getElementById('text')

// button.onclick = function(){
//     alert(text.className)
// }


// let button = document.getElementById("button")
// let button2 = document.getElementById("button2")
// let text = document.getElementById('text')

// button.onclick = function(){
//     alert(text.className)
// }
// button2.onclick =function(){
//     alert("класс удалён")
//     text.classList.remove('class')
// }


// let button = document.getElementById("button")
// let text = document.getElementById('text')

// button.onclick = function(){
//     text.className = 'new-class'
//     alert('класс изменён')
// }


// let input = document.getElementById("inp")
// let text = document.getElementById('text')

// input.onkeydown = function(){
//     text.innerText = input.value
// }


// let button = document.getElementById("button")
// let a = document.getElementById('a')
// let a2 = document.getElementById('a2')
// let a3 = document.getElementById('a3')

// button.onclick = function(){
//     a.innerText = `(${a.href})`
//     a2.innerText = `(${a2.href})`
//     a3.innerText = `(${a3.href})`
// }






// let btn = document.getElementById('btnLeft');
// let input = document.getElementById('inputRight');
// let block = document.getElementById('block__input');
// btn.onclick = function() {
//     block.style.flexDirection = 'row-reverse';
//     block.style.justifyContent = 'space-between';
//     input.value = 'Теперь я справа';
// }


// let btn = document.getElementById('btn_20');
// let input = document.getElementById('input_20');
// btn.onclick = function() {
//     input.value = Мои CSS классы: ${input.classList}
// }


// let input = document.getElementsByClassName('input_21');
// let btn = document.getElementById('btn_21');
// let ValueInput = input[0].value
// btn.onclick = function() {
//     input[0].value = input[1].value;
//     input[1].value = ValueInput;
//     ValueInput = input[0].value
// }


// let input = document.getElementsByClassName('input_22');
// let btn = document.getElementById('btn_22');
// btn.onclick = function() {
//     input[1].value = Number(input[0].value)**2
// }


// let input = document.getElementsByClassName('input_23');
// let btn = document.getElementById('btn_23');

// btn.onclick = function() {
//     let num = input[0].value
//     if (!isNaN(input[0].value)) {
//         input[1].value = num**2
//     } else {
//         alert("Вы ввели не число")
//     }
// }


// let input = document.getElementById('input_24');
// input.onclick = function() {
//     input.disabled = true;
//     input.style.cursor = 'not-allowed'
// }


// let input = document.getElementsByClassName('input_25');
// function add(elem) {
//     input[0].value += elem
// }




// var date = new Date();
// alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());

// var months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// var date = new Date();
// var month = date.getMonth();
// alert(months[month]);


// var date = new Date();
// alert(date.getDate());

// var date = new Date();
// alert(date.getMonth());

// var date = new Date();
// alert(date.getFullYear());


// var date = new Date();
// alert(date.getDay());

// var date = new Date();
// var day = date.getDay();

// function showDay(day) {
// 	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }

// console.log(showDay(day));


// var date = new Date();
// var minute = Math.floor(date.getTime() / (1000 * 60));
// alert(minute);


// var time = Date.parse('1988-03-01T00:00:00');

// var date = new Date();
// var now = date.getTime();

// var result = now - time;
// result = result / (1000 * 60 * 60);
// alert(result);


// let btn = document.getElementById('btnLeft');
// let input = document.getElementById('inputRight');
// let block = document.getElementById('block__input');
// btn.onclick = function() {
//     block.style.flexDirection = 'row-reverse';
//     block.style.justifyContent = 'space-between';
//     input.value = 'Теперь я справа';
// }


// let btn = document.getElementById('btn_20');
// let input = document.getElementById('input_20');
// btn.onclick = function() {
//     input.value = Мои CSS классы: ${input.classList}
// }


// let input = document.getElementsByClassName('input_21');
// let btn = document.getElementById('btn_21');
// let ValueInput = input[0].value
// btn.onclick = function() {
//     input[0].value = input[1].value;
//     input[1].value = ValueInput;
//     ValueInput = input[0].value
// }


// let input = document.getElementsByClassName('input_22');
// let btn = document.getElementById('btn_22');
// btn.onclick = function() {
//     input[1].value = Number(input[0].value)**2
// }


// let input = document.getElementsByClassName('input_23');
// let btn = document.getElementById('btn_23');

// btn.onclick = function() {
//     let num = input[0].value
//     if (!isNaN(input[0].value)) {
//         input[1].value = num**2
//     } else {
//         alert("Вы ввели не число")
//     }
// }


// let input = document.getElementById('input_24');
// input.onclick = function() {
//     input.disabled = true;
//     input.style.cursor = 'not-allowed'
// }


// let input = document.getElementsByClassName('input_25');
// function add(elem) {
//     input[0].value += elem
// }
// let elements = document.querySelectorAll('p.num7');
// let i = 0
// for (let elem of elements) {
//     elem.innerHTML = i
//     i++
// }
// let elems = document.getElementsByClassName('elems_14');
// let btn = document.getElementById('btn_14');
// let i = 0
// btn.onclick = function() {
//     for (let elem of elems) {
//         elem.innerHTML = i
//         i++
//     }
// }


// let elems = document.getElementsByClassName('elems_14');
// let btn = document.getElementById('btn_14');
// let i = 0
// btn.onclick = function() {
//     if (typeof i == 'number') {
//         for (let elem of elems) {
//             elem.innerHTML = ${i}.${elem.innerHTML}
//             i++
//         }  
//     }
//     i = false
// }


