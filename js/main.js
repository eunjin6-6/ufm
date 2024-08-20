let menu = document.querySelector('.main_menu');
let header = document.querySelector('.top_nav');
const body = document.body;
let lastScroll = 0;

//상단 메뉴 마우스 오버시 서브메뉴펼쳐지게
//상단 메뉴 마우스 오버시 배경 흰색, 글자 검정색
menu.addEventListener('mouseover',function(){
	header.style.height = '350px';
  header.classList.add('active');
  
});
menu.addEventListener('mouseout',function(){
	header.style.height = '100px';
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

