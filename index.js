const btn = document.getElementById("btn");
const p = document.getElementById("p");

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

  p.innerText = `${arr[0]},   ${arr[1]},  ${arr[2]},   ${arr[3]},   ${arr[4]},   ${arr[5]}`;
}

btn.addEventListener("click", click);
