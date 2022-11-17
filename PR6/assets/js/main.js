let form = document.forms.calculator;

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
  let initial = +form.money.value;
  if (!initial) return;

  let interest = form.interest.value * 0.01;

  if (!interest) return;

  let years = form.months.value / 12;
  if (!years) return;

  let result = Math.round(initial * (1 + interest) ** years);

  let height = result / form.money.value * 100 + 'px';
  document.getElementById('height-after').style.height = height;
  document.getElementById('money-before').innerHTML = form.money.value;
  document.getElementById('money-after').innerHTML = result;
}

calculate();

let select = document.getElementById('genres')
let option = document.createElement('option');
option.innerText = 'Класика'
option.value = 'classic'
option.selected = true
select.appendChild(option);















let table = document.getElementById('bagua-table')

let process;

table.onclick = function(event) {
    let target = event.target.closest('.edit-cancel,.edit-ok,td')  
    
    if (!table.contains(target)) return;

    if (target.className == 'edit-cancel') {
      EndEdit(process.elem, false);
    } else if (target.className == 'edit-ok') {
      EndEdit(process.elem, true);
    } else if (target.nodeName == 'TD') {
      if (process) return;

      edit(target)
    }
}
function edit(td) {
    process = {
        elem: td,
        code: td.innerHTML
    }
    
    td.classList.add('edit-td');

    let textarea = document.createElement('textarea');
    textarea.style.width = td.clientWidth + 'px';
    textarea.style.height = td.clientHeight + 'px';
    textarea.value = td.innerHTML;
    textarea.className = 'edit-area';
    td.innerHTML = '';
    td.appendChild(textarea);
    textarea.focus();
    td.insertAdjacentHTML("beforeend", `<div class="block__btn"><button class="edit-ok">OK</button><button class="edit-cancel">CANСEL</button></div>`);
}
function EndEdit(td, ifTrue) {
    if (ifTrue) {
        td.innerHTML = td.firstChild.value
    } else {
        td.innerHTML = process.code
    }
    td.classList.remove('edit-td');
    process = null;
}