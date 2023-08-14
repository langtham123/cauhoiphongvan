// function log(value) {
//     console.log(value);
// }
// const boxed = document.querySelector(".boxed");
// console.log(boxed.offsetWidth);
// console.log(boxed.offsetHeight);
// console.log(boxed.offsetLeft);
// console.log(boxed.offsetTop);
// // 2. clientWidth, clientHeight, clientLeft, clientTop
// console.log(boxed.clientWidth); // độ rộng phần tử trừ đi border 2 bên
// console.log(boxed.clientHeight); // chiều cao của phần tử trừ đi border
// console.log(boxed.clientLeft); // vị trí của nó so với bên trái border
// console.log(boxed.clientTop); // vị trí của nó so với phía trên border
// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);

// 4. selector.getBoundingClientRect()-> lấy ra tọa độ,kích thước của phần tử
// const boxed = document.querySelector(".boxed");
// console.log(boxed.getBoundingClientRect());
// left, x: vị trí của khối so với bên trái
// top: vị trí của khối so với phía trên
// bottom: chiều cao của khối + top
// right: độ rộng của khối + left
// width: độ rộng
// height: chiều cao

// Sự khác nhau giữa Node List và HTML Collection
// const li = document.getElementsByTagName("li"); // HTML Collection
// const li2 = document.querySelectorAll("li"); // NodeList
// console.log(li);
// console.log(li2);
// Điểm giống : có thể truy cập bằng index, có độ dài(length)
// HTML Collection: ko sử dụng được forEach
// NodeList: Sử dụng được forEach

// 5:
// document.title => thay đổi title của html
// console.log(document.title);
// document.title = "nguyen anh tuan";
// document.head
//console.log(document.head);
// insertBefore
// const ul = document.querySelector("ul");
// document.body.insertBefore(ul, document.querySelector("h3"));

//insertAdjacentElement
//document.querySelector("h3").insertAdjacentElement("beforebegin", ul);

// replaceChild
// const span = document.createElement("span");
// span.textContent = "abc";
// document.body.replaceChild(span, document.querySelector(".boxed"));

// convert HTML collection, NodeList to Array
// const li = document.getElementsByTagName("li");
// console.log(li);
// [...li].filter((item) => item);
// console.log(li);
