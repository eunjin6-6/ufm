let menu = document.querySelector('.main_menu');
let header = document.querySelector('.top_nav');
const body = document.body;
let lastScroll = 0;

//상단 메뉴 마우스 오버시 서브메뉴펼쳐지게
//상단 메뉴 마우스 오버시 배경 흰색, 글자 검정색
menu.addEventListener('mouseover',function(){
	header.style.height = '350px';
  header.classList.add('active');
  header.style.background = 'linear-gradient(#fff 100px, rgba(255,255,255,.9) 100px, rgba(255,255,255,.9))';
  
});
menu.addEventListener('mouseout',function(){
	header.style.height = '100px';
  header.classList.remove('active');
  header.style.background = 'none';
});


//스크롤시 active 추가
//위로 올리면 없어지게

window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
});


window.addEventListener('scroll',()=>{
  let currentScroll = window.scrollY;
/*
  스크롤을 아래로 하면
    **먼저, scroll-up은 제거
    body에 scroll-down 클래스명으로 추가
  스크롤을 위로 하면
    body에 scroll-down 클래스명으로 제거
    body에 scroll-up 클래스명으로 추가
*/
  if(currentScroll > lastScroll){
    header.classList.remove('d_none');
    header.classList.add('active');
  } else if(currentScroll < lastScroll){
    header.classList.remove('active');
    header.classList.add('d_none');
  }
  
  lastScroll = currentScroll; //위치 꼭 여기
});



