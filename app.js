const count = document.querySelector(".h1")
const minBtnEle = document.querySelector(".minBtnEle");
const plusBtnEle = document.querySelector(".plusBtnEle");
const inputNumEle = document.querySelector(".inputNum");
const btnEle = document.querySelector(".btn");

minBtnEle.addEventListener("click", () => {
    const countValue = parseInt(count.innerText)
    // console.log(countValue);
    // count.innerText + 1 ;
    const inputNumEleValue = parseInt(inputNumEle.value);
    count.innerText = countValue - inputNumEleValue;
})

plusBtnEle.addEventListener("click", () => {

    const countValue = parseInt(count.innerText)
    // console.log(countValue);
    // count.innerText + 1 ;
    const inputNumEleValue = parseInt(inputNumEle.value);
    count.innerText = countValue + inputNumEleValue;
})  

btnEle.addEventListener("click",  () => {
    count.innerText = 0;
})