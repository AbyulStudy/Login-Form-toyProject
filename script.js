const arrDataUsername = ['code','states','seb','full'];
//const elFailureMessage = document.querySelector('.failure-message');
//const elSucessMessage = document.querySelector('.success-message');
const elInputUsername = document.querySelector('#username');
const elPassword = document.querySelector('#password');
const elPasswordRetype = document.querySelector('#password-retype');
const elMathMessage = document.querySelector('.mismatch-message');
const idMsg = document.querySelector('#idMsg')
const pwMsg1 = document.querySelector('#pwMsg1')
const pwMsg2 = document.querySelector('#pwMsg2')
const elJoin = document.querySelector('#join');

let idFlag = false;
let pwFlag = false;

// focus 이벤트
const elpsBox = document.querySelector('.ps_box');
// elpsBox focus Event
elpsBox.addEventListener('focus', function(){
  elpsBox.classList.add("focus");
})

// elpsBox blur Event
elpsBox.addEventListener('blur', function(){
  elpsBox.classList.remove("focus");
})


// 아이디 확인
elInputUsername.addEventListener('blur' , function(){  
  const id = elInputUsername.value;
  const isId = /^[a-z0-9][a-z0-9_\-]{3,19}$/;
  console.log(isId.test(id));

  // 필수정보 기입 요청
  if(id === ""){
    showErrorMsg(idMsg,"필수 정보입니다.");
    return idFlag = false;
  }

  // ID 정규표현식 비교
  if(!isId.test(id)){
    showErrorMsg(idMsg,"4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
    return idFlag = false;
  } 

  // ID 중복 체크
  if(arrDataUsername.includes(id)){
    showErrorMsg(idMsg,"중복된 아이디가 있습니다.");
    return idFlag = false;
  }
  idMsg.classList.add("hide");
  return idFlag = true;
});

// 패스워드 확인-1
elPassword.addEventListener('blur', function(){
  const pw1 = elPassword.value;
  // 필수정보 기입 요청
  if( pwMsg1 === ""){
    showErrorMsg(pwMsg1,"필수 정보입니다.");
    return false;
  }
})

// 패스워드 확인-2
elPasswordRetype.addEventListener('keyup', function () {  
  const pw2 = elPasswordRetype.value;
  // 필수정보 기입 요청
  if( pwMsg2 === ""){
    showErrorMsg(pwMsg2,"필수 정보입니다.");
    return false;
  }
  if(!isMatch(elPassword.value, elPasswordRetype.value)){
    showErrorMsg(pwMsg2,"설정하려는 비밀번호가 맞는지 확인하기 위해 다시 입력 해주세요.")
    return pwFlag = false;
  }

  pwMsg2.classList.add("hide");
  return pwFlag = true;
});

// 회원가입
elJoin.addEventListener('click', function(){
  
  if(idFlag === true && pwFlag === true){
    alert("회원가입이 정상적으로 이루어 졌습니다.");
    id = elInputUsername.value;
    arrDataUsername.push(id);
    inputClear();
  }
  if(idFlag === false){
    elInputUsername.focus();
    alert("아이디를 확인해주세요.")
  } 
  else if(pwFlag === false){
    elPassword.focus();
    alert("비밀번호를 확인해주세요.");
  }
  return true;
});

// function 
// 아이디 4글자 이상 확인
function isMoreThan4Length(value) {
  return value.length >= 4;
}
// 패스워드 동일 여부확인
function isMatch (password1, password2) {
  return password1 === password2
}
// 에러메세지 함수
function showErrorMsg(obj,msg){
  obj.setAttribute("class", "error_next_box");
  obj.textContent = msg;
  obj.classList.remove("hide");
}
// 초기화 함수
function inputClear(){
  elInputUsername.value = ""
  elPassword.value = ""
  elPasswordRetype.value = ""
}

// elInputUsername의 모든 입력이 끈나면 중복아이디 확인
// true false 값을 입력받아 메세지 출력 
// join 할 경우 arrDataUsername에 생성된 아이디 push 



// 패스워드 확인
// elPasswordRetype.addEventListener('keyup', function () {
//   if(!isMatch(elPassword.value, elPasswordRetype.value)){
//     // MathMessage on (false)
//     elMathMessage.classList.remove('hide')
//   }
//   else {
//     // MathMessage off (true)
//     elMathMessage.classList.add('hide')
//   }
// });
