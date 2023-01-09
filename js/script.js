

let currentSide = '1' // 1=X OR 2=O
let helpSideNum = '';
let simpleIter = 0;
const xoContainer = document.querySelector('.xo');
const xoBoxs = document.querySelectorAll('.xo__box');

window.addEventListener('load', () => {
   document.querySelector('.wrapper').classList.add('loaded');
});

if (xoContainer && xoBoxs.length) {
   document.addEventListener('click', (e) => {
      currentBox = e.target;
      const simpleBox = currentBox.closest('.xo__box');
      const resetButton = currentBox.closest('.reset-button');
      const choiceSide = currentBox.closest('.start-menu__button');
      const choiceSideButton = currentBox.closest('.side-button');

      if (simpleBox) {
         currentAction(simpleBox);
         activeXoBoxs = xoContainer.querySelectorAll('.active');
         if (activeXoBoxs.length > 4 && activeXoBoxs.length <= 9) {
            activeXoBoxsForX = xoContainer.querySelectorAll('.active-x');
            activeXoBoxsForO = xoContainer.querySelectorAll('.active-o');
            checkCombinate(activeXoBoxs, activeXoBoxsForX, activeXoBoxsForO);
         }
      }
      // reset
      if (resetButton) {
         resetActiveClases();
      }
      if (choiceSideButton) {
         document.querySelector('.wrapper').classList.remove('started');
         resetActiveClases();
      }
      if (choiceSide) {
         if (choiceSide.classList.contains('x-curren')) {
            helpSideNum = '1';
            currentSide = helpSideNum;
            document.querySelector('.wrapper').classList.add('started');
         }
         if (choiceSide.classList.contains('o-curren')) {
            helpSideNum = '2'
            currentSide = helpSideNum;
            document.querySelector('.wrapper').classList.add('started');
         }
      }
   });
}
function resetActiveClases() {
   xoContainer.querySelectorAll('.active').forEach(element => {
      element.classList.remove('active');
   });
   xoContainer.querySelectorAll('.active-x').forEach(element => {
      element.classList.remove('active-x');
   });
   xoContainer.querySelectorAll('.active-o').forEach(element => {
      element.classList.remove('active-o');
   });
   xoContainer.querySelectorAll('.select').forEach(element => {
      element.classList.remove('select');
   });
   xoContainer.querySelectorAll('.select-red').forEach(element => {
      element.classList.remove('select-red');
   });
   currentSide = helpSideNum;
}


function currentAction(currentBox) {
   if (currentSide === '1') {
      item = currentBox.querySelector('.x-curren');
      if (!item.closest('.active')) {
         currentBox.classList.add('active');
         currentBox.classList.add('active-x');
         item.classList.add('select');
         currentSide = '2'
      }
   }
   if (currentSide === '2') {
      item = currentBox.querySelector('.o-curren');
      if (!item.closest('.active')) {
         currentBox.classList.add('active');
         currentBox.classList.add('active-o');
         item.classList.add('select');
         currentSide = '1'
      }
   }
}

//Проверка комбинации
function checkCombinate(activeXoBoxs, activeXoBoxsForX, activeXoBoxsForO) {
   if (activeXoBoxsForX.length >= 3) {
      let combinate = '';
      activeXoBoxsForX.forEach(element => {
         combinate += element.dataset.box;
         if (combinate.indexOf('123') >= 0) { gameOver('123'); }
         if (combinate.indexOf('456') >= 0) { gameOver('456'); }
         if (combinate.indexOf('789') >= 0) { gameOver('789'); }
         if (combinate.indexOf('1') >= 0 && combinate.indexOf('4') >= 0 && combinate.indexOf('7') >= 0) { gameOver('147'); }
         if (combinate.indexOf('2') >= 0 && combinate.indexOf('5') >= 0 && combinate.indexOf('8') >= 0) { gameOver('258'); }
         if (combinate.indexOf('3') >= 0 && combinate.indexOf('6') >= 0 && combinate.indexOf('9') >= 0) { gameOver('369'); }
         if (combinate.indexOf('1') >= 0 && combinate.indexOf('5') >= 0 && combinate.indexOf('9') >= 0) { gameOver('159'); }
         if (combinate.indexOf('3') >= 0 && combinate.indexOf('5') >= 0 && combinate.indexOf('7') >= 0) { gameOver('357'); }
      });
   }
   if (activeXoBoxsForO.length >= 3) {
      let combinate = '';
      activeXoBoxsForO.forEach(element => {
         combinate += element.dataset.box;
         if (combinate.indexOf('123') >= 0) { gameOver('123'); }
         if (combinate.indexOf('456') >= 0) { gameOver('456'); }
         if (combinate.indexOf('789') >= 0) { gameOver('789'); }
         if (combinate.indexOf('1') >= 0 && combinate.indexOf('4') >= 0 && combinate.indexOf('7') >= 0) { gameOver('147'); }
         if (combinate.indexOf('2') >= 0 && combinate.indexOf('5') >= 0 && combinate.indexOf('8') >= 0) { gameOver('258'); }
         if (combinate.indexOf('3') >= 0 && combinate.indexOf('6') >= 0 && combinate.indexOf('9') >= 0) { gameOver('369'); }
         if (combinate.indexOf('1') >= 0 && combinate.indexOf('5') >= 0 && combinate.indexOf('9') >= 0) { gameOver('159'); }
         if (combinate.indexOf('3') >= 0 && combinate.indexOf('5') >= 0 && combinate.indexOf('7') >= 0) { gameOver('357'); }
      });
   }
}

// Конец игры
function gameOver(winCombinate) {
   currentSide = '0';
   const firstBoxNum = winCombinate.slice(0, 1);
   const middleBoxNum = winCombinate.slice(1, 2);
   const lastBoxNum = winCombinate.slice(2, 3);
   document.querySelector('.xo__box-' + firstBoxNum).classList.add('select-red');
   document.querySelector('.xo__box-' + middleBoxNum).classList.add('select-red');
   document.querySelector('.xo__box-' + lastBoxNum).classList.add('select-red');
}