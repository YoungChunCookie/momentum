const inputContent = document.querySelector('#loginForm input');
//const button = document.querySelector('#loginForm button');
const loginForm = document.querySelector('#loginForm');
const USER_NAME = "userName";
const CSS_HIDDEN = "hidden";

const greeting = document.querySelector('#greeting');
const localUserName = localStorage.getItem(USER_NAME);


function handleClickEvent(event){
    event.preventDefault();
    const writtenUserName = inputContent.value;
    localStorage.setItem(USER_NAME, writtenUserName);
    loginForm.classList.add(CSS_HIDDEN);
    paintGreeting(writtenUserName);
}

function paintGreeting(userName){
    loginForm.classList.add(CSS_HIDDEN);
    greeting.classList.remove(CSS_HIDDEN);
    greeting.innerHTML = `Hello  ${userName} 😃 ` ;
}



if (localUserName === null || localUserName == undefined){
    loginForm.classList.remove(CSS_HIDDEN);
    loginForm.addEventListener('submit', handleClickEvent);
    greeting.classList.add(CSS_HIDDEN);
}else{
    paintGreeting(localUserName);

}



