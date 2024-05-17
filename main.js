// 랜덤 번호 생성
let computer_random_num = 0;

function random_num() {
  computer_random_num = Math.floor(Math.random(0) * 100) + 1;
  console.log(computer_random_num);
}

random_num();

// 유저 번호 입력 받고 비교 하기
let user_num = document.getElementById("user_num");
let play_button = document.getElementById("play_button");
let result_area = document.getElementById("result_area");
let life_num = 5;
let game_over = false;

play_button.addEventListener("click", play);

function play() {
  let user_input_num = user_num.value;

  life_num--;
  console.log(life_num);

  if (user_input_num > computer_random_num) {
    result_area.textContent = "Down";
  } else if (user_input_num < computer_random_num) {
    result_area.textContent = "Up";
  } else {
    result_area.textContent = "Success";
  }

  if (life_num < 1) {
    game_over = true;
    life_area.textContent = '끝';
  } else {
    life_area.textContent = "남은 찬스 : " + life_num + "번";
  }
  
  if (game_over == true) {
    play_button.disabled = true;
  }
}
