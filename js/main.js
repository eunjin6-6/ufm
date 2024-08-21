let menu = document.querySelector('.main_menu');
let header = document.querySelector('.top_nav');
const body = document.body;
let lastScroll = 0;

const slideWrapper = document.querySelector('.slide-wrapper');
const slides = document.querySelectorAll('.slide-container li');
const slideCount = slides.length;
const slideDesc = document.querySelector('.slide_desc');
let currentIdx = 0; //현재 보고 있는 인덱스번호
let autoFade;
const pager = slideWrapper.querySelector('.slide_pager');
let pagerHTML = '';


let partnerSec = document.querySelector('.partners');
let partnerList = document.querySelector('.partner_list');
const partners = document.querySelectorAll(".partners ul");





//----------------------------------------------------------------------- 
//header 상단 메뉴 스크립트
//----------------------------------------------------------------------- 
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


//마우스 스크롤시 active 추가
window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
});

//마우스 스크롤 위로 올리면 없어지게
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



//----------------------------------------------------------------------- 
//slide 배너 이미지 자동 페이드인아웃
//----------------------------------------------------------------------- 
//자동 슬라이드 함수 생성
function showSlide(num){

  if(currentIdx == num) return; //보고있는 페이저 번호 누르면 아무것도 없이 바로 실행
  let currentSlide = slides[currentIdx];
  let nextSlide = slides[num];

  //지금 슬라이드에 active 제거, 다음 슬라이드에 active 추가
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    
    currentIdx = num;
    updatePager();
}
showSlide(0);



//자동 슬라이드 실행 함수
function autoFadeStart(){
  autoFade = setInterval(function(){ 
    let nextIdx = (currentIdx + 1)% slideCount; //3로 나눈 나머지
    showSlide(nextIdx);
  }, 2000);
}
//위에는 함수 할 일 정의, 열자마자 함수 실행
autoFadeStart();



//마우스가 슬라이드 텍스트에 들어오면 멈추기
slideDesc.addEventListener('mouseenter',()=>{
  clearInterval(autoFade);
});
slideDesc.addEventListener('mouseleave',()=>{
  autoFadeStart(); //함수로 가져오게 > 통째로 함수 안에 넣어버림
});

//마우스가 페이져에 들어오면 멈추기
pager.addEventListener('mouseenter',()=>{
  clearInterval(autoFade);
});
pager.addEventListener('mouseleave',()=>{
  autoFadeStart(); //함수로 가져오게 > 통째로 함수 안에 넣어버림
});



//----------------------------------------------------------------------- 
//슬라이드 페이져
//----------------------------------------------------------------------- 
//pager 생성
for(let i = 0;i < slideCount; i++){
  pagerHTML += `<a href = "">${i}</a>`;
}

pager.innerHTML = pagerHTML;

const pagerBtn = pager.querySelectorAll('a');


//pager 클릭시 해당 슬라이드로 이동
pagerBtn.forEach((pager,idx)=>{
  pager.addEventListener('click',(e)=>{
    e.preventDefault();
    showSlide(idx);
  })
});



//페이져 누르면 active 작동하게 하는 함수
function updatePager(){
  for(let pager of pagerBtn){
    pager.classList.remove('active');
  }
  pagerBtn[currentIdx].classList.add('active');
}

updatePager(); //열자마자 실행해




//----------------------------------------------------------------------- 
//performance 스크롤 넘버 카운팅 이벤트
//----------------------------------------------------------------------- 
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





//----------------------------------------------------------------------- 
//파트너스 로고 무한 슬라이드
//----------------------------------------------------------------------- 
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

