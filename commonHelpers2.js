import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form");a.querySelector("textarea");a.addEventListener("input",()=>{const e=new FormData(a),t=e.get("email"),o=e.get("message");r("feedback-form-state",{email:t,message:o})});a.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(a),o=t.get("email"),s=t.get("message"),n={email:o,message:s};if(o===""||s==="")return alert("Будь ласка, заповніть всі обов'язкові поля.");console.log(n),a.reset(),localStorage.removeItem("feedback-form-state")});function r(e,t){const o=JSON.stringify(t);localStorage.setItem(e,o)}function m(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}window.addEventListener("DOMContentLoaded",()=>{const e=m("feedback-form-state");a.elements.email.value=e.email,a.elements.message.value=e.message});
//# sourceMappingURL=commonHelpers2.js.map