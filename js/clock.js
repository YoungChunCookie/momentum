const clock = document.querySelector('h2#clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

getClock(); //  이렇게 한번 호출하므로써 페이지 로딩과 동시에 보여줌
setInterval(getClock, 1000); 

