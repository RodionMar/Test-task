export default function createMain() {
   const main = document.createElement('div');
   main.classList.add('main');
   document.body.append(main);

   const container = document.createElement('div');
   container.classList.add('container');
   main.append(container);

   container.innerHTML += '<div class="container"><h1 class="title">Under Construction</h1><div class="subtitle">Were making lots of improvements and will be back soon</div><div class="timer"><div class="timer__numbers numbers"><div class="numbers__days number"></div><div class="numbers__colon">:</div><div class="numbers__hours number"></div><div class="numbers__colon">:</div><div class="numbers__minutes number"></div><div class="numbers__colon">:</div><div class="numbers__seconds number"></div></div><div class="timer__flags flags"><div class="flag"><div class="flag__title">Days</div></div><div class="flag"><div class="flag__title">Hours</div></div><div class="flag"><div class="flag__title">Minutes</div></div><div class="flag"><div class="flag__title">Seconds</div></div></div></div><div class="main__button-section"><div class="main__button-title">Go to the event</div><button class="main__button">Go to the event <span class="button__icon"></span></button></div></div>';
}