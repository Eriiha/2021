function 함수명( [인자...[,인자]]) {
  코드
  return 반환값
}

//함수의 정의
function numbering() {
  document.write(1);
}  //함수를 정의함
numbering(); //document.write(1)을 실행함

//함수 활용
function test() {
  i = 0;
  while (i < 10) {
    document.write(i);
    i++;
  }
}  test(); //출력 : 123456789

//return (함수를 종료시킴) [출력]
function get_member1() {
  return 'egoing'; //egoing = getmember1의 반환값
}
function get_memebr2() {
  return 'k8805'; //k8805 = getmember2의 반환값
}
alert(get_member1()); //egoing 출력
alert(get_memebr2()); //k8805 출력

//
function get_member3() {
  return 'egoing';
  return 'leezche';
  return 'graphittie';
} alert(get_member3()); //egoing만 출력됨됨
/* 처음에 나온 return 값이 출력된 이후 함수가 종료되기 때문에
   다음에 나오는 return은 출력되지 않음
 */

//인자 (input) [입력]
function get_argument(arg) {  //arg = 매개변수 (parameter)
  return arg;
}
alert(get_argument(1)); //arg = 1    실행 : 1
alert(get_argument(2)); //arg = 2    실행 : 2
/* arg로 지정한 값의 이름 : 인자 (argument) */

//
function get_input(arg) {
  return arg*1000;
}
alert(get_input(1)); //arg = 1     실행 : 1000
alert(get_input(2)); //arg = 2     실행 : 2000

//복수 인자
function get_arg(arg1, arg2){
  return arg1 + arg2;
}
alert(get_arg(10, 20)); //실행 : 30
alert(get_arg(20, 30)); //실행 : 50

//함수 정의 다른방법
number = function () {  //number 이라는 변수가 함수를 갖게 됨
  i = 0;
  while (i < 10) {
    document.write(i);
    i += 1;
  }
} number();

/*
number(); =
function number() {
  i = 0;
  while (i < 10) {
    document.write(i);
    i += 1;
  }
}
 */
(function () {  //number 이라는 변수가 함수를 갖게 됨
  i = 0;
  while (i < 10) {
    document.write(i);
    i += 1;
  }
})(); //정의를 하고 바로 호출함 (익명함수)

// https://opentutorials.org/course/743/4736
