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

  if (user_input_num < 0 || user_input_num > 100) {
    result_area.textContent = '1부터 100까지 숫자만 입력하시오';
    return
  } else if (user_input_num == '') {
    result_area.textContent = '숫자를 입력해 주세요'
    return
  }

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
    life_area.textContent = "끝";
  } else {
    life_area.textContent = "남은 찬스 : " + life_num + "번";
  }

  if (game_over == true) {
    play_button.disabled = true;
  }
}

// 리셋 버튼 눌렀을때 리렛

let reset_button = document.getElementById("reset_button");

reset_button.addEventListener("click", reset);

function reset() {
  random_num();
  game_over = false;
  play_button.disabled = false;
  life_num = 5;
  life_area.textContent = "남은 찬스 : 5번";
}


// user_num 커서 표시일때 초기화

user_num.addEventListener('mouseenter', function(){
  user_num.value = '';
});