if(true) {
  alert(1);
} else {   //true이기 때문에 else가 작동되지 않음
  alert(2);
}

if(false) {
  alert(1);
} else {  //false이기 때문에 if문에 경고가 작동되지 않고 else만 작동
  alert(2);
}

if(false) {
  alert(1);  //작동 안됨
} else if(true) { //앞에 if가 출력되지 않을 때 (괄호 true)
  alert(2);       //실행됨
} else if(true) { //앞에 나오는 조건문이 출력 안될때
  alert(3);       //출력 안됨
} else {          //else if의 모든 조건이 false라면 else가 실행된다
  alert(4)        //실행 안됨
}

prompt('메시지 입력'); //경고창과 입력창

// 변수와 활용
a = prompt('아이디 입력');
if (a === 아이디) {
  alert('아이디가 일치합니다')
} else {
  alert('아이디가 일치하지 않습니다')
}

//비밀번호
a = prompt('아이디 입력');
if (a === 아이디) {
  var password = prompt('비밀번호 입력');
    if (password='111111') {
      alert('로그인 되었습니다')
    }
} else {
  alert('아이디가 일치하지 않습니다')
}

//비밀번호 틀렸을 때의 메시지
id = prompt('아이디를 입력하세요')
if (id == 1) {
  password = prompt('비밀번호를 입력하세요')
  if (password == 111111) {
    alert('로그인 되었습니다. '+id+'님 환경합니다')
  } else {
    alert('비밀번호가 틀렸습니다')
  }
} else {
  alert('아이디가 틀렸습니다')
}
//논리 연산자
if (true && true) { //좌항과 우항이 모두 참일 경우에만 전체가 참이 됨
  alert(1);         //좌항과 우항이 모두 참이기 때문에 실행됨
}
if (true && false) { //우항이 false이기 때문에 전체가 false가 됨
  alert(2);          //실행 안됨
}
if (false && false) {
  alert(1); //실행 안됨
}

//논리 연산자 활용
a = prompt('아이디 입력');
var password = prompt('비밀번호 입력');
if (a == 1 && password == 111111) {
    alert('아이디가 일치합니다 '+a+'님 반갑습니다');
} else {
  alert('아이디가 일치하지 않습니다')
}

//or 연산자 ||
if (true || true) { //둘다 참이기 때문에 전체가 참
  alert(2); //실행됨
}
if (true || false) { //둘중 하나가 참일 경우 전체가 참이 됨
  alert(3); //실행됨
}
if (false || false) {
  alert(2); //실행 안됨
}

//or 연산자 활용
id = prompt('아이디를 입력하세요')
if (id == 1 || id == 2 || id == 3) {
  alert('로그인 되었습니다')
} else {
  alert('로그인 실패하였습니다')
}

id = prompt('아이디를 입력하세요');
password = prompt('비밀번호를 입력하세요');
if ((id == 1 || id == 2 || id == 3) && password == 111111) { //괄호 먼저 실행되기 때문에 id가 일치할때 password 작동됨
  alert('로그인 되었습니다');                                   //id가 참이 되지 않을때 password는 작동되지 않음
} else {
  alert('로그인 실패하였습니다');
}

//!&&
if (!true && !true) { //!true = false
  alert(1); //실행되지 않음
}
if (!false && !true) { //둘중 하나가 false 이기 때문에
  alert(1); //실행되지 않음
}
if (!false && !false) { //둘다 참이기 때문에
  alert(2); //실행됨
}

//boolean 대체
if(0) {          //0 = false 실행 안됨
  alert(1);
}
if(1){alert(3);} //1 = true 실행 됨

if(''){ //빈 문자열 = false
  alert('빈 문자열')
}
if(undefined){ //undefined = false
  alert('undefined');
}
var a; //변수 a 선언 (아무것도 할당 안됨)
if (!a) {  //false이지만 !a 이므로 true
  alert('할당되지 않은 변수'); //실행됨
}
// !null, !NaN 모두 false
// dorey.github.io/JavaScript-Equality-Table/
//https://opentutorials.org/course/743/4728

//while
while (조건) { //조건이 True인 동안 반복될 코드
  반복해서 실행할 코드
}

while (true) {
  document.write('coding everybody <br /');
} //웹브라우저에서 실행 안됨 (적당한 시점에 false가 되야함)

//while 웹브라우저
var i = 0 //i 변수를 만듬
while (i < 10) {   //i가 9가 될때까지 반복적으로 실행함
  document.write("coding everybody <br />");
  i = i + 1; //1씩 반복적으로 i가 증가함
}

//for
/* var i = 0 //i 변수를 만듬
while (i < 10) {   //i가 9가 될때까지 반복적으로 실행함
  document.write("coding everybody "+i+"<br />");
  i = i + 1; //1씩 반복적으로 i가 증가함 */
for (var i = 0; i < 10; i = i + 1;) {
  document.write("coding everybody "+i+"<br />");
}
/*
i = 0
alert (++i) //첫번째 실행 0, 두번째 1

i = 0
alert (i++) //첫번째 실행 1, 두번째 2
 */
//활용
var i = 0;
while (i < 10) {
  document.write("everybody coding "+i+"<br />");
  i ++;
}

//break (반복문을 즉시 종료시킴)
for (var i = 0; i < 10; i++) {  //10행을 출력
  if (i == 5) {
    break;      //5가 되었을 때 break문을 실행
  }
  document.write("coding "+i+"<br />");
}

//continue
for (var i = 0; i < 10; i++){ //10행을 출력
  if (i == 5) {
    continue;    //continue 이후의 구문이 실행 안됨
  }
  document.write("coding"+i+"<br />");
}   //실행 결과 coding 5 를 제외한 모두 출력됨

//반복문 중첩
for (var i = 0; i < 10; i++) { //i에 1씩 값을 할당
  for (var j = 0; j < 10; j++) { //j에 1씩 값을 할당
    document.write(String(i) + String(j) + <br />);
    //String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령
    //String()을 제거하면 더 분명하게 드러남
  }
}
