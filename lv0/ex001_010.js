// 두 수의 차
function ex1(num1, num2) {
  return (answer = num1 - num2);
}

// 두 수의 곱
function ex2(num1, num2) {
  return (answer = num1 * num2);
}

// 숫자 비교하기
function ex3(num1, num2) {
  if (num1 === num2) {
    return 1;
  }
  if (num1 !== num2) {
    return -1;
  }
}

// 나머지 구하기
function ex4(num1, num2) {
  return num1 % num2;
}

// 몫 구하기
function ex5(num1, num2) {
  return Math.floor(num1 / num2);
}

// 나이 출력
function ex6(age) {
  // 2023 - age
  return new Date().getFullYear() - age;
}

// 각도기
function ex7(angle) {
  let answer;

  if (angle < 90) {
    return (answer = 1);
  }

  if (angle === 90) {
    return (answer = 2);
  }

  if (angle > 90 && angle < 180) {
    return (answer = 3);
  }

  if (angle >= 180) {
    return (answer = 4);
  }
}

// function solution(angle) {
//   return [0, 90, 91, 180].filter((x) => angle >= x).length;
// }
