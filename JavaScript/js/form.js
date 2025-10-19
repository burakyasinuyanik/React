const registerFormDom = document.querySelector('#registerForm');

registerFormDom.addEventListener('reset', () => { 
  console.log('RESETe Basildi');
});

registerFormDom.addEventListener('submit', formSubmit);
/* 
Arrow Function :::
const formSubmit = (event) => {
  event.preventDefault(); 
  console.log('Kaydet Butonuna Basildi');

  console.log(event.target);
};
*/

function formSubmit(event) {
  event.preventDefault();
  console.log('Kaydet Butonuna Basildi');

  console.log(event.target);
};