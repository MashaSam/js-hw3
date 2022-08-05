import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const infoObj = { email, message };

  const infoJSON = JSON.stringify(infoObj);

    localStorage.setItem('feedback-form-state', infoJSON);
    console.log(infoJSON);
}
const formInfo = localStorage.getItem('feedback-form-state');
if (formInfo) {
  const newObjInfo = JSON.parse(formInfo);
  form.elements.email.value = newObjInfo.email;
  form.elements.message.value = newObjInfo.message;
}

form.addEventListener('submit', onSubmitInput);
function onSubmitInput(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  // if ( email && message) { другой способ if(продвинутый)
    if (email === '' || message === '') {
        alert('Заполни все поля!')
        return;
    }
    localStorage.removeItem('feedback-form-state');

    console.log({ email, message });
    form.reset();
  
}
