// 텍스트 작성과 삭제 즉시 실행 함수
// 즉시 실행 함수를 통해 전역 스코프의 변수 오염을 방지합니다.
(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt(){
      spanEl.textContent  += currentTxt.shift(); 
      if(currentTxt.length !== 0){ 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
      }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
      }
    }
    function deleteTxt(){
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    // writeTxt 함수를 호출하여 첫 번째 텍스트의 출력을 시작합니다.
    writeTxt();
  })();



// header 요소를 선택합니다.
const headerEl = document.querySelector("header");

// scroll 이벤트가 발생할 때 scrollCheck 함수를 호출합니다.
// requestAnimationFrame을 사용하여 성능을 최적화합니다.
window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollCheck);
});

// scrollCheck 함수를 정의합니다.
function scrollCheck(){
  // 브라우저의 수직 스크롤 위치를 가져옵니다.
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;

  // 스크롤 위치가 0보다 크면 header 요소에 active 클래스를 추가하고, 그렇지 않으면 삭제합니다.
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
}



/* 애니메이션 스크롤 이동 */
const animationMove = function(selector){
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
  };


// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
for(let i = 0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}