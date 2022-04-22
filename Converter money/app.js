const fromCurrency = document.querySelector(".fromCurrency")
const toCurrency = document.querySelector(".toCurrency")
const from = document.querySelector(".from");
const to = document.querySelector(".to");
const fromP = document.querySelector('.fromP')
const toP = document.querySelector('.toP')
const fromli = document.querySelectorAll('.fromCurrency li')
const toli = document.querySelectorAll('.toCurrency li')
let fr = "RUB";
let tofr = "USD";
let out;
checkSelect()
from.addEventListener('keyup',getData)
function getData() {
  fetch(`https://api.exchangerate.host/latest?base=${fr}&symbols=${tofr}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      out = Object.values(data.rates)[0];
      fromP.innerText = `1 ${fr} = ${out} ${tofr}`
      toP.innerText = `1 ${tofr} = ${1 / out} ${fr}`
      calc(out)
    }
    )
}
function calc(out) {
  to.value = out * from.value
}
fromCurrency.addEventListener(('click'), (e) => {
  console.log(e.target.className);
  if (e.target.className == 'from-li') {
    fr = e.target.innerText
    checkSelect()
    getData()
  }
})
toCurrency.addEventListener(('click'), (e) => {
  console.log(e.target.className);
  if (e.target.className == 'to-li') {
    tofr = e.target.innerText
    checkSelect()
    getData()
  }
})
function checkSelect() {
  fromli.forEach((item) => {
    item.classList.remove('selected')
    if (fr == item.innerText) {
      item.classList.add('selected')
    }
  })
  toli.forEach((item) => {
    item.classList.remove('selected')
    if (tofr == item.innerText) {
      item.classList.add('selected')
    }
  })
}
  /*
let checkSelect =false;
let index = 0;
let index2 = 0;
for (let i = 0; i < fromCurrency.length; i++){
fromCurrency[i].addEventListener("click",(e)=>{
  e.preventDefault();
  let fromMoney = fromCurrency[i].innerHTML
  fromCurrency[i].classList.add("selected")
  pullData(fromMoney)
  fr = pullData(fromMoney);
  fromCurrency[index].classList.remove("selected")
  index = i;
})
}
for (let i = 0; i < toCurrency.length; i++) {
toCurrency[i].addEventListener("click",(e)=>{
  e.preventDefault();
  let toMoney = toCurrency[i].innerHTML
  toCurrency[i].classList.add("selected");
    pullData2(toMoney)
    tofr = pullData2(toMoney);
    toCurrency[index2].classList.remove("selected")
  index2 = i;
})
}
let converter = (fromValyuta,toValyuta) => {
}
function pullData(data){
return data;
}
function pullData2(data){
return data;
}
*/
 /*const { USD , RUB ,EUR , GBP} = d.rates
      let fromData = from.value;
      let toData = to.value;
      console.log(fr,tofr);
      if(fromData){
        to.value = fromData * RUB
      }
      if(fromData == ""){
        to.value =""
      } */