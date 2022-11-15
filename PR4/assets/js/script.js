let elem2_1 = document.querySelector('#elem2-1');
console.log(elem2_1.tagName);


let elem2_2 = document.querySelector('#elem2-2');
console.log(elem2_2.tagName.toLowerCase());


let elems2_3 = document.getElementsByClassName('www3');
for (let elem3 of elems2_3) {
    elem3.innerHTML += elem3.tagName.toLowerCase();
}


let ol = document.getElementById('ol')
let new_li = document.createElement('li');
new_li.innerHTML = 'пункт';
ol.appendChild(new_li);


let ul = document.getElementById('ul');
let array = ['первый элемент', 'второй элемент', 'третий элемент'];
let new_li2
for (let elemArray of array) {
    new_li2 = document.createElement('li');
    new_li2.innerHTML = elemArray;
    ul.appendChild(new_li2);

}






let elem4_1 = document.getElementById('elem4-1');
let firstChild = elem4_1.firstElementChild;
firstChild.style.color = 'red';


let elem4_2 = document.getElementById('elem4-2');
let lastChild = elem4_2.lastElementChild;
lastChild.style.color = 'red';


let elem4_3 = document.getElementById('elem4-3');
let Childs = elem4_3.children;
for (let child of Childs) {
    child.innerHTML += '!'
}


let elem4_4 = document.getElementById('elem4-4');
elem4_4.previousElementSibling.innerHTML += '!'


let elem4_5 = document.getElementById('elem4-5');
elem4_5.nextElementSibling.innerHTML += '!'


let elem4_6 = document.getElementById('elem4-6');
elem4_6.nextElementSibling.nextElementSibling.innerHTML += '!'


let elem4_7 = document.getElementById('elem4-7');
elem4_7.parentNode.style.color = 'red';
elem4_7.style.color = 'black'


let elem4_8 = document.getElementById('elem4-8');
elem4_8.parentNode.parentElement.style.color = 'red';
elem4_8.parentElement.style.color = 'black'









let elem6_1 = document.querySelector('#elem6-1');
let elemstyle = getComputedStyle(elem6_1);
console.log(elemstyle.width);


let elem6_2 = document.querySelector('#elem6-2');
let btn6_2 = document.getElementById('btn6-2');
btn6_2.onclick = function() {
    console.log(elem6_2.scrollTop);
}


let elem6_3 = document.querySelector('#elem6-3');
let btn6_3 = document.getElementById('btn6-3');
btn6_3.onclick = function() {
    console.log(elem6_3.scrollLeft);
}


let elem6_4 = document.querySelector('#elem6-4');
let btn6_4 = document.getElementById('btn6-4');
btn6_4.onclick = function() {
    elem6_4.scrollTo(0, -100)
}


let elem6_5 = document.querySelector('#elem6-5');
let btn6_5 = document.getElementById('btn6-5');
btn6_5.onclick = function() {
    elem6_5.scrollBy(0, 100);
}







