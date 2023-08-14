// addEventListener
// const button = document.querySelector(".button");
// button.addEventListener("click", function() {
//     console.log("click me");
// });

//const button = document.querySelector(".button");
//const span = document.querySelector(".button span");
//function handleClick() {
    //console.log("click button");
//}
// e: viết tắt của event
//button.addEventListener("click", handleClick);
//span.addEventListener("click", function (e) {
    //e.stopPropagation();// ngăn chặn vấn đề nổi bọt
     //e.stopImmediatePropagation();// chặn mọi event
    //console.log("click span");
//});
//document.body.addEventListener("click", function () {
    //console.log("click body");
//});

// target vs currentTarget
//button.addEventListener("click", function (event) {
    // event.target: nó sẽ chọn chính xác element mà mình click tới
    //console.log(event.target);
    // event.currentTarget: nó sẽ chọn phần tử mà mình click
    //console.log(event.currentTarget);
//});
// event.preventDefault();
// const link = document.querySelector(".link");
// link.addEventListener("click", function (e) {
//     e.preventDefault(); // ko cho web load ra
//     //console.log("click me");
// });
///

// const button = document.querySelector(".change");
// button.addEventListener("click", handleChangeColor);
// const colors = ["#ffa400", "#00aefd", "#07a787", "#ffb86c"];
// function handleChangeColor() {
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = color;
// }

// const buttonMinus = document.querySelector(".counter-descrease");
// const buttonPlus  = document.querySelector(".counter-increase");
// const counterNumber = document.querySelector(".counter-number");
// let counterValue = parseInt(counterNumber.textContent);
// buttonPlus.addEventListener("click", function () {
//     if (counterValue >= 10) return 10;
//     counterValue++;
//     counterNumber.textContent = counterValue;
// });
// buttonMinus.addEventListener("click", function () {
//     if (counterValue <= 0) return 0;
//     counterValue--;
//     counterNumber.textContent = counterValue;
// });
// const button = document.querySelector(".button");
// const template = `<div class="modal">
// <div class="modal-content">
//     <i class="fa fa-times modal-close"></i>
// </div>
// </div>`;
// button.addEventListener("click", function() {
//     document.body.insertAdjacentHTML("beforeend", template);
// });

// document.body.addEventListener("click", function (event) {
//     console.log(event.target);
//     if (event.target.matches(".modal-close")) {
//         const modal = event.target.parentNode.parentNode;
//         modal.parentNode.removeChild(modal);
//     }
//     else if (event.target.matches(".modal")) {
//         event.target.parentNode.removeChild(event.target);
//     }
// });
// const modalClose = document.querySelector(".modal-close");
// modalClose.addEventListener("click", handleCloseModal);
// function handleCloseModal(event) {
//     console.log(event.target);
// }
// function compare(a = 0, b = 0) {
//     if (typeof a !== "number" || typeof b !== "number") {
//       console.log("Please enter a valid number");
//       return 0;
//     }
//     return Math.max(a, b);
//   }
// console.log(compare(100, 4));
// function without(object, key) {
//     delete object[key];
//     return object;
// }
// console.log(without({ a: 1, b: 2}, "b"));
// window.addEventListener("load", function () {
//     console.log("your web loaded");
// });
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("DOM loaded");
// });
// window.addEventListener("load", function() {
//     const text = document.querySelector(".text");
//     text.addEventListener("mouseenter", function(event){
//         const title = event.target.dataset.tooltip;
//         console.log(title);
//     });
// });
// const spinner = document.querySelector("#spinner");
// spinner.textContent = `<div class="demo">hello html</div>`;
// console.log(spinner.innerHTML);
// console.log(Number("4.5"));
// const array = [
//     1,
//     1000,
//     false,
//     null,
//     "evondev",
//     "",
//     undefined,
//     "javascript",
//     [1, 2, 3],
//     NaN,
// ];
// const filterFalsy = array.filter((item) => Boolean(item));
// console.log(filterFalsy);
// const complexArray = [
//     [1, 2, 3, [false, null]],
//     [1, 5, 6, ["javascript"]],
//     [888, 666, [90]],
// ];
// const result = complexArray.flat(2);
// console.log(result);
// const result = []
// const getFlatten = (arr) => {
//     arr.forEach(data => {
//         if (Array.isArray(data)) {
//             getFlatten(data)
//         } else {
//             result.push(data)
//         }
//     })
//     return result
// }
// console.log(getFlatten(array))


