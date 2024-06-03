const storage_key = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = {email, message}
  saveToLS('email', email);
  saveToLS('message', message);
  saveToLS('user', data)
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = {email, message}
  if (email === '' || message === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }
  console.log(data);
  form.reset();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
  localStorage.removeItem('user');
})

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const email = loadFromLS('email');
  const message = loadFromLS('message');
  form.elements.email.value = email;
  form.elements.message.value = message;
})