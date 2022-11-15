let elem = document.getElementById('elem')

elem.classList.add('www')
console.log(elem.className);



let elem2 = document.getElementById('elem2')

elem2.classList.remove('www')
console.log(elem2.className);



let elem3 = document.getElementById('elem3')

console.log(elem3.classList.contains('www'));



let elem4 = document.getElementById('elem4')

if(elem4.classList.contains('www') == true){
    elem4.classList.remove('www')
    console.log(elem4.classList.contains('www'));
}else{
    elem4.classList.add('www')
    elem4.classList.contains('www')
}



let elem5 = document.getElementById('elem5')

console.log(elem5.classList.length);



let elem6 = document.getElementById('elem6')

for(let i = 0; i < elem6.classList.length; i++){
    alert(elem6.classList[i])
}



let elem7 = document.getElementById('elem7')

elem7.style.cssText = 'color: red; font-size: 30px; border: 2px solid: red'












let elem8 = document.getElementById('elem8')

elem8.insertAdjacentHTML("beforeend", "<span>!!!<span>")



let elem9 = document.getElementById('elem9')

elem9.insertAdjacentHTML("afterbegin", "<span>!!!<span>")



let elem10 = document.getElementById('elem10')

elem10.insertAdjacentHTML('beforeend', "<span>!!!<span>")



let parent = document.getElementById("parent")
let button = document.getElementById("button")

button.onclick = function(){
    parent.removeChild(child)
} 



let button2 = document.getElementById("button2")
let childList = document.getElementById("childList")


button2.onclick = function(){
    let lastChild = childList.lastElementChild
    childList.removeChild(lastChild)
}



let button3 = document.getElementById("button3")

button3.onclick = function(){
    button3.remove()
}



let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

btn1.onclick = function(){
    btn1.remove()
}
btn2.onclick = function(){
    btn2.remove()
}
btn3.onclick = function(){
    btn3.remove()
}


















let input = document.getElementById('input')
let button4 = document.getElementById('button4')

button4.onclick = function(){
    let newInput = input.cloneNode;
    document.body.appendChild(newInput);
}



let elem11 = document.getElementById('elem11')
let button5 = document.getElementById('button5')

button5.onclick = function(){
    console.log(elem11.clientTop);
}



let elem12 = document.getElementById('elem12')
let button6 = document.getElementById('button6')

button6.onclick = function(){
    console.log(elem12.clientLeft);
}



let elem13 = document.getElementById('elem13')
let button7 = document.getElementById('button7')

button7.onclick = function(){
    console.log(elem13.offsetWidth);
}



let elem14 = document.getElementById('elem14')
let button8 = document.getElementById('button8')

button8.onclick = function(){
    console.log(elem14.offsetHeight);
}





























let elem15 = document.getElementById('elem15')
let button9 = document.getElementById('button9')

button9.onclick = function(){
    console.log(elem15.clientWidth);
}



let elem16 = document.getElementById('elem16')
let button10 = document.getElementById('button10')

button10.onclick = function(){
    console.log(elem15.clientHeight);
}



let elem17 = document.getElementById('elem17')
let button11 = document.getElementById('button11')

button11.onclick = function(){
    console.log(elem17.scrollHeight);
}



let elem18 = document.getElementById('elem18')
let button12 = document.getElementById('button12')

button12.onclick = function(){
    console.log(elem18.scrollWidth);
}



let elem19 = document.querySelector('#elem19')
let button13 = document.getElementById('button13')
let height = elem19.scrollHeight - 100

button13.onclick = function(){elem19.scrollTo(0, height)}
