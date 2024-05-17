// 랜덤 번호 지정
let computer_num = 0;
let play_button = document.getElementById("play_button");
let user_num = document.getElementById("user_num");
let result_area = document.getElementById("result_area");
let reset_button = document.getElementById("reset_button");
let life_num = 5;
let game_over = false;
let chance_area = document.getElementById("chance_area");
let history = [];

play_button.addEventListener("click", play);
reset_button.addEventListener("click", reset);
user_num.addEventListener("focus", function () {
  user_num.value = "";
});

function pick_random_num() {
  computer_num = Math.floor(Math.random() * 100) + 1;
  console.log(computer_num);
}

pick_random_num();

function play() {
  let user_value = user_num.value;

  if (user_value < 1 || user_value > 100) {
    result_area.textContent = "1과 100 사이 숫자를 입력해 주세요";
    return;
  }

  if (history.includes(user_value)) {
    result_area.textContent = "이미 입력한 값입니다.";
    return;
  }

  life_num -= 1;
  chance_area.textContent = "남은기회 : " + life_num + "번";
  console.log(life_num);

  if (user_value < computer_num) {
    result_area.textContent = "UP!!!";
  } else if (user_value > computer_num) {
    result_area.textContent = "DOWN!!!";
  } else {
    result_area.textContent = "SUCCESS!!!";
    game_over = true
  }

  history.push(user_value);
  console.log(history);

  if (life_num < 1) {
    game_over = true;
  }

  if (game_over == true) {
    play_button.disabled = true;
  }
}

function reset() {
  user_num.value = "";
  pick_random_num();
  result_area.textContent = "리셋 완료!";
  life_num = 5;
  game_over = false;
  play_button.disabled = false;
  chance_area.textContent = "남은기회 : " + life_num + "번";
  history = [];
}

// 번호가 맞으면 맞췄습니다.
// 랜덤 번호 < 유저 번호 down
// 랜덤 번호 > 유저 번호 up
// 리셋 버튼
// 5번의 기회를 다하면 게임이 끝난다 (버튼 disable)
// 유저가 1 ~ 100 범위 밖에 숫자를 입력하면 알려준다. 기회 차감 x
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회 차감 x
