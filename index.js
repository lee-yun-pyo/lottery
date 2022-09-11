const btn = document.getElementById("btn");
const p = document.getElementById("p");
const range = document.getElementById("oddCount");
const oddText = document.getElementById("oddP");

function click() {
  let arr = [];
  //   for (var i = 0; i < 6; i++) {
  //     const random = Math.floor(Math.random() * 45) + 1;
  //     arr.push(random);
  //   }

  while (true) {
    const random = Math.floor(Math.random() * 45) + 1;
    if (!arr.includes(random)) {
      arr.push(random);
    }
    if (arr.length == 6) {
      break;
    }
  }
  arr.sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  });

  p.innerText = `${arr[0]},   ${arr[1]},  ${arr[2]},   ${arr[3]},   ${arr[4]},   ${arr[5]}`;
}

function handleRangeChange(event) {
  const { value } = event.target;
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

btn.addEventListener("click", click);
range.addEventListener("input", handleRangeChange);