// 1. keydown: sự kiện nhấn xuống
// const input = document.querySelector(".input");
// input.addEventListener("keydown", function (e) {
//     //console.log(e.key);
//     // e.key: key nhập vào
//     if (e.key === "Enter") {
//         console.log("You hit Enter!");
//     }
// });
// const form = document.querySelector(".form");
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
    // console.log(this);
    // console.log(e.target);
    // console.log(this.elements);
    // console.log(this.elements["username"]);
//     const ussername = this.elements["username"].value;
//     const gender = this.elements["gender"].value;
//     const hobby = this.querySelectorAll(`input[name="hobby"]`);
//     console.log(hobby);
//     let hobbyValues = [];
//     [...hobby].forEach((item) => hobbyValues.push(item.value));
//     console.log(hobbyValues);
// });
// window.addEventListener("load", function () {
//     const togglePassword = document.querySelector(".toggle");
//     togglePassword.addEventListener("click", function() {
//         const input = this.previousElementSibling;
//         const inputType = input.getAttribute("type");
//         if (inputType === "password") {
//             input.setAttribute("type", "text");
//         }
//         else {
//             input.setAttribute("type", "password");
//         }
//     });
// });

// 1 . sự kiện scroll
// window.addEventListener("scroll", function (e) {
//     console.log("scroll");
// });
// 2. debounce
// function debounceFn(func, wait, immediate) {
//     let timeout;
//     return function () {
//         let context = this,
//         args = arguments;
//         let later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         let callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }
// function slipArray(array, number) {
//     let result = [];
//     let index = 0;
//     while(index < array.length) {
//         result.push(array.slice(index, number + index));
//         index = index + number;
//     }
//     console.log(result);
//     return result;
// }
// slipArray([1,2,3,4,5,6], 2);
// window.addEventListener("scroll", function () {
//     const scrollTop = window.pageYOffset;
//     // Tính chiều cao của document
//     const height = document.documentElement.clientHeight;
//     console.log(height);
// });
//localStorage.setItem("name", "tuan");
// const story = document.body.querySelector(".story");
// const setText = document.body.querySelector("#set-text");
// setText.addEventListener("click", () => {
//     story.textContent = "It was a dark and stormy night...";
// });
// const clearText = document.body.querySelector("#clear-text");
// clearText.addEventListener("click", () => {
//     story.textContent = "";
// });
// Regular expression: Biểu thức chính quy
// 1.2 Cách khai báo với Regex
// const re1 = /hello/;
// const re2 = new RegExp("hello");
// hello world 
// regex.test(value) -> true of false
//console.log(re1.test("hello world"));
// /[a-z]/.test("abc");
// const str4 = "hello welcome to my hello";
// console.log(str4.replace("hello", "hi"));
// const emailInput = document.querySelector(".input");
// emailInput.addEventListener("input", function (e) {
//     const value = e.target.value;
//     const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (regexEmail.test(value.trim())) {
//         e.target.classList.add("valid");
//         e.target.classList.remove("invalid");
//     }
//     else {
//         e.target.classList.remove("valid");
//         e.target.classList.add("invalid");
//     }
//     if (!value) {
//         e.target.classList.remove("invalid");
//     }
// });

// Câu hỏi phỏng vấn
// 1. Sự khác nhau giữa i ++ và ++ i
// i ++ gán giá trị trước rồi mới tăng sau
// ++ i tăng trước rồi mới gán giá trị sau
// let i = 1;
// let j = i++;
// console.log(i, j);
// 2: Câu hỏi phỏng vấn về closure
// closure trong loop
for (var i = 1; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// từ khóa var bị hoisting
// scope của var sau mỗi vòng lặp thì nó không thay đổi
// cách để khắc phục tình trạng trên là thay vì dùng var thì ta dùng biến let
// vì biến let ko bị hoisting và scope của nó sẽ thay đổi
// sau mỗi lần lặp


