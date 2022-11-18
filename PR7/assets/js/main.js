let text = document.getElementById("text1")
let button = document.getElementById('button')
let a = document.getElementById('a')
let button3 = document.getElementById('button3')


button.onclick = function(){
    this.parentElement.style.fontSize = '30px'
    text.style.color = 'red'
    text.style.background = 'black'
    text.style.border = '2px solid gray'
    text.style.width = '100px'
    text.style.height = '50px'
}

function resul_name(event){
  event.preventDefault();
  var name1=document.getElementById('name1').value;
  var name2=document.getElementById('name2').value;
  var result=name1+name2;
  document.getElementById("result").innerHTML = result;
}

button3.onclick  = function(){
    let href = a.getAttribute('href')
    let rel = a.getAttribute('rel')
    let type = a.getAttribute('type')
    let hreflang = a.getAttribute('hreflang')
    let target = a.getAttribute('target')
    document.getElementById('p1').innerText = href
    document.getElementById('p2').innerText = rel
    document.getElementById('p3').innerText = type
    document.getElementById('p4').innerText = hreflang
    document.getElementById('p5').innerText = target
}
