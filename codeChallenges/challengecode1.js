// const body = document.querySelector("body");

// function handleWindowWidth() {
//   const currentColor = body.style.backgroundColor;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "purple";
//   } else {
//     newColor = "blue";
//   }
//   body.style.backgroundColor = newColor;
// }

// body.addEventListener("click", handleWindowWidth);




// //클릭시 배경색 바꾸게 한거


// //1450, 800


// const body = document.querySelector("body");

// function handleWindowWidth() {
//   let windowWidth = window.innerWidth;
//   console.log(windowWidth);
//   let bgColor = body.style.backgroundColor;
//   if (windowWidth >= 1450) {
//     bgColor = "yellow";
//   } else if (windowWidth >= 800) {
//     bgColor = "#904fad";
//   } else {
//     bgColor = "#2e8cd4";
//   }
//   body.style.backgroundColor = bgColor;
// }

// body.addEventListener("click", handleWindowWidth);


// //클릭 시 1450 이상이면 배경색 Yellow , 800 이상이면 purple, 그 외(800미만) 일때는 blue로 변경


// //요소를 3개
// //html div 3개

// //창 최대 가로길이


// const windowWidth = window.innerWidth;

// //1450 800
// //1920FHD
// //2580, 1600, 1280(yellow X)

// windowWidth/(창최대가로길이) * 100 => 비율

// 0.8>0.4>



// const body = document.querySelector("body");

// function handleWindowWidth() {
//   const windowWidth = (window.innerWidth / screen.width) * 100;
//   console.log(windowWidth);
//   console.log(window.innerWidth);
//   console.log(screen.width);
//   let bgColor = "purple";
//   if (windowWidth >= 75) {
//     bgColor = "yellow";
//   } else if (windowWidth >= 40) {
//     bgColor = "purple";
//   } else {
//     bgColor = "blue";
//   }
//   body.style.backgroundColor = bgColor;
// }

// window.addEventListener("resize", handleWindowWidth);


// // 아래는 최종

// const body = document.querySelector("body");

// function handleWindowWidth() {
//   const windowWidth = (window.innerWidth / screen.width) * 100;
//   let bgColor = "#904fad";
//   if (windowWidth >= 75) {
//     bgColor = "#efbc13";
//   } else if (windowWidth >= 40) {
//     bgColor = "#904fad";
//   } else {
//     bgColor = "#2e8cd4";
//   }
//   body.style.backgroundColor = bgColor;
// }

// window.addEventListener("resize", handleWindowWidth);


document.querySelector
document.getElementsByTagName