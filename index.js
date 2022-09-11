const btn = document.getElementById("btn");
const p = document.getElementById("p");
const range = document.getElementById("oddCount");
const oddText = document.getElementById("oddP");

let oddValue = range.value;

function click() {
  let arr = randomRaffle(oddValue); // 배열 가져오기
  p.innerText = `${arr[0]},   ${arr[1]},  ${arr[2]},   ${arr[3]},   ${arr[4]},   ${arr[5]}`;
}

/** 홀수 개수에 따라서 랜덤 배열 반환 */
function randomRaffle(oddCount) {
  let oddArr = []; // 홀수 담을 배열
  let evenArr = []; // 짝수 담을 배열
  let newArr = []; // 홀, 짝 모두 담을 배열

  if (oddCount == 7) {
    // 홀수 개수 7개일 때: 모두 랜덤
    while (true) {
      const random = Math.floor(Math.random() * 45) + 1;
      if (!newArr.includes(random)) {
        newArr.push(random);
      }
      if (newArr.length == 6) {
        break;
      }
    }
  } else {
    // 홀수 개수 0~6 사이 일 때
    while (true) {
      if (oddCount == 0) {
        break; // 무한 반복 방지
      }
      let odd;
      const random = Math.floor(Math.random() * 45) + 1;
      if (random % 2 == 1) {
        odd = random; // 랜덤값 중 홀수만 가져오기
      }
      if (odd) {
        if (!oddArr.includes(odd)) {
          oddArr.push(odd);
        }
        if (oddArr.length == oddCount) {
          break;
        }
      }
    }

    while (true) {
      if (oddCount == 6) {
        break; // 무한 반복 방지
      }
      let even;
      const random = Math.floor(Math.random() * 45) + 1;
      if (random % 2 == 0) {
        even = random; // 랜던 값 중 짝수만 가져오기
      }
      if (even) {
        if (!evenArr.includes(even)) {
          evenArr.push(even);
        }
        if (evenArr.length == 6 - oddCount) {
          break;
        }
      }
    }
    newArr = oddArr.concat(evenArr); // 홀수와 짝수 배열 합치기
  }

  // 배열 오름차순 정렬
  newArr.sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  });

  return newArr;
}

/** input range 이벤트 리스너 */
function handleRangeChange(event) {
  const { value } = event.target;
  oddValue = value;
  if (value == 0) {
    oddText.innerText = "0개 (모두 짝수)";
  } else if (value == 6) {
    oddText.innerText = "6개 (모두 홀수)";
  } else if (value == 7) {
    oddText.innerText = "모두 랜덤";
  } else {
    oddText.innerText = `${value}개`;
  }
}

range.addEventListener("input", handleRangeChange);
btn.addEventListener("click", click);
