'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = () => {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let index = 0; index < btnsOpenModel.length; index++) {
  btnsOpenModel[index].addEventListener('click', openModal);
}

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',(e)=>{
   
    if(e.key==='Escape' && !model.classList.contains('hidden')){
        
        closeModal()
    }
})