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

// 두 수의 나눗셈
function ex8(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// 짝수의 합
function ex9(n) {
  let a = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      a += i;
    }
  }
  return (answer = a);
}

// 배열의 평균값
function ex10(num) {
  const a = num.reduce((acc, val) => (acc += val), 0);
  return a / num.length;
}
