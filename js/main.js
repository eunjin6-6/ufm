let menu = document.querySelector('.main_menu');
let header = document.querySelector('.top_nav');
const body = document.body;
let lastScroll = 0;
let partnerSec = document.querySelector('.partners');
let partnerList = document.querySelector('.partner_list');
const partners = document.querySelectorAll(".partners ul");

//상단 메뉴 마우스 오버시 서브메뉴펼쳐지게
//상단 메뉴 마우스 오버시 배경 흰색, 글자 검정색
menu.addEventListener('mouseover',function(){
	header.style.height = '340px';
  header.classList.add('active');
  
});
menu.addEventListener('mouseout',function(){
	header.style.height = '80px';
  header.classList.remove('active');
});


//스크롤시 active 추가
window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
});

//위로 올리면 없어지게
window.addEventListener('scroll',()=>{
  let currentScroll = window.scrollY;

  if(currentScroll > lastScroll){
    header.classList.remove('deactive');
    header.classList.add('active');
  } else if(currentScroll < lastScroll){
    header.classList.remove('active');
    header.classList.add('deactive');
  }
  lastScroll = currentScroll; 
});



//performance 스크롤 넘버 카운팅 이벤트
let numbersWrap = document.querySelector('.performance');
let numbersOST = numbersWrap.offsetTop - 500;
let animated = false;

window.addEventListener('scroll',()=>{
  if(window.scrollY > numbersOST){
    if(!animated){
      let numbers = document.querySelectorAll('.performance .number');
      console.log(numbers);
      numbers.forEach(item=>{
      let oneLimit = Number(item.getAttribute('data-num'));
      console.log(oneLimit);
      let count = 0;
      let autoNumber = setInterval(()=>{
      count+=100;
      item.innerText = count;
        if (count >= oneLimit) {
          item.innerText = oneLimit.toLocaleString();
          clearInterval(autoNumber);
        } else {
          item.innerText = count.toLocaleString();
        }
      }, 50);
      });
      animated = true;
    }  
  }
});

//파트너스 로고 무한 슬라이드
const copy = document.querySelector(".partners_list").cloneNode(true);
partnerSec.appendChild(copy);

//마우스 오버시 슬라이드 애니메이션 멈추기
/*
partnerSec.addEventListener('mouseenter',()=>{
  for(list of partners){
    list.style.animationPlayState = "paused";
  }
});
partnerSec.addEventListener('mouseleave',()=>{
  for(list of partners){
    list.style.animationPlayState = "running";
  }
});
*/

/*
//자바스크립트로 css 애니메이션 구현하기
  for(list of partners){
    list.animate(
      // keyframes
      [
          { transform: "translateX(0)"},
          { transform: "translateX(-100%)"}
      ],
      // options
      {
          duration: 15000,
          easing: "linear",
          fill: "forwards",
          iterations: Infinity
      }
  );
  }
*/
 // 키프레임과 옵션 분리
 //const box = document.querySelector(".box");
 /*
 let keyframes = [
    { transform: "translateX(0)"},
    { transform: "translateX(-100%)"}
 ];
 let options = {
    duration: 20000,
    easing: "linear",
    fill: "forwards",
    iterations: Infinity
 };

 for(list of partners){
   list.animate(keyframes, options);
 }
*/


